import { Component, OnInit } from '@angular/core';
import { BugcrowdDataService } from 'src/app/services/bugcrowd/bugcrowd-data.service';

@Component({
  selector: 'app-bugcrowd',
  templateUrl: './bugcrowd.component.html',
  styleUrls: ['./bugcrowd.component.scss']
})
export class BugcrowdComponent implements OnInit {

  public columnDefs = [
    { field: 'name', sortable: true, filter: true, width: 300 },
    { field: 'offers_bounties', headerName: 'Bounties?', filter: true, sortable: true, width: 120,  cellStyle: {textAlign: 'center' },
      cellRenderer: (d) => {
         return d.value ? '<div>&#128512</div>' : ''
      }
     },
    { field: 'num_targets', headerName: 'Target Cnt', sortable: true, width: 120,  cellStyle: {textAlign: 'center' } },
    {
      field: 'url', 
      headerName: 'Link', width: 300,
      cellRenderer: (d) => { 
        const p = this.rowData.find(x => x.url == d.value);
        return  `<a target='_blank' href="${p.url}" >${p.name}</a>` 
      }, 
    }
  ];

  public rowData = [];

  constructor(private bugcrowd: BugcrowdDataService) { }

  ngOnInit(): void {
    this.bugcrowd.getData().subscribe(d => {
      console.log('d', d);
      this.rowData = 
        d.map(x => ({
            ...x,
            num_targets: x.targets.in_scope.length,
            offers_bounties: x.max_payout > 0
          }))
          .filter(x => x.num_targets > 0)
  
        console.log('open', this.rowData);
    });
  }
}
