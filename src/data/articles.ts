export interface Article {
	id: number
	title: string
	excerpt: string
	category: string
	date: string
	author: string
	readTime: string
	image: string
}

export const articles: Article[] = [
	{
		id: 1,
		title: 'Как автоматизировать управление ценами на Wildberries',
		excerpt: 'Подробное руководство по настройке динамического ценообразования для максимизации прибыли и удержания позиций в поиске.',
		category: 'Автоматизация',
		date: '2025-01-15',
		author: 'Алексей Иванов',
		readTime: '7 мин',
		image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
	},
	{
		id: 2,
		title: 'Аналитика продаж: ключевые метрики для селлеров',
		excerpt:
			'Разбираем основные KPI, которые помогут оценить эффективность вашего бизнеса на маркетплейсах и принять правильные решения.',
		category: 'Аналитика',
		date: '2025-01-12',
		author: 'Мария Петрова',
		readTime: '5 мин',
		image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg',
	},
	{
		id: 3,
		title: 'SEO-оптимизация карточек товаров на Ozon',
		excerpt: 'Пошаговая инструкция по оптимизации названий, описаний и ключевых слов для увеличения органического трафика.',
		category: 'SEO',
		date: '2025-01-10',
		author: 'Дмитрий Сидоров',
		readTime: '6 мин',
		image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg',
	},
	{
		id: 4,
		title: 'Эффективная реклама на маркетплейсах: стратегии 2025',
		excerpt: 'Актуальные подходы к рекламным кампаниям, новые инструменты и методы оптимизации рекламного бюджета.',
		category: 'Реклама',
		date: '2025-01-08',
		author: 'Анна Козлова',
		readTime: '8 мин',
		image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
	},
	{
		id: 5,
		title: 'Оптимизация логистики: FBO vs FBS',
		excerpt: 'Сравнительный анализ схем работы с маркетплейсами, расчет экономической эффективности и выбор оптимальной стратегии.',
		category: 'Логистика',
		date: '2025-01-05',
		author: 'Игорь Волков',
		readTime: '10 мин',
		image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg',
	},
	{
		id: 6,
		title: 'Автоматизация отчетности и аналитики',
		excerpt: 'Инструменты для автоматического сбора и анализа данных о продажах, остатках и эффективности рекламы.',
		category: 'Автоматизация',
		date: '2025-01-03',
		author: 'Елена Смирнова',
		readTime: '6 мин',
		image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg',
	},
	{
		id: 7,
		title: 'Конкурентный анализ на маркетплейсах',
		excerpt: 'Методы мониторинга конкурентов, анализ их стратегий и адаптация успешных практик для вашего бизнеса.',
		category: 'Аналитика',
		date: '2025-01-01',
		author: 'Максим Орлов',
		readTime: '7 мин',
		image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
	},
	{
		id: 8,
		title: 'Продвижение новых товаров: от идеи до топа',
		excerpt: 'Комплексная стратегия вывода нового продукта на маркетплейс: подготовка, запуск и масштабирование.',
		category: 'Реклама',
		date: '2024-12-28',
		author: 'Ольга Федорова',
		readTime: '9 мин',
		image: 'https://images.pexels.com/photos/265086/pexels-photo-265086.jpeg',
	},
	{
		id: 9,
		title: 'Работа с отзывами и рейтингами',
		excerpt: 'Стратегии повышения рейтинга товаров, работа с негативными отзывами и увеличение лояльности покупателей.',
		category: 'SEO',
		date: '2024-12-25',
		author: 'Вадим Николаев',
		readTime: '5 мин',
		image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg',
	},
]
