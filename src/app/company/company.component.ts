import { Component, Input } from '@angular/core';
import { Company } from './company.interface';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  @Input() company!: Company;

  get getImage(): string {
    const countrySlug = this.company.country.toLowerCase().replaceAll(' ', '_')

    return `https://loremflickr.com/320/240/${countrySlug}?${this.company.id}`
  }
}