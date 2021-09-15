import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploAngularVsJsComponent } from './ejemplo-angular-vs-js/ejemplo-angular-vs-js.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './directivas/product-list/product-list.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { DestacarDirective } from './destacar.directive';

@NgModule({
  declarations: [
    AppComponent,
    EjemploAngularVsJsComponent,
    ProductComponent,
    ProductListComponent,
    ProductImageComponent,
    DirectivasComponent,
    DestacarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
