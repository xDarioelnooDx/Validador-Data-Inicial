import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablasExcelComponent } from './page/tablas-excel/tablas-excel.component';
import { comprobarComponent } from './page/comprobar/bodegas.component';

export const routes: Routes = [

  {path: 'comprobar', component: comprobarComponent },
  {path: 'tablas-excel', component: TablasExcelComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
