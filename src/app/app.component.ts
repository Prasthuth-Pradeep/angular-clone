import { Component } from '@framework/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <h1>Hello from AppComponent!</h1>
      <span>{{ name }}</span>
      <p>{{ appName }}</p>
    </div>
  `
})
export class AppComponent {
  name: string = "Prasthuth Pradeep";
  appName: string = "Hiiiii!!!!!";

  constructor() {
    console.log('AppComponent Constructor Called');
    console.trace('Trace for AppComponent instantiation');
  }
}
