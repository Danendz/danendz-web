<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { translations, type Lang } from '../i18n/translations'
import { projects } from '../data/projects'
import { calcTotalExperience } from '../data/experience'

const props = defineProps<{ lang: Lang }>()

const isDark = ref(typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : true)
const activeSection = ref('')
const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
const sectionsVisible = ref<Set<string>>(new Set())

const t = computed(() => translations[props.lang])

const altLangPath = computed(() => {
  if (props.lang === 'en') return '/ru/'
  return '/'
})

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', isDark.value)
}

// Active section tracking via IntersectionObserver + scroll for bottom detection
let observer: IntersectionObserver | null = null
let onScroll: (() => void) | null = null

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')

  const sectionIds = ['about', 'experience', 'skills', 'education', 'projects', 'contact']

  function updateActive() {
    const nearBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight < 50
    if (nearBottom) {
      activeSection.value = 'contact'
      return
    }
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      if (sectionsVisible.value.has(sectionIds[i])) {
        activeSection.value = sectionIds[i]
        return
      }
    }
  }

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          sectionsVisible.value.add(entry.target.id)
        } else {
          sectionsVisible.value.delete(entry.target.id)
        }
      }
      updateActive()
    },
   { threshold: 0.15, rootMargin: '-20% 0px -50% 0px' }
  )

  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  }

  onScroll = updateActive
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  observer?.disconnect()
  if (onScroll) window.removeEventListener('scroll', onScroll)
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
    <header class="fixed top-0 left-0 right-0 z-50 no-print bg-header-bg border-b border-border">
      <nav class="max-w-[780px] mx-auto px-6 h-12 flex items-center justify-between">
        <div class="flex items-center gap-5 text-xs font-mono tracking-wide">
          <!-- Hamburger button (mobile only) -->
          <button @click="menuOpen = !menuOpen" class="sm:hidden relative w-5 h-4 flex flex-col justify-between" aria-label="Menu">
            <span class="block w-full h-0.5 bg-current transition-all duration-300 origin-center text-text-muted"
              :class="menuOpen ? 'rotate-45 translate-y-[7px]' : ''"></span>
            <span class="block w-full h-0.5 bg-current transition-all duration-300 origin-center text-text-muted"
              :class="menuOpen ? '-rotate-45 -translate-y-[7px]' : ''"></span>
          </button>
          <a v-for="key in ['about', 'experience', 'skills', 'education', 'projects', 'contact']"
            :key="key"
            :href="`#${key}`"
            class="hidden sm:inline-block transition-colors duration-200"
            :class="activeSection === key ? 'text-accent' : 'text-text-muted hover:text-text'">
            {{ t.nav[key as keyof typeof t.nav] }}
          </a>
        </div>
        <div class="flex items-center gap-2">
          <!-- Language toggle — segmented control -->
          <div class="flex font-mono text-xs rounded-full overflow-hidden bg-tag-bg">
            <a href="/"
              class="relative px-3 py-1.5 transition-all duration-200 rounded-full"
              :class="lang === 'en'
                ? 'bg-accent text-white'
                : 'text-text-muted hover:text-text'">
              EN
            </a>
            <a href="/ru/"
              class="relative px-3 py-1.5 transition-all duration-200 rounded-full"
              :class="lang === 'ru'
                ? 'bg-accent text-white'
                : 'text-text-muted hover:text-text'">
              RU
            </a>
          </div>
          <!-- Theme toggle — animated icon -->
          <button @click="toggleTheme"
            class="relative w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 outline-none border-none bg-toggle-bg hover:bg-toggle-hover-bg text-toggle-text hover:text-accent"
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
      <!-- Mobile nav panel -->
      <Transition
        enter-active-class="transition-[grid-template-rows,opacity] duration-300 ease-out"
        leave-active-class="transition-[grid-template-rows,opacity] duration-200 ease-in"
        enter-from-class="grid-rows-[0fr] opacity-0"
        enter-to-class="grid-rows-[1fr] opacity-100"
        leave-from-class="grid-rows-[1fr] opacity-100"
        leave-to-class="grid-rows-[0fr] opacity-0">
        <div v-show="menuOpen" class="sm:hidden grid border-t border-border bg-header-bg">
          <div class="overflow-hidden">
            <div class="max-w-[780px] mx-auto px-6 py-3 flex flex-col gap-2">
              <a v-for="key in ['about', 'experience', 'skills', 'education', 'projects', 'contact']"
                :key="key"
                :href="`#${key}`"
                @click="closeMenu"
                class="font-mono text-sm py-1.5 transition-colors duration-200"
                :class="activeSection === key ? 'text-accent' : 'text-text-muted hover:text-text'">
                {{ t.nav[key as keyof typeof t.nav] }}
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </header>

    <main class="max-w-[720px] mx-auto px-6 pt-24 pb-20">
      <!-- Hero -->
      <section id="about" class="scroll-mt-24">
        <h1 class="font-mono text-5xl sm:text-7xl font-bold tracking-tight leading-none mb-3">
          {{ t.hero.name }}
        </h1>
        <p class="font-mono text-accent text-lg sm:text-xl mb-4">{{ t.hero.title }}</p>
        <p class="text-sm font-mono mb-6 text-text-muted">
          {{ t.hero.location }} · {{ t.hero.age }}
        </p>
        <p class="text-lg leading-relaxed max-w-[600px] text-body-text">
          {{ t.hero.bio }}
        </p>
      </section>

      <!-- Experience -->
      <section id="experience" class="mt-24 scroll-mt-24">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1 text-text-muted">
          {{ t.experience.sectionLabel }}
        </h2>
        <hr class="mb-8 border-border" />

        <p class="font-mono text-xs mb-8 text-text-muted">
          {{ calcTotalExperience(lang) }}
        </p>

        <div v-for="(job, i) in t.experience.items" :key="i" class="mb-12 last:mb-0">
          <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
            <h3 class="font-mono font-bold text-base">{{ job.company }}</h3>
            <span class="font-mono text-xs shrink-0 text-text-muted">
              {{ job.period }}
            </span>
          </div>
          <p class="text-accent font-mono text-sm mb-3">{{ job.role }}
            <span class="font-mono text-xs ml-2 text-text-muted">{{ job.duration }}</span>
          </p>
          <ul class="space-y-2 list-none">
            <li v-for="(desc, j) in job.description" :key="j"
              class="text-sm leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 text-desc-text before:text-accent">
              {{ desc }}
            </li>
          </ul>
        </div>
      </section>

      <!-- Skills -->
      <section id="skills" class="mt-24 scroll-mt-24">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1 text-text-muted">
          {{ t.skills.sectionLabel }}
        </h2>
        <hr class="mb-8 border-border" />

        <div v-for="(cat, key) in t.skills.categories" :key="key" class="mb-6 last:mb-0">
          <h3 class="font-mono text-xs uppercase tracking-wider mb-3 text-text-muted">
            {{ cat.label }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in cat.items" :key="skill"
              class="font-mono text-xs px-3 py-1.5 rounded-sm border transition-colors duration-200 border-border text-body-text hover:border-accent hover:text-accent">
              {{ skill }}
            </span>
          </div>
        </div>
      </section>

      <!-- Education -->
      <section id="education" class="mt-24 scroll-mt-24">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1 text-text-muted">
          {{ t.education.sectionLabel }}
        </h2>
        <hr class="mb-8 border-border" />

        <div v-for="(edu, i) in t.education.items" :key="i" class="mb-6 last:mb-0">
          <h3 class="font-mono font-bold text-base mb-1">{{ edu.institution }}</h3>
          <p class="text-sm text-desc-text">{{ edu.degree }}</p>
          <p class="text-sm text-text-muted">{{ edu.specialization }}</p>
          <p class="font-mono text-xs mt-1 text-accent">{{ edu.year }}</p>
        </div>

        <!-- Languages -->
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1 mt-12 text-text-muted">
          {{ t.languages.sectionLabel }}
        </h2>
        <hr class="mb-6 border-border" />

        <div class="flex flex-col gap-2">
          <div v-for="(l, i) in t.languages.items" :key="i" class="flex items-baseline gap-3">
            <span class="font-mono text-sm font-bold">{{ l.name }}</span>
            <span class="text-sm text-text-muted">{{ l.level }}</span>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="mt-24 scroll-mt-24">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1 text-text-muted">
          {{ t.projects.sectionLabel }}
        </h2>
        <hr class="mb-2 border-border" />
        <p class="font-mono text-xs mb-8 text-text-muted">
          {{ t.projects.subtitle }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a v-for="p in projects" :key="p.slug"
            :href="projectHref(p.slug)"
            class="group block p-5 rounded-sm border transition-all duration-300 hover:-translate-y-0.5 border-border hover:border-accent/50 bg-surface hover:shadow-lg hover:shadow-accent/5">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: p.color }"></span>
              <h3 class="font-mono font-bold text-sm group-hover:text-accent transition-colors">
                {{ projectTitle(p) }}
              </h3>
            </div>
            <p class="text-xs leading-relaxed mb-3 text-project-desc">
              {{ projectSubtitle(p) }}
            </p>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tech in p.tech.slice(0, 4)" :key="tech"
                class="font-mono text-[10px] px-1.5 py-0.5 rounded-sm bg-tag-bg text-text-muted">
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
      <section id="contact" class="mt-24 scroll-mt-24">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1 text-text-muted">
          {{ t.contact.sectionLabel }}
        </h2>
        <hr class="mb-8 border-border" />

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="https://t.me/getaltzrivii" target="_blank" rel="noopener"
            class="font-mono text-sm hover:text-accent transition-colors group flex items-baseline gap-2 text-link-text">
            <span class="text-accent text-xs">tg</span>
            <span>{{ t.contact.telegram }}</span>
            <span class="font-mono text-[10px] text-text-muted">
              ({{ t.contact.preferred }})
            </span>
          </a>
          <a :href="`mailto:${t.contact.email}`"
            class="font-mono text-sm hover:text-accent transition-colors flex items-baseline gap-2 text-link-text">
            <span class="text-accent text-xs">mail</span>
            <span>{{ t.contact.email }}</span>
          </a>
          <a href="https://github.com/Danendz" target="_blank" rel="noopener"
            class="font-mono text-sm hover:text-accent transition-colors flex items-baseline gap-2 text-link-text">
            <span class="text-accent text-xs">gh</span>
            <span>{{ t.contact.github }}</span>
          </a>
          <a href="https://www.linkedin.com/in/danila-dysa-a12421288/" target="_blank" rel="noopener"
            class="font-mono text-sm hover:text-accent transition-colors flex items-baseline gap-2 text-link-text">
            <span class="text-accent text-xs">in</span>
            <span>{{ t.contact.linkedin }}</span>
          </a>
          <a :href="`tel:${t.contact.phone.replace(/\s/g, '')}`"
            class="font-mono text-sm hover:text-accent transition-colors flex items-baseline gap-2 text-link-text">
            <span class="text-accent text-xs">tel</span>
            <span>{{ t.contact.phone }}</span>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <footer class="mt-24 pt-6 font-mono text-xs border-t border-border text-text-muted">
        {{ t.footer.updated }}
      </footer>
    </main>
  </div>
</template>
