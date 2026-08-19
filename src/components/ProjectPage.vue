<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { translations, type Lang } from '../i18n/translations'
import type { Project } from '../data/projects'

const props = defineProps<{ project: Project; lang: Lang }>()

const isDark = ref(typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : true)

const t = computed(() => translations[props.lang])

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', isDark.value)
}

const backHref = computed(() => props.lang === 'ru' ? '/ru/' : '/')

const altProjectHref = computed(() => {
  if (props.lang === 'en') return `/ru/projects/${props.project.slug}`
  return `/projects/${props.project.slug}`
})

const p = props.project

/* ---------- Image lightbox ---------- */

const images = computed(() => p.images ?? [])
const viewerIndex = ref<number | null>(null)
const viewerEl = ref<HTMLElement | null>(null)
const thumbRefs = ref<HTMLElement[]>([])
// Element to hand focus back to once the viewer closes.
let lastFocused: HTMLElement | null = null

function openViewer(index: number) {
  lastFocused = document.activeElement as HTMLElement | null
  viewerIndex.value = index
}

function closeViewer() {
  // Prefer the thumbnail currently being viewed; fall back to whatever opened it.
  const target = viewerIndex.value !== null ? thumbRefs.value[viewerIndex.value] : null
  viewerIndex.value = null
  ;(target ?? lastFocused)?.focus()
}

function step(delta: number) {
  if (viewerIndex.value === null || images.value.length === 0) return
  viewerIndex.value = (viewerIndex.value + delta + images.value.length) % images.value.length
}

function onViewerKeydown(e: KeyboardEvent) {
  if (viewerIndex.value === null) return
  if (e.key === 'Escape') {
    e.preventDefault()
    closeViewer()
  } else if (e.key === 'ArrowRight') {
    e.preventDefault()
    step(1)
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    step(-1)
  } else if (e.key === 'Tab') {
    // Trap focus inside the dialog. The arrows are rendered twice — side lanes on
    // desktop, bottom bar on mobile — so skip the display:none set or the boundary
    // lands on a button that can't actually be focused.
    const all = viewerEl.value?.querySelectorAll<HTMLElement>('button')
    const focusable = Array.from(all ?? []).filter((el) => el.offsetParent !== null)
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }
}

// Touch swipe — horizontal drag past the threshold moves one image.
const SWIPE_THRESHOLD = 50
let touchStartX = 0
let touchStartY = 0

function onTouchStart(e: TouchEvent) {
  touchStartX = e.changedTouches[0].screenX
  touchStartY = e.changedTouches[0].screenY
}

function onTouchEnd(e: TouchEvent) {
  const dx = e.changedTouches[0].screenX - touchStartX
  const dy = e.changedTouches[0].screenY - touchStartY
  // Ignore mostly-vertical drags so scroll-like gestures don't flip the image.
  if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return
  step(dx < 0 ? 1 : -1)
}

watch(viewerIndex, (index) => {
  const open = index !== null
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) nextTick(() => viewerEl.value?.focus())
})

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
  window.addEventListener('keydown', onViewerKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onViewerKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div>
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 no-print bg-header-bg border-b border-border">
      <nav class="max-w-[780px] mx-auto px-6 h-12 flex items-center justify-between">
        <a :href="backHref" class="font-mono text-sm hover:text-accent transition-colors text-link-text">
          {{ t.projects.backToHome }}
        </a>
        <div class="flex items-center gap-2">
          <!-- Language toggle — segmented control -->
          <div class="flex font-mono text-xs rounded-full overflow-hidden bg-tag-bg">
            <a :href="lang === 'en' ? '#' : `/projects/${p.slug}`"
              class="relative px-3 py-1.5 transition-all duration-200 rounded-full"
              :class="lang === 'en'
                ? 'bg-accent text-white'
                : 'text-text-muted hover:text-text'">
              EN
            </a>
            <a :href="lang === 'ru' ? '#' : `/ru/projects/${p.slug}`"
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
    </header>

    <main class="max-w-[720px] mx-auto px-6 pt-24 pb-20">
      <!-- Project Header -->
      <div>
        <div class="flex items-center gap-3 mb-4">
          <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: p.color }"></span>
          <h1 class="font-mono text-3xl sm:text-5xl font-bold tracking-tight">
            {{ p.title[lang] }}
          </h1>
        </div>
        <p v-if="p.period" class="font-mono text-sm mb-4 text-text-muted">
          {{ p.period[lang] }}
        </p>
        <p class="text-lg leading-relaxed mb-6 text-body-text">
          {{ p.description[lang] }}
        </p>
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener"
            class="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            {{ p.repo.replace('https://', '') }}
          </a>
          <a v-if="p.npm" :href="p.npm" target="_blank" rel="noopener"
            class="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0h-2.666V8.667h5.334v5.331h-2.668v1.332zm12-1.332h-1.334v-4h-1.334v4h-1.334v-4h-1.334v4h-2.666V8.667h8.002v4.669zM11.332 10v2.668h1.336V10h-1.336z"/></svg>
            {{ p.npm.replace('https://www.npmjs.com/package/', 'npm/') }}
          </a>
          <a v-if="p.url" :href="p.url" target="_blank" rel="noopener"
            class="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            {{ p.url.replace('https://', '') }}
          </a>
        </div>
      </div>

      <!-- Tech Stack -->
      <section class="mt-16">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1 text-text-muted">
          {{ t.projects.techStack }}
