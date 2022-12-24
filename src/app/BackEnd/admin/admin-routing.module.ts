import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BrandComponent } from './brand/brand.component';
import { BuyersComponent } from './buyers/buyers.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CardsComponent } from './cards/cards.component';
import { CategoryComponent } from './category/category.component';
import { CityComponent } from './city/city.component';
import { CommentsComponent } from './comments/comments.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OffersComponent } from './offers/offers.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProductsComponent } from './products/products.component';
import { RatingComponent } from './rating/rating.component';
import { ReviewComponent } from './review/review.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from './signup/signup.component';
import { StocksComponent } from './stocks/stocks.component';
import { UsersComponent } from './users/users.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: "admin", component: HomeComponent },
      { path: "users", component: UsersComponent },
      { path: "category", component: CategoryComponent },
      { path: "cards", component: CardsComponent },
      { path: "payments", component: PaymentsComponent },
      { path: "products", component: ProductsComponent },
      { path: "comments", component: CommentsComponent },
      { path: "wishlist", component: WishlistComponent },
      { path: "brands", component: BrandComponent },
      { path: "offers", component: OffersComponent },
      { path: "buyers", component: BuyersComponent },
      { path: "stocks", component: StocksComponent },
      { path: "ratings", component: RatingComponent },
      { path: "review", component: ReviewComponent },
      { path: "city", component: CityComponent },
      { path: "blogs", component: BlogsComponent },
      { path: "settings", component: SettingsComponent },
      { path: "orders", component: OrdersComponent },
      { path: "logout", component: LogoutComponent },
      { path: "calculator", component: CalculatorComponent },

    ]
  },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "error", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
