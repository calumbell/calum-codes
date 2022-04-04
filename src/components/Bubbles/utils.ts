import { Bubble } from './types';

/**
 * Clamps a number so that it doesn't exceed either an upper or lower bound
 * @param {Number} num The number to clamp
 * @param {Number} min The lower bound
 * @param {Number} max The upper bound
 * @returns {Number} 
 */
const clamp = (num:number, min:number, max:number) => Math.min(Math.max(num, min), max);


/**
 * Draws bubbles onto a canvas
 * @param {HTMLCanvasElement|null} canvas The canvas to draw on
 * @param {Bubble[]} bubbles An array of Bubbles to draw
 * @returns {null}
 */
const draw = (canvas: HTMLCanvasElement | null, bubbles: Bubble[]) => {
  const ctx = canvas?.getContext('2d');
  if (!canvas || !ctx) return;
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bubbles.forEach(bubble => {
    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, bubble.radius, 0, 2*Math.PI);
    ctx.fillStyle = 'hsl(240 100% 25% / 0.25)';
    ctx.fill();
    ctx.closePath();
  })
}

/**
 * Generates a single Bubble object
 * @param {Number} canvasX Width of the canvas 
 * @param {Number} canvasY Height of the canvas
 * @returns {Bubble} a Bubble object
 */
const generateBubble = (canvasX :number, canvasY: number) => {
  const sizes = [50, 100, 150, 200, 250];
  const radius = sizes[~~(Math.random() * sizes.length)];
  const x = clamp(canvasX * Math.random(), radius, canvasX-radius-1);
  const y = clamp(canvasY * Math.random(), radius, canvasY-radius-1);
  const dx = (Math.random() -0.5)/2;
  const dy = (Math.random() -0.5)/6;
  return ({ x: x, y: y, radius: radius, dx: dx, dy: dy })
}

/**
 * Generates an array of Bubbles
 * @param {Number} n Number of bubbles to create 
 * @param {Number} canvasX Width of canvas 
 * @param {Number} canvasY Height of canvas
 * @returns {Bubble[]} an array of Bubbles
 */
const generateBubbles = (n: number, canvasX: number, canvasY: number) => {
  let output = [];
  for (let i = 0; i < n; i++) {
    output.push(generateBubble(canvasX, canvasY));
  }
  return output;
};

/**
 * Updates the position of Bubbles
 * @param {Bubble[]} bubbles An array of bubbles to update
 * @param {Number} canvasX The width of the canvas
 * @param {Number} canvasY The height of the canvas 
 * @returns {null}
 */
const update = (bubbles: Bubble[], canvasX: number, canvasY: number) => {
  if (!bubbles||!canvasX||!canvasY) return;

  bubbles.forEach(bubble => {
    /* Update positions */
    bubble.x += bubble.dx;
    bubble.y += bubble.dy;

    /* Collision detection */
    if (bubble.x >= canvasX || bubble.x < 0)
      bubble.dx *= -1;
    if (bubble.y >= canvasY || bubble.y < 0)
      bubble.dy *= -1;
  });
}

export {
  clamp,
  draw,
  generateBubbles,
  update,
}