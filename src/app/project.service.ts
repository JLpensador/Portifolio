import { Injectable } from '@angular/core';
import { link } from 'node:fs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getProjects() {
    return [
      {
        name: 'Doll',
        image: 'doll.gif',
        description:
          'Um Site de doação de objetos feito unicamente para o evento Mandroid feito pela minha  Escola Estadual Profissionalizante Mário Alencar.',
        link: 'https://jlpensador.github.io/DOLL/',
      },

      {
        name: 'Efeito Matrix',
        image: 'matrix.gif',
        description:
          'Um efeito inspirado na série de filmes Matrix. Criado usando Python, simula a chuva de caracteres verdes caindo em colunas, característica marcante do estilo visual da série.',
        link: 'https://github.com/JLpensador/Efeito_matrix',
      },

      {
        name: 'Gerenciador de Produtos',
        image: 'gerenciadorProdutos.gif',
        description:
          'Um gerenciador para administração e gerenciamento de produtos diversos. Desenvolvido para simplificar o controle de estoque e organização de categorias',
        link: 'https://github.com/JLpensador/gerenciadorProdutos',
      },

      {
        name: 'Hot Wheels AcceleRacers',
        image: 'hotWheels.gif',
        description:
          'Um carrossel de imagens dinâmico da série de filmes Hot Wheels Acceleracers. com transições suaves e controles intuitivos para aprimorar a experiência de visualização.',
        link: 'https://jlpensador.github.io/Hot_Wheels_AcceleRacers/',
      },
      {
        name: 'Informante News',
        image: 'informanteNews.png',
        description:
          'informanteNews é um projeto desenvolvido para fornecer uma interface moderna e intuitiva para acessar as últimas notícias de várias fontes.',
        link: 'https://informantenews.netlify.app',
      },

      {
        name: 'Jogo da Cobrinha',
        image: 'cobrinha.gif',
        description:
          'Um jogo interativo inspirado no clássico Jogo da Cobrinha, desenvolvido com HTML, CSS e JavaScript. Estilo retrô com uma implementação moderna para navegadores.',
        link: 'https://jlpensador.github.io/Jogo_da_Cobrinha/',
      },

      {
        name: 'Jogo da Memória',
        image: 'memoria.gif',
        description:
          'Um jogo da memória com tema de carros, desenvolvido com HTML, CSS e JavaScript. Neste jogo, o objetivo é encontrar os pares de cartas correspondentes.',
        link: 'https://jlpensador.github.io/Jogo_da_Memoria/',
      },

      {
        name: 'MA Soluções',
        image: 'MA.gif',
        description:
          'Oferecer a comunidade escolar oportunidades para uma qualificação profissional gratuita de excelência em troca de experiências nas áreas da tecnológica',
        link: 'jlpensador.github.io/MA_Solucoes/',
      },

      {
        name: 'Midnight 3',
        image: 'midnight.gif',
        description:
          'Midnight Club 3: DUB Edition é um jogo eletrônico de corrida desenvolvido pela Rockstar San Diego e publicado pela Rockstar Games.',
        link: 'https://jlpensador.github.io/Midnight_Club_3/',
      },

      {
        name: 'Pesquisador de Imagens',
        image: 'pesquisarImagens.gif',
        description:
          'Um projeto de pesquisa de imagens desenvolvido com HTML, CSS e JavaScript. Esse projeto permite buscar por imagens utilizando uma interface amigável e intuitiva.',
        link: 'https://jlpensador.github.io/Pesquisador_de_imagens/',
      },

      {
        name: 'Nirvana',
        image: 'nirvana.gif',
        description:
          'Nirvana foi uma banda de rock formada pelo vocalista e guitarrista Kurt Cobain e pelo baixista Krist Novoselic em Aberdeen no ano de 1987. ',
        link: 'https://jlpensador.github.io/Nirvana/',
      },

      {
        name: 'Pirâmide Hexagonal',
        image: 'calculadora_piramide.gif',
        description:
          'Um projeto de matemática sobre uma calculadora de pirâmide hexagonal, onde você calcula a área da base, área lateral, área total e o seu volume | Feito com HTML, CSS, Javascript e Python (terminal).',
        link: 'https://jlpensador.github.io/Calculadora_Piramide_Hexagonal/',
      },

      {
        name: 'Pokedex',
        image: 'pokedex.gif',
        description:
          'Uma Pokédex interativa inspirada na série de jogos e filmes Pokémon, desenvolvida com HTML, CSS e JavaScript. Com um design que remete à icônica Pokédex da série',
        link: 'https://jlpensador.github.io/Pokedex/',
      },

      {
        name: 'Pomodoro Timer',
        image: 'pomodoro.gif',
        description:
          'Este é um projeto de Pomodoro Timer desenvolvido com Angular. O Pomodoro Timer é uma técnica de gerenciamento de tempo que utiliza blocos de trabalho seguidos de pausas curtas.',
        link: 'pomodoro-timer-one-swart.vercel.app',
      },

      {
        name: 'Previsão do Tempo',
        image: 'tempo.gif',
        description:
          'Um projeto de previsão do tempo desenvolvido com HTML, CSS e JavaScript, que utiliza uma API para fornecer informações meteorológicas em tempo real.',
        link: 'https://jlpensador.github.io/previsaoTempo/',
      },

      {
        name: 'Quarto 3D',
        image: 'quarto.gif',
        description:
          'Um quarto 3D onde você pode mexer a sua tela para poder movimenta-lo e ver de outros ângulos. Feito com Html, Css e Javascript.',
        link: 'jlpensador.github.io/Quarto_3D/',
      },

      {
        name: 'Organizador de Arquivos',
        image: 'organizadorArquivos.png',
        description:
          'Um programa de automação desenvolvido em Python, criado para organizar arquivos de diferentes naturezas, oferecendo uma solução eficiente para a gestão e ordenação de dados em sistemas computacionais. Esse programa identifica automaticamente o tipo de arquivo (como documentos, imagens, vídeos, etc.) e os organiza em pastas específicas.',
        link: 'https://github.com/JLpensador/Organizador_de_Arquivos',
      },

      {
        name: 'Tocador de Músicas',
        image: 'musica.gif',
        description:
          'Este projeto permite ao usuário reproduzir, pausar e navegar entre faixas de áudio, oferecendo uma interface intuitiva e atraente.',
        link: 'https://jlpensador.github.io/Tocador_de_musicas/',
      },
    ];
  }
}
