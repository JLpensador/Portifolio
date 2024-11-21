import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardPrimaryComponent } from './card-primary/card-primary.component';
import { CardSobreComponent } from './card-sobre/card-sobre.component';
import { CardProjetosComponent } from './card-projetos/card-projetos.component';
import { CardResumoComponent } from './card-resumo/card-resumo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CardPrimaryComponent,
    CardSobreComponent,
    CardProjetosComponent,
    CardResumoComponent,
  ],
  imports: [CommonModule],
})
export class ComponentsModule {}
