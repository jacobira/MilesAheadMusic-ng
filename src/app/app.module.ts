import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = {url: 'https://milesaheadmusiclessons.com', options: {
}};

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LessonInfoComponent } from './lesson-info/lesson-info.component';
import { TeacherDisplayComponent } from './teacher-display/teacher-display.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { SingleReviewComponent } from './single-review/single-review.component';
import { CovidInfoComponent } from './covid-info/covid-info.component';
import { SiteNoticesComponent } from './site-notices/site-notices.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    LessonInfoComponent,
    TeacherDisplayComponent,
    ContactFormComponent,
    HeaderBarComponent,
    FooterBarComponent,
    SingleReviewComponent,
    CovidInfoComponent,
    SiteNoticesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
