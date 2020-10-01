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

import {MatIconModule} from '@angular/material/icon';




import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { JnvComponent } from './project/jnv/jnv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConventionComponent } from './project/convention/convention.component';
import { KharsaliComponent } from './project/kharsali/kharsali.component';
import { ApartmentComponent } from './project/apartment/apartment.component';
import { CogniBetaComponent } from './project/cogni-beta/cogni-beta.component';
import { YacComponent } from './project/yac/yac.component';
import { HologramComponent } from './project/hologram/hologram.component';
import { Cogni2019Component } from './project/cogni2019/cogni2019.component';
import { ArtworksComponent } from './project/artworks/artworks.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IntroComponent,
    AboutComponent,
    ContactComponent,
    WorksComponent,
    ProjectComponent,
    JnvComponent,
    ConventionComponent,
    KharsaliComponent,
    ApartmentComponent,
    CogniBetaComponent,
    YacComponent,
    HologramComponent,
    Cogni2019Component,
    ArtworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: NullComponent 
      },
      {
        path: 'project/:index', 
        component: ProjectComponent 
      },
      
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
