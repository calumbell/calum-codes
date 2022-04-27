type Bubble = {
  x: number,
  y: number,
  radius: number,
  dx: number,
  dy: number,
}

type MouseState = {
  mouseDown: boolean,
  x?: number | undefined,
  y?: number | undefined,
}

type UpdateContext = {
  bubbles: Bubble[],
  canvas: {
    x: number,
    y: number,
  },
  mouse: MouseState | undefined,
}

export { Bubble, MouseState, UpdateContext }