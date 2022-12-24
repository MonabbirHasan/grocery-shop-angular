import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { CategoryComponent } from './category/category.component';
import { CardsComponent } from './cards/cards.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProductsComponent } from './products/products.component';
import { CommentsComponent } from './comments/comments.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BrandComponent } from './brand/brand.component';
import { OffersComponent } from './offers/offers.component';
import { BuyersComponent } from './buyers/buyers.component';
import { StocksComponent } from './stocks/stocks.component';
import { CityComponent } from './city/city.component';
import { ReviewComponent } from './review/review.component';
import { RatingComponent } from './rating/rating.component';
import { BlogsComponent } from './blogs/blogs.component';
import { OrdersComponent } from './orders/orders.component';
import { LogoutComponent } from './logout/logout.component';
import { SettingsComponent } from './settings/settings.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    UsersComponent,
    CategoryComponent,
    CardsComponent,
    PaymentsComponent,
    ProductsComponent,
    CommentsComponent,
    WishlistComponent,
    BrandComponent,
    OffersComponent,
    BuyersComponent,
    StocksComponent,
    CityComponent,
    ReviewComponent,
    RatingComponent,
    BlogsComponent,
    OrdersComponent,
    LogoutComponent,
    SettingsComponent,
    CalculatorComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    SignupComponent,  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
