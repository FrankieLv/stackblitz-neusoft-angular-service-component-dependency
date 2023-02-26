import { Injectable } from '@angular/core';
import { Covid19Case } from '../model/covid19.case.model';
import { HttpClient}  from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class Covid19CaseServiceService {

    //Dummy Data
    private data: Covid19Case[];
    constructor(private readonly _httpClient: HttpClient) { 
    }

    getCovid19Cases(): Covid19Case[] {
      return this.data;
    }

    getRealCovid19Cases(): Observable<Covid19Case[]>{
      return this._httpClient.get(`https://covid-api.mmediagroup.fr/v1/cases?country=US`).pipe(map(result => {
        let realData: Covid19Case[] = [];
        for (let stateKey in result) {
            const stateData = result[stateKey];
             realData.push({
                confirmed: stateData.confirmed,
                recovered: stateData.recovered,
                deaths: stateData.deaths,
                state: stateKey,
            })
        }
        return realData;
      }
      ));
    }
}
