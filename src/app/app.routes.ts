import { Routes } from '@angular/router';
import { Form } from './components/form/form';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [

    { path: '', component: Form },
    { path: 'dashboard', component: Dashboard },
];
