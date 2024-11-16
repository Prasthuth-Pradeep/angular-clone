import { AppModule } from './app/app.module';

document.addEventListener('DOMContentLoaded', () => {
  const appModule = new AppModule() as unknown as { bootstrap(): void };
  appModule.bootstrap();
});
