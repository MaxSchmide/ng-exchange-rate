import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  rate = [
    {
      currencyCodeA: 840,
      currencyCodeB: 980,
      date: 1654117807,
      rateBuy: 31.5,
      rateSell: 32.5998,
    },
    {
      currencyCodeA: 978,
      currencyCodeB: 980,
      date: 1654117807,
      rateBuy: 33.5,
      rateSell: 34.9004,
    },
    {
      currencyCodeA: 978,
      currencyCodeB: 840,
      date: 1654117807,
      rateBuy: 1.062,
      rateSell: 1.08,
    },
  ];
  ngOnInit(): void {
    const fetchData = async () => {
      await fetch('https://api.monobank.ua/bank/currency')
        .then((res) => res.json())
        .then((data) => data.slice(0, 3))
        .then((data) => (this.rate = data))
        .catch((err) => err);
      console.log(this.rate);
    };
    // fetchData();
  }
}
