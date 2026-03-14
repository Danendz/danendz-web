import type { Lang } from '../i18n/translations'

export const experienceDates = [
  { start: '2025-06', end: null },       // WTD Fullstack — present
  { start: '2025-04', end: '2025-06' },  // WTD Frontend
  { start: '2023-09', end: '2025-04' },  // Micros
  { start: '2024-08', end: '2024-12' },  // Inroomer (overlaps Micros)
]

function parseYM(ym: string): { y: number; m: number } {
  const [y, m] = ym.split('-').map(Number)
  return { y, m }
}

function toMonths(ym: { y: number; m: number }): number {
  return ym.y * 12 + ym.m
}

export function calcTotalExperience(lang: Lang): string {
  const now = new Date()
  const currentYM = { y: now.getFullYear(), m: now.getMonth() + 1 }

  // Sum each job's duration individually (inclusive of start month)
  let totalMonths = 0
  for (const d of experienceDates) {
    const start = toMonths(parseYM(d.start))
    const end = d.end ? toMonths(parseYM(d.end)) : toMonths(currentYM)
    totalMonths += end - start + 1 // +1 for inclusive counting
  }

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  if (lang === 'ru') {
    const yWord = years === 1 ? 'год' : years >= 2 && years <= 4 ? 'года' : 'лет'
    const mWord = months === 1 ? 'месяц' : months >= 2 && months <= 4 ? 'месяца' : 'месяцев'
    if (years && months) return `${years} ${yWord} ${months} ${mWord}`
    if (years) return `${years} ${yWord}`
    return `${months} ${mWord}`
  }

  const yWord = years === 1 ? 'year' : 'years'
  const mWord = months === 1 ? 'month' : 'months'
  if (years && months) return `${years} ${yWord} ${months} ${mWord}`
  if (years) return `${years} ${yWord}`
  return `${months} ${mWord}`
}
