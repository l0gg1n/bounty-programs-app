import { Component, OnInit } from '@angular/core';
import { HackerOneDataService } from 'src/app/services/hacker-one-data.service';

@Component({
  selector: 'app-hackerone',
  templateUrl: './hackerone.component.html',
  styleUrls: ['./hackerone.component.scss']
})
export class HackeroneComponent implements OnInit {

  public columnDefs = [
    { field: 'name', sortable: true, filter: true },
    { field: 'offers_bounties', headerName: 'Bounties?', filter: true, sortable: true,
      cellRenderer: (d) => {
         return d.value ? '<font color=green>&#128512;</font>' : '<font color=red>&#128530;</font>'
      }
     },
    { field: 'num_targets', headerName: 'Target Cnt', sortable: true },
    { field: 'response_efficiency_percentage', headerName: 'Response Eff' , sortable: true },
    {
      field: 'id',
      headerName: 'Link',
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
      })
  }

}
