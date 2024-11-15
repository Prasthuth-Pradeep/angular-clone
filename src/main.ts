import { AppModule } from './app/app.module';

// Bootstraps the AppModule when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  new AppModule();
});
