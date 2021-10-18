import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLinkComponent } from './add-link/add-link.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TotalLinksComponent } from './total-links/total-links.component';

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dashboard/:id",
    component: DashboardComponent,
    children: [
      {
        path: "total-links",
        component: TotalLinksComponent
      },
      {
        path: "add-link",
        component: AddLinkComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
