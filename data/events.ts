import type { Event } from '~/types/event'

export const events: Event[] = [
  // Semaine du 11-16 novembre 2025
  {
    id: '1',
    title: {
      fr: 'Minami Deutsch',
      eu: 'Minami Deutsch',
      es: 'Minami Deutsch'
    },
    date: '2025-11-13',
    time: '20:00',
    city: 'Donostia',
    side: 'sud',
    type: 'concert',
    venue: 'Dabadaba',
    tags: ['musique', 'psychédélique', 'krautroc', 'soir', 'expérimental', 'club'],
    description: {
      fr: 'Minami Deutsch, héritiers de Kikagaku Moyo (label GuruGuru Brain), se disent "repetition freaks" — entre rock psychédélique, minimal techno et une obsession assumée pour le krautroc.',
      eu: 'Minami Deutsch, Kikagaku Moyoren oinordekoak (GuruGuru Brain etiketa), "repetition freaks" direla diote — rock psikodelikoa, minimal techno eta krautroc-aren obsesio aintzatetsiari esker.',
      es: 'Minami Deutsch, herederos de Kikagaku Moyo (sello GuruGuru Brain), se autodenominan "repetition freaks" — entre rock psicodélico, minimal techno y una obsesión asumida por el krautroc.'
    },
    url: 'https://www.instagram.com/limbo_agenda',
    price: '€€',
    featured: true
  },
  {
    id: '2',
    title: {
      fr: 'Johnny Jewel',
      eu: 'Johnny Jewel',
      es: 'Johnny Jewel'
    },
    date: '2025-11-16',
    time: '20:00',
    city: 'Donostia',
    side: 'sud',
    type: 'concert',
    venue: 'Dabadaba',
    tags: ['musique', 'synth-pop', 'rétro', 'soir', 'électronique', 'club'],
    description: {
      fr: 'Johnny Jewel présente ses bandes originales — Twin Peaks, Drive, Bronson, Lost River. Par le fondateur d\'Italians Do It Better, cerveau de Chromatics, Glass Candy et Desire : l\'esthétique synth-pop rétro qui a marqué une époque.',
      eu: 'Johnny Jewel bere soinu-bandak aurkezten ditu — Twin Peaks, Drive, Bronson, Lost River. Italians Do It Better sortzaileak, Chromatics, Glass Candy eta Desire taldeen buruak: garai bat markatu zuen synth-pop erretro estetika.',
      es: 'Johnny Jewel presenta sus bandas sonoras — Twin Peaks, Drive, Bronson, Lost River. Por el fundador de Italians Do It Better, cerebro de Chromatics, Glass Candy y Desire: la estética synth-pop retro que marcó una época.'
    },
    url: 'https://www.instagram.com/limbo_agenda',
    price: '€€',
    featured: true
  },
  {
    id: '3',
    title: {
      fr: 'Festival Lettres & le Vivant',
      eu: 'Lettres & le Vivant Jaialdia',
      es: 'Festival Lettres & le Vivant'
    },
    date: '2025-11-14',
    time: '18:00',
    city: 'Saint-Jean-de-Luz',
    side: 'nord',
    type: 'festival',
    venue: 'Cinéma Le Sélect & CIAM Les Récollets',
    tags: ['festival', 'cinéma', 'conférence', 'littérature', 'culture', 'soir', 'intimiste'],
    description: {
      fr: 'La 4ème édition du Festival Lettres et le Vivant se tiendra du 14 au 16 novembre 2025 : ciné-débats, conférences philosophiques, littéraires et scientifiques, conférence en euskara avec traduction simultanée, et spectacle vivant.',
      eu: 'Lettres et le Vivant Jaialdiko 4. edizioa 2025eko azaroaren 14tik 16ra egingo da: zine-eztabaidak, konferentzia filosofikoak, literarioak eta zientifikoak, euskarazko konferentzia itzulpen simultaneoarekin, eta ikuskizun bizia.',
      es: 'La 4ª edición del Festival Lettres et le Vivant se celebrará del 14 al 16 de noviembre de 2025: cine-debates, conferencias filosóficas, literarias y científicas, conferencia en euskera con traducción simultánea, y espectáculo en vivo.'
    },
    url: 'https://www.instagram.com/limbo_agenda',
    price: '€',
    featured: true
  },
  {
    id: '4',
    title: {
      fr: 'Food Hack Lab — Exploration ludique des champignons',
      eu: 'Food Hack Lab — Perretxikoen esplorazio jostagarria',
      es: 'Food Hack Lab — Exploración lúdica de las setas'
    },
    date: '2025-11-14',
    time: '17:00',
    city: 'Donostia',
    side: 'sud',
    type: 'atelier',
    venue: 'Tabakalera',
    tags: ['atelier', 'food-design', 'nature', 'champignons', 'expérimental', 'soir', 'intimiste'],
    description: {
      fr: 'Atelier d\'exploration des champignons : de la nature au laboratoire, puis du labo à l\'assiette et à l\'objet, de façon ludique et expérimentale.',
      eu: 'Perretxikoen esplorazio tailerra: naturatik laboratoriora, eta laborategitik platerera eta objektura, modu jostagarri eta esperimentalean.',
      es: 'Taller de exploración de las setas: de la naturaleza al laboratorio, y del laboratorio al plato y al objeto, de forma lúdica y experimental.'
    },
    url: 'https://www.instagram.com/limbo_agenda',
    price: '€',
  },
  {
    id: '5',
    title: {
      fr: 'Rev Silver — Festival LABO',
      eu: 'Rev Silver — LABO Jaialdia',
      es: 'Rev Silver — Festival LABO'
    },
    date: '2025-11-16',
    time: '20:00',
    city: 'Donostia',
    side: 'sud',
    type: 'danse',
    venue: 'Tabakalera',
    tags: ['danse', 'performance', 'électronique', 'contemporain', 'soir', 'intimiste'],
    description: {
      fr: 'Dans le cadre du festival de danse LABO, Rev Silver se présente en solo avec un live mêlant électronique, glam rock, industriel, techno et jazz — un son et une esthétique totalement uniques.',
      eu: 'LABO dantza-jaialdian, Rev Silver bakarrik aurkezten da, elektronika, glam rock, industriala, technoa eta jazza nahasten dituen zuzeneko batekin — soinu eta estetika guztiz bereziak.',
      es: 'En el marco del festival de danza LABO, Rev Silver se presenta en solitario con un directo que mezcla electrónica, glam rock, industrial, techno y jazz — un sonido y una estética totalmente únicos.'
    },
    url: 'https://www.instagram.com/limbo_agenda',
    price: '€€',
    featured: true
  },
  {
    id: '6',
    title: {
      fr: '12 heures de musique à Psilocybenea',
      eu: '12 orduko musika Psilocybenea-n',
      es: '12 horas de música en Psilocybenea'
    },
    date: '2025-11-16',
    time: '18:00',
    city: 'Hondarribia',
    side: 'sud',
    type: 'concert',
    venue: 'Psilocybenea',
    tags: ['musique', 'électronique', 'marathon', 'clubbing', 'nuit', 'club'],
    description: {
      fr: '12h de son — Actriq · Blua.Akvo & Sustrai Sister · Celia Carrera · Kikat1000 · NL b2b baetchu. Marathon musical électronique à Psilocybenea.',
      eu: '12 orduko soinua — Actriq · Blua.Akvo & Sustrai Sister · Celia Carrera · Kikat1000 · NL b2b baetchu. Musika-maratoi elektronikoa Psilocybenea-n.',
      es: '12h de sonido — Actriq · Blua.Akvo & Sustrai Sister · Celia Carrera · Kikat1000 · NL b2b baetchu. Maratón musical electrónico en Psilocybenea.'
    },
    url: 'https://www.instagram.com/limbo_agenda',
    price: '€€',
  },
  {
    id: '7',
    title: {
      fr: 'Red Hour x Erritmo Fatal',
      eu: 'Red Hour x Erritmo Fatal',
      es: 'Red Hour x Erritmo Fatal'
    },
    date: '2025-11-15',
    time: '21:00',
    city: 'Ziburu',
    side: 'nord',
    type: 'concert',
    venue: 'L\'Atalaia',
    tags: ['musique', 'DJ', 'clubbing', 'soir', 'électronique', 'club', 'nuit'],
    description: {
      fr: 'Soirée Food & DJ à l\'Atalaia avec Red Hour x Erritmo Fatal pour une expérience musicale et gastronomique.',
      eu: 'Janari eta DJ gaua L\'Atalaia-n Red Hour x Erritmo Fatal-ekin, esperientzia musikal eta gastronomiko baterako.',
      es: 'Velada Food & DJ en L\'Atalaia con Red Hour x Erritmo Fatal para una experiencia musical y gastronómica.'
    },
    url: 'https://www.instagram.com/limbo_agenda',
    price: '€€',
  },
  {
    id: '8',
    title: {
      fr: 'Aukera Expériences — Déjeuner fusion',
      eu: 'Aukera Esperientziak — Fusio bazkaria',
      es: 'Aukera Experiencias — Almuerzo fusión'
    },
    date: '2025-11-16',
    time: '12:00',
    city: 'Jatxou',
    side: 'nord',
    type: 'atelier',
    venue: 'Aukera domaine des cimes',
    tags: ['gastronomie', 'cuisine-fusion', 'nature', 'végétarien', 'après-midi', 'plein-air', 'intimiste'],
    description: {
      fr: 'Déjeuner au domaine de permaculture Aukera par la cheffe Jessica Tanaka-Noblia : cuisine fusion américano-japonaise, majoritairement végétarienne. Thème : Jérôme Bosch.',
      eu: 'Bazkaria Aukera permakultura domeinuan Jessica Tanaka-Noblia chef-aren eskutik: amerikano-japoniar fusio sukaldaritza, gehienbat begetarianoa. Gaia: Jérôme Bosch.',
      es: 'Almuerzo en el dominio de permacultura Aukera por la chef Jessica Tanaka-Noblia: cocina fusión americano-japonesa, mayoritariamente vegetariana. Tema: Jérôme Bosch.'
    },
    url: 'https://www.instagram.com/limbo_agenda',
    price: '€€€',
  }
]
