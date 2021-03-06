import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './ui/home/home.component';
import { BugcrowdComponent } from './ui/programs/bugcrowd/bugcrowd.component';
import { HackeroneComponent } from './ui/programs/hackerone/hackerone.component';

const routes: Routes = [
  { path: "hc1", component: HackeroneComponent },
  { path: 'bc', component: BugcrowdComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
