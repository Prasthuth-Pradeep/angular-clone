import { Component } from '@framework/decorators';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <h1>Hello from AppComponent! {{ name }}</h1>
      <p>{{ appName }}</p>
    </div>
  `
})
export class AppComponent {
  name: string = "AppComponent";
  appName: string = "Hiiiii!!!!!";

  constructor() {
    console.log('Component Name (from instance property):', this.name);
  }
}
