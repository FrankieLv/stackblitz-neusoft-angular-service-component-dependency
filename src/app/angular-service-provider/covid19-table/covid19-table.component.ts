import { Component, OnInit } from '@angular/core';
import { Covid19Case } from '../model/covid19.case.model';
import { Covid19CaseServiceService } from '../service/covid19-case-service.service';

@Component({
  selector: 'app-covid19-table',
  templateUrl: './covid19-table.component.html',
  styleUrls: ['./covid19-table.component.css']
})
export class Covid19TableComponent implements OnInit {

  constructor(private covid19CaseServiceService: Covid19CaseServiceService) { 
    this.realData = [];
    this.getRealCovid19Cases();
  }

  realData: Covid19Case[];
  getRealCovid19Cases(): void {
    this.covid19CaseServiceService.getRealCovid19Cases().subscribe(result => {
       this.realData = result;
      }
    )
  }

  getRealData(): Covid19Case[]{
    return  this.realData;
  }

  name1: string;
  name2: string;

  ngOnInit(): void {
  }

}
