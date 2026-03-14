<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { translations, type Lang } from '../i18n/translations'
import { projects } from '../data/projects'
import { calcTotalExperience } from '../data/experience'

const props = defineProps<{ lang: Lang }>()

const isDark = ref(true)
const activeSection = ref('')
const sectionsVisible = ref<Set<string>>(new Set())

const t = computed(() => translations[props.lang])

const altLangPath = computed(() => {
  if (props.lang === 'en') return '/ru/'
  return '/'
})

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  document.documentElement.classList.toggle('light', !isDark.value)
}

// Active section tracking
let observer: IntersectionObserver | null = null

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  document.documentElement.classList.toggle('light', !isDark.value)

  // Intersection observer for section animations + active nav
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id
        if (entry.isIntersecting) {
          sectionsVisible.value.add(id)
          activeSection.value = id
        }
      })
    },
    { threshold: 0.15, rootMargin: '-80px 0px -40% 0px' }
  )

  document.querySelectorAll('section[id]').forEach((el) => {
    observer!.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})

function projectTitle(p: typeof projects[0]) {
  return p.title[props.lang]
}
function projectSubtitle(p: typeof projects[0]) {
  return p.subtitle[props.lang]
}

function projectHref(slug: string) {
  return props.lang === 'ru' ? `/ru/projects/${slug}` : `/projects/${slug}`
}
</script>

