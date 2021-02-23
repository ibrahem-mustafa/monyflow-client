import { Component, OnInit } from '@angular/core';
import { ARTICLE_INTERFACE } from 'src/app/interfaces/article.interface';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  articles:ARTICLE_INTERFACE[] = []
  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articlesService.getAllArticles().subscribe(
      result => {
        this.articles = result.articles;
      },
      error => console.log(error)
    )
  }

}
