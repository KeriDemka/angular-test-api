import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Company, ServerResponse } from '../company/company.interface';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private _http: HttpClient) { }

  getCompanies(): Observable<ServerResponse<Company[]>> {
    return this._http.get<ServerResponse<Company[]>>('https://fakerapi.it/api/v1/companies?_quantity=10');
  }
}
