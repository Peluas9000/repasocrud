import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { SerieComponent } from './components/serie-component/serie-component';
import { PersonajeSerieComponent } from './components/personaje-serie-component/personaje-serie-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "serie", component: SerieComponent },
  { path: "personaje", component: PersonajeSerieComponent },
  {path:"personajeserie/:idSerie", component:PersonajeSerieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
