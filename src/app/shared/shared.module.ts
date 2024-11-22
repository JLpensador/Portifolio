import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPrimaryComponent } from '../components/card-primary/card-primary.component';
import { CardProjetosComponent } from '../components/card-projetos/card-projetos.component';
import { CardResumoComponent } from '../components/card-resumo/card-resumo.component';
import { CardSobreComponent } from '../components/card-sobre/card-sobre.component';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../pages/home/home.component';
import { ProjetoComponent } from '../pages/projeto/projeto.component';
import { ResumoComponent } from '../pages/resumo/resumo.component';
import { SobreComponent } from '../pages/sobre/sobre.component';
import { PagesModule } from '../pages/pages.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ProjetoComponent,
    ResumoComponent,
    HeaderComponent,
    CardPrimaryComponent,
    CardSobreComponent,
    CardProjetosComponent,
    CardResumoComponent,
  ],
  imports: [CommonModule, PagesModule, ComponentsModule],
  exports: [
    HomeComponent,
    SobreComponent,
    ProjetoComponent,
    ResumoComponent,
    HeaderComponent,
    CardPrimaryComponent,
    CardSobreComponent,
    CardProjetosComponent,
    CardResumoComponent,
  ],
})
export class SharedModule {}
