import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-santo-tarjeta',
  templateUrl: './santo-tarjeta.component.html',
  styles: []
})
export class SantoTarjetaComponent implements OnInit {

   @Input() santo:any={};
   @Input() index:number;

   @Output() santoSeleccionado: EventEmitter<number>;

  constructor(private router:Router) {
    this.santoSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verSanto(){
  //  this.santoSeleccionado.emit(this.index);
    this.router.navigate(['/santo',this.index])
  }

}
