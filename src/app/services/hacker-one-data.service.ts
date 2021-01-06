import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HackerOneDataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get(environment.hackerone_data)
  }
}
