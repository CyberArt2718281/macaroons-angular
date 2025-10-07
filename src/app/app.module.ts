import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { GiftBoxComponent } from './components/gift-box/gift-box.component';
import { ButtonHoverDirective } from './directives/button-hover.directive';
import { CurrencyPipePipe } from './pipes/currency-pipe.pipe';
import { CustomTextPipePipe } from './pipes/custom-text-pipe.pipe';
import { CustomPhonePipePipe } from './pipes/custom-phone-pipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    AdvantageComponent,
    GiftBoxComponent,
    ButtonHoverDirective,
    CurrencyPipePipe,
    CustomTextPipePipe,
    CustomPhonePipePipe
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
