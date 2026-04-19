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
export default class FrameTimer {
    private static readonly DEFAULT_OPTIONS;
    private options;
    private _lastFrameElapsedTime;
    private _lastFrameTime;
    private _lastFrameCountTime;
    private _frameRate;
    private _frameCount;
    constructor(options?: Partial<FrameTimerOptions>);
    /**
     * The elapsed time in seconds since the last frame.
     */
    get elapsedTime(): number;
    /**
     * The current framerate in frames per second (FPS). This value is updated
     * once per second and represents the number of frames rendered in the last
     * second.
     */
    get frameRate(): number;
    update(): void;
}
