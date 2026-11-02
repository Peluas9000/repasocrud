import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceSeries } from '../../services/service.series';

@Component({
  selector: 'app-personaje-serie-component',
  standalone: false,
  styleUrl: './personaje-serie-component.css',
  templateUrl: './personaje-serie-component.html',
})
export class PersonajeSerieComponent implements OnInit{
  public arrayPersonajes:Array<Personaje>;
  constructor(
    private _cdr:ChangeDetectorRef,
    private _route:ActivatedRoute,
    private _service:ServiceSeries
  ){
    this.arrayPersonajes=new Array<Personaje>();
  }


 async ngOnInit(): Promise<void> {
  this._route.params.subscribe(async (params:Params) => {
    let idSerie = parseInt(params['idSerie']);
    console.log(idSerie);
    this.arrayPersonajes = await this._service.getPersonajesSerie(idSerie);
    this._cdr.detectChanges();
  })
}

}
