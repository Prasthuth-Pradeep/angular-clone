export class FooterComponent {
    private template: string;
  
    constructor() {
      this.template = `
        <footer class="footer-container">
          <p>© 2024 Angular clone.</p>
        </footer>
      `;
    }
  
    render(selector: string): void {
      const container = document.querySelector(selector);
      if (container) {
        container.innerHTML += this.template; // Append to existing content
      } else {
        console.error(`Element with selector "${selector}" not found.`);
      }
    }
  }
  