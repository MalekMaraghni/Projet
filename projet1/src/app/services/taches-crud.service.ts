import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError, first, tap } from "rxjs/operators";

import { ErrorHandlerService } from "./error-handler.service";

import { taches } from "../models/taches";

@Injectable({
  providedIn: "root",
})
export class TachesCrudService {
  private url = "http://localhost:3000/taches";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient
  ) { }
  
  registerT(tache: Omit<taches,"id_P">):Observable<taches>{
    return this.http.post<taches>(`${this.url}/registerT`,tache,this.httpOptions)
    .pipe(first(),
    catchError(this.errorHandlerService.handleError<taches>("registerT")));
  }
  public getTaches() {
    return this.http.get(this.url + '/getAlltaches');
  }
  public getTachesDone() {
    return this.http.get(this.url + '/gettaches');
  }

  public deleteTaches(id_t) {
    console.log(id_t);
    return this.http.delete(this.url + '/deletetaches/'+ id_t);
  }
  public updateTache(tache: Omit<taches,"id_t">):Observable<taches>{
    return this.http.put<taches>(`${this.url}/puttache`,tache,this.httpOptions).pipe(first(),
    catchError(this.errorHandlerService.handleError<taches>(" updateTache")));
    
  
  }

  fetchAll(): Observable<taches[]>{
    return this.http.get<taches[]>(this.url,{responseType:"json"}).pipe(tap((_)=>console.log("fatched taches")),
    catchError(this.errorHandlerService.handleError<taches[]>("fetchAll",[])))
  }
post(taches: Partial<taches>){
  console.log(taches);
  return this.http.post<Partial<taches>>(this.url+ '/posttaches_enprogress', this.httpOptions).pipe(
    catchError( 
      this.errorHandlerService.handleError<any>("post")
    )
  )
}
public updateEtat(tache: Omit<taches,"id_t">):Observable<taches>{
  console.log(tache);
  return this.http.put<taches>(`${this.url}/putEtat`,tache,this.httpOptions).pipe(first(),
  catchError(this.errorHandlerService.handleError<taches>(" updateEtat")));
  

}

}