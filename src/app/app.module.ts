import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';

import { NullComponent } from './null/null.component';
import { ProjectsComponent } from './projects/projects.component';



import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IntroComponent,
    AboutComponent,
    ContactComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: NullComponent 
      },
      {
        path: 'project/:index', 
        component: ProjectsComponent 
      },
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
