import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AddComponent } from './features/investment/add/add.component';
import { ReviewComponent } from './features/investment/review/review.component';

export const routes: Routes = [
    {
        path:'',
        component: DashboardComponent
    },
    {
        path: 'investment',
        children: [
            {
                path: 'add',
                component: AddComponent
            },
            {
                path: 'review',
                component: ReviewComponent
            }
        ]
    }
];
