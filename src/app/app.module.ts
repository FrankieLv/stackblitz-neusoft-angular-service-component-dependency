import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Covid19TableComponent } from './angular-service-provider/covid19-table/covid19-table.component';
import { Covid19CaseServiceService } from './angular-service-provider/service/covid19-case-service.service';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './angular-component-communication/product-form/product-form.component';
import { ProductComponent } from './angular-component-communication/product/product.component';
import { ProductTableComponent } from './angular-component-communication/product-table/product-table.component';


@NgModule({
  declarations: [
    AppComponent,
    Covid19TableComponent,
    ProductComponent,
    ProductFormComponent,
    ProductTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Covid19CaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
