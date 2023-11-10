'use client';

import { useScrollDirection } from '../hooks/useScrollDirection';
import {  useMemo } from 'react';

export function Header() {
  const direction = useScrollDirection();
  const classnames = useMemo(() => {
    return {
      transform: direction === 'down' ? '-top-16' : 'top-0',
    };
  }, [ direction ]);

  return (
    <div
      className={`h-16 bg-black transition-all duration-500 ${classnames}`}
    >
      <div className={`p-5 font-bold text-white relative`}>Disappearing Header</div>
    </div>
  );
}