<template>
  <div>
    <!-- Header / Nav -->
    <header class="fixed top-0 left-0 right-0 z-50 no-print"
      :class="isDark ? 'bg-[#0a0a0aee] border-b border-[#2a2725]' : 'bg-[#f5f0e8ee] border-b border-[#d5cfc5]'">
      <nav class="max-w-[780px] mx-auto px-6 h-12 flex items-center justify-between">
        <div class="flex items-center gap-5 text-xs font-mono tracking-wide">
          <a v-for="key in ['about', 'experience', 'skills', 'education', 'projects', 'contact']"
            :key="key"
            :href="`#${key}`"
            class="hidden sm:inline-block transition-colors duration-200"
            :class="activeSection === key
              ? 'text-accent'
              : isDark ? 'text-text-muted hover:text-text' : 'text-text-muted-light hover:text-text-light'">
            {{ t.nav[key as keyof typeof t.nav] }}
          </a>
        </div>
        <div class="flex items-center gap-2">
          <!-- Language toggle — segmented control -->
          <div class="flex font-mono text-xs rounded-full overflow-hidden"
            :class="isDark ? 'bg-[#1a1816]' : 'bg-[#e5dfd5]'">
            <a href="/"
              class="relative px-3 py-1.5 transition-all duration-200 rounded-full"
              :class="lang === 'en'
                ? 'bg-accent text-white'
                : isDark ? 'text-text-muted hover:text-text' : 'text-text-muted-light hover:text-text-light'">
              EN
            </a>
            <a href="/ru/"
              class="relative px-3 py-1.5 transition-all duration-200 rounded-full"
              :class="lang === 'ru'
                ? 'bg-accent text-white'
                : isDark ? 'text-text-muted hover:text-text' : 'text-text-muted-light hover:text-text-light'">
              RU
            </a>
          </div>
          <!-- Theme toggle — animated icon -->
          <button @click="toggleTheme"
            class="relative w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 outline-none border-none"
            :class="isDark
              ? 'bg-[#1a1816] hover:bg-[#2a2725] text-[#706a62] hover:text-accent'
              : 'bg-[#e5dfd5] hover:bg-[#d5cfc5] text-[#3a3530] hover:text-accent'"
            :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'">
            <svg class="w-4 h-4 absolute transition-all duration-300"
              :class="isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90 scale-50'"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg class="w-4 h-4 absolute transition-all duration-300"
              :class="isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0'"
              viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <main class="max-w-[720px] mx-auto px-6 pt-24 pb-20">
      <!-- Hero -->
      <section id="about" class="animate-fade-up">
        <h1 class="font-mono text-5xl sm:text-7xl font-bold tracking-tight leading-none mb-3">
          {{ t.hero.name }}
        </h1>
        <p class="font-mono text-accent text-lg sm:text-xl mb-4">{{ t.hero.title }}</p>
        <p class="text-sm font-mono mb-6"
          :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">
          {{ t.hero.location }} · {{ t.hero.age }}
        </p>
        <p class="text-lg leading-relaxed max-w-[600px]"
          :class="isDark ? 'text-[#c8c4bc]' : 'text-[#3a3530]'">
          {{ t.hero.bio }}
        </p>
      </section>

      <!-- Experience -->
      <section id="experience" class="mt-24"
        :class="{ 'animate-slide-in delay-1': sectionsVisible.has('experience') }">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1"
          :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">
          {{ t.experience.sectionLabel }}
        </h2>
        <hr class="mb-8" :class="isDark ? 'border-[#2a2725]' : 'border-[#d5cfc5]'" />

        <p class="font-mono text-xs mb-8"
          :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">
          {{ calcTotalExperience(lang) }}
        </p>

        <div v-for="(job, i) in t.experience.items" :key="i" class="mb-12 last:mb-0">
          <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
            <h3 class="font-mono font-bold text-base">{{ job.company }}</h3>
            <span class="font-mono text-xs shrink-0"
              :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">
              {{ job.period }}
            </span>
          </div>
          <p class="text-accent font-mono text-sm mb-3">{{ job.role }}
            <span class="font-mono text-xs ml-2"
              :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">{{ job.duration }}</span>
          </p>
          <ul class="space-y-2 list-none">
            <li v-for="(desc, j) in job.description" :key="j"
              class="text-sm leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0"
              :class="isDark ? 'text-[#b8b4ac] before:text-accent' : 'text-[#4a4540] before:text-accent'">
              {{ desc }}
            </li>
          </ul>
        </div>
      </section>

      <!-- Skills -->
      <section id="skills" class="mt-24"
        :class="{ 'animate-slide-in delay-2': sectionsVisible.has('skills') }">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1"
          :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">
          {{ t.skills.sectionLabel }}
        </h2>
        <hr class="mb-8" :class="isDark ? 'border-[#2a2725]' : 'border-[#d5cfc5]'" />

        <div v-for="(cat, key) in t.skills.categories" :key="key" class="mb-6 last:mb-0">
          <h3 class="font-mono text-xs uppercase tracking-wider mb-3"
            :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">
            {{ cat.label }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in cat.items" :key="skill"
              class="font-mono text-xs px-3 py-1.5 rounded-sm border transition-colors duration-200"
              :class="isDark
                ? 'border-[#2a2725] text-[#c8c4bc] hover:border-accent hover:text-accent'
                : 'border-[#d5cfc5] text-[#4a4540] hover:border-accent hover:text-accent'">
              {{ skill }}
            </span>
          </div>
        </div>
      </section>

      <!-- Education -->
      <section id="education" class="mt-24"
        :class="{ 'animate-slide-in delay-3': sectionsVisible.has('education') }">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1"
          :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">
          {{ t.education.sectionLabel }}
        </h2>
        <hr class="mb-8" :class="isDark ? 'border-[#2a2725]' : 'border-[#d5cfc5]'" />

        <div v-for="(edu, i) in t.education.items" :key="i" class="mb-6 last:mb-0">
          <h3 class="font-mono font-bold text-base mb-1">{{ edu.institution }}</h3>
          <p class="text-sm" :class="isDark ? 'text-[#b8b4ac]' : 'text-[#4a4540]'">{{ edu.degree }}</p>
          <p class="text-sm" :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">{{ edu.specialization }}</p>
          <p class="font-mono text-xs mt-1 text-accent">{{ edu.year }}</p>
        </div>

        <!-- Languages -->
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1 mt-12"
          :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">
          {{ t.languages.sectionLabel }}
        </h2>
        <hr class="mb-6" :class="isDark ? 'border-[#2a2725]' : 'border-[#d5cfc5]'" />

        <div class="flex flex-col gap-2">
          <div v-for="(l, i) in t.languages.items" :key="i" class="flex items-baseline gap-3">
            <span class="font-mono text-sm font-bold">{{ l.name }}</span>
            <span class="text-sm" :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">{{ l.level }}</span>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="mt-24"
        :class="{ 'animate-slide-in delay-4': sectionsVisible.has('projects') }">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1"
          :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">
          {{ t.projects.sectionLabel }}
        </h2>
        <hr class="mb-2" :class="isDark ? 'border-[#2a2725]' : 'border-[#d5cfc5]'" />
        <p class="font-mono text-xs mb-8"
          :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">
          {{ t.projects.subtitle }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a v-for="p in projects" :key="p.slug"
            :href="projectHref(p.slug)"
            class="group block p-5 rounded-sm border transition-all duration-300 hover:-translate-y-0.5"
            :class="isDark
              ? 'border-[#2a2725] hover:border-accent/50 bg-surface hover:shadow-lg hover:shadow-accent/5'
              : 'border-[#d5cfc5] hover:border-accent/50 bg-surface-light hover:shadow-lg hover:shadow-accent/10'">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: p.color }"></span>
              <h3 class="font-mono font-bold text-sm group-hover:text-accent transition-colors">
                {{ projectTitle(p) }}
              </h3>
            </div>
            <p class="text-xs leading-relaxed mb-3"
              :class="isDark ? 'text-[#a8a4a0]' : 'text-text-muted-light'">
              {{ projectSubtitle(p) }}
            </p>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tech in p.tech.slice(0, 4)" :key="tech"
                class="font-mono text-[10px] px-1.5 py-0.5 rounded-sm"
                :class="isDark ? 'bg-[#1a1816] text-text-muted' : 'bg-[#e5dfd5] text-text-muted-light'">
                {{ tech }}
              </span>
            </div>
            <span class="block font-mono text-xs text-accent mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {{ t.projects.viewProject }} →
            </span>
          </a>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="mt-24"
        :class="{ 'animate-slide-in delay-5': sectionsVisible.has('contact') }">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1"
          :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">
          {{ t.contact.sectionLabel }}
        </h2>
        <hr class="mb-8" :class="isDark ? 'border-[#2a2725]' : 'border-[#d5cfc5]'" />

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="https://t.me/getaltzrivii" target="_blank" rel="noopener"
            class="font-mono text-sm hover:text-accent transition-colors group flex items-baseline gap-2"
            :class="isDark ? 'text-[#d0ccc4]' : 'text-[#3a3530]'">
            <span class="text-accent text-xs">tg</span>
            <span>{{ t.contact.telegram }}</span>
            <span class="font-mono text-[10px]"
              :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">
              ({{ t.contact.preferred }})
            </span>
          </a>
          <a :href="`mailto:${t.contact.email}`"
            class="font-mono text-sm hover:text-accent transition-colors flex items-baseline gap-2"
            :class="isDark ? 'text-[#d0ccc4]' : 'text-[#3a3530]'">
            <span class="text-accent text-xs">mail</span>
            <span>{{ t.contact.email }}</span>
          </a>
          <a href="https://github.com/Danendz" target="_blank" rel="noopener"
            class="font-mono text-sm hover:text-accent transition-colors flex items-baseline gap-2"
            :class="isDark ? 'text-[#d0ccc4]' : 'text-[#3a3530]'">
            <span class="text-accent text-xs">gh</span>
            <span>{{ t.contact.github }}</span>
          </a>
          <a href="https://www.linkedin.com/in/danila-dysa-a12421288/" target="_blank" rel="noopener"
            class="font-mono text-sm hover:text-accent transition-colors flex items-baseline gap-2"
            :class="isDark ? 'text-[#d0ccc4]' : 'text-[#3a3530]'">
            <span class="text-accent text-xs">in</span>
            <span>{{ t.contact.linkedin }}</span>
          </a>
          <a :href="`tel:${t.contact.phone.replace(/\s/g, '')}`"
            class="font-mono text-sm hover:text-accent transition-colors flex items-baseline gap-2"
            :class="isDark ? 'text-[#d0ccc4]' : 'text-[#3a3530]'">
            <span class="text-accent text-xs">tel</span>
            <span>{{ t.contact.phone }}</span>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <footer class="mt-24 pt-6 font-mono text-xs"
        :class="isDark ? 'border-t border-[#2a2725] text-text-muted' : 'border-t border-[#d5cfc5] text-text-muted-light'">
        {{ t.footer.updated }}
      </footer>
    </main>
  </div>
</template>
