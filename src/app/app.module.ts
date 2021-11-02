import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UstanoveComponent } from './components/ustanove/ustanove.component';
import { NastavniciComponent } from './components/nastavnici/nastavnici.component';
import { StudentiComponent } from './components/studenti/studenti.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentItemComponent } from './components/studenti/student-item/student-item.component';
import { StudentResolver } from './components/studenti/student.resolver';
import { NastavnikItemComponent } from './components/nastavnici/nastavnik-item/nastavnik-item.component';
import { NastavnikEditComponent } from './components/nastavnici/nastavnik-edit/nastavnik-edit.component';
import { StudentEditComponent } from './components/studenti/student-edit/student-edit.component';
import { SmjeroviComponent } from './components/smjerovi/smjerovi.component';
import { KolegijiComponent } from './components/kolegiji/kolegiji.component';
import { KolegijItemComponent } from './components/kolegiji/kolegij-item/kolegij-item.component';
import { KolegijStudentComponent } from './components/kolegiji/kolegij-item/kolegij-student/kolegij-student.component';
import { NewKolegijStudentComponent } from './components/kolegiji/kolegij-item/new-kolegij-student/new-kolegij-student.component';
import { OcjenaEditComponent } from './components/kolegiji/kolegij-item/ocjena-edit/ocjena-edit.component';
import { KolegijNastavnikComponent } from './components/kolegiji/kolegij-item/kolegij-nastavnik/kolegij-nastavnik.component';
import { NewKolegijNastavnikComponent } from './components/kolegiji/kolegij-item/new-kolegij-nastavnik/new-kolegij-nastavnik.component';
import { IzvrsiteljEditComponent } from './components/kolegiji/kolegij-item/izvrsitelj-edit/izvrsitelj-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UstanoveComponent,
    NastavniciComponent,
    StudentiComponent,
    StudentItemComponent,
    NastavnikItemComponent,
    NastavnikEditComponent,
    StudentEditComponent,
    SmjeroviComponent,
    KolegijiComponent,
    KolegijItemComponent,
    KolegijStudentComponent,
    NewKolegijStudentComponent,
    OcjenaEditComponent,
    KolegijNastavnikComponent,
    NewKolegijNastavnikComponent,
    IzvrsiteljEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [StudentResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
