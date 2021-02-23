import { ARTICLE_INTERFACE } from './../../interfaces/article.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleId: string = '';
  article!: ARTICLE_INTERFACE
  constructor(private route: ActivatedRoute, private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id')!
    this.articlesService.getArticleById(this.articleId).subscribe(
      (result:any) => { this.article = result.article },
      error => { console.log(error)}
    )
  }

}
