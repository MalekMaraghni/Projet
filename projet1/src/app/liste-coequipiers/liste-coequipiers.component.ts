import { Component, OnInit } from '@angular/core';
import{ListeCoCrudService} from '../services/listeCo-crud.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-liste-coequipiers',
  templateUrl: './liste-coequipiers.component.html',
  styleUrls: ['./liste-coequipiers.component.css']
})
export class ListeCoequipiersComponent implements OnInit {
  signupForm: FormGroup;
  toppings = new FormControl();

  coequipiersDetails = null;
  roles: string[] = ['chef-projet', 'co-equipiere',];

  coToUpdate={
    id:"",
    email:"",
    numero:""
  }


  constructor( private listeCoCrudService :ListeCoCrudService,private authService: AuthService, private router: Router) { 
    this.getCoDetails();
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
 
  updateCo(coToUpdate){
     this.listeCoCrudService.updateCo(coToUpdate).subscribe((res)=>{
       console.log(res);
     },
     (err)=>{
       console.log(err);
     });
      
   }
  deleteCoequipiers(co){
    this.listeCoCrudService.deletecoequipiers(co.id).subscribe(
      (resp) =>{
        console.log(resp);
        this.getCoDetails();
      },
      (err) =>{
        console.log(err);
      }
    );
  }
  edit(co){
    this.coToUpdate=co;
  }
  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      role: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      nom: new FormControl("", [Validators.required]),
      prenom: new FormControl("", [Validators.required]),
      numero: new FormControl("", [Validators.required, Validators.minLength(8)]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }
  signup(): void {
    //console.log(this.signupForm.value);
    this.authService.signup(this.signupForm.value).subscribe((msg) => {
      console.log(msg);
      this.getCoDetails();
    });
  }

}
