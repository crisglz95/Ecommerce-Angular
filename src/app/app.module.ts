import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Librerias
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './components/home/home.component';
import { CarrouselComponent } from './components/home/carrousel/carrousel.component';
import { NewArrivalsComponent } from './components/home/new-arrivals/new-arrivals.component';
import { NewsletterComponent } from './components/home/newsletter/newsletter.component';
import { OffersComponent } from './components/home/offers/offers.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SmartPhonesComponent } from './components/products/smart-phones/smart-phones.component';
import { FotografiaComponent } from './components/products/fotografia/fotografia.component';
import { LineaBlancaComponent } from './components/products/linea-blanca/linea-blanca.component';
import { TodosComponent } from './components/products/todos/todos.component';
import { CustomerCareComponent } from './components/customer-care/customer-care.component';
import { VisitUsComponent } from './components/visit-us/visit-us.component';
import { DetailsComponent } from './components/products/details/details.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

//Rutas
import { APP_ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarrouselComponent,
    NewArrivalsComponent,
    NewsletterComponent,
    OffersComponent,
    FooterComponent,
    SmartPhonesComponent,
    FotografiaComponent,
    LineaBlancaComponent,
    TodosComponent,
    CustomerCareComponent,
    VisitUsComponent,
    DetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
