import { Module } from '@framework/module.decorator';
import { AppComponent } from './app.component';

@Module({
  declarations: [AppComponent],
  bootstrap: AppComponent
})
export class AppModule {}
