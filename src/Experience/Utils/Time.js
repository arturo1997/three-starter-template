import EventEmiter from './EventEmiter.js'

export default class Time extends EventEmiter {
    constructor() {
        super()

        // Setup
        this.start = Date.now()
        this.current = 0
        this.delta = 16
        window.requestAnimationFrame(() => {
            this.tick()
        })
    }

    tick() {
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start

        this.trigger('tick')
        window.requestAnimationFrame(() => {
            this.tick()
        })
    }
}