import { useEffect, RefObject } from 'react'

export function useMagneticZoom(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const wrappers = container.querySelectorAll<HTMLElement>('.magnetic-img')
    const listeners: Array<() => void> = []
    wrappers.forEach((wrapper) => {
      const img = wrapper.querySelector<HTMLElement>('img')
      if (!img) return
      const onMove = (e: MouseEvent) => {
        const rect = wrapper.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10
        img.style.transform = `scale(1.05) translate(${x}px, ${y}px)`
      }
      const onLeave = () => { img.style.transform = 'scale(1) translate(0px, 0px)' }
      wrapper.addEventListener('mousemove', onMove)
      wrapper.addEventListener('mouseleave', onLeave)
      listeners.push(() => {
        wrapper.removeEventListener('mousemove', onMove)
        wrapper.removeEventListener('mouseleave', onLeave)
      })
    })
    return () => listeners.forEach((fn) => fn())
  }, [containerRef])
}
