import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';

const routes: Routes = [
   
    { path: 'home', component: OfertasComponent },
    { path: 'buscar/:termino', component: BuscarComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);

