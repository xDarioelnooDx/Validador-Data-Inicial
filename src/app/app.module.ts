import { ApplicationConfig, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from "./bar/bar.component";
import { InfoComponent } from "./info/info.component";
import { TablasExcelComponent } from './page/tablas-excel/tablas-excel.component';
import { provideRouter, Router, RouterLink, Routes, withViewTransitions } from '@angular/router';
import { comprobarComponent } from './page/comprobar/comprobar.component';
import { BarVComponent } from './bar-v/bar-v.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './page/login/login.component';
import { InfoDaliComponent } from './info-dali/info-dali.component';
import { InfoYokoComponent } from './info-yoko/info-yoko.component';
import { TablasFarmaciaComponent } from './page/tablas-farmacia/tablas-farmacia.component';

@NgModule({
  declarations: [
    AppComponent,
    TablasExcelComponent,
    comprobarComponent,
    InfoDaliComponent,
    InfoYokoComponent,
    TablasFarmaciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarComponent,
    BarVComponent,
    InfoComponent,
    LoginComponent,
    RouterLink,
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {


 }
