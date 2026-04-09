export interface Project {
  slug: string
  title: { en: string; ru: string }
  subtitle: { en: string; ru: string }
  description: { en: string; ru: string }
  tech: string[]
  features: { en: string[]; ru: string[] }
  architecture: { en: string; ru: string }
  repo: string
  url?: string
  color: string
}

export const projects: Project[] = [
  {
    slug: 'wuhan-mahjong',
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
