import modmateMain from '../assets/projects/images/modmate/modmate-main-page.webp'
import modmateMaterials from '../assets/projects/images/modmate/modmate-materials-page.webp'
import modmateBlogs from '../assets/projects/images/modmate/modmate-blogs-page.webp'

export interface Project {
  slug: string
  category: 'commercial' | 'personal'
  title: { en: string; ru: string }
  subtitle: { en: string; ru: string }
  description: { en: string; ru: string }
  tech: string[]
  features: { en: string[]; ru: string[] }
  /** How the system is built. Omitted for commercial work with no public write-up. */
  architecture?: { en: string; ru: string }
  /** What I personally did — distinct from how the system is designed. */
  role?: { en: string; ru: string }
  /** Shown for commercial work where the engagement was time-bounded. */
  period?: { en: string; ru: string }
  images?: ImageMetadata[]
  /** Absent for commercial work, which has no public repository. */
  repo?: string
  url?: string
  npm?: string
  color: string
}

export const projects: Project[] = [
  {
    slug: 'modmate',
    category: 'commercial',
    title: { en: 'Modmate', ru: 'Modmate' },
    subtitle: {
      en: 'Renovation & interior design marketplace',
      ru: 'Маркетплейс ремонта и дизайна интерьеров',
    },
    description: {
      en: 'Modmate (modmate.uz) is a web platform for the renovation, construction and interior design market in Uzbekistan. The idea is simple: bring everyone involved in a renovation into one place, so a client doesn\'t have to hunt for materials on one site, contractors on another, and then build an estimate in a spreadsheet.',
      ru: 'Modmate (modmate.uz) — веб-платформа для рынка ремонта, строительства и дизайна интерьеров в Узбекистане. Идея простая: собрать в одном месте всех, кто участвует в ремонте, чтобы клиенту не приходилось искать материалы в одном месте, мастеров в другом, а смету считать в таблице.',
    },
    tech: [
      'Vue 3',
      'TypeScript',
      'Vite',
      'Vue Router',
      'Pinia',
      'TanStack Query',
      'Axios',
      'Tailwind CSS',
      'Vuetify',
      'Reka UI',
      'ESLint',
      'Prettier',
    ],
    features: {
      en: [
        'Role-based experience — during sign-up a user picks a role: private client, designer or design studio, builder, materials supplier, or manufacturer of furniture and decor. The role shapes the entire interface after that',
        'Step-by-step registration wizard with OTP phone verification and a separate company details step for business accounts',
        'Catalog of materials and shops with categories, filters by price, properties, shops and product attributes, sorting, and detailed product pages with technical parameters, usage scenarios and seller info',
        'Separate sections for specialists, shops, a blog and favorites',
        'Projects and estimates — a client creates a project, splits it into rooms, adds materials to a specific room straight from the catalog, and ends up with a ready estimate that can be printed or downloaded',
        'Portfolio of works for contractors, plus phone and email verification, notifications and multi-language support in the profile',
      ],
      ru: [
        'Ролевой интерфейс — при регистрации пользователь выбирает свою роль: частный клиент, дизайнер или дизайн-студия, строитель, поставщик материалов, производитель мебели и декора. От роли зависит весь дальнейший интерфейс',
        'Пошаговый мастер регистрации с подтверждением номера по OTP и отдельным шагом с данными компании для бизнес-аккаунтов',
        'Каталог материалов и магазинов: категории, фильтры по цене, характеристикам, магазинам и свойствам товара, сортировка, детальные карточки с техническими параметрами, сценариями применения и информацией о продавце',
        'Отдельные разделы со специалистами, магазинами, блогом и избранным',
        'Проекты и сметы — клиент создаёт проект, разбивает его на комнаты, добавляет материалы в конкретное помещение прямо из каталога и получает готовую смету, которую можно распечатать или скачать',
        'Портфолио работ у исполнителей, верификация телефона и почты, уведомления и мультиязычность в профиле',
      ],
    },
    role: {
      en: 'I worked on the frontend: application architecture, the design system and UI kit, the API layer, role-based logic, and responsive layouts for mobile.',
      ru: 'Я отвечал за фронтенд: архитектуру приложения, дизайн-систему и UI-kit, работу с API, ролевую логику и адаптивную вёрстку под мобильные устройства.',
    },
    images: [modmateMain, modmateMaterials, modmateBlogs],
    url: 'https://modmate.uz',
    color: '#F59E0B',
  },
  {
    slug: 'inroomer',
    category: 'commercial',
    title: { en: 'Inroomer', ru: 'Inroomer' },
    subtitle: {
      en: 'Internal hotel management system',
      ru: 'Внутренняя система управления отелем',
    },
    description: {
      en: 'An internal hotel management system built to streamline day-to-day operations. Booking management runs on DayPilot Scheduler for resource planning, with integrations into Airbnb and Bronevik so reservations from external platforms are handled in one place.',
      ru: 'Внутренняя система управления отелем для оптимизации операционных процессов. Управление бронированиями построено на DayPilot Scheduler для планирования ресурсов, а интеграции с Airbnb и Bronevik позволяют работать с бронями внешних платформ в одном месте.',
    },
    tech: ['Vue 3', 'Vuetify', 'Pinia', 'TypeScript', 'DayPilot Scheduler'],
    features: {
      en: [
        'Built an internal hotel management system focused on streamlining operations',
        'Developed booking management with DayPilot Scheduler for efficient resource planning',
        'Integrated with Airbnb and Bronevik platforms for cross-platform booking management',
      ],
      ru: [
        'Создание внутренней системы управления отелем для оптимизации операционных процессов',
        'Реализация планировщика бронирований с использованием DayPilot Scheduler',
        'Интеграция с платформами бронирования Airbnb и Bronevik для кроссплатформенного управления',
      ],
    },
    period: {
      en: 'Aug — Dec 2024',
      ru: 'Авг — Дек 2024',
    },
    color: '#3B82F6',
  },
  {
    slug: 'vite-dev-tools',
    category: 'personal',
    title: { en: 'Vite Dev Tools', ru: 'Vite Dev Tools' },
    subtitle: {
      en: 'AI-powered devtools for Vite',
      ru: 'Devtools с ИИ для Vite',
    },
    description: {
      en: 'Lightweight devtools overlay for Vite. Inspect your component tree, capture console errors, and jump to source — all without leaving the browser. Built-in MCP server lets AI agents query and control your running app.',
      ru: 'Легковесная панель инструментов для Vite. Инспектируйте дерево компонентов, перехватывайте ошибки консоли и переходите к исходному коду — всё прямо в браузере. Встроенный MCP-сервер позволяет ИИ-агентам запрашивать и управлять вашим работающим приложением.',
    },
    tech: ['TypeScript', 'Vite', 'Preact', 'MCP'],
    features: {
      en: [
        'No browser extension needed — works inline within the app',
        'Click-to-edit with persistent source file writes',
        'React 18+ and Vue 3.3+ support in one plugin',
        'Built-in MCP server with 16 tools for AI agents',
        'Dockable, resizable panel with component tree, props editor, and console tabs',
      ],
      ru: [
        'Не нужно расширение браузера — работает прямо в приложении',
        'Клик для редактирования с сохранением изменений в исходные файлы',
        'Поддержка React 18+ и Vue 3.3+ в одном плагине',
        'Встроенный MCP-сервер с 16 инструментами для ИИ-агентов',
        'Закрепляемая, масштабируемая панель с деревом компонентов, редактором пропсов и вкладкой консоли',
      ],
    },
    architecture: {
      en: 'Vite plugin injects a Preact-based overlay rendered inside a Shadow DOM for style isolation. Component tree inspection uses framework-specific adapters for React and Vue. An integrated MCP server (stdio transport) exposes 16 tools for AI agents to query the component tree, read props/state, highlight elements, and interact with the running app.',
      ru: 'Vite-плагин внедряет оверлей на Preact, отрисованный внутри Shadow DOM для изоляции стилей. Инспекция дерева компонентов использует адаптеры для React и Vue. Интегрированный MCP-сервер (stdio-транспорт) предоставляет 16 инструментов для ИИ-агентов для запросов к дереву компонентов, чтения пропсов/состояния, подсветки элементов и взаимодействия с работающим приложением.',
    },
    repo: 'https://github.com/Danendz/vite-dev-tools',
    npm: 'https://www.npmjs.com/package/@danendz/vite-dev-tools',
    color: '#8B5CF6',
  },
  {
    slug: 'wuhan-mahjong',
    category: 'personal',
    title: { en: 'Wuhan Mahjong', ru: 'Wuhan Mahjong' },
    subtitle: {
      en: 'Real-time multiplayer mahjong game',
      ru: 'Многопользовательская игра в маджонг',
    },
    description: {
      en: 'A real-time multiplayer Wuhan Mahjong game (红中赖子杠). Play with friends online or practice against AI bots with configurable difficulty. Features room-based gameplay, full Wuhan rules with wild cards, reconnection support, and a multiplicative scoring system.',
      ru: 'Многопользовательская онлайн-игра в маджонг Ухань (红中赖子杠). Играйте с друзьями онлайн или тренируйтесь против ИИ-ботов с настраиваемой сложностью. Включает игру по комнатам, полные правила уханьского маджонга с джокерами, поддержку переподключения и мультипликативную систему подсчёта очков.',
    },
    tech: ['Vue 3', 'TypeScript', 'Go', 'PostgreSQL', 'WebSocket', 'Pinia', 'Docker', 'Vite'],
    features: {
      en: [
        'Real-time 4-player games via WebSocket connections',
        'AI bots with easy, medium, and hard difficulty levels',
        'Room-based gameplay with shareable room codes',
        'Full Wuhan mahjong rules: wild cards, rob kong, kong draw win, last tile win, 258 pair rule',
        'Guest mode with no login required',
        'Seamless reconnection support after disconnection',
      ],
      ru: [
        'Игры в реальном времени на 4 игрока через WebSocket',
        'ИИ-боты с лёгким, средним и сложным уровнями сложности',
        'Игра по комнатам с кодами для приглашения друзей',
        'Полные правила маджонга Ухань: джокеры, перехват конга, выигрыш с конга, выигрыш последней плиткой, правило пары 258',
        'Гостевой режим без необходимости входа',
        'Бесшовное переподключение после разрыва соединения',
      ],
    },
    architecture: {
      en: 'Vue 3 frontend with Pinia stores and composables for WebSocket/game state. Go backend with game engine (tiles, hand validation, scoring), room management, WebSocket handler, and AI bot logic. Shared types via JSON Schema with code generation for both languages.',
      ru: 'Фронтенд на Vue 3 с Pinia-сторами и composables для WebSocket/игрового состояния. Бэкенд на Go с игровым движком (плитки, валидация руки, подсчёт очков), управлением комнатами, WebSocket-обработчиком и логикой ИИ-ботов. Общие типы через JSON Schema с кодогенерацией для обоих языков.',
    },
    repo: 'https://github.com/Danendz/mahjong',
    url: 'https://mahjong.danendz.com',
    color: '#E53935',
  },
  {
    slug: 'marquer-mobile',
    category: 'personal',
    title: { en: 'Marquer Mobile', ru: 'Marquer Mobile' },
    subtitle: {
      en: 'Flutter productivity app',
      ru: 'Мобильное приложение на Flutter',
    },
    description: {
      en: 'A mobile productivity app featuring rich-text notes, tasks with folders, calendar with recurring plans, Pomodoro study timer, and OTA updates. Built with Flutter for cross-platform deployment.',
      ru: 'Мобильное приложение для продуктивности: заметки с форматированием, задачи с папками, календарь с повторяющимися планами, Pomodoro-таймер для учёбы и OTA-обновления. Создано на Flutter для кроссплатформенного развёртывания.',
    },
    tech: ['Flutter', 'Dart', 'Riverpod', 'Dio', 'GoRouter', 'Flutter Quill', 'Sentry', 'GitHub Actions'],
    features: {
      en: [
        'Rich text notes with Flutter Quill editor',
        'Task management with folder organization',
        'Calendar with recurring plans and reminders',
        'Pomodoro study timer with session tracking',
        'OTA updates via S3 + app release API',
        'CI/CD pipeline: GitHub Actions builds APK → uploads to S3 → notifies backend via OIDC',
      ],
      ru: [
        'Заметки с форматированием через Flutter Quill',
        'Управление задачами с организацией по папкам',
        'Календарь с повторяющимися планами и напоминаниями',
        'Pomodoro-таймер с отслеживанием сессий',
        'OTA-обновления через S3 + API релизов',
        'CI/CD пайплайн: GitHub Actions собирает APK → загружает в S3 → уведомляет бэкенд через OIDC',
      ],
    },
    architecture: {
      en: 'State management via Riverpod, HTTP client with Dio, navigation with GoRouter. Modular feature-based architecture with separate layers for API, screens, stores, and services.',
      ru: 'Управление состоянием через Riverpod, HTTP-клиент Dio, навигация через GoRouter. Модульная архитектура по фичам с отдельными слоями для API, экранов, стора и сервисов.',
    },
    repo: 'https://github.com/Danendz/marquer-mobile',
    color: '#4FC3F7',
  },
  {
    slug: 'marquer-backend',
    category: 'personal',
    title: { en: 'Marquer Backend', ru: 'Marquer Backend' },
    subtitle: {
      en: 'Laravel REST API',
      ru: 'REST API на Laravel',
    },
    description: {
      en: 'Comprehensive REST API powering the Marquer ecosystem. Handles notes, tasks, study sessions, calendar events, wishes, and app releases with event streaming to analytics.',
      ru: 'Полнофункциональный REST API для экосистемы Marquer. Обрабатывает заметки, задачи, учебные сессии, календарные события, пожелания и релизы приложений с потоковой передачей событий в аналитику.',
    },
    tech: ['PHP 8.5', 'Laravel 12', 'PostgreSQL 18', 'MinIO (S3)', 'JWT', 'Pest'],
    features: {
      en: [
        'Full CRUD for notes, tasks, task-folders, wishes, and app releases',
        'Study session management with Pomodoro integration',
        'Calendar events with recurrence support',
        'File uploads via MinIO (S3-compatible storage)',
        'Fire-and-forget analytics via HTTP POST to Analytics service',
        'JWT authentication shared across services',
      ],
      ru: [
        'Полный CRUD для заметок, задач, папок задач, пожеланий и релизов',
        'Управление учебными сессиями с интеграцией Pomodoro',
        'Календарные события с поддержкой повторений',
        'Загрузка файлов через MinIO (S3-совместимое хранилище)',
        'Отправка аналитики через HTTP POST в Analytics-сервис',
        'JWT-аутентификация, общая для всех сервисов',
      ],
    },
    architecture: {
      en: 'Controller → FormRequest → Service → Model pattern. Global error handler, resource transformers for API responses. Fire-and-forget HTTP POST to Analytics service for event tracking.',
      ru: 'Паттерн Controller → FormRequest → Service → Model. Глобальный обработчик ошибок, ресурсные трансформеры для API-ответов. Fire-and-forget HTTP POST в Analytics-сервис для отслеживания событий.',
    },
    repo: 'https://github.com/Danendz/marquer.danendz',
    color: '#FF7043',
  },
  {
    slug: 'auth-service',
    category: 'personal',
    title: { en: 'Auth Service', ru: 'Auth Service' },
    subtitle: {
      en: 'JWT authentication service',
      ru: 'Сервис JWT-аутентификации',
    },
    description: {
      en: 'Dedicated authentication microservice providing JWT-based auth for the entire Danendz ecosystem. Handles registration, login, token refresh, and user profile.',
      ru: 'Выделенный микросервис аутентификации на JWT для всей экосистемы Danendz. Обрабатывает регистрацию, вход, обновление токенов и профиль пользователя.',
    },
    tech: ['PHP 8.4', 'Laravel 12', 'PostgreSQL', 'jwt-auth'],
    features: {
      en: [
        'User registration with validation',
        'Login with JWT token generation',
        'Token refresh for seamless sessions',
        'User profile endpoint (/me)',
        'Shared JWT_SECRET across all services for cross-service auth',
      ],
      ru: [
        'Регистрация пользователей с валидацией',
        'Вход с генерацией JWT-токена',
        'Обновление токена для бесшовных сессий',
        'Эндпоинт профиля пользователя (/me)',
        'Общий JWT_SECRET для всех сервисов для кросс-сервисной аутентификации',
      ],
    },
    architecture: {
      en: 'Lightweight Laravel service with AuthService handling business logic. Routes defined in routes/api.php. JWT tokens validated across all ecosystem services via shared secret.',
      ru: 'Легковесный Laravel-сервис с AuthService для бизнес-логики. Маршруты определены в routes/api.php. JWT-токены валидируются во всех сервисах экосистемы через общий секрет.',
    },
    repo: 'https://github.com/Danendz/auth.danendz',
    color: '#66BB6A',
  },
  {
    slug: 'analytics-service',
    category: 'personal',
    title: { en: 'Analytics Service', ru: 'Analytics Service' },
    subtitle: {
      en: 'Go event collection service',
      ru: 'Сервис сбора событий на Go',
    },
    description: {
      en: 'High-performance event collection service with HTTP API ingestion, batch writes for efficiency, and structured event schema for categorized analytics.',
      ru: 'Высокопроизводительный сервис сбора событий с приёмом через HTTP API, пакетной записью для эффективности и структурированной схемой событий для категоризированной аналитики.',
    },
    tech: ['Go 1.25', 'Fiber', 'PostgreSQL', 'GORM'],
    features: {
      en: [
        'HTTP API for event ingestion',
        'Batch writes: 200 events or 500ms flush interval',
        'Structured event schema with metadata',
        'Health check and metrics endpoints',
      ],
      ru: [
        'HTTP API для приёма событий',
        'Пакетная запись: 200 событий или интервал сброса 500мс',
        'Структурированная схема событий с метаданными',
        'Эндпоинты проверки здоровья и метрик',
      ],
    },
    architecture: {
      en: 'Modular Go structure: cmd/api (entry), internal/ (ingest, routes, models, handlers, services). Fiber HTTP server receives events via POST /api/analytics/track. Batch writer accumulates events and flushes on count or timer threshold.',
      ru: 'Модульная структура Go: cmd/api (точка входа), internal/ (ingest, routes, models, handlers, services). Fiber HTTP-сервер принимает события через POST /api/analytics/track. Пакетный писатель накапливает события и сбрасывает по счётчику или таймеру.',
    },
    repo: 'https://github.com/Danendz/analytics.danendz',
    color: '#AB47BC',
  },
]
