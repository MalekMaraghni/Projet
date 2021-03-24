import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { ErrorHandlerService } from "./error-handler.service";

import { Projets } from "../models/projets";

@Injectable({
  providedIn: "root",
})
export class ProjetDCrudService {
  private url = "http://localhost:3000/projetD";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient
  ) { }

   public getProjets() {
    return this.http.get(this.url + '/getAllprojetsD');
  }
 

  

  
}
