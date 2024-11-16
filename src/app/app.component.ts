import { BaseComponent } from './base.component';
import { FooterComponent } from './components/footer.component';

export class AppComponent extends BaseComponent {
  selector = 'app-root'; // Unique selector for the main app component
  template = `
    <div class="app-container">
      <h1>Hello from AppComponent!</h1>
      <app-footer></app-footer> <!-- Placeholder for FooterComponent -->
    </div>
  `;

  render(): void {
    super.render();
    // Render the FooterComponent within the <app-footer> placeholder
    const footerComponent = new FooterComponent();
    footerComponent.render('app-footer');
  }
}
