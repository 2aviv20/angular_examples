import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CycleExampleComponent } from './cycle-example/cycle-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CycleExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
