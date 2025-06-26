type Subscriber = (version: number) => void;

export class Observable {
  private subscribers: Subscriber[] = [];
  private version = 0;
  private locked = false;

  protected lock(callback: () => void) {
    this.locked = true;
    callback();
    this.locked = false;
  }

  protected update() {
    if (!this.locked) {
      this.version++;
      this.subscribers.forEach((s) => s(this.version));
    }
  }

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
    return subscriber;
  }

  unSubscribe(subscriber: Subscriber) {
    this.subscribers = this.subscribers.filter((s) => s === subscriber);
  }
}
