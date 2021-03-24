import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError, first, tap } from "rxjs/operators";

import { ErrorHandlerService } from "./error-handler.service";

import { Projets } from "../models/projets";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class FormPCrudService {
  private url = "http://localhost:3000/projets";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient,
    private router:Router,
  ) { }


   registerP(projet: Omit<Projets,"id_P">):Observable<Projets>{
    console.log(projet.etat);
    return this.http.post<Projets>(`${this.url}/registerP`,projet,this.httpOptions)
    .pipe(first(),
    catchError(this.errorHandlerService.handleError<Projets>("registerP"))); 
 
  }
 
} 
  


  
  