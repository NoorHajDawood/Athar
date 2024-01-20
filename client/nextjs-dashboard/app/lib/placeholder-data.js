// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const announcements = [
  {
    id: '1',
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2022-12-01',
  },
  {
    id: '2',
    title: 'Dolor Sit Amet',
    description: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2022-11-15',
  },
  {
    id: '3',
    title: 'Consectetur Adipiscing',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2022-10-30',
  },
  {
    id: '4',
    title: 'Eiusmod Tempor',
    description: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2022-09-15',
  },
];

const facilitators = [
  {
    "id": "65aad1fde599b2e3b92bf94d",
    "email": "haya_jbareen@imageflow.vacations",
    "name": "Haya Jbareen",
    "image_url": "/facilitator_default.png",
    "workshops": []
  },
  {
    "id": "65aad1fde8c4710865327a44",
    "email": "miranda_mcintosh@xanide.hm",
    "name": "Delaney Campos",
    "image_url": "/person.png",
    "workshops": []
  },
  {
    "id": "65aad1fde0809fabcd5511c2",
    "email": "rosales_wood@zilphur.bi",
    "name": "Sloan Summers",
    "image_url": "/person.png",
    "workshops": []
  },
  {
    "id": "65aad1fdf36bc73d7a243b49",
    "email": "schneider_bean@wazzu.kg",
    "name": "Sara Richard",
    "image_url": "/person.png",
    "workshops": []
  },
  {
    "id": "65aad1fdf7847926a0e2b92f",
    "email": "andrews_ward@intergeek.kn",
    "name": "Dolly Golden",
    "image_url": "/person.png",
    "workshops": []
  },
  {
    "id": "65aad1fd7a6b5871c8177351",
    "email": "margaret_adkins@orbixtar.bh",
    "name": "Kathy Ochoa",
    "image_url": "/person.png",
    "workshops": []
  },
  {
    "id": "65aad1fdda91c5eb39c7bf5d",
    "email": "ida_cannon@medifax.cartier",
    "name": "Haley Leblanc",
    "image_url": "/person.png",
    "workshops": []
  },
  {
    "id": "65aad1fd646d8fd71556d7cb",
    "email": "juliet_sosa@telequiet.android",
    "name": "Best Cummings",
    "image_url": "/person.png",
    "workshops": []
  }
];

const workshops = [
  {
    "id": "65aad1fd3f9e5c8b6f3c0d1a",
    "title": "جنون العلوم 7",
    "breif": 'تجارب جديدة ومختلفة بانتظاركم بلقائنا السابع من سلسلة "جنون العلوم" 💥',
    "description": `الأغراض اللازمة*:
    3 أكواب شفافة
    - الوان مأئية
    - مناديل ورقية
    - برطمان صغير الحجم
    - زيت نباتي
    - طبق بلاستيك
    - شوكة
    - الوان مائية
    - كأس زجاج ( مج ماء)
    - ماء
    -رغوة حلاقة ( ممكن اختيار نوع رغوة اخرى)
    - ملون طعام ازرق
    قطارة لوضع الملون فيها
    - مكعبي ثلج (صغير الحجم)
    - خيط
    - كأس بلاستيك من الماء
    - ملح
    - صحن بلاستيك`,
    "intendedAudience": "5 سنوات فما فوق",
    "facilitators": [
      facilitators[0]
    ],
    "image_url": "/workshops/science_craze_7.png",
    "date": "13.1.2024",
    "time": "18:00",
    "duration": 60,
    "location": "Online",
    "participants": []
  },
  {
    "id": "65aad1fd3f9e5c8b6f3c0d1b",
    "title": "Workshop 2",
    "breif": "This is the breif for Workshop 2. It will cover various topics.",
    "description": "This is the description for Workshop 2. It will cover various topics.",
    "facilitators": [
      facilitators[1],
      facilitators[4]
    ],
    "image_url": "/workshops/workshops_default.png",
    "date": "2022-12-02",
    "time": "11:00 AM",
    "duration": 90,
    "location": "Online",
    "participants": []
  },
  {
    "id": "65aad1fd3f9e5c8b6f3c0d1c",
    "title": "Workshop 3",
    "breif": "This is the breif for Workshop 3. It will cover various topics.",
    "description": "This is the description for Workshop 3. It will cover various topics.",
    "facilitators": [
      facilitators[2]
    ],
    "image_url": "/workshops/workshops_default.png",
    "date": "2022-12-03",
    "time": "12:00 PM",
    "duration": 120,
    "location": "Online",
    "participants": []
  },
  {
    "id": "65aad1fd3f9e5c8b6f3c0d1d",
    "title": "Workshop 4",
    "breif": "This is the breif for Workshop 4. It will cover various topics.",
    "description": "This is the description for Workshop 4. It will cover various topics.",
    "facilitators": [
      facilitators[3],
      facilitators[6],
      facilitators[7]
    ],
    "image_url": "/workshops/workshops_default.png",
    "date": "2022-12-04",
    "time": "01:00 PM",
    "duration": 60,
    "location": "Online",
    "participants": []
  }
];

const acknowledgements = [
  {
    name: 'ميرنا منصور سمعان',
    acknowledgement: 'شكراً',
    description: 'لكونك تركتِ أثراً',
    image_url: '/acknowledgements/merna-mansour.png',
  },
  {
    name: 'إباء أبو طه',
    acknowledgement: 'شكراً',
    description: 'لكونك تركتِ أثراً',
    image_url: '/acknowledgements/eba2_abo_6aha.png',
  },
];

const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  announcements,
  users,
  customers,
  invoices,
  revenue,
  facilitators,
  workshops,
  acknowledgements,
};
