import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {
  //Dummy Data
  private data: User[];
  constructor(private readonly _httpClient: HttpClient) {}

  getDummyUsers(): Observable<User[]> {
    return of([
      {
        name: 'user1',
        email: 'email',
        phone: '1234',
        website: 'com',
      },
      {
        name: 'user1',
        email: 'email',
        phone: '1234',
        website: 'com',
      },
      {
        name: 'user1',
        email: 'email',
        phone: '1234',
        website: 'com',
      },
      {
        name: 'user1',
        email: 'email',
        phone: '1234',
        website: 'com',
      },
    ]);
  }

  getRealUsers(): Observable<User[]> {
    return this._httpClient
      .get(`https://jsonplaceholder.typicode.com/users`)
      .pipe(
        map((result) => {
          let realData: User[] = [];

          for (let stateKey in result) {
            const stateData = result[stateKey];
            realData.push({
              name: stateData.name,
              email: stateData.email,
              phone: stateData.phone,
              website: stateData.website,
            });
          }
          return realData;
        })
      );
  }
}
