import { Routes } from "@angular/router";
import { IsAdminGuard } from "./core/is-admin.guard";
import { IsConnectedGuard } from "./core/is-connected.guard";
import { AdminComponent } from "./pages/admin/admin.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { HomeComponent } from "./pages/home/home.component";
import { UnauthorizedComponent } from "./pages/unauthorized/unauthorized.component";

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [IsConnectedGuard] },
    { path: 'admin', component: AdminComponent, canActivate: [IsAdminGuard] },
    { path: '**', component: UnauthorizedComponent}
     
];

export { ROUTES };