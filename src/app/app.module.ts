import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule, ProductListComponent, AppComponent],
  providers: [BrowserModule,HttpClientModule,ProductService],
  bootstrap: [],
})
export class AppModule {}
