import { AppModule } from './app/app.module';

document.addEventListener('DOMContentLoaded', () => {
  const appModule = new AppModule();
  appModule.bootstrap();
});
