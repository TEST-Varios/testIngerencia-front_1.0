import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  { path: 'inicio' , component: TestComponent},
  { path: '' , pathMatch:'full', redirectTo: "inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
