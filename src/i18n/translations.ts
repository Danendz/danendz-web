export type Lang = 'en' | 'ru'

export const translations = {
  en: {
    meta: {
      title: 'Danila Dysa — Fullstack Developer',
      description: 'Fullstack developer with 2+ years of experience building web and mobile applications. Vue, React, Laravel, Go, Flutter.',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      name: 'Danila Dysa',
      title: 'Fullstack Developer',
      location: 'Tashkent, Uzbekistan',
      age: '24 y.o.',
      bio: 'Web developer with over three years of commercial experience building full-featured applications. Constantly learning and growing professionally, tackling complex challenges at every stage of development.',
    },
    experience: {
      sectionLabel: '// experience',

      items: [
        {
          company: 'WEB THEMES DEVELOPMENT',
          role: 'Fullstack Developer',
          period: 'Jun 2025 — Present',
          duration: '10 months',
          description: [
            'Fullstack WordPress developer — plugins, themes, backend (REST API, AJAX) and frontend (JS, jQuery, React)',
            'OpenAI API integration — auto-generation of images, text, and JSON for courses, lessons, FAQ, and quizzes, significantly reducing manual content work',
            'Refactored from Vue to jQuery — removed legacy Vue 2 used only in isolated parts while the rest of the codebase was jQuery, eliminating an unnecessary dependency',
            'Migrated React app from CRACO to Vite + Turborepo monorepo — build time reduced from 3 min to 7 sec (~25x), HMR from 1-2s to 100ms, dev server start from 10-20s to 1s',
            'Custom icon system — built an icon font generator from SVG with SCSS helpers and unicode caching',
            'Dynamic React integration into WordPress admin — seamless SPA embedding in the admin panel',
            'AI tools in workflow — Cursor, Claude Code and AI code review used as agents to accelerate development while maintaining full control over architecture',
          ],
        },
        {
          company: 'WEB THEMES DEVELOPMENT',
          role: 'Frontend Developer',
          period: 'Apr — Jun 2025',
          duration: '3 months',
          description: [
            'Developed frontend for WordPress plugins using React and Chakra UI',
          ],
        },
        {
          company: 'Micros Development',
          role: 'Frontend Developer',
          period: 'Sep 2023 — Apr 2025',
          duration: '1 year 8 months',
          description: [
            'Built a banking SPA on Vue 3 + TypeScript with Vuetify and Pinia',
            'Designed and implemented micro-frontend architecture for a large-scale application',
            'Worked with WebSocket and JSON API',
            'Full Vite configuration and custom plugin development for project needs',
            'Integrated face recognition service for user identification',
            'Built a script to generate .d.ts type files across micro-frontend projects',
          ],
        },
        {
          company: 'Inroomer',
          role: 'Frontend Developer',
          period: 'Aug — Dec 2024',
          duration: '5 months',
          description: [
            'Built an internal hotel management system focused on streamlining operations',
            'Developed booking management with DayPilot Scheduler for efficient resource planning',
            'Integrated with Airbnb and Bronevik platforms for cross-platform booking management',
            'Tech: Vue 3, Vuetify, Pinia, TypeScript, DayPilot Scheduler',
          ],
        },
      ],
    },
    skills: {
      sectionLabel: '// skills',
      categories: {
        frontend: {
          label: 'Frontend',
          items: ['TypeScript', 'Vue 3', 'Nuxt', 'React', 'Next.js', 'jQuery'],
        },
        backend: {
          label: 'Backend',
          items: ['Laravel', 'GoFiber', 'NestJS', 'ExpressJS', 'RabbitMQ', 'PostgreSQL', 'MongoDB', 'JWT'],
        },
        mobile: {
          label: 'Mobile',
          items: ['Flutter', 'Dart'],
        },
        devops: {
          label: 'DevOps',
          items: ['Git', 'GitHub Actions', 'Railway', 'Docker', 'S3/MinIO'],
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
        { name: 'English', level: 'B2 — Upper Intermediate' },
      ],
    },
    projects: {
      sectionLabel: '// projects',
      subtitle: 'Personal ecosystem of services',
      viewProject: 'View details',
      backToHome: '← Back to CV',
    },
    contact: {
      sectionLabel: '// contact',
      email: 'danilapayne@gmail.com',
      telegram: '@getaltzrivii',
      github: 'github.com/Danendz',
      linkedin: 'Danila Dysa',
      phone: '+998 91 1910853',
      preferred: 'preferred',
    },
    footer: {
      updated: 'Last updated March 2026',
    },
  },
  ru: {
    meta: {
      title: 'Дыса Данила — Fullstack-разработчик',
      description: 'Fullstack-разработчик с опытом более 2 лет в создании веб- и мобильных приложений. Vue, React, Laravel, Go, Flutter.',
    },
    nav: {
      about: 'Обо мне',
      experience: 'Опыт',
      skills: 'Навыки',
      education: 'Образование',
      projects: 'Проекты',
      contact: 'Контакты',
    },
    hero: {
      name: 'Дыса Данила',
      title: 'Fullstack-разработчик',
      location: 'Ташкент, Узбекистан',
      age: '24 года',
      bio: 'Веб-разработчик с более чем трёхлетним коммерческим опытом в создании полнофункциональных приложений. Стремлюсь к постоянному обучению и профессиональному росту, решая сложные задачи на всех этапах разработки.',
    },
    experience: {
      sectionLabel: '// опыт работы',

      items: [
        {
          company: 'WEB THEMES DEVELOPMENT',
          role: 'Fullstack-разработчик',
          period: 'Июн 2025 — настоящее время',
          duration: '10 месяцев',
          description: [
            'Фуллстек WordPress-разработчик — плагины, темы, бэкенд (REST API, AJAX) и фронтенд (JS, jQuery, React)',
            'Интеграция OpenAI API — автогенерация изображений, текстов и JSON для создания курсов, уроков, FAQ и квизов, что значительно сократило ручную работу по контенту',
            'Рефакторинг с Vue на jQuery — удалил легаси Vue 2, который использовался лишь в отдельных частях проекта, убрал лишнюю зависимость и привёл стек к единообразию',
            'Миграция React-приложения с CRACO на Vite + монорепо на Turborepo — билд ускорен с 3 минут до 7 секунд (~25 раз), HMR с 1–2с до 100мс, старт dev-сервера с 10–20с до 1с',
            'Кастомная система иконок — скрипт генерации иконфонта из SVG с SCSS-хелперами и кэшированием юникодов',
            'Динамическая интеграция React в WordPress-админку — бесшовное встраивание SPA в панель администратора',
            'AI-инструменты в рабочем процессе — Cursor, Claude Code и AI-ревью кода для ускорения разработки при полном контроле над архитектурой',
          ],
        },
        {
          company: 'WEB THEMES DEVELOPMENT',
          role: 'Frontend-разработчик',
          period: 'Апр — Июн 2025',
          duration: '3 месяца',
          description: [
            'Разработка frontend части плагинов для WordPress используя React, Chakra UI',
          ],
        },
        {
          company: 'Micros Development',
          role: 'Frontend-разработчик',
          period: 'Сен 2023 — Апр 2025',
          duration: '1 год 8 месяцев',
          description: [
            'Разработка банковского SPA на Vue 3 и TypeScript с использованием Vuetify и Pinia',
            'Разработка и реализация micro-frontend архитектуры на большом приложении',
            'Работа с WebSocket и JSON API',
            'Полная настройка Vite и написание кастомных плагинов под нужды проекта',
            'Интегрирование сервиса распознавания лиц для идентификации пользователя',
            'Скрипт генерации .d.ts файлов для типов с разных micro-frontend проектов',
          ],
        },
        {
          company: 'Inroomer',
          role: 'Frontend-разработчик',
          period: 'Авг — Дек 2024',
          duration: '5 месяцев',
          description: [
            'Создание внутренней системы управления отелем для оптимизации операционных процессов',
            'Реализация планировщика бронирований с использованием DayPilot Scheduler',
            'Интеграция с платформами бронирования Airbnb и Bronevik для кроссплатформенного управления',
            'Технологии: Vue 3, Vuetify, Pinia, TypeScript, DayPilot Scheduler',
          ],
        },
      ],
    },
    skills: {
      sectionLabel: '// навыки',
      categories: {
        frontend: {
          label: 'Frontend',
          items: ['TypeScript', 'Vue 3', 'Nuxt', 'React', 'Next.js', 'jQuery'],
        },
        backend: {
          label: 'Backend',
          items: ['Laravel', 'GoFiber', 'NestJS', 'ExpressJS', 'RabbitMQ', 'PostgreSQL', 'MongoDB', 'JWT'],
        },
        mobile: {
          label: 'Мобильная',
          items: ['Flutter', 'Dart'],
        },
        devops: {
          label: 'DevOps',
          items: ['Git', 'GitHub Actions', 'Railway', 'Docker', 'S3/MinIO'],
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
        { name: 'Английский', level: 'B2 — Upper Intermediate' },
      ],
    },
    projects: {
      sectionLabel: '// проекты',
      subtitle: 'Персональная экосистема сервисов',
      viewProject: 'Подробнее',
      backToHome: '← Назад к CV',
    },
    contact: {
      sectionLabel: '// контакты',
      email: 'danilapayne@gmail.com',
      telegram: '@getaltzrivii',
      github: 'github.com/Danendz',
      linkedin: 'Данила Дыса',
      phone: '+998 91 1910853',
      preferred: 'предпочтительно',
    },
    footer: {
      updated: 'Обновлено в марте 2026',
    },
  },
} as const

export type Translations = typeof translations['en']
