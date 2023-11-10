import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [direction, setDirection] = useState<'up' | 'down' | null>(
    null
  );

  useEffect(() => {
    let previousPosition = window.scrollY

    const handleScroll = () => {
      const currentPosition = document.documentElement.scrollTop;
      const currentDirection = currentPosition > previousPosition ? 'down' : 'up'

      if (currentDirection !== direction) {
        setDirection(currentDirection)
      }
      previousPosition = currentPosition
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [direction])


  return direction;
}
