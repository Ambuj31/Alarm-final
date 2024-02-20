import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmComponent } from './read/read.component';


const routes: Routes = [
  {path: 'dead', component: AlarmComponent},
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }