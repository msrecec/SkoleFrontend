import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NastavniciComponent } from './components/nastavnici/nastavnici.component';
import { NastavnikEditComponent } from './components/nastavnici/nastavnik-edit/nastavnik-edit.component';
import { NastavnikItemComponent } from './components/nastavnici/nastavnik-item/nastavnik-item.component';
import { NastavnikResolver } from './components/nastavnici/nastavnik.resolver';
import { SmjeroviComponent } from './components/smjerovi/smjerovi.component';
import { SmjeroviResolver } from './components/smjerovi/smjerovi.resolver';
import { StudentEditComponent } from './components/studenti/student-edit/student-edit.component';
import { StudentItemComponent } from './components/studenti/student-item/student-item.component';
import { StudentResolver } from './components/studenti/student.resolver';
import { StudentiComponent } from './components/studenti/studenti.component';
import { UstanoveComponent } from './components/ustanove/ustanove.component';

const routes: Routes = [
  { path: '', redirectTo: 'ustanove', pathMatch: 'full' },
  { path: 'ustanove', component: UstanoveComponent },
  {
    path: 'ustanove/:id/smjerovi',
    component: SmjeroviComponent,
    resolve: { smjerovi: SmjeroviResolver },
  },
  { path: 'nastavnici', component: NastavniciComponent },
  { path: 'nastavnici/save', component: NastavnikEditComponent },
  { path: 'nastavnici/edit/:id', component: NastavnikEditComponent },
  {
    path: 'nastavnici/:id',
    component: NastavnikItemComponent,
    resolve: { nastavnik: NastavnikResolver },
  },
  { path: 'studenti', component: StudentiComponent },
  { path: 'studenti/save', component: StudentEditComponent },
  { path: 'studenti/edit/:id', component: StudentEditComponent },
  { path: 'studenti', component: StudentiComponent },
  {
    path: 'studenti/:id',
    component: StudentItemComponent,
    resolve: { student: StudentResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
