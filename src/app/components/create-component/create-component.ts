import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceSeries } from '../../services/service.series';
import { Personaje } from '../../models/personaje';
import { Router } from '@angular/router';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-create-component',
  standalone: false,
  styleUrl: './create-component.css',
  templateUrl: './create-component.html',
})
export class CreateComponent implements OnInit{
  @ViewChild('cajanombre') cajaNombre!:ElementRef;
  @ViewChild('cajaimagen') cajaImagen!:ElementRef;
  @ViewChild('cajaidSerie') cajaIdSerie!:ElementRef;
  public arraySeries:Array<Serie>;


  constructor(
    private _cdr:ChangeDetectorRef,
    private _service:ServiceSeries,
    private _router:Router
  ){
    this.arraySeries=new Array<Serie>();
  }

  ngOnInit(): void {
      this._service.getSeries().then((data) => {
        this.arraySeries = data;
        this._cdr.detectChanges();
      });
  }

  async crearPersonaje():Promise<void>{
    await this.añadirPersonaje();
  }
   
   async añadirPersonaje():Promise<void>{
      let nombre=this.cajaNombre.nativeElement.value;
      let imagen=this.cajaImagen.nativeElement.value;
      let idSerie=parseInt(this.cajaIdSerie.nativeElement.value, 10);
      let id=1;
      let personaje:Personaje=new Personaje(id,nombre,imagen,idSerie);

      await this._service.añadirPersonaje(personaje);
      this._router.navigate(['/personaje',idSerie]);
    }
}
