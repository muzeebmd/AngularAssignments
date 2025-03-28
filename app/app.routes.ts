import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AwardsComponent } from './awards/awards.component';
import { StatsComponent } from './stats/stats.component';

export const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent,

    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'awards',
        component: AwardsComponent
    },
    {
        path: 'stats',
        component: StatsComponent,
    }
];
