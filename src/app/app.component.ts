import { Component } from '@framework/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' // Specify the path to the external HTML file
})
export class AppComponent {
  name: string = "Prasthuth Pradeep";
  appName: string = "Hiiiii!!!!!";

  constructor() {
    console.log('AppComponent Constructor Called');
  }
}
