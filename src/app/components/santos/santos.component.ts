import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SantosService , Santo} from '../../services/santos.service';

@Component({
  selector: 'app-santos',
  templateUrl: './santos.component.html',
  styles: ['./santos.component.css']
})
export class SantosComponent implements OnInit {

  santos:Santo[] =[];

  constructor( private _santosService:SantosService, private router:Router ) { }

  ngOnInit() {

    this.santos = this._santosService.getSantos();

    console.log(this.santos);

  }
  verSanto(index:number){
    this.router.navigate(['/santo',index])
  }
}
