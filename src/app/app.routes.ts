import { Routes } from '@angular/router';
import { authGuard } from './core/authentication/auth.guard';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./features/authentication/login/login.component')
                .then(c => c.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./features/authentication/register/register.component')
                .then(c => c.RegisterComponent)
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                redirectTo: 'matches',
                pathMatch: 'full'
            },
            {
                path: 'matches',
                loadComponent: () =>
                    import('./shared/matches/match-list/match-list.component')
                        .then(c => c.MatchListComponent)
            },
            {
                path: 'matches/details',
                loadComponent: () =>
                    import('./shared/matches/match-details/match-details.component')
                        .then(c => c.MatchDetailsComponent)
            }
        ]
    }
];
