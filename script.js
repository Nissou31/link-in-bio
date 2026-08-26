const THEME_KEY = 'theme'

function getPreferredTheme() {
  const stored = localStorage.getItem(THEME_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)

  const toggleIcon = document.querySelector('#theme-toggle i')
  if (toggleIcon) {
    toggleIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'
  }

  const favicon = document.querySelector('link[rel="icon"]')
  if (favicon) {
    favicon.href = theme === 'dark' ? './images/link2.png' : './images/link3.png'
  }
}

window.addEventListener('DOMContentLoaded', () => {
  applyTheme(getPreferredTheme())

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    localStorage.setItem(THEME_KEY, next)
    applyTheme(next)
  })

  setTimeout(() => {
    const main = document.querySelector('main')
    main.style.opacity = 1
    main.style.filter = 'blur(0px)'
  }, 600)
})
