import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NastavniciComponent } from './components/nastavnici/nastavnici.component';
import { StudentItemComponent } from './components/studenti/student-item/student-item.component';
import { StudentResolver } from './components/studenti/student.resolver';
import { StudentiComponent } from './components/studenti/studenti.component';
import { UstanoveComponent } from './components/ustanove/ustanove.component';

const routes: Routes = [
  { path: '', redirectTo: 'ustanove', pathMatch: 'full' },
  { path: 'ustanove', component: UstanoveComponent },
  { path: 'nastavnici', component: NastavniciComponent },
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
