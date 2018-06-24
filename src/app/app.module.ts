import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoundPipe } from './round.pipe';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { WordComponent } from './word/word.component';
import { StructComponent } from './struct/struct.component';
import { New1Component } from './new1/new1.component';
import { FormDirectiveComponent } from './form-directive/form-directive.component';


import { HomeworkComponent } from './homework/homework.component';
import { HomeworkHeaderComponent } from './homework/homework-header/homework-header.component';
import { HomeworkHomeComponent } from './homework/homework-home/homework-home.component';
import { HomeworkAboutComponent } from './homework/homework-about/homework-about.component';
import { HomeworkSocialComponent } from './homework/homework-social/homework-social.component';
import { HomeworkArticleComponent } from './homework/homework-article/homework-article.component';
import { HomeworkContactComponent } from './homework/homework-contact/homework-contact.component';
import { HomeworkFooterComponent } from './homework/homework-footer/homework-footer.component';
import { HomeworkPortfolioComponent } from './homework/homework-portfolio/homework-portfolio.component';
import { Article2Component } from './homework/article2/article2.component';
import { AddComponent } from './homework2/add/add.component';


import { ListItemComponent } from './homework2/list-item/list-item.component';
import { ItemComponent } from './homework2/item/item.component';
import { SearchComponent } from './homework2/search/search.component';
import { IpComponent } from './ip/ip.component';
import { WeatherComponent } from './weather/weather.component';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Test1Module } from './/test1.module';
import { Test4Module } from './test4/test4.module';







@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    PipesComponent,
    RoundPipe,
    SignInComponent,
    SignUpComponent,
    WordComponent,
    StructComponent,
    New1Component,
    FormDirectiveComponent,

    HomeworkAboutComponent,
    HomeworkSocialComponent,
    HomeworkArticleComponent,
    HomeworkContactComponent,
    HomeworkFooterComponent,
    HomeworkHeaderComponent,
    HomeworkHomeComponent,
    HomeworkComponent,
    HomeworkPortfolioComponent,
    Article2Component,
    AddComponent,
    ContactDetailComponent,
    ContactsComponent,
    PageNotFoundComponent,



    ItemComponent,
    SearchComponent,
    IpComponent,
    WeatherComponent,
    ListItemComponent





  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    HttpModule,

    Test1Module,

    Test4Module,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
