import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { WeatherComponent } from './weather/weather.component';
import { TableComponent } from './table/table.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsStartComponent } from './projects-start/projects-start.component';
import { InputComponent } from './table/input/input.component';
import { DetailComponent } from './table/detail/detail.component';
import { RoundPipe } from './round.pipe';
import { HttpModule } from '@angular/http';
import { RecipesComponent } from './recipes/recipes.component';



@NgModule({
    declarations: [
        ProjectsComponent,
        WeatherComponent,
        TableComponent,
        ProjectsStartComponent,
        InputComponent,
        DetailComponent,
        RoundPipe,
        RecipesComponent


    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProjectsRoutingModule,
        FormsModule,
        HttpModule
         ]
})
export class ProjectsModule { }
