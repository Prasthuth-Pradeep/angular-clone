export class AppComponent {
  selector: string;

  constructor() {
    this.selector = 'app-root';
  }

  render(): void {
    const container = document.querySelector(this.selector); // Use the selector
    if (container) {
      container.innerHTML = `
        <div class="app-container">
          <h1>Hello from AppComponent!</h1>
        </div>
      `;
    } else {
      console.error(`Element with selector "${this.selector}" not found.`);
    }
  }
}
