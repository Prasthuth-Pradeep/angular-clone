import { AppComponent } from './app.component';

export class AppModule {
  constructor() {
    const appComponent = new AppComponent();
    appComponent.render(); // Automatically render based on the selector
  }
}
