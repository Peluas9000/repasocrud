import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Serie } from '../../models/serie';
import { ServiceSeries } from '../../services/service.series';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})

export class MenuComponent implements OnInit{

  public arraySeries:Array<Serie>;

  constructor(private _cdr:ChangeDetectorRef,private _service:ServiceSeries) {
    this.arraySeries=new Array<Serie>();
  }

  ngOnInit(): void {
    this._service.getSeries().then((data)=>{
      this.arraySeries=data;
      this._cdr.detectChanges();
    });

  }

}
