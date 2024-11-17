import { Module } from '@framework/core';
import { AppComponent } from './app.component';

@Module({
  declarations: [AppComponent],
  bootstrap: AppComponent
})
export class AppModule {}
