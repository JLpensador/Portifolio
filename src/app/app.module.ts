import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardPrimaryComponent } from './components/card-primary/card-primary.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HomeComponent } from './pages/home/home.component';
import { CardSobreComponent } from './components/card-sobre/card-sobre.component';
import { ProjetoComponent } from './pages/projeto/projeto.component';
import { CardProjetosComponent } from './components/card-projetos/card-projetos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardPrimaryComponent,
    SobreComponent,
    HomeComponent,
    CardSobreComponent,
    ProjetoComponent,
    CardProjetosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
