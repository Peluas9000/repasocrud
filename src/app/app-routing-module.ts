import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { SerieComponent } from './components/serie-component/serie-component';
import { PersonajeSerieComponent } from './components/personaje-serie-component/personaje-serie-component';
import { CreateComponent } from './components/create-component/create-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "serie/:idSerie", component: SerieComponent },
  { path: "personaje/:idSerie", component: PersonajeSerieComponent },
  
  { path: "crear", component: CreateComponent }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