</h2>
        <hr class="mb-6 border-border" />
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in p.tech" :key="tech"
            class="font-mono text-xs px-3 py-1.5 rounded-sm border transition-colors duration-200 border-border text-body-text hover:border-accent hover:text-accent">
            {{ tech }}
          </span>
        </div>
      </section>

      <!-- Features -->
      <section class="mt-16">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1 text-text-muted">
          {{ t.projects.features }}
</h2>
        <hr class="mb-6 border-border" />
        <ul class="space-y-3 list-none">
          <li v-for="(f, i) in p.features[lang]" :key="i"
            class="text-sm leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 text-desc-text before:text-accent">
            {{ f }}
          </li>
        </ul>
      </section>

      <!-- My role -->
      <section v-if="p.role" class="mt-16">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1 text-text-muted">
          {{ t.projects.myRole }}
        </h2>
        <hr class="mb-6 border-border" />
        <p class="text-sm leading-relaxed text-desc-text">
          {{ p.role[lang] }}
        </p>
      </section>

      <!-- Architecture -->
      <section v-if="p.architecture" class="mt-16">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1 text-text-muted">
          {{ t.projects.architecture }}
</h2>
        <hr class="mb-6 border-border" />
        <p class="text-sm leading-relaxed text-desc-text">
          {{ p.architecture[lang] }}
        </p>
      </section>

      <!-- Screenshots -->
      <section v-if="images.length" class="mt-16">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1 text-text-muted">
          {{ t.projects.screenshots }}
</h2>
        <hr class="mb-6 border-border" />
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button v-for="(img, i) in images" :key="img.src"
            ref="thumbRefs"
            type="button"
            @click="openViewer(i)"
            class="group block overflow-hidden rounded-sm border transition-all duration-300 cursor-zoom-in border-border hover:border-accent/50 bg-surface">
            <img :src="img.src" :width="img.width" :height="img.height"
              loading="lazy" decoding="async" alt=""
              class="w-full h-32 sm:h-24 object-cover object-top transition-transform duration-300 group-hover:scale-105" />
          </button>
        </div>
      </section>

      <!-- Back link -->
      <div class="mt-16 pt-6 border-t border-border">
        <a :href="backHref" class="font-mono text-sm text-accent hover:underline">
          {{ t.projects.backToHome }}
        </a>
      </div>
    </main>

    <!-- Image viewer -->
    <Teleport to="body">
      <div v-if="viewerIndex !== null"
        ref="viewerEl"
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        tabindex="-1"
        @click.self="closeViewer"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd"
        class="fixed inset-0 z-[100] no-print flex flex-col p-3 sm:p-4 bg-bg/95 backdrop-blur-sm outline-none">

        <!-- Top bar. Controls live in their own rows/lanes rather than on top of the
             image, so they always sit on the themed backdrop and stay legible. -->
        <div class="flex items-center justify-end shrink-0 pb-3" @click.self="closeViewer">
          <button type="button" @click="closeViewer" aria-label="Close"
            class="w-10 h-10 flex items-center justify-center rounded-full border transition-colors duration-200 border-border text-text-muted hover:text-accent hover:border-accent">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <div class="flex-1 min-h-0 flex items-center gap-2 sm:gap-4" @click.self="closeViewer">
          <button v-if="images.length > 1" type="button" @click="step(-1)" aria-label="Previous image"
            class="hidden sm:flex shrink-0 w-10 h-10 items-center justify-center rounded-full border transition-colors duration-200 border-border text-text-muted hover:text-accent hover:border-accent">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <!-- Wrapper takes the leftover box; the image sits inside it at natural
               aspect, so the letterbox space around it stays click-to-close. -->
          <div class="flex-1 min-w-0 h-full flex items-center justify-center" @click.self="closeViewer">
            <img :src="images[viewerIndex].src"
              :width="images[viewerIndex].width"
              :height="images[viewerIndex].height"
              alt=""
              class="max-h-full max-w-full w-auto h-auto object-contain rounded-sm border border-border" />
          </div>

          <button v-if="images.length > 1" type="button" @click="step(1)" aria-label="Next image"
            class="hidden sm:flex shrink-0 w-10 h-10 items-center justify-center rounded-full border transition-colors duration-200 border-border text-text-muted hover:text-accent hover:border-accent">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        <!-- Bottom bar. Below sm the arrows move here so the image keeps full width. -->
        <div v-if="images.length > 1" class="flex items-center justify-center gap-4 shrink-0 pt-3" @click.self="closeViewer">
          <button type="button" @click="step(-1)" aria-label="Previous image"
            class="sm:hidden w-10 h-10 flex items-center justify-center rounded-full border transition-colors duration-200 border-border text-text-muted hover:text-accent hover:border-accent">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <span class="font-mono text-xs px-2 py-1 rounded-sm bg-tag-bg text-text-muted">
            {{ viewerIndex + 1 }} / {{ images.length }}
          </span>

          <button type="button" @click="step(1)" aria-label="Next image"
            class="sm:hidden w-10 h-10 flex items-center justify-center rounded-full border transition-colors duration-200 border-border text-text-muted hover:text-accent hover:border-accent">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>
