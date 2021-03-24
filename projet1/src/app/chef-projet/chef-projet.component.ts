import { Component, OnInit } from '@angular/core';
import { ProjetCrudService } from '../services/projet-crud.service';
import {TacheDCrudService} from '../services/tacheD-crud.service';
import { FormPCrudService } from '../services/formP-crud.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-chef-projet',
  templateUrl: './chef-projet.component.html',
  styleUrls: ['./chef-projet.component.css']
})
export class ChefProjetComponent implements OnInit {
  projetsDetails = null;
  tacheD = null;
  registerForm: FormGroup;
  etats: string[] = ['ToDo', 'In Progress','Done'];



  projetToUpdate={
    id_P:"",
    nom_P:"",
    Pole:"",
    nb_taches:"",
    date_debut:"",
    date_fin:"",
    etat:"",

  }
 
  constructor(private projetCrudService: ProjetCrudService ,
    private tacheDCrudService :TacheDCrudService,private formPCrudService :FormPCrudService,
      private router: Router
    ) {
    this.getProjetsDetails();
    this.gettacheD();
    
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

deleteProjets(projet){
  this.projetCrudService.deleteProjets(projet.id_P).subscribe(
    (resp) =>{
      console.log(resp);
      this.getProjetsDetails();
    },
    (err) =>{
      console.log(err);
    }
  );
}



gettacheD(){
  this.tacheDCrudService.gettacheD().subscribe(
    (resp) =>{
      console.log(resp);
      this.tacheD = resp;
    },
    (err) =>{
      console.log(err);
    }
  );
  
}
edit(projet){
  this.projetToUpdate=projet;
}


updateProjet(projetToUpdate){
 //console.log(projetToUpdate);
  this.projetCrudService.updateProjets(projetToUpdate).subscribe((res)=>{
    console.log(res);
    this.getProjetsDetails();
  },
  (err)=>{
    console.log(err);
  });
   
}

createFormGroup(): FormGroup {
  return new FormGroup({
    nom_P: new FormControl("", [Validators.required]),
    Pole: new FormControl("", [Validators.required]),
    nb_t: new FormControl("", [Validators.required,]),
    date_d: new FormControl("", [Validators.required]),
    date_f: new FormControl("", [Validators.required ]),
    etat: new FormControl("", [Validators.required]),
  });
}
  ngOnInit(): void {
    this.registerForm = this.createFormGroup();  
  }
  registerP():void{
   //console.log(this.registerForm.value);
    this.formPCrudService.registerP(this.registerForm.value).subscribe(()=>{
      this.getProjetsDetails();
    });
   
  }
  }


