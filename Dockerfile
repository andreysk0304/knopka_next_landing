# Используем Node.js официальный образ
FROM node:18-alpine AS base

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./
COPY yarn.lock ./

# Устанавливаем зависимости
FROM base AS deps
RUN yarn install --frozen-lockfile

# Стадия сборки
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Собираем приложение
RUN yarn build

# Продакшн стадия
FROM base AS runner
ENV NODE_ENV production

# Создаем пользователя nextjs
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем публичные файлы
COPY --from=builder /app/public ./public

# Создаем директорию для Next.js
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Копируем сборку Next.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"] 