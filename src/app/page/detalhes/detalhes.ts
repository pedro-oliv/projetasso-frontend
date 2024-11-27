import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movieservice';
import { CommonModule, formatDate } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormatDate } from '../../pipes/pipe';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.html',
  styleUrls: ['./detalhes.css'],
  imports: [CommonModule,
    FormatDate,
    RouterLink
  ]
})
export class DetalhesComponente implements OnInit {
  filme: any = null;
  posterUrl: string = '';

  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    if (movieId) {
      this.getMovieDetails(movieId);
    }
  }
  getMovieDetails(movieId: number): void{
    this.movieService.getMovieDetails(movieId).subscribe((data) =>{
      this.filme = data;
      this.posterUrl = this.movieService.getMoviePoster(data.poster_path);
    });
  }
  voltar(): void{
    this.router.navigate(['/listagem']);
  }
}