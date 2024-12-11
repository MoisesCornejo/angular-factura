import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {InvoiceComponent} from './app/components/invoice/invoice.component';

// cambiamos el componente principal al InvoiceComponent
bootstrapApplication(InvoiceComponent, appConfig)
  .catch((err) => console.error(err));
