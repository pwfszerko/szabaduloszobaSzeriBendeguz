import { Component } from "@angular/core";


@Component({
  selector: 'app-uj-foglalas',
  templateUrl: './uj-foglalas.component.html',
  styleUrls: ['./uj-foglalas.component.css']
})
export class UjFoglalasComponent {
  foglalas = {
    nev: '',
    cim: '',
    iranyitoszam: null,
    fo: null,
    datum: new Date().toISOString().split('T')[0]
  };

  constructor() {}

  submitFoglalas() {
  }
}
