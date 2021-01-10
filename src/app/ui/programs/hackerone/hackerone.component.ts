import { Component, OnInit } from '@angular/core';
import { HackerOneDataService } from 'src/app/services/hackerone/hacker-one-data.service';

@Component({
  selector: 'app-hackerone',
  templateUrl: './hackerone.component.html',
  styleUrls: ['./hackerone.component.scss']
})
export class HackeroneComponent implements OnInit {

  public columnDefs = [
    { field: 'name', sortable: true, filter: true, width: 300 },
    { field: 'offers_bounties', headerName: 'Bounties?', filter: true, sortable: true, width: 120,  cellStyle: {textAlign: 'center' },
      cellRenderer: (d) => {
         return d.value ? '<div>&#128512</div>' : ''
      }
     },
    { field: 'num_targets', headerName: 'Target Cnt', sortable: true, width: 120,  cellStyle: {textAlign: 'center' } },
    {
      field: 'id',
      headerName: 'Link', width: 300,
      cellRenderer: (d) => { 
        const p = this.rowData.find(x => x.id == d.value);
        return  `<a target='_blank' href="${p.url}" >${p.name}</a>` 
      }, 
    }
  ];

  public rowData = []

  constructor(private hackerOne: HackerOneDataService) { }

  ngOnInit(): void {
    this.hackerOne.getData()
      .subscribe(d => {
        this.rowData = 
          d.filter(x => x.submission_state === 'open')
            .map(x => ({
              ...x,
              num_targets: x.targets.in_scope.length
            }))
            .filter(x => x.num_targets > 0)
    
          console.log('open', this.rowData);
      });
  }

}
