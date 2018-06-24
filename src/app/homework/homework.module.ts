import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworkComponent } from './homework.component';
import { HomeworkHeaderComponent } from './homework-header/homework-header.component';
import { HomeworkHomeComponent } from './homework-home/homework-home.component';
import { HomeworkAboutComponent } from './homework-about/homework-about.component';
import { HomeworkSocialComponent } from './homework-social/homework-social.component';
import { HomeworkArticleComponent } from './homework-article/homework-article.component';
import { HomeworkContactComponent } from './homework-contact/homework-contact.component';
import { HomeworkFooterComponent } from './homework-footer/homework-footer.component';

@NgModule({
    declarations: [
        HomeworkAboutComponent,
        HomeworkSocialComponent,
        HomeworkArticleComponent,
        HomeworkContactComponent,
        HomeworkFooterComponent,
        HomeworkHeaderComponent,
        HomeworkHomeComponent,
        HomeworkComponent


    ],
    imports: [

        CommonModule
    ],
    exports: []

})
export class HomeworkModule { }
