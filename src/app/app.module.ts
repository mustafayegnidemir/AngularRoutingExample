import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './products/product/product.component';

const appRoutes: Routes= [

  {path:'', component: HomeComponent},   // localhost:4200
  { path:'home', component: HomeComponent},
  { path:'products', component:ProductsComponent},
  { path:'products/:id', component:ProductComponent},
  { path:'users', component:UsersComponent},
  { path:'**', component:NotfoundComponent}


];

// localhost:4200/products?page=1&order=price
//query parameters

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    CategoriesComponent,
    NotfoundComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
