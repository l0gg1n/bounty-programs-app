import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  readonly programs: any[] = [{ id: 'hc1', name: 'HackerOne'}];

  constructor() { }

  ngOnInit(): void {
  }

}
