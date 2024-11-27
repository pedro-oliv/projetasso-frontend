import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movieservice';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { formatDate } from '@angular/common';
import { FormatDate } from '../../pipes/pipe';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.html',
  styleUrls: ['./listagem.css'],
  imports: [CommonModule,
    RouterLink,
    FormatDate
  ],
})
export class ListagemComponente implements OnInit {
  filmes: any[] = [];
  erro: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe({
      next: (data) => (this.filmes = data.results),
      error: () => (this.erro = 'Erro ao carregar filmes.')
    });
  }
}