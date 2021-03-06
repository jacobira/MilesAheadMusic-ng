import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LessonInfoComponent } from './lesson-info/lesson-info.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CovidInfoComponent } from './covid-info/covid-info.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'lesson-info', component: LessonInfoComponent },
  { path: 'covid-info', component: CovidInfoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
