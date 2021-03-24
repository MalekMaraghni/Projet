import { Component, OnInit } from '@angular/core';
import { ProjetCrudService } from '../services/projet-crud.service';
import{ListeCoCrudService} from '../services/listeCo-crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TachesCrudService } from '../services/taches-crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {
 
  tachesDetails = null;
  projetsDetails = null;
  coequipiersDetails = null;
  
  registerForm: FormGroup;
  etats: string[] = ['ToDo', 'In Progress','Done'];

  tacheToUpdate={
    id_t:"",
    nom_t:"",
    description:"",
    date_debut:"",
    date_fin:"",
    etat:"",
    nom_p:"",
    email:"",

  }

  constructor( private projetCrudService: ProjetCrudService ,private listeCoCrudService :ListeCoCrudService,
     private router: Router ,private tacheCrudService : TachesCrudService) {
    this.gettachesDetails();
    this.getProjetsDetails();
      this.getCoDetails();
   }
   gettachesDetails(){
    this.tacheCrudService.getTaches().subscribe(
      (resp) =>{
       // console.log(resp);
        this.gettachesDetails();
        this.tachesDetails = resp;

      },
      (err) =>{
        console.log(err);
      }
    );
  }


  deleteTaches(tache){
    console.log("jehesh");
    console.log(tache.id_t);
    this.tacheCrudService.deleteTaches(tache.id_t).subscribe(
      (resp) =>{
        console.log(resp);
        this.gettachesDetails();
      },
      (err) =>{
        console.log(err);
      }
    );
  }
  getCoDetails(){
    this.listeCoCrudService.getCoequipiers().subscribe(
      (resp) =>{
        //console.log(resp);
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
        //console.log(resp);
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
      description: new FormControl("", [Validators.required ]),
      date_d: new FormControl("", [Validators.required]),
      date_f: new FormControl("", [Validators.required,]),
      nom_P: new FormControl("", [Validators.required ]),
      email: new FormControl("", [Validators.required]),
      etat: new FormControl("", [Validators.required ]),
    });
  }
  registerT():void{
    // console.log(this.registerForm.value);
     this.tacheCrudService.registerT(this.registerForm.value).subscribe(()=>{
       this.router.navigate(["taches"]);
     });
   }

   updateTache(tacheToUpdate){
     this.tacheCrudService.updateTache(tacheToUpdate).subscribe((res)=>{
       console.log(res);
       this.gettachesDetails();
     },
     (err)=>{
       console.log(err);
     });
      
   }
  edit(tache){
    this.tacheToUpdate=tache;
  }
  ngOnInit(): void {
    this.registerForm = this.createFormGroup();
  }

}
