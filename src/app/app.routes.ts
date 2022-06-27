import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { WcsComponent } from "./wcs/wcs.component";

const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'wcs/:name',
        component: WcsComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }     
];

export { ROUTES };