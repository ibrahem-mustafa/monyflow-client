import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { DefaultNavComponent } from './components/nav/default-nav/default-nav.component';
import { HomeComponent } from './pages/db/home/home.component';
import { DefaultBarComponent } from './components/bar/default-bar/default-bar.component';
import { ArticleCardComponent } from './components/articles/article-card/article-card.component';
import { IndexComponent } from './pages/index/index.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticleActionsComponent } from './components/articles/article-actions/article-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DefaultNavComponent,
    HomeComponent,
    DefaultBarComponent,
    ArticleCardComponent,
    IndexComponent,
    ArticleComponent,
    ArticleActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
