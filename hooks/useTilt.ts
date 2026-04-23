import { useEffect, RefObject } from 'react'

export function useTilt(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const cards = container.querySelectorAll<HTMLElement>('.tilt-card')
    const listeners: Array<() => void> = []
    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const rotateX = (((e.clientY - rect.top) / rect.height) - 0.5) * -16
        const rotateY = (((e.clientX - rect.left) / rect.width) - 0.5) * 16
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
      }
      const onLeave = () => {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
      }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      listeners.push(() => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      })
    })
    return () => listeners.forEach((fn) => fn())
  }, [containerRef])
}
