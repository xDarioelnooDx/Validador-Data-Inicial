import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablasExcelComponent } from './page/tablas-excel/tablas-excel.component';
import { comprobarComponent } from './page/comprobar/comprobar.component';
import { LoginComponent } from './page/login/login.component';
import { InfoComponent } from './info/info.component';
import { InfoDaliComponent } from './info-dali/info-dali.component';
import { TablasFarmaciaComponent } from './page/tablas-farmacia/tablas-farmacia.component';


export const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'homeDms', component: InfoComponent},
  {path: 'homeYoko', component: InfoComponent},
  {path: 'homeDali', component: InfoDaliComponent},
  {path: 'comprobar', component: comprobarComponent },
  {path: 'tablas-excel', component: TablasExcelComponent},
  {path: 'tablas-Farmacia', component: TablasFarmaciaComponent},
  {path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
