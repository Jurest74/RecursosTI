import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SantosService } from '../../services/santos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  santos:any[] = []
    termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _santosService: SantosService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.santos = this._santosService.buscarSantos( params['termino'] );
      console.log( this.santos );
    });
  }

}
