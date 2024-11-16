// decorators.ts
interface ComponentOptions {
    selector: string;
    template: string;
}

function Component(options: ComponentOptions) {
    return function (constructor: Function) {
        constructor.prototype.selector = options.selector;
        constructor.prototype.template = options.template;

        constructor.prototype.render = function () {
            const container = document.querySelector<HTMLElement>(this.selector);
            if (container) {
                container.innerHTML = this.template;
            } else {
                console.error(`Element with selector "${this.selector}" not found.`);
            }
        };
    };
}

export { Component, ComponentOptions };


