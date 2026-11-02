import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Serie } from "../models/serie";
import { firstValueFrom } from "rxjs";
import { Personaje } from "../models/personaje";

@Injectable()
export class ServiceSeries {

     url=environment.urlApiSeries;

     constructor (private _http:HttpClient) { }

    async getSeries(): Promise<Serie[]> {
        let request="api/Series";
        return firstValueFrom(this._http.get<Serie[]>(this.url+ request));

    }
    async getSerie(id: number): Promise<Serie> {
        let request="/api/Series/"+id;
        return firstValueFrom(this._http.get<Serie>(this.url+ request));

    }

    async getPersonajesSerie(id: number): Promise<Personaje[]> {
    let request="api/Series/PersonajesSerie/"+id;
    return firstValueFrom(this._http.get<Personaje[]>(this.url+ request));

    }

} 