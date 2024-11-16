import { Component } from '@framework/decorators';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <h1>Hello from AppComponent!</h1>
    </div>
  `
})
export class AppComponent implements Renderable {
  
  render(): void {
    // The actual implementation will be added by the decorator
  }
}
