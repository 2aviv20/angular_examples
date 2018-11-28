import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { FormGroupExampleComponent } from './form-group-example/form-group-example.component';
import { FormBuilderExampleComponent } from './form-builder-example/form-builder-example.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    FormGroupExampleComponent,
    FormBuilderExampleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
