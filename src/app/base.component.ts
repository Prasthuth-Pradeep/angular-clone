export abstract class BaseComponent {
    abstract selector: string;
    abstract template: string;
  
    render(customSelector?: string): void {
      const container = document.querySelector(customSelector || this.selector);
      if (container) {
        container.innerHTML = this.template;
      } else {
        console.error(`Element with selector "${customSelector || this.selector}" not found.`);
      }
    }
  }
  