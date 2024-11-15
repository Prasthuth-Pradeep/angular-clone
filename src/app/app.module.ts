import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer.component';

export class AppModule {
  constructor() {
    const appComponent = new AppComponent();
    appComponent.render();

    const footerComponent = new FooterComponent();
    footerComponent.render('app-root');
  }
}
