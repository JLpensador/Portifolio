import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getProjects() {
    return [
      {
        name: 'Doll',
        description:
          'Um Site de doação de objetos feito unicamente para o evento Mandroid feito pela minha  Escola Estadual Profissionalizante Mário Alencar. Esse repositório tem como objetivo promover o desenvolvimento de um projeto de doações online feito com Html, Css, JavaScript e Json',
        link: 'https://jlpensador.github.io/DOLL/',
      },
      {
        name: 'Projeto 2',
        description: 'Descrição do projeto 2',
        link: 'http://link2.com',
      },
    ];
  }
}
