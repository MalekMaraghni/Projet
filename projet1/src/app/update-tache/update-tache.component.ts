import { Component, OnInit } from '@angular/core';
import { ProjetCrudService } from '../services/projet-crud.service';
import{ListeCoCrudService} from '../services/listeCo-crud.service';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.css']
})
export class UpdateTacheComponent implements OnInit {
  projetsDetails = null;
  coequipiersDetails = null;
  tacheToUpdate={
    id_t:"",
    nom_t:"",
    description:"",
    date_debut:"",
    date_fin:"",
    etat:"",

  }
  etats: string[] = ['To Do', 'In Progress','Done'];

  constructor(private projetCrudService: ProjetCrudService ,
    private listeCoCrudService :ListeCoCrudService,) {

      this.getProjetsDetails();
      this.getCoDetails();
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
  }

}
