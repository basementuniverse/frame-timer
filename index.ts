export type FrameTimerOptions = {
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

export class FrameTimer {
  private static readonly DEFAULT_OPTIONS: FrameTimerOptions = {
    minFPS: 30,
  };

  private options: FrameTimerOptions;
  private _lastFrameElapsedTime: number = 0;
  private _lastFrameTime!: number;
  private _lastFrameCountTime!: number;
  private _frameRate: number = 0;
  private _frameCount: number = 0;

  public constructor(options?: Partial<FrameTimerOptions>) {
    this.options = { ...FrameTimer.DEFAULT_OPTIONS, ...(options ?? {}) };
    this._lastFrameTime = this._lastFrameCountTime = performance.now();
  }

  /**
   * The elapsed time in seconds since the last frame.
   */
  public get elapsedTime() {
    return this._lastFrameElapsedTime;
  }

  /**
   * The current framerate in frames per second (FPS). This value is updated
   * once per second and represents the number of frames rendered in the last
   * second.
   */
  public get frameRate() {
    return this._frameRate;
  }

  public update() {
    const now = performance.now();
    const elapsedTime = Math.min(
      (now - this._lastFrameTime) / 1000,
      1 / (this.options.minFPS ?? 30)
    );

    // Calculate framerate
    if (now - this._lastFrameCountTime >= 1000) {
      this._lastFrameCountTime = now;
      this._frameRate = this._frameCount;
      this._frameCount = 0;
    }
    this._frameCount++;
    this._lastFrameTime = now;
    this._lastFrameElapsedTime = elapsedTime;
  }
}
