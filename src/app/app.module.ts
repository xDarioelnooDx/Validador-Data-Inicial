import { ApplicationConfig, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from "./bar/bar.component";
import { InfoComponent } from "./info/info.component";
import { TablasExcelComponent } from './page/tablas-excel/tablas-excel.component';
import { provideRouter, Router, RouterLink, Routes } from '@angular/router';
import { comprobarComponent } from './page/comprobar/bodegas.component';
import { BarVComponent } from './bar-v/bar-v.component';

@NgModule({
  declarations: [
    AppComponent,
    TablasExcelComponent,
    comprobarComponent,
    BarVComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarComponent,
    InfoComponent,
    RouterLink
],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {


 }
