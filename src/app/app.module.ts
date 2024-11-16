import { AppComponent } from './app.component';

export class AppModule {
  bootstrap(): void {
    const appComponent = new AppComponent() as unknown as Renderable;
    appComponent.render(); // TypeScript will recognize `render()` here
  }
}
