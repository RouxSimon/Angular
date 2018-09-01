import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PagetestComponent } from './pagetest/pagetest.component';
import { PageSerieuseComponent } from './page-serieuse/page-serieuse.component';

export const routes: Routes = [
    {path: "test", component: PagetestComponent},
    {path: "", component: PageSerieuseComponent}
];
