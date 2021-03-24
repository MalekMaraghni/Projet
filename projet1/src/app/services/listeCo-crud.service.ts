import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { catchError, first, tap } from "rxjs/operators";
import { User } from "../models/user";

import { ErrorHandlerService } from "./error-handler.service";


@Injectable({
  providedIn: "root",
})
export class ListeCoCrudService {
  private url = "http://localhost:3000/liste_co";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient
  ) { }

   public getCoequipiers() {
    return this.http.get(this.url + '/getAllcoequipiers');
  }
 

  public deletecoequipiers(id) {
    return this.http.delete(this.url + '/deleteCo/' + id);
  }

  public updateCo(user: Omit<User,"id">):Observable<User>{
    return this.http.put<User>(`${this.url}/putco`,user,this.httpOptions).pipe(first(),
    catchError(this.errorHandlerService.handleError<User>("updateCo")));
    
  
  }
}
