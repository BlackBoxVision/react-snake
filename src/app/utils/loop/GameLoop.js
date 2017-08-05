export default class GameLoop {
    subscribers = [];
    loopID = null;

    loop = time => {
        this.subscribers.forEach(({ callback }) => callback(time));
        this.loopID = window.requestAnimationFrame(this.loop);
    };

    start = () => {
        if (!this.loopID) {
            this.loop();
        }
    };

    stop = () => window.cancelAnimationFrame(this.loopID);

    subscribe = (name, callback) => this.subscribers.push({ name, callback });

    unsubscribe = callbackName => (this.subscribers = this.subscribers.filter(({ name }) => name !== callbackName));

    clearSubscribers = () => (this.subscribers = []);
}
