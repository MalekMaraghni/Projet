import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

import { Observable } from "rxjs";
import { catchError, first, tap } from "rxjs/operators";

import { ErrorHandlerService } from "./error-handler.service";

import { Projets } from "../models/projets";

@Injectable({
  providedIn: "root",
})
export class ProjetCrudService {
  private url = "http://localhost:3000/projets";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient,
    private router: Router
  ) { }

   public getProjets() {
    return this.http.get(this.url + '/getAllprojets');
  }

  public getProjetsDone() {
    return this.http.get(this.url + '/getprojets');
  }
  
  

  public deleteProjets(id_P) {
    return this.http.delete(this.url + '/deleteprojets/' + id_P);
  }
public updateProjets(projet: Omit<Projets,"id_P">):Observable<Projets>{
  return this.http.put<Projets>(`${this.url}/putprojets`,projet,this.httpOptions).pipe(first(),
  catchError(this.errorHandlerService.handleError<Projets>(" updateProjets")));
  

}
  
}
