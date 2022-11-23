import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { StudentsComponent } from './students/students.component';
import { StudygroupsComponent } from './studygroups/studygroups.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StudentsComponent,
    StudygroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
