import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ChangeDetectionModule } from './app/change-detection/change-detection.module';


platformBrowserDynamic().bootstrapModule(ChangeDetectionModule)
  .catch(err => console.error(err));
