import { Project } from '../../interfaces';
import WordrobeCutter from './../../assets/thumbnails/WardrobeCutter.jpg';
import PayToFish from './../../assets/thumbnails/PayToFish.jpg';

const projects: { header: string; items: Project[] } = {
	header: 'MOJE PROJEKTY',
	items: [
		{
			id: 1,
			title: 'Rozkrój Szafy',
			description:
				'Rozkrój Szafy to aplikacja internetowa dla stolarzy i hobbystów zajmujących się projektowaniem mebli na wymiar. Ułatwia obliczanie formatek szaf na podstawie wprowadzonych wymiarów i specyfikacji. Aplikacja oferuje także wizualizację oraz eksport do PDF, gotowy do użycia w warsztacie.',
			technologies: ['React', 'TypeScript', 'Tailwind CSS'],
			imageUrl: WordrobeCutter,
			link: 'https://qumrran.github.io/rozpis-mebli/',
			github: 'https://github.com/qumrran/rozpis-mebli',
		},

		{
			id: 2,
			title: 'Pay To Fish',
			description:
				'Pay To Fish to nowoczesna aplikacja webowa wspierająca działalność komercyjnych łowisk oraz pasjonatów wędkarstwa. Umożliwia rejestrację, rezerwację miejsc na łowisku z automatycznym przeliczaniem kosztów oraz wygodne zarządzanie rezerwacjami. W ramach funkcji społecznościowych użytkownicy mogą dodawać posty prezentujące swoje połowy. Aplikacja zawiera również blog z aktualnościami ze świata wędkarstwa oraz formularz kontaktowy umożliwiający bezpośrednią komunikację z administracją. Projekt został zbudowany w oparciu o React i TypeScript, z wykorzystaniem Firebase, TailwindCSS, React Router, React Toastify oraz własnych hooków.',
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
				'Aplikacja full-stack łącząca React i Node.js z integracją bazy danych PostgreSQL.',
			technologies: ['React', 'Node.js', 'PostgreSQL'],
			imageUrl: 'https://via.placeholder.com/400x300?text=FullStack+Connect',
			link: 'https://example.com/project3',
			github: 'https://github.com/qumrran/pay-to-fish',
		},
		{
			id: 4,
			title: 'ShopMaster',
			description:
				'Platforma e-commerce stworzona z użyciem TypeScript, React i Redux, kładąca nacisk na zarządzanie stanem i skalowalność.',
			technologies: ['TypeScript', 'React', 'Redux'],
			imageUrl: 'https://via.placeholder.com/400x300?text=ShopMaster',
			link: 'https://example.com/project4',
			github: 'https://github.com/qumrran',
		},
		{
			id: 5,
			title: 'MojePortfolio',
			description:
				'Osobista strona portfolio stworzona z użyciem Next.js i Tailwind CSS, prezentująca projekty, umiejętności i doświadczenie w programowaniu.',
			technologies: ['Next.js', 'Tailwind CSS'],
			imageUrl: 'https://via.placeholder.com/400x300?text=MyPortfolio',
			link: 'https://example.com/project5',
			github: 'https://github.com/qumrran',
		},
	],
};

export default projects;
