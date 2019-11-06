import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  constructor() { }
  value = '';
  ngOnInit() {
  }

  buscarHeroe(value: string) {
    this.value = value;
    console.log(this.value);
  }
}
