import { BaseComponent } from '../base.component';

export class FooterComponent extends BaseComponent {
  selector = 'app-footer'; // Unique selector for the footer component
  template = `
    <footer class="footer-container">
      <p>© 2023 My TypeScript App. All rights reserved.</p>
    </footer>
  `;
}
