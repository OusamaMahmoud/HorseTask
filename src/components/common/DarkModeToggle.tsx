// src/components/common/DarkModeToggle.tsx
import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const STORAGE_KEY = 'theme-preference'

const DarkModeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // On mount, read the stored theme (or OS preference)
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as 'light' | 'dark' | null
    if (saved) {
      setTheme(saved)
      document.documentElement.setAttribute('data-theme', saved)
      document.documentElement.classList.add(saved) // Add 'dark' class for TailwindCSS
    } else {
      // no saved preference → use prefers-color-scheme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initial = prefersDark ? 'dark' : 'light'
      setTheme(initial)
      document.documentElement.setAttribute('data-theme', initial)
      if (initial === 'dark') document.documentElement.classList.add('dark')
    }
  }, [])

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    if (next === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full text-xl text-gray-800 dark:text-gray-200"
      aria-label="Toggle dark mode"
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default DarkModeToggle
