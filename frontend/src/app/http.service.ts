import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";

@Injectable({ providedIn: 'root' })
export class MyService {

    private readonly url: string;

    constructor(
        private readonly http: HttpClient
    ) {
        this.url = 'http://localhost:8080/descripcion/';
    }

    getData(clave:number) {
        return lastValueFrom(this.http.get<any>(`${this.url}${clave}`));
    }

}
