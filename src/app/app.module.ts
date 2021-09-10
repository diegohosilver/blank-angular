import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploAngularVsJsComponent } from './ejemplo-angular-vs-js/ejemplo-angular-vs-js.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductImageComponent } from './product-image/product-image.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploAngularVsJsComponent,
    ProductComponent,
    ProductListComponent,
    ProductImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
