import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { ResumoComponent } from './resumo/resumo.component';

@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ProjetoComponent,
    ResumoComponent,
  ],
  imports: [CommonModule],
})
export class PagesModule {}
