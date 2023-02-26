import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  //Dummy Data
  private data: User[];
  constructor(private readonly _httpClient: HttpClient) {}

  getCovid19Cases(): User[] {
    return this.data;
  }

  getRealCovid19Cases(): Observable<User[]> {
    return this._httpClient
      .get(`https://jsonplaceholder.typicode.com/users`)
      .pipe(
        map((result) => {
          let realData: User[] = [];

          realData.push({
            name: 'user1',
            email: 'email',
            phone: '1234',
            website: 'com',
          });

          // result.forEach((item, index) => {
          //   realData.push({
          //     name: result.name,
          //     email: result.email,
          //     phone: result.phone,
          //     website: result.website,
          //   });
          // });
          // for (let stateKey in result) {

          //     const stateData = result[stateKey];
          //      realData.push({
          //         confirmed: stateData.confirmed,
          //         recovered: stateData.recovered,
          //         deaths: stateData.deaths,
          //         state: stateKey,
          //     })
          // }
          return realData;
        })
      );
  }
}
