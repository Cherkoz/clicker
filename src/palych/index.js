import { useState } from 'react';
import './style.css';

export function Palych() {
  const [count, setCount] = useState(0);

  const handleTouchStart = (event) => {
    const touches = event.touches.length;
    setCount((prev) => prev + touches);
  };

  return (
    <div>
      <div className={'count'}>{count} $palech</div>
      <div className={'palech'}>
        <img
          src={'https://cherkoz.github.io/clicker/img/main.png'}
          onTouchStart={handleTouchStart}
        />
      </div>
    </div>
  );
}