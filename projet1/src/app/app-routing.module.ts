import { guardedExpression } from '@angular/compiler/src/render3/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service'
import { ChefProjetComponent } from './chef-projet/chef-projet.component';
import { TachesComponent } from './taches/taches.component';
import { FormProjetComponent } from './form-projet/form-projet.component';
import { CoEquipiersComponent } from './co-equipiers/co-equipiers.component';
import { ListeCoequipiersComponent } from './liste-coequipiers/liste-coequipiers.component';
import { NouveauCompteComponent } from './nouveau-compte/nouveau-compte.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { ArchiveProjetComponent } from './archive-projet/archive-projet.component';
import { ArchiveTacheComponent } from './archive-tache/archive-tache.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormCoComponent } from './form-co/form-co.component';
import { FormTacheComponent } from './form-tache/form-tache.component';
import { UpdateTacheComponent} from './update-tache/update-tache.component';
import { UpdateCoComponent } from './update-co/update-co.component';

const routes: Routes = [
  { path: "co-equipiers", component: CoEquipiersComponent },
  { path: "login", component: LoginComponent },
  { path: "chef-projet", component: ChefProjetComponent,  canActivate: [AuthGuardService] },
  { path: "taches", component: TachesComponent },
  { path: "update_tache", component: UpdateTacheComponent },
  { path: "form-projet", component: FormProjetComponent },
  { path: "liste-coequipiers", component: ListeCoequipiersComponent },
  { path: "update_co", component: UpdateCoComponent },

  { path: "nouveau-compte", component: NouveauCompteComponent },
  { path: "archive-tache", component: ArchiveTacheComponent },
  { path: "archive-projet", component: ArchiveProjetComponent },
  { path: "statistique", component: StatistiqueComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "form-co", component: FormCoComponent },
  { path: "form-tache", component: FormTacheComponent },

  { path: "**", component: LoginComponent, canActivate: [AuthGuardService] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
