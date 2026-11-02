import { ChangeDetectorRef, NgModule, provideBrowserGlobalErrorListeners, Service } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { SerieComponent } from './components/serie-component/serie-component';
import { PersonajeSerieComponent } from './components/personaje-serie-component/personaje-serie-component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceSeries } from './services/service.series';

@NgModule({
  declarations: [App, MenuComponent, HomeComponent, SerieComponent, PersonajeSerieComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [provideBrowserGlobalErrorListeners(),ServiceSeries],
  bootstrap: [App],
})
export class AppModule {}
