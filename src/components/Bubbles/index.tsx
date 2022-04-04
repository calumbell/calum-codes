import React, { useRef, useState, useEffect } from 'react';
import * as styles from './Bubbles.module.scss';
import { Bubble } from './types'
import { draw, generateBubbles, update } from './utils';


const Bubbles = () => {
  const [size, setSize] = useState({width: 1000, height: 800})
  const aspectRatio = 0.8;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<number>(0);
  const bubblesRef = useRef<Bubble[]>([]);

  const tick = () => {
    if (!canvasRef.current) return;
    update(bubblesRef.current, canvasRef.current.width, canvasRef.current.height);
    draw(canvasRef.current, bubblesRef.current);
    requestIdRef.current = requestAnimationFrame(tick);
  }
  
  useEffect(() => {
    const onResize = () => {
      const newSize = {
        width: window.innerWidth,
        height: window.innerHeight * aspectRatio
      };
      setSize(newSize)
      bubblesRef?.current?.map(bubble => {
        if (bubble.x >= newSize.width) bubble.x -= newSize.width;
        if (bubble.y >= newSize.height) bubble.y -= newSize.height;
      });
    }

    const initSize = { 
      width: window.innerWidth, 
      height: window.innerHeight * aspectRatio 
    }
    setSize(initSize);
    bubblesRef.current = generateBubbles(3, initSize.width, initSize.height);
    window.addEventListener('resize', onResize)
    requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(requestIdRef.current);
      window.removeEventListener('resize', onResize);
    }
  }, []);

  return <canvas className={styles.bubblesCanvas} {...size} ref={canvasRef} />
}

export default Bubbles;