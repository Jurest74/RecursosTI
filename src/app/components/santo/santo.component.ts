import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SantosService, Santo} from '../../services/santos.service';

@Component({
  selector: 'app-santo',
  templateUrl: './santo.component.html',
  styles: []
})
export class SantoComponent{

  santo:Santo;

  constructor(private activatedRoute:ActivatedRoute,
              private _santosService:SantosService) {

      this.activatedRoute.params.subscribe(params => {
      this.santo = this._santosService.getSanto(params['id']);
    });

   console.log(this.santo);
   }

}
