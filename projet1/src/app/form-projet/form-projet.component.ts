import { Component, OnInit } from '@angular/core';
import { FormPCrudService } from '../services/formP-crud.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-projet',
  templateUrl: './form-projet.component.html',
  styleUrls: ['./form-projet.component.css']
})
export class FormProjetComponent implements OnInit {
  registerForm: FormGroup;
  etats: string[] = ['ToDo', 'In Progress','Done'];

  constructor( private formPCrudService :FormPCrudService,  private router: Router) { }

  createFormGroup(): FormGroup {
    return new FormGroup({
      nom_P: new FormControl("", [Validators.required]),
      Pole: new FormControl("", [Validators.required]),
      etat: new FormControl("", [Validators.required]),
      nb_t: new FormControl("", [Validators.required,]),
      date_d: new FormControl("", [Validators.required]),
      date_f: new FormControl("", [Validators.required ]),
    });
  }
  ngOnInit(): void {
    this.registerForm = this.createFormGroup();
  }

  registerP():void{
    console.log(this.registerForm.value);
    this.formPCrudService.registerP(this.registerForm.value).subscribe(()=>{
      this.router.navigate(["chef-projet"]);
    });
  }

}
