import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Serie } from '../../models/serie';
import { ServiceSeries } from '../../services/service.series';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-serie-component',
  standalone: false,
  styleUrl: './serie-component.css',
  templateUrl: './serie-component.html',
})
export class SerieComponent implements OnInit{

  public serie!:Serie;
  
  constructor(private _service:ServiceSeries,
    private _cdr:ChangeDetectorRef,
    private _activeRoute:ActivatedRoute
  ) {

  }

  

  async ngOnInit(): Promise<void>{
    this._activeRoute.params.subscribe(async (params: Params) => {
      let id = parseInt(params['idSerie']);
      this.serie = await this._service.getSerie(id);
      this._cdr.detectChanges();
    })}

}
