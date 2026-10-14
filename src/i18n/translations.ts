export type Lang = 'en' | 'ru'

export const translations = {
  en: {
    meta: {
      title: 'Danila Dysa — Fullstack Developer',
      description: 'Fullstack developer with 5+ years of experience building web applications. Vue, React, PHP/Laravel.',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      commercial: 'Commercial',
      projects: 'Personal',
      contact: 'Contact',
    },
    actions: {
      downloadResume: 'Download resume as PDF',
    },
    hero: {
      name: 'Danila Dysa',
      title: 'Fullstack Developer (PHP / Vue / React)',
      location: 'Tashkent, Uzbekistan',
      age: '24 y.o.',
      bio: 'Fullstack developer with 5+ years of experience, focused on Vue/React on the frontend and PHP/Laravel on the backend. Designed micro-frontend architecture in banking, built E-commerce and ERP systems from scratch, and shipped products used by hundreds of thousands of people. Lately deep into build infrastructure and developer experience — moved a project from CRACO to Vite + Turborepo, cutting builds from three minutes to seven seconds. Comfortable with CI/CD, Docker and REST APIs, and with AI tools (Cursor, Claude Code) as part of the workflow while keeping full control of the architecture. Open to remote work with international teams.',
    },
    experience: {
      sectionLabel: '// experience',

      // One entry per company. Consecutive roles at the same employer are nested
      // under `roles` so the company name and span appear once; the entry-level
      // period/duration covers the whole tenure. An empty duration means the job
      // is ongoing — a hardcoded month count would go stale.
      items: [
        {
          company: 'Modmate (modmate.uz)',
          period: 'Jun 2026 — Present',
          duration: '',
          roles: [
            {
              title: 'Frontend Developer',
              period: 'Jun 2026 — Present',
              duration: '',
              description: [
                'Frontend for Modmate — a large web platform for the renovation, construction and interior design market in Uzbekistan that connects clients, contractors and suppliers',
                'Application architecture — designed the frontend architecture, built the design system and UI kit, and set up the role model (client, designer, builder, supplier) that drives the interface dynamically',
                'Key modules — step-by-step registration wizard with OTP verification; materials catalog with dynamic filtering (price, properties, shops), sorting and detailed product pages',
                'Business logic — projects and estimates module: clients split a project into rooms, add materials from the catalog and get a ready estimate that can be exported or printed',
                'Optimization and CI/CD — API layer on TanStack Query for efficient caching and invalidation; strict ESLint/Prettier rules in the CI/CD pipeline, automated Vite build and code-quality checks before deploy',
                'Stack: Vue 3, TypeScript, Vite, Vue Router, Pinia, TanStack Query, Axios, Tailwind CSS, Vuetify, Reka UI',
              ],
            },
          ],
        },
        {
          company: 'Stylemix',
          period: 'Apr 2025 — Jun 2026',
          duration: '1 year 3 months',
          roles: [
            {
              title: 'Frontend/Fullstack Developer',
              period: 'Jun 2025 — Jun 2026',
              duration: '1 year 1 month',
              description: [
                'Worked on Stylemix flagship products (a top author on Envato Market) — EdTech solutions and WordPress themes/plugins, with a focus on an LMS used by hundreds of thousands of people worldwide',
                'AI integration — brought the OpenAI API into the product core: auto-generation of images, text and JSON for courses, lessons, FAQ and quizzes, significantly reducing manual content work for clients',
                'Notifications architecture — designed and built a scalable notifications module for the LMS: on-site and push notifications, event triggers, REST API, Web Push with VAPID keys, service worker, async delivery queues, fanout for mass sends, and cron jobs',
                'Infrastructure and DevOps — migrated a React app from CRACO to Vite and moved the monorepo to Turborepo: build time from 3 min to 7 sec (~25x), HMR from 1–2s to 100ms; smart caching and parallel tasks made CI/CD pipelines much faster',
                'SPA integration — seamless embedding of a React SPA (Chakra UI) into the WordPress admin panel',
                'Frontend optimization — deep refactoring that removed legacy Vue 2 in favor of a single stack; wrote a custom icon font generator from SVG with SCSS helpers and unicode caching',
                'Stack: React, Chakra UI, JavaScript, PHP, REST API, Web Push, Turborepo, Vite, OpenAI API, WordPress',
              ],
            },
            {
              title: 'Frontend Developer',
              period: 'Apr — Jun 2025',
              duration: '3 months',
              description: [
                'Developed frontend for WordPress plugins using React and Chakra UI',
              ],
            },
          ],
        },
        {
          company: 'Rahmat (multibank.uz)',
          period: 'Jul 2023 — Apr 2025',
          duration: '1 year 10 months',
          roles: [
            {
              title: 'Frontend Developer',
              period: 'Jul 2023 — Apr 2025',
              duration: '1 year 10 months',
              description: [
                'Frontend for Multibank — a fintech platform bringing banking services and financial tools into one digital space; an enterprise SPA with high demands on security, fault tolerance and UI scalability',
                'Built the banking SPA on Vue 3 and TypeScript with Vuetify and Pinia',
                'Designed and implemented a micro-frontend architecture to scale a large enterprise app; wrote a script that generates a .d.ts file to share types across micro-frontend projects',
                'Set up client–server communication over WebSocket and JSON API',
                'Full Vite configuration, including custom plugins for the banking project\'s specific needs',
                'Integrated a biometric face recognition service for user identification and authentication',
                'Stack: Vue 3, TypeScript, Vuetify, Pinia, Micro-frontends, Vite, WebSockets',
              ],
            },
          ],
        },
        {
          company: 'Inroomer',
          period: 'Nov 2022 — Jun 2023',
          duration: '8 months',
          roles: [
            {
              title: 'Fullstack Developer (Vue.js / Laravel)',
              period: 'Nov 2022 — Jun 2023',
              duration: '8 months',
              description: [
                'Played a key role in building an internal hotel management system from scratch to streamline operations and improve guest service',
                'Architecture and backend — designed the PostgreSQL database and built a reliable Laravel REST API for the hotel\'s business logic',
                'Frontend and UI — built a Vue 3 SPA with optimized management of room inventory, rates and bookings',
                'Integrations — booking scheduler on DayPilot Scheduler for better resource management; integrated external booking platforms (Airbnb, Bronevik) via API',
                'Infrastructure (CI/CD) — set up GitLab CI, containerized backend and frontend with Docker, and automated deploys to staging and production, shortening release time',
                'Stack: Vue 3, Vuetify, Pinia, TypeScript, DayPilot Scheduler, Laravel, PHP, PostgreSQL, Docker, CI/CD, Git',
              ],
            },
          ],
        },
        {
          company: 'Freelance / Independent Contractor',
          period: 'Nov 2021 — Oct 2022',
          duration: '1 year',
          roles: [
            {
              title: 'Frontend/Fullstack Developer',
              period: 'Nov 2021 — Oct 2022',
              duration: '1 year',
              description: [
                'Custom web applications, APIs and client interfaces for small businesses',
                'Gathered requirements, designed architecture and databases (MySQL/PostgreSQL) for commercial projects',
                'Built RESTful APIs on PHP (Laravel) and integrated third-party services (payment gateways, SMS providers)',
                'Built interactive client interfaces (SPA) with Vue.js and JavaScript',
                'Responsive layouts from Figma and basic deployment to virtual servers (VPS/Vultr)',
                'Stack: Vue.js, PHP, Laravel, JavaScript, MySQL, HTML/CSS, Git',
              ],
            },
          ],
        },
      ],
    },
    skills: {
      sectionLabel: '// skills',
      categories: {
        frontend: {
          label: 'Frontend',
          items: ['TypeScript', 'JavaScript', 'Vue 3', 'Nuxt', 'React', 'Next.js', 'jQuery'],
        },
        backend: {
          label: 'Backend',
          items: ['PHP', 'Laravel', 'Node.js', 'GoFiber', 'NestJS', 'ExpressJS', 'PostgreSQL', 'MongoDB', 'RabbitMQ', 'JWT'],
        },
        mobile: {
          label: 'Mobile',
          items: ['Flutter', 'Dart'],
        },
        devops: {
          label: 'DevOps',
          items: ['Git', 'Linux', 'GitHub Actions', 'Railway', 'Docker', 'S3/MinIO'],
        },
      },
    },
    education: {
      sectionLabel: '// education',
      items: [
        {
          institution: 'Moscow Financial-Industrial University "Synergy"',
          degree: 'Information Systems & Technologies',
          specialization: 'Development, Maintenance & Security of Information Systems',
          year: '2025',
        },
      ],
    },
    languages: {
      sectionLabel: '// languages',
      items: [
        { name: 'Russian', level: 'Native' },
        { name: 'English', level: 'C1 — Advanced' },
      ],
    },
    commercial: {
      sectionLabel: '// commercial projects',
      subtitle: 'Production work for clients and companies',
    },
    projects: {
      sectionLabel: '// personal projects',
      subtitle: 'Personal ecosystem of services',
      viewProject: 'View details',
      backToHome: '← Back to CV',
      techStack: '// tech stack',
      features: '// features',
      myRole: '// my role',
      architecture: '// architecture',
      screenshots: '// screenshots',
    },
    contact: {
      sectionLabel: '// contact',
      email: 'danilapayne@gmail.com',
      telegram: '@danendz',
      github: 'github.com/Danendz',
      linkedin: 'Danila Dysa',
      phone: '+998 91 1910853',
      preferred: 'preferred',
    },
    footer: {
      updated: 'Last updated October 2026',
    },
  },
  ru: {
    meta: {
      title: 'Дыса Данила — Fullstack-разработчик',
      description: 'Fullstack-разработчик с опытом более 5 лет в создании веб-приложений. Vue, React, PHP/Laravel.',
    },
    nav: {
      about: 'Обо мне',
      experience: 'Опыт',
      skills: 'Навыки',
      education: 'Образование',
      commercial: 'Коммерческие',
      projects: 'Личные',
      contact: 'Контакты',
    },
    actions: {
      downloadResume: 'Скачать резюме в PDF',
    },
    hero: {
      name: 'Дыса Данила',
      title: 'Fullstack-разработчик (PHP / Vue / React)',
      location: 'Ташкент, Узбекистан',
      age: '24 года',
      bio: 'Работаю Fullstack-разработчиком более 5 лет. Основная экспертиза — Vue/React на фронтенде и PHP/Laravel на бэкенде. Проектировал микрофронтенд-архитектуру в банковском секторе, разрабатывал сложные E-commerce/ERP системы с нуля и создавал продукты для сотен тысяч пользователей. Последний год плотно занимался инфраструктурой сборки и Developer Experience — перенёс проект с CRACO на Vite и Turborepo, ускорив билд с трёх минут до семи секунд. Есть практический опыт CI/CD, Docker и REST API. Комфортно работаю с AI-инструментами (Cursor, Claude Code) как частью процесса, полностью контролируя архитектуру. Открыт к удалённой работе с международными командами.',
    },
    experience: {
      sectionLabel: '// опыт работы',

      items: [
        {
          company: 'Modmate (modmate.uz)',
          period: 'Июн 2026 — н.в.',
          duration: '',
          roles: [
            {
              title: 'Frontend-разработчик',
              period: 'Июн 2026 — н.в.',
              duration: '',
              description: [
                'Разработка клиентской части Modmate — крупной веб-платформы для рынка ремонта, строительства и дизайна интерьеров в Узбекистане, объединяющей заказчиков, подрядчиков и поставщиков',
                'Архитектура приложения — спроектировал frontend-архитектуру, разработал дизайн-систему и UI-kit проекта, настроил ролевую модель (клиент, дизайнер, строитель, поставщик), от которой динамически зависит интерфейс',
                'Ключевые модули — пошаговый wizard регистрации с верификацией по OTP; каталог материалов с динамической фильтрацией (по цене, свойствам, магазинам), сортировкой и детальными карточками товаров',
                'Бизнес-логика — модуль проектов и смет: клиент разбивает проект по комнатам, добавляет материалы из каталога и получает готовую смету с возможностью экспорта/печати',
                'Оптимизация и CI/CD — API-слой на TanStack Query для эффективного кэширования и инвалидации данных; строгие правила линтинга (ESLint, Prettier) в CI/CD пайплайне, автоматизация сборки (Vite) и проверки качества кода перед деплоем',
                'Стек: Vue 3, TypeScript, Vite, Vue Router, Pinia, TanStack Query, Axios, Tailwind CSS, Vuetify, Reka UI',
              ],
            },
          ],
        },
        {
          company: 'Stylemix',
          period: 'Апр 2025 — Июн 2026',
          duration: '1 год 3 месяца',
          roles: [
            {
              title: 'Frontend/Fullstack-разработчик',
              period: 'Июн 2025 — Июн 2026',
              duration: '1 год 1 месяц',
              description: [
                'Работа над крупными продуктами Stylemix (входит в топ авторов на Envato Market) — флагманскими EdTech-решениями и темами/плагинами для WordPress; основной фокус — развитие LMS-системы, которой пользуются сотни тысяч пользователей по всему миру',
                'Интеграция AI — внедрил OpenAI API в ядро продукта: автогенерация изображений, текстов и JSON для создания курсов, уроков, FAQ и квизов, что значительно сократило ручную работу клиентов по созданию контента',
                'Архитектура уведомлений — спроектировал и реализовал масштабируемый модуль уведомлений для LMS: on-site и push-уведомления, триггеры событий, REST API, Web Push с VAPID-ключами, service worker, асинхронные очереди доставки, fanout для массовых рассылок и cron-задачи',
                'Инфраструктура и DevOps — миграция React-приложения с CRACO на Vite и перевод монорепозитория на Turborepo: билд ускорен с 3 минут до 7 секунд (~25 раз), HMR с 1–2с до 100мс; умное кэширование и параллельные таски значительно ускорили пайплайны CI/CD',
                'Интеграция SPA — бесшовное встраивание React SPA (Chakra UI) в панель администратора WordPress',
                'Оптимизация фронтенда — глубокий рефакторинг с удалением легаси Vue 2 в пользу единого стека; скрипт генерации кастомного иконфонта из SVG с SCSS-хелперами и кэшированием юникодов',
                'Стек: React, Chakra UI, JavaScript, PHP, REST API, Web Push, Turborepo, Vite, OpenAI API, WordPress',
              ],
            },
            {
              title: 'Frontend-разработчик',
              period: 'Апр — Июн 2025',
              duration: '3 месяца',
              description: [
                'Разработка frontend части плагинов для WordPress используя React, Chakra UI',
              ],
            },
          ],
        },
        {
          company: 'Rahmat (multibank.uz)',
          period: 'Июл 2023 — Апр 2025',
          duration: '1 год 10 месяцев',
          roles: [
            {
              title: 'Frontend-разработчик',
              period: 'Июл 2023 — Апр 2025',
              duration: '1 год 10 месяцев',
              description: [
                'Разработка клиентской части Multibank — финтех-платформы, объединяющей банковские услуги и финансовые инструменты в едином цифровом пространстве; энтерпрайз-SPA с высокими требованиями к безопасности, отказоустойчивости и масштабируемости интерфейсов',
                'Разработка банковского SPA на Vue 3 и TypeScript с использованием Vuetify и Pinia',
                'Спроектировал и реализовал micro-frontend архитектуру для масштабирования крупного энтерпрайз-приложения; написал скрипт генерации .d.ts файла для шаринга типов между micro-frontend проектами',
                'Настроил взаимодействие клиентской части с сервером через WebSocket и JSON API',
                'Полная настройка сборщика Vite, включая кастомные плагины под специфические нужды банковского проекта',
                'Интегрировал сервис биометрического распознавания лиц для идентификации и аутентификации пользователей',
                'Стек: Vue 3, TypeScript, Vuetify, Pinia, Micro-frontends, Vite, WebSockets',
              ],
            },
          ],
        },
        {
          company: 'Inroomer',
          period: 'Ноя 2022 — Июн 2023',
          duration: '8 месяцев',
          roles: [
            {
              title: 'Fullstack-разработчик (Vue.js / Laravel)',
              period: 'Ноя 2022 — Июн 2023',
              duration: '8 месяцев',
              description: [
                'Сыграл ключевую роль в создании с нуля внутренней системы управления отелем для оптимизации операционных процессов и повышения качества обслуживания гостей',
                'Архитектура и бэкенд — спроектировал базу данных (PostgreSQL) и разработал надёжный REST API на Laravel для бизнес-логики отеля',
                'Фронтенд и UI — SPA на Vue 3 с оптимизированным управлением номерным фондом, тарифами и бронированиями',
                'Интеграции — планировщик бронирований на DayPilot Scheduler для эффективного управления ресурсами; интеграция с внешними платформами бронирования (Airbnb, Bronevik) через API',
                'Инфраструктура (CI/CD) — настроил GitLab CI, контейнеризировал бэкенд и фронтенд в Docker, автоматизировал деплой на staging и production, сократив время релизов',
                'Стек: Vue 3, Vuetify, Pinia, TypeScript, DayPilot Scheduler, Laravel, PHP, PostgreSQL, Docker, CI/CD, Git',
              ],
            },
          ],
        },
        {
          company: 'Фриланс / Independent Contractor',
          period: 'Ноя 2021 — Окт 2022',
          duration: '1 год',
          roles: [
            {
              title: 'Frontend/Fullstack-разработчик',
              period: 'Ноя 2021 — Окт 2022',
              duration: '1 год',
              description: [
                'Разработка веб-приложений, API и клиентских интерфейсов на заказ для малого бизнеса',
                'Сбор требований, проектирование архитектуры и баз данных (MySQL/PostgreSQL) для коммерческих проектов',
                'Разработка RESTful API на PHP (Laravel), интеграция сторонних сервисов (платёжные шлюзы, SMS-рассылки)',
                'Разработка интерактивных клиентских интерфейсов (SPA) на Vue.js и JavaScript',
                'Вёрстка адаптивных макетов из Figma и настройка базового деплоя на виртуальные серверы (VPS/Vultr)',
                'Стек: Vue.js, PHP, Laravel, JavaScript, MySQL, HTML/CSS, Git',
              ],
            },
          ],
        },
      ],
    },
    skills: {
      sectionLabel: '// навыки',
      categories: {
        frontend: {
          label: 'Frontend',
          items: ['TypeScript', 'JavaScript', 'Vue 3', 'Nuxt', 'React', 'Next.js', 'jQuery'],
        },
        backend: {
          label: 'Backend',
          items: ['PHP', 'Laravel', 'Node.js', 'GoFiber', 'NestJS', 'ExpressJS', 'PostgreSQL', 'MongoDB', 'RabbitMQ', 'JWT'],
        },
        mobile: {
          label: 'Мобильная',
          items: ['Flutter', 'Dart'],
        },
        devops: {
          label: 'DevOps',
          items: ['Git', 'Linux', 'GitHub Actions', 'Railway', 'Docker', 'S3/MinIO'],
        },
      },
    },
    education: {
      sectionLabel: '// образование',
      items: [
        {
          institution: 'Московский финансово-промышленный университет «Синергия»',
          degree: 'Информационные системы и технологии',
          specialization: 'Разработка, сопровождение и обеспечение безопасности информационных систем',
          year: '2025',
        },
      ],
    },
    languages: {
      sectionLabel: '// языки',
      items: [
        { name: 'Русский', level: 'Родной' },
        { name: 'Английский', level: 'C1 — Advanced' },
      ],
    },
    commercial: {
      sectionLabel: '// коммерческие проекты',
      subtitle: 'Продакшн-работа для клиентов и компаний',
    },
    projects: {
      sectionLabel: '// личные проекты',
      subtitle: 'Персональная экосистема сервисов',
      viewProject: 'Подробнее',
      backToHome: '← Назад к CV',
      techStack: '// стек технологий',
      features: '// возможности',
      myRole: '// моя роль',
      architecture: '// архитектура',
      screenshots: '// скриншоты',
    },
    contact: {
      sectionLabel: '// контакты',
      email: 'danilapayne@gmail.com',
      telegram: '@danendz',
      github: 'github.com/Danendz',
      linkedin: 'Данила Дыса',
      phone: '+998 91 1910853',
      preferred: 'предпочтительно',
    },
    footer: {
      updated: 'Обновлено в октябре 2026',
    },
  },
} as const

export type Translations = typeof translations['en']
