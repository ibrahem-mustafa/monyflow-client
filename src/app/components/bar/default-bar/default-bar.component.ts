import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArticlesService } from 'src/app/services/articles.service';


@Component({
  selector: 'app-default-bar',
  templateUrl: './default-bar.component.html',
  styleUrls: ['./default-bar.component.css'],
})
export class DefaultBarComponent implements OnInit {

  @Input() articleModal: any;

  @Output() articleCreated = new EventEmitter();

  articleTitle: string = '';
  articleContent: string = '';

  constructor(
    private modalService: NgbModal,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {}



  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
