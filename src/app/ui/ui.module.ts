import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NbCardModule, NbListModule, NbTabsetModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { HackeroneComponent } from './programs/hackerone/hackerone.component';
import { AgGridModule } from 'ag-grid-angular';
import { BugcrowdComponent } from './programs/bugcrowd/bugcrowd.component';

@NgModule({
  declarations: [
    SidebarComponent, 
    HeaderComponent, 
    HomeComponent, HackeroneComponent, BugcrowdComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NbListModule,
    NbCardModule,
    NbTabsetModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    HomeComponent
  ]
})
export class UiModule { }
