"use client"

import { useEffect } from "react"

interface KeyboardNavigationProps {
  onPrevious: () => void
  onNext: () => void
  onFlip: () => void
}

export function KeyboardNavigation({ onPrevious, onNext, onFlip }: KeyboardNavigationProps) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault()
          onPrevious()
          break
        case "ArrowRight":
          event.preventDefault()
          onNext()
          break
        case " ":
        case "Enter":
          event.preventDefault()
          onFlip()
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [onPrevious, onNext, onFlip])

  return null
}
