<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { translations, type Lang } from '../i18n/translations'
import type { Project } from '../data/projects'

const props = defineProps<{ project: Project; lang: Lang }>()

const isDark = ref(true)

const t = computed(() => translations[props.lang])

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  document.documentElement.classList.toggle('light', !isDark.value)
}

const backHref = computed(() => props.lang === 'ru' ? '/ru/' : '/')

const altProjectHref = computed(() => {
  if (props.lang === 'en') return `/ru/projects/${props.project.slug}`
  return `/projects/${props.project.slug}`
})

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  document.documentElement.classList.toggle('light', !isDark.value)
})

const p = props.project
</script>

<template>
  <div>
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 no-print"
      :class="isDark ? 'bg-[#0a0a0aee] border-b border-[#2a2725]' : 'bg-[#f5f0e8ee] border-b border-[#d5cfc5]'">
      <nav class="max-w-[780px] mx-auto px-6 h-12 flex items-center justify-between">
        <a :href="backHref" class="font-mono text-sm hover:text-accent transition-colors"
          :class="isDark ? 'text-[#d0ccc4]' : 'text-[#3a3530]'">
          {{ t.projects.backToHome }}
        </a>
        <div class="flex items-center gap-2">
          <!-- Language toggle — segmented control -->
          <div class="flex font-mono text-xs rounded-full overflow-hidden"
            :class="isDark ? 'bg-[#1a1816]' : 'bg-[#e5dfd5]'">
            <a :href="lang === 'en' ? '#' : `/projects/${p.slug}`"
              class="relative px-3 py-1.5 transition-all duration-200 rounded-full"
              :class="lang === 'en'
                ? 'bg-accent text-white'
                : isDark ? 'text-text-muted hover:text-text' : 'text-text-muted-light hover:text-text-light'">
              EN
            </a>
            <a :href="lang === 'ru' ? '#' : `/ru/projects/${p.slug}`"
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
      <!-- Project Header -->
      <div class="animate-fade-up">
        <div class="flex items-center gap-3 mb-4">
          <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: p.color }"></span>
          <h1 class="font-mono text-3xl sm:text-5xl font-bold tracking-tight">
            {{ p.title[lang] }}
          </h1>
        </div>
        <p class="text-lg leading-relaxed mb-6"
          :class="isDark ? 'text-[#c8c4bc]' : 'text-[#3a3530]'">
          {{ p.description[lang] }}
        </p>
        <a :href="p.repo" target="_blank" rel="noopener"
          class="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          {{ p.repo.replace('https://', '') }}
        </a>
      </div>

      <!-- Tech Stack -->
      <section class="mt-16 animate-fade-up delay-1">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1"
          :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">
          // tech stack
        </h2>
        <hr class="mb-6" :class="isDark ? 'border-[#2a2725]' : 'border-[#d5cfc5]'" />
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in p.tech" :key="tech"
            class="font-mono text-xs px-3 py-1.5 rounded-sm border transition-colors duration-200"
            :class="isDark
              ? 'border-[#2a2725] text-[#c8c4bc] hover:border-accent hover:text-accent'
              : 'border-[#d5cfc5] text-[#4a4540] hover:border-accent hover:text-accent'">
            {{ tech }}
          </span>
        </div>
      </section>

      <!-- Features -->
      <section class="mt-16 animate-fade-up delay-2">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1"
          :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">
          // features
        </h2>
        <hr class="mb-6" :class="isDark ? 'border-[#2a2725]' : 'border-[#d5cfc5]'" />
        <ul class="space-y-3 list-none">
          <li v-for="(f, i) in p.features[lang]" :key="i"
            class="text-sm leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0"
            :class="isDark ? 'text-[#b8b4ac] before:text-accent' : 'text-[#4a4540] before:text-accent'">
            {{ f }}
          </li>
        </ul>
      </section>

      <!-- Architecture -->
      <section class="mt-16 animate-fade-up delay-3">
        <h2 class="font-mono text-sm tracking-widest uppercase mb-1"
          :class="isDark ? 'text-text-muted' : 'text-text-muted-light'">
          // architecture
        </h2>
        <hr class="mb-6" :class="isDark ? 'border-[#2a2725]' : 'border-[#d5cfc5]'" />
        <p class="text-sm leading-relaxed"
          :class="isDark ? 'text-[#b8b4ac]' : 'text-[#4a4540]'">
          {{ p.architecture[lang] }}
        </p>
      </section>

      <!-- Back link -->
      <div class="mt-16 pt-6" :class="isDark ? 'border-t border-[#2a2725]' : 'border-t border-[#d5cfc5]'">
        <a :href="backHref" class="font-mono text-sm text-accent hover:underline">
          {{ t.projects.backToHome }}
        </a>
      </div>
    </main>
  </div>
</template>
