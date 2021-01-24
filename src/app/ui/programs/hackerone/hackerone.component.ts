import { Component, OnInit } from '@angular/core';
import { HackerOneDataService } from 'src/app/services/hackerone/hacker-one-data.service';

@Component({
  selector: 'app-hackerone',
  templateUrl: './hackerone.component.html',
  styleUrls: ['./hackerone.component.scss']
})
export class HackeroneComponent implements OnInit {

  public programsColDefs = [
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
        const p = this.programsRowData.find(x => x.id == d.value);
        return  `<a target='_blank' href="${p.url}" >${p.name}</a>` 
      }, 
    }
  ];

  /*'program': x.name,
                    'program_url': x.url,
                    'id': y.asset_identifier,
                    'type': y.asset_type,
                    'bounty': y.eligible_for_bounty,
                    'text': y.instruction*/

  public targetsColDefs = [
    {
      field: 'program_url',
      headerName: 'Program', width: 300,
      cellRenderer: (d) => { 
        const p = this.programsRowData.find(x => x.url == d.value);
        return  `<a target='_blank' href="${p.url}" >${p.name}</a>` 
      }, 
    },
    { field: 'type', sortable: true, filter: true, width: 300 },
    { field: 'id', sortable: true, filter: true, width: 300,
      cellRenderer: (d) => { 
      return  `<a target='_blank' href="${d.value}" >${d.value}</a>` 
    }, 
    },
    { field: 'bounty', headerName: 'Bounties?', filter: true, sortable: true, width: 120,  cellStyle: {textAlign: 'center' },
      cellRenderer: (d) => {
         return d.value ? '<div>&#128512</div>' : ''
      }
    },
    { field: 'text', sortable: false, filter: false, width: 700 }
  ];

  public programsRowData = [];
  public targetsRowData = [];
  public wildCardsThatPay = [];

  constructor(private hackerOne: HackerOneDataService) { }

  ngOnInit(): void {
    this.hackerOne.getData()
      .subscribe(d => {

        this.programsRowData = 
          d.filter(x => x.submission_state === 'open')
            .map(x => ({
              ...x,
              num_targets: x.targets.in_scope.length
            }))
            .filter(x => x.num_targets > 0)
            .sort((a, b) => a.name > b.name ? 1 : -1)
    
        console.log('open', this.programsRowData);

        const targets =  this.programsRowData
            .map(x => [...x.targets.in_scope 
                  .filter(y => y.eligible_for_submission)
                  .map(y => ({
                    'program': x.name,
                    'program_url': x.url,
                    'id': y.asset_identifier,
                    'type': y.asset_type,
                    'bounty': y.eligible_for_bounty,
                    'text': y.instruction
                  }))]
            );
        this.targetsRowData = targets.reduce((acc, value) => acc.concat(value), []).sort((a, b) => a.program > b.program ? 1 : -1)
        console.log('targets', this.targetsRowData);    

        this.wildCardsThatPay = this.targetsRowData.filter(x => {
          return x.bounty && x.type === 'URL' && x.id.includes('*');
        });
      });
  }

}
