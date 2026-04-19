# Game Component: Frame Timer

Calculate FPS and elapsed time for browser games.

## Installation

```bash
npm install @basementuniverse/frame-timer
```

## How to use

```ts
import FrameTimer from '@basementuniverse/frame-timer';

const timer = new FrameTimer(); // pass options if needed

function gameLoop() {
  timer.update();
  console.log(`Elapsed time: ${timer.elapsedTime}s, FPS: ${timer.frameRate}`);
  requestAnimationFrame(gameLoop);
}

gameLoop();
```

## Options

```ts
type FrameTimerOptions = {
  /**
   * If FPS drops below this value, the timer will clamp the elapsed time to
   * prevent large jumps in game logic.
   *
   * This is useful for maintaining consistent gameplay even when performance
   * drops.
   *
   * The default value is 30 FPS (0.1 seconds per frame).
   */
  minFPS: number;
};
```
