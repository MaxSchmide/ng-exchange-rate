import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input() rate: any;
  inputHandler(
    event: any,
    primInput: any,
    primSelect: any,
    secInput: any,
    secSelect: any
  ) {
    event.preventDefault;
    this.rate.map((item: any) => {
      primSelect.value == item.currencyCodeA &&
      secSelect.value == item.currencyCodeB
        ? event.target.name == primInput.name
          ? (secInput.value = primInput.value * item.rateBuy)
          : (primInput.value = secInput.value / item.rateBuy)
        : secSelect.value == item.currencyCodeA &&
          primSelect.value == item.currencyCodeB
        ? event.target.name == primInput.name
          ? (secInput.value = primInput.value / item.rateBuy)
          : (primInput.value = secInput.value * item.rateBuy)
        : '';
    });
  }
  selectHandler(
    event: any,
    primInput: any,
    primSelect: any,
    secInput: any,
    secSelect: any
  ) {
    event.preventDefault;
    this.rate.map((item: any) => {
      primSelect.value == item.currencyCodeA &&
      secSelect.value == item.currencyCodeB
        ? event.target.name == primInput.name
          ? (primInput.value = secInput.value / item.rateBuy)
          : (secInput.value = primInput.value * item.rateBuy)
        : secSelect.value == item.currencyCodeA &&
          primSelect.value == item.currencyCodeB
        ? event.target.name == primInput.name
          ? (primInput.value = secInput.value * item.rateBuy)
          : (secInput.value = primInput.value / item.rateBuy)
        : '';
    });
  }
}
