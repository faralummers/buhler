import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MachinesInterface } from '../models/machines.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private _http: HttpClient) { }

  getMachinesData(): Observable<MachinesInterface[]> {
    return this._http.get<MachinesInterface[]>('/assets/machines-data.json')
  }
}
