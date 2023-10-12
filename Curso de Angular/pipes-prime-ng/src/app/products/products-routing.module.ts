import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NumbersPageComponent } from './pages/numbers-page/numbers.component';
import { BasicsPageComponent } from './pages/basics-page/basics.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';



const routes: Routes = [
{
  path:"numbers",
  component: NumbersPageComponent
},
{
  path: "basic",
  component: BasicsPageComponent
},
{
  path: "uncommon",
  component: UncommonPageComponent
},
{
  path: "**",
  redirectTo: "numbers"
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProductsRoutingModule { }
