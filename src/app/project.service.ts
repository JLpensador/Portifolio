import { Injectable } from '@angular/core';
import { link } from 'node:fs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getProjects() {
    return [
      {
        name: 'Calculadora de Pirâmide Hexagonal',
        description:
          'Um projeto de matemática sobre uma calculadora de pirâmide hexagonal, onde você calcula a área da base, área lateral, área total e o seu volume | Feito com HTML, CSS, Javascript e Python (terminal).',
        link: 'https://jlpensador.github.io/Calculadora_Piramide_Hexagonal/',
      },

      {
        name: 'Doll',
        description:
          'Um Site de doação de objetos feito unicamente para o evento Mandroid feito pela minha  Escola Estadual Profissionalizante Mário Alencar. Esse repositório tem como objetivo promover o desenvolvimento de um projeto de doações online feito com Html, Css, JavaScript e Json.',
        link: 'https://jlpensador.github.io/DOLL/',
      },

      {
        name: 'Efeito Matrix',
        description:
          'Um efeito estilo a série de filmes matrix. Feito com python.',
        link: 'https://github.com/JLpensador/Efeito_matrix',
      },

      {
        name: 'Gerenciador de Produtos',
        description:
          'Um Gerenciador para a administração e gerenciamentos de produtos diversos.',
        link: 'https://github.com/JLpensador/gerenciadorProdutos',
      },

      {
        name: 'Hot Wheels AcceleRacers',
        description:
          'Um carrossel de imagens da série de filmes hot wheels Acceleracers.',
        link: 'https://jlpensador.github.io/Hot_Wheels_AcceleRacers/',
      },
      {
        name: 'Informante News',
        description:
          'informanteNews é um projeto desenvolvido para fornecer uma interface moderna e intuitiva para acessar as últimas notícias de várias fontes. O aplicativo permite a visualização de headlines e artigos de notícias de diversos jornais e mídias.',
        link: 'https://informantenews.netlify.app',
      },

      {
        name: 'Jogo da Cobrinha',
        description:
          'Um Jogo inspirado no clássico jogo da Cobrinha feito com Html. Css e JavaScript.',
        link: 'https://jlpensador.github.io/Jogo_da_Cobrinha/',
      },

      {
        name: 'Pomodoro Timer',
        description:
          'Este é um projeto de Pomodoro Timer desenvolvido com Angular. O Pomodoro Timer é uma técnica de gerenciamento de tempo que utiliza blocos de trabalho seguidos de pausas curtas, ajudando a melhorar a produtividade e o foco.',
        link: 'pomodoro-timer-one-swart.vercel.app',
      },

      {
        name: 'MA Soluções',
        description:
          'Oferecer a comunidade escolar oportunidades para uma qualificação profissional gratuita de excelência incentivada pela aprendizagem e pelo desenvolvimento de ideias com troca de experiências nas mais diversas áreas das tecnológicas presentes na sociedade por meio da solidariedade com o compromisso e responsabilidade social.',
        link: 'jlpensador.github.io/MA_Solucoes/',
      },

      {
        name: 'Quarto 3D',
        description:
          'Um quarto 3D onde você pode mexer a sua tela para poder movimenta-lo e ver de outros ângulos. Feito com Html, Css e Javascript.',
        link: 'jlpensador.github.io/Quarto_3D/',
      },

      {
        name: 'Pesquisador de Imagens',
        description:
          'Um projeto no qual você pode pesquisar por imagens. Feito com Html, Css, e Javascript.',
        link: 'https://jlpensador.github.io/Pesquisador_de_imagens/',
      },

      {
        name: 'Jogo da Memória',
        description:
          'Um jogo da Memória com tema de carros, incluindo carros das marcas: Nissan, Koenigsegg, Ferrari, Lamborghini, Toyota, Chevrolet, Mazda, Subaru, McLaren, Ford, Audi, Dmc, Honda, Mitsubishi e McLaren.',
        link: 'https://jlpensador.github.io/Jogo_da_Memoria/',
      },

      {
        name: 'Previsão do Tempo',
        description:
          'Um Projeto de Previsão de Tempo utilizado com API feito com Html, Css e JavaScript.',
        link: 'https://jlpensador.github.io/previsaoTempo/',
      },

      {
        name: 'Organizador de Arquivos',
        description:
          'Um programa de automação desenvolvido em Python, destinado à organização de arquivos de naturezas diversas, apresenta uma solução eficiente para a gestão e ordenação de dados em sistemas computacionais.',
        link: 'https://github.com/JLpensador/Organizador_de_Arquivos',
      },

      {
        name: 'Pokedex',
        description:
          'Uma pokedex da série de jogos e filmes Pokemon. Feito com Html, Css, e JavaScript',
        link: 'https://jlpensador.github.io/Pokedex/',
      },
    ];
  }
}
