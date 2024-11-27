import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movieservice';
import { CommonModule, formatDate } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormatDate } from '../../pipes/pipe';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.html',
  styleUrls: ['./detalhes.css'],
  imports: [CommonModule,
    FormatDate
  ]
})
export class DetalhesComponente implements OnInit {
  filme: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.movieService.getMovieDetails(id).subscribe((data) => {
      this.filme = data;
    });
  }
}