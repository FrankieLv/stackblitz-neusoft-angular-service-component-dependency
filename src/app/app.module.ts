import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './angular-service-provider/user-list/user-list.component';
import { UserService } from './angular-service-provider/service/user.service';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './angular-component-communication/product-form/product-form.component';
import { ProductComponent } from './angular-component-communication/product/product.component';
import { ProductTableComponent } from './angular-component-communication/product-table/product-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ProductComponent,
    ProductFormComponent,
    ProductTableComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
