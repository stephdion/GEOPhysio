import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ENTREPRISES_DECLARATIONS } from './entreprises';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ...ENTREPRISES_DECLARATIONS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
