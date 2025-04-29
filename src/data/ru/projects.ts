import { Project } from '../../interfaces';
import WordrobeCutter from './../../assets/thumbnails/WardrobeCutter.jpg';
import PayToFish from './../../assets/thumbnails/PayToFish.jpg';

const projects: { header: string; items: Project[] } = {
	header: 'МОИ ПРОЕКТЫ',
	items: [
		{
			id: 1,
			title: 'Распил Шкафа',
			description:
				'Распил Шкафа — это веб-приложение для плотников и любителей, занимающихся проектированием мебели на заказ. Оно упрощает расчёт раскроя деталей шкафа на основе введённых размеров и параметров. Приложение также предлагает визуализацию и экспорт в PDF для использования в мастерской.',
			technologies: ['React', 'TypeScript', 'Tailwind CSS'],
			imageUrl: WordrobeCutter,
			link: 'https://qumrran.github.io/rozpis-mebli/',
			github: 'https://github.com/qumrran/rozpis-mebli',
		},
		{
			id: 2,
			title: 'Pay To Fish',
			description:
				'Pay To Fish — это современное веб-приложение, поддерживающее деятельность коммерческих рыболовных баз, а также увлечённых рыбаков. Оно позволяет пользователям регистрироваться, бронировать места на рыбалку с автоматическим расчётом стоимости и удобно управлять своими бронированиями. В рамках социальных функций пользователи могут публиковать посты с демонстрацией своих уловов. Приложение также содержит блог с актуальными новостями из мира рыбалки и форму обратной связи для прямой коммуникации с администрацией. Проект разработан на базе React и TypeScript с использованием технологий Firebase, TailwindCSS, React Router, React Toastify и собственных хуков.',
			technologies: [
				'React',
				'TypeScript',
				'Firebase',
				'TailwindCSS',
			],
			imageUrl: PayToFish,
			link: 'https://qumrran.github.io/pay-to-fish',
			github: 'https://github.com/qumrran/pay-to-fish',
		},
		{
			id: 3,
			title: 'FullStack Connect',
			description:
				'Full-stack приложение, которое сочетает React и Node.js с интеграцией базы данных PostgreSQL.',
			technologies: ['React', 'Node.js', 'PostgreSQL'],
			imageUrl: 'https://via.placeholder.com/400x300?text=FullStack+Connect',
			link: 'https://example.com/project3',
			github: 'https://github.com/qumrran',
		},
		{
			id: 4,
			title: 'ShopMaster',
			description:
				'Платформа для электронной коммерции, созданная с использованием TypeScript, React и Redux, с акцентом на управление состоянием и масштабируемость.',
			technologies: ['TypeScript', 'React', 'Redux'],
			imageUrl: 'https://via.placeholder.com/400x300?text=ShopMaster',
			link: 'https://example.com/project4',
			github: 'https://github.com/qumrran',
		},
		{
			id: 5,
			title: 'МоёПортфолио',
			description:
				'Персональный сайт-портфолио, созданный с использованием Next.js и Tailwind CSS, демонстрирующий проекты, навыки и опыт разработки.',
			technologies: ['Next.js', 'Tailwind CSS'],
			imageUrl: 'https://via.placeholder.com/400x300?text=MyPortfolio',
			link: 'https://example.com/project5',
			github: 'https://github.com/qumrran',
		},
	],
};

export default projects;
