import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Serie } from "../models/serie";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceSeries {

     url=environment.urlApiSeries;

     constructor (private _http:HttpClient) { }

    async getSeries(): Promise<Serie[]> {
        let request="api/Series";
        return firstValueFrom(this._http.get<Serie[]>(this.url+ request));

    }

}