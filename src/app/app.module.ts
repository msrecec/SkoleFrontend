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
import { FormsModule } from '@angular/forms';
import { StudentItemComponent } from './components/studenti/student-item/student-item.component';
import { StudentResolver } from './components/studenti/student.resolver';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UstanoveComponent,
    NastavniciComponent,
    StudentiComponent,
    StudentItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [StudentResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
