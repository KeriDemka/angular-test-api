import { Component, OnInit } from '@angular/core';

import { CompaniesService } from './service/companies.service';
import { Company, ServerResponse } from './company/company.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Companies';

  companies: Company[] = [];

  constructor(private _companyService: CompaniesService) { }

  ngOnInit() {
    this._companyService.getCompanies().subscribe((response: ServerResponse<Company[]>) => {
      this.companies = response.data;
      console.log(this.companies);
    });
  }
}