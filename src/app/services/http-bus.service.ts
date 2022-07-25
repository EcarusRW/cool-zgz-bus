import { Injectable } from '@angular/core';
import { HttpGenericService } from './http-generic/http-generic.service';

@Injectable({
  providedIn: 'root'
})
export class HttpBusService {

  constructor(
    private genericHttp: HttpGenericService 
  ) { }

  getBusLine(line: string) {
    return this.genericHttp.requestGet(`linea-autobus/${line}`)
  }
}
