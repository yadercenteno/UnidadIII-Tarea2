import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  estudiante = 'Yader Vicente Centeno Matus';
  carnet = '19-30204-0';
  clase = 'Framework y Librerías de Javascript';
  nombreTarea = 'tarea individual # 2 de la Unidad III';

  constructor() { }

  ngOnInit(): void {
  }

}
