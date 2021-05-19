import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/property-card/property-card.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyDetailComponent } from './Property/property-detail/property-detail.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './Services/auth.service';

const appRoutes:Routes=[
  {path: '', component:PropertyListComponent },
  {path: 'book-property', component:PropertyListComponent },
  {path: 'add-property', component:AddPropertyComponent },
  {path: 'property-detail/:id', component:PropertyDetailComponent },
  {path: 'User/login', component:UserLoginComponent },
  {path: 'User/register', component:UserRegisterComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
