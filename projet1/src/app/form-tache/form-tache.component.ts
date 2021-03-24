import { Component, OnInit } from '@angular/core';
import { ProjetCrudService } from '../services/projet-crud.service';
import{ListeCoCrudService} from '../services/listeCo-crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TachesCrudService } from '../services/taches-crud.service';

@Component({
  selector: 'app-form-tache',
  templateUrl: './form-tache.component.html',
  styleUrls: ['./form-tache.component.css']
})
export class FormTacheComponent implements OnInit {
  projetsDetails = null;
  coequipiersDetails = null;
  toppings = new FormControl();
  registerForm: FormGroup;
  etats: string[] = ['To Do', 'In Progress','Done'];


  constructor(private projetCrudService: ProjetCrudService ,
    private listeCoCrudService :ListeCoCrudService, private router: Router , private tachesCrudService: TachesCrudService
    ) {
      this.getProjetsDetails();
      this.getCoDetails();

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
     // console.log(this.registerForm.value);
      this.tachesCrudService.registerT(this.registerForm.value).subscribe(()=>{
        this.router.navigate(["taches"]);
      });
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
    
  ngOnInit(): void {
    this.registerForm = this.createFormGroup();
  }
  
}
