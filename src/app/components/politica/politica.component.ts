import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.css']
})
export class PoliticaComponent implements OnInit {

  porcentajeReembolso = 0.70;
  montoMinimo = 950;
  montoMaximo = 2300;
  diasDevolucion = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
