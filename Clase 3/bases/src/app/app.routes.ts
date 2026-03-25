import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter.component'
import { SecondComponent } from './second/second.component';
import { DagronballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DagronballSuperPageComponent } from './pages/dragonball-super/dragonballsuper-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent
    },
    {
        path: 'second',
        component: SecondComponent
    },
    {
        path: 'dragonball',
        component: DagronballPageComponent
    },
    {
        path: 'dragonballSuper',
        component: DagronballSuperPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
