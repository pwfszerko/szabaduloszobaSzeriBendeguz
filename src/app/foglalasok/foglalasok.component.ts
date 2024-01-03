import { Component, OnInit } from '@angular/core';
import { FoglalasokService } from './foglalasok.service';
import { Foglalas } from './foglalasok.model.js';

@Component({
  selector: 'app-foglalasok',
  templateUrl: './foglalasok.component.html',
  styleUrls: ['./foglalasok.component.css']
})
export class FoglalasokComponent implements OnInit {
  foglalasok: Foglalas[] = [];

  constructor(private foglalasokService: FoglalasokService) { }

  ngOnInit(): void {
    this.foglalasokService.getFoglalasok().subscribe(data => {
      this.foglalasok = data;
    });
  }
}
