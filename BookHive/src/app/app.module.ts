import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { OrderComponent } from './components/order/order.component';
import { AdminBookListComponent } from './components/admin-book-list/admin-book-list.component';
import { AdminBookEditComponent } from './components/admin-book-edit/admin-book-edit.component';
import { AdminOrderListComponent } from './components/admin-order-list/admin-order-list.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustDashboardComponent } from './components/cust-dashboard/cust-dashboard.component';
import { AdminBookAddComponent } from './components/admin-book-add/admin-book-add.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    ShoppingBasketComponent,
    OrderComponent,
    AdminBookListComponent,
    AdminBookEditComponent,
    AdminOrderListComponent,
    RegistrationComponent,
    AdminLoginComponent,
    HomeComponent,
    LoginComponent,
    AdminDashboardComponent,
    CustDashboardComponent,
    AdminBookAddComponent,
    PlaceorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
