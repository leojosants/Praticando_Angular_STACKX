import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './components/modal/modal.component';
import { ArrayFiltroPipe } from './pipes/array-filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ArrayFiltroPipe,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
