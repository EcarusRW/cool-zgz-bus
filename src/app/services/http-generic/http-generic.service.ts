import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpGenericService {

  constructor(
    private http: HttpClient
  ) { }

  requestGet(urlPath: string): Observable<any> {
    return this.http.get(`${environment.url}/${urlPath}`,{});
  }
}
