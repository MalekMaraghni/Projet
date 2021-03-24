import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChartsModule} from 'ng2-charts';

import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatIconModule} from "@angular/material/icon";
import { MatCardModule} from "@angular/material/card";
import { MatTableModule} from "@angular/material/table";
import { MatRippleModule } from '@angular/material/core';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);



import { LoginComponent } from './login/login.component';
import { ChefProjetComponent } from './chef-projet/chef-projet.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { TachesComponent } from './taches/taches.component';
import { FormProjetComponent } from './form-projet/form-projet.component';
import { CoEquipiersComponent } from './co-equipiers/co-equipiers.component';
import { ArchiveProjetComponent } from './archive-projet/archive-projet.component';
import { ArchiveTacheComponent } from './archive-tache/archive-tache.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormTacheComponent } from './form-tache/form-tache.component';
import { ListeCoequipiersComponent } from './liste-coequipiers/liste-coequipiers.component';
import { NouveauCompteComponent } from './nouveau-compte/nouveau-compte.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormCoComponent } from './form-co/form-co.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { UpdateTacheComponent } from './update-tache/update-tache.component';
import { UpdateCoComponent } from './update-co/update-co.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChefProjetComponent,
    TachesComponent,
    FormProjetComponent,
    CoEquipiersComponent,
    ArchiveProjetComponent,
    ArchiveTacheComponent,
    CalendarComponent,
    FormTacheComponent,
    ListeCoequipiersComponent,
    NouveauCompteComponent,
    StatistiqueComponent,
    FormCoComponent,
    UpdateProjetComponent,
    UpdateTacheComponent,
    UpdateCoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatBottomSheetModule,
    MatStepperModule,
    MatRippleModule,
    MatFormFieldModule,
    MatSliderModule ,
    MatProgressSpinnerModule,
    MatSelectModule,
    FullCalendarModule,
    ChartsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    AuthInterceptorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
