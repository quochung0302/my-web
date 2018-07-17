import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { WeatherComponent } from './weather/weather.component';
import { TableComponent } from './table/table.component';
import { RecipesComponent } from './recipes/recipes.component';

const appRoutesProjects: Routes = [

    { path: '', component: ProjectsComponent },
    { path: 'weather', component: WeatherComponent },
    { path: 'table', component: TableComponent },
    { path: 'recipes', component: RecipesComponent },


];


@NgModule({
    imports: [RouterModule.forChild(appRoutesProjects)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule {

}
