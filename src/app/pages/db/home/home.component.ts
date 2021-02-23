import { ARTICLE_INTERFACE } from './../../../interfaces/article.interface';
import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articles: ARTICLE_INTERFACE[] = [];
  closeResult = '';
  articleTitle: string = '';
  articleContent: string = '';

  editMode = false;
  articleToEditId = '';

  constructor(
    private articlesService: ArticlesService,
    private userService: UserService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.articlesService
      .getArticlesByPublisher(this.userService.user().id)
      .subscribe(
        (result: any) => {
          this.articles = result.articles;
          console.log(this.articles);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  createArticle() {
    this.articlesService
      .createArticle(this.articleTitle, this.articleContent)
      .subscribe(
        (result: any) => {
          // this.articleCreated.emit(result.article);
          this.articleTitle = '';
          this.articleContent = '';
        },
        (error) => console.log(error)
      );
  }

  updateArticleRequest(modalRef: any) {
    this.articlesService.updateArticle(this.articleToEditId, this.articleTitle, this.articleContent).subscribe(
      result => console.log(result),
      error => console.log(error)
    )
    this.modalService.dismissAll()
    this.editMode = false;
    this.articleTitle = '';
    this.articleContent = '';
    this.articleToEditId = ''
  }

  deleteArticle(id: string) {
    this.articles = this.articles.filter((article) => article._id !== id);
  }

  updateArticle(data: { id: string; title: string; content: string }, ref:any) {
    this.editMode = true;
    this.articleToEditId = data.id;
    this.articleTitle = data.title;
    this.articleContent = data.content;
    this.modalService.open(ref, {
      ariaLabelledBy: 'modal-basic-title',
    });

  }
}
