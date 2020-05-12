import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SmartPhonesComponent } from './components/products/smart-phones/smart-phones.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { LineaBlancaComponent } from './components/products/linea-blanca/linea-blanca.component';
import { FotografiaComponent } from './components/products/fotografia/fotografia.component';
import { CustomerCareComponent } from './components/customer-care/customer-care.component';
import { VisitUsComponent } from './components/visit-us/visit-us.component';
import { DetailsComponent } from './components/products/details/details.component';

const Rutas: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'smartphone',
        component: SmartPhonesComponent
    },
    {
        path: 'lineaBlanca',
        component: LineaBlancaComponent
    },
    {
        path: 'fotografia',
        component: FotografiaComponent
    },
    {
        path: 'customCare',
        component: CustomerCareComponent
    },
    {
        path: 'visitUs',
        component: VisitUsComponent
    },
    {
        path: 'detail-products/:id',
        component: DetailsComponent
    },
    {
        path: 'notFound',
        component: NotFoundComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'notFound'
    }
];

export const APP_ROUTES = RouterModule.forRoot(Rutas);