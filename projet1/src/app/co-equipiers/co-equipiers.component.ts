import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { taches } from '../models/taches';
import { TachesCrudService } from '../services/taches-crud.service';
import { ProjetCrudService } from '../services/projet-crud.service';
import{ListeCoCrudService} from '../services/listeCo-crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-co-equipiers',
  templateUrl: './co-equipiers.component.html',
  styleUrls: ['./co-equipiers.component.css']
})
export class CoEquipiersComponent implements OnInit {

  onClose(event: any) {
    console.log(event);
  }
  tachesDetails = null;
  projetsDetails = null;
  coequipiersDetails = null;
  toppings = new FormControl();
  registerForm: FormGroup;
  etats: string[] = ['ToDo', 'In Progress','Done'];

  tacheToUpdate={
    id_t:"",
    etat:"",

  }
  taches$:Observable<taches[]> ;
  constructor(private tachesCrudService: TachesCrudService,private projetCrudService: ProjetCrudService ,private listeCoCrudService :ListeCoCrudService,
    private router: Router 
    ) {
    this.getTachesDetails();
    this.getProjetsDetails();
      this.getCoDetails();
   }

  ngOnInit(): void {
    this.taches$=this.fetchAll();
    this.registerForm = this.createFormGroup();
    
  }
  getTachesDetails(){
    this.tachesCrudService.getTaches().subscribe(
      (resp) =>{
       // console.log(resp);
        this.tachesDetails = resp;
      },
      (err) =>{
        console.log(err);
      }
    );
    
  }

  fetchAll(): Observable<taches[]>{
    return this.tachesCrudService.fetchAll() ;
  }
  edit(tache){
    this.tacheToUpdate=tache;
  }
  getCoDetails(){
    this.listeCoCrudService.getCoequipiers().subscribe(
      (resp) =>{
        console.log(resp);
        this.coequipiersDetails = resp;
      },
      (err) =>{
        console.log(err);
      }
    );
    
  }
  getProjetsDetails(){
    this.projetCrudService.getProjets().subscribe(
      (resp) =>{
        console.log(resp);
        this.projetsDetails = resp;
      },
      (err) =>{
        console.log(err);
      }
    );
    
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      nom_t: new FormControl("", [Validators.required]),
      date_d: new FormControl("", [Validators.required]),
      date_f: new FormControl("", [Validators.required,]),
      nom_P: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required ]),
      etat: new FormControl("", [Validators.required ]),
      description: new FormControl("", [Validators.required ]),
    });
  }
  registerT():void{
     console.log(this.registerForm.value);
     this.tachesCrudService.registerT(this.registerForm.value).subscribe(()=>{
      this.getTachesDetails();
     });
   }
   updateEtat(tacheToUpdate){
  
     this.tachesCrudService.updateEtat(tacheToUpdate).subscribe((res)=>{
       console.log(res);
       this.getTachesDetails();
     },
     (err)=>{
       console.log(err);
     });
      
   }
}
