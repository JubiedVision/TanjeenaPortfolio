import { useRef, useCallback } from 'react';

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const updateCursorPosition = useCallback((e: React.MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  }, []);

  const handleHover = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.width = '50px';
      cursorRef.current.style.height = '50px';
      cursorRef.current.style.backgroundColor = 'rgba(248, 215, 218, 0.6)';
    }
  }, []);

  const handleUnhover = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.width = '20px';
      cursorRef.current.style.height = '20px';
      cursorRef.current.style.backgroundColor = 'rgba(111, 66, 193, 0.5)';
    }
  }, []);

  return {
    cursorRef,
    updateCursorPosition,
    handleHover,
    handleUnhover
  };
}
