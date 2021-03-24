import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { ProjetCrudService } from '../services/projet-crud.service';




@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  projetsDetails = null;

  

  constructor(private projetCrudService: ProjetCrudService ,) { 
    this.getProjetsDetails();
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
 
  ngOnInit(): void {
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true,
    events: [
      { title: 'event1', date: '2021-03-22' },
      { title: 'event 2', date: '2021-04-02' }
    ]
  };

 



}
