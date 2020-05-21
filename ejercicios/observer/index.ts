interface Observer {
    update: (data: any) => void;
}

interface Subject {
    subscrine: (observer: Observer) => void;
    unsubscrine: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
    observers: Observer[] = [];
    constructor() {
        const el: HTMLInputElement = document.querySelector("#value");
        el.addEventListener("input", () => {
            this.notify(el.value);
        });
    }
    subscrine(observer: Observer) {
        this.observers.push(observer);
    }
    unsubscrine(observer: Observer) {
        const index = this.observers.findIndex((obs) => obs === observer);
        this.observers.splice(index, 1);
    }
    notify(data: any) {
        this.observers.forEach((observer) => observer.update(data));
    }
}

class PriceDisplay implements Observer {
    private el: HTMLElement;
    constructor() {
        this.el = document.querySelector("#price");
    }
    update(data: any) {
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscrine(display);

setTimeout(() => {
    value.unsubscrine(display);
}, 5000);
