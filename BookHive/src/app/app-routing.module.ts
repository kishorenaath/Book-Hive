import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBookEditComponent } from './components/admin-book-edit/admin-book-edit.component';
import { AdminBookListComponent } from './components/admin-book-list/admin-book-list.component';
import { AdminOrderListComponent } from './components/admin-order-list/admin-order-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { OrderComponent } from './components/order/order.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustDashboardComponent } from './components/cust-dashboard/cust-dashboard.component';
import { AdminBookAddComponent } from './components/admin-book-add/admin-book-add.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'admindash', component: AdminDashboardComponent },
  { path: 'custdash', component: CustDashboardComponent },
  { path: 'Adminlogin', component: AdminLoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'books', component: BookListComponent },
  { path: 'book/:id', component: BookDetailComponent },
  { path: 'basket', component: ShoppingBasketComponent },
  { path: 'placeorder/:id', component: PlaceorderComponent },
  { path: 'order', component: OrderComponent },
  { path: 'admin/books', component: AdminBookListComponent },
  { path: 'admin/books/edit/:id', component: AdminBookEditComponent },
  { path: 'admin/orders', component: AdminOrderListComponent },
  { path: 'admin/add', component: AdminBookAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
