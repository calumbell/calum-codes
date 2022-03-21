import React, { useRef, useState, useEffect } from 'react';

const Bubbles = () => {
  const [size, setSize] = useState({ width: 1600, height: 600 });
  const canvasRef = useRef(null);
  const requestIdRef = useRef<number>(0);

  const clamp = (num :number, min:number, max:number) => Math.min(Math.max(num, min), max);
  
  const generateBubbles = (n: number) => {
    let output = [];
    for (let i = 0; i < n; i++) {
      const radius = (300*Math.random()) + 50;
      const x = clamp(size.width * Math.random(), radius, size.width-1);
      const y = clamp(size.height * Math.random(), radius, size.height-1);
      const dx = (Math.random() -0.5)/2;
      const dy = (Math.random() -0.5)/6;
      output.push({ x: x, y: y, r: radius, dx: dx, dy: dy})
    }
    return output;
  };
  const bubblesRef = useRef(generateBubbles(3));

  const update = () => {
    const bubbles = bubblesRef.current;

    bubbles.forEach(bubble => {
      /* Update positions */
      bubble.x += bubble.dx;
      bubble.y += bubble.dy;

      /* Collision detection */
      if (bubble.x >= size.width || bubble.x < 0)
        bubble.dx *= -1;
      if (bubble.y >= size.height || bubble.y < 0)
        bubble.dy *= -1;
    });
  }

  const draw = () => {
    const ctx = canvasRef.current.getContext('2d');
    const bubbles = bubblesRef.current;
    ctx.clearRect(0, 0, size.width, size.height);

    bubbles.forEach(bubble => {
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, bubble. r, 0, 2*Math.PI);
      ctx.fillStyle = 'hsl(240 100% 25% / 0.25)';
      ctx.fill();
      ctx.closePath();
    })
  }

  const tick = () => {
    if (!canvasRef.current) return;
    update();
    draw();
    requestIdRef.current = requestAnimationFrame(tick);
  }

  useEffect(() => {
    requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(requestIdRef.current);
    }
  }, []);

  return <canvas className='bubbles-canvas' {...size} ref={canvasRef}></canvas>;
}

export default Bubbles;