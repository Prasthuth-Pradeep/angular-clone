import { bootstrapModule } from '@framework/core';
import { AppModule } from './app/app.module';

console.log('Bootstrapping AppModule');
bootstrapModule(AppModule);
