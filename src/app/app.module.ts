import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NavitiaService } from './services/services';
import { HomePage,SearchPage,BusPage } from '../pages/pages.ts';


@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    HomePage,
    BusPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    HomePage,
    BusPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},NavitiaService]
})
export class AppModule {}
