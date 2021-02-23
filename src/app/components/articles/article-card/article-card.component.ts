import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent implements OnInit {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() content: string = '';

  @Input() height: number = 150;

  @Output() deleteArticle = new EventEmitter();
  @Output() updateArticle = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToArticle() {
    this.router.navigate(['/articles', this.id]);
  }

  getStyle() {
    return {
      'min-height': `${this.height}px`,
    };
  }

  deleteArt() {
    this.deleteArticle.emit(this.id);
  }

  updateArt() {
    this.updateArticle.emit({
      id: this.id,
      title: this.title,
      content: this.content
    })
  }
}
