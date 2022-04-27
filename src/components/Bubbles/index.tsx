import React, { useRef, useState, useEffect, MouseEvent } from 'react';
import * as styles from './Bubbles.module.scss';
import { Bubble, MouseState, UpdateContext } from './types'
import { draw, generateBubbles, randomiseVelocity, update } from './utils';


const Bubbles = () => {
  const [size, setSize] = useState({width: 1000, height: 800});
  const aspectRatio = 0.8;

  const mouseStateRef = useRef<MouseState>({
    mouseDown: false,
  });
  
  const onMouseDown = (event: MouseEvent) => {
    mouseStateRef.current = {
      mouseDown: true,
      x: event.clientX,
      y: event.clientY,
    }
  }

  const onMove = (event: MouseEvent) => {
    mouseStateRef.current.x = event.clientX;
    mouseStateRef.current.y = event.clientY;
  }

  const onMouseUp = () => {
    mouseStateRef.current.mouseDown = false;
    bubblesRef.current.map(bubble => randomiseVelocity(bubble));
  }

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const requestIdRef = useRef<number>(0);

  const tick = () => {
    if (!canvasRef.current) return;
    const updateContext : UpdateContext = {
      bubbles: bubblesRef.current,
      canvas: {
        x: canvasRef.current.width,
        y: canvasRef.current.height,
      },
      mouse: mouseStateRef.current,
    }
    update(updateContext);
    draw(canvasRef.current, bubblesRef.current);
    requestIdRef.current = requestAnimationFrame(tick);
  }

  useEffect(() => {
    const onResize = () => {
      /* Update canvas size */
      const newSize = {
        width: window.innerWidth,
        height: window.innerHeight * aspectRatio
      };
      setSize(newSize)
      
      /* Wrap bubbles if off edge of canvas */
      bubblesRef?.current?.map(bubble => {
        if (bubble.x >= newSize.width) bubble.x -= newSize.width;
        if (bubble.y >= newSize.height) bubble.y -= newSize.height;
      });
    }

    /* Initialisation */
    const initSize = { 
      width: window.innerWidth, 
      height: window.innerHeight * aspectRatio 
    }
    setSize(initSize);

    bubblesRef.current = generateBubbles(4, initSize.width, initSize.height);

    window.addEventListener('resize', onResize);
    requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(requestIdRef.current);
      window.removeEventListener('resize', onResize);
    }
  }, []);

  return <canvas 
    className={styles.bubblesCanvas} {...size} ref={canvasRef}
    onMouseMove={onMove}
    onMouseUp={onMouseUp}
    onMouseDown={onMouseDown}
  />
}

export default Bubbles;