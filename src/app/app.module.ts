import { SummaryPipe } from './course/summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { TitleComponent } from './title/title.component';
import { TitleCasePipe } from './title-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
