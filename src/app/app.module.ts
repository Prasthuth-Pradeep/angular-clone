import { AppComponent } from './app.component';

export class AppModule {
  bootstrap(): void {
    const appComponent = new AppComponent();
    appComponent.render(); // Render the main component, which internally renders FooterComponent
  }
}
