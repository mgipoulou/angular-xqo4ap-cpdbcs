import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsAlertComponent } from './products-alert/products-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from './environment/environment';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'user', component: UserProfileComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductsAlertComponent,
    ProductDetailsComponent,
    UserProfileComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
