import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AdminmasterpageComponent } from '../adminmasterpage/adminmasterpage.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AppMaterialModule } from '../app-material/app-material.module';

const AdminRoutes: Routes = [
  {path: 'Dashboard', component: DashboardComponent}
];
const AppRoutes: Routes = [
  {path: 'Admin', component: AdminmasterpageComponent, children: AdminRoutes},
  {path: 'Login', component: LoginComponent},
  {path: '', redirectTo: 'Admin/Dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes),
    AppMaterialModule
  ],
  exports: [
    RouterModule,
    AppMaterialModule
  ],
  declarations: [
    LoginComponent,
    AdminmasterpageComponent,
    DashboardComponent
  ]
})
export class AppRoutingModule { }
