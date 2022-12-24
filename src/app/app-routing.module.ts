import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './BackEnd/components/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  { path: 'admin', loadChildren: () => import('./BackEnd/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
