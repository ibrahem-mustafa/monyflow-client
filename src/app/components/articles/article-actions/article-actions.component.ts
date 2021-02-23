import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-actions',
  templateUrl: './article-actions.component.html',
  styleUrls: ['./article-actions.component.css'],
})
export class ArticleActionsComponent implements OnInit {
  @Input() articleId!: string;

  @Output() deleteArticle = new EventEmitter();
  @Output() updateArticle = new EventEmitter();

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {}

  deleteArt() {
    console.log('delete')
    this.articlesService.deleteArticle(this.articleId).subscribe(
      result => console.log('Deleted '),
      error => console.error(error)
    );
    this.deleteArticle.emit()
  }

  updateArt() {
    this.updateArticle.emit()
  }
}
