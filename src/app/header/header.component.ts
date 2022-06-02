import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges {
  @Input() rate: any;
  usdRateBuy: number = 0;
  usdRateSell: number = 0;
  euRateBuy: number = 0;
  euRateSell: number = 0;
  ngOnChanges(changes: SimpleChanges): void {
    this.rate &&
      ((this.usdRateBuy = this.rate[0].rateBuy),
      (this.usdRateSell = this.rate[0].rateSell),
      (this.euRateBuy = this.rate[1].rateBuy),
      (this.euRateSell = this.rate[1].rateSell));
  }
}
