import { ArticleComponent } from './pages/article/article.component';
import { NotAuthGuard } from './guards/not-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/db/home/home.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,

  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [NotAuthGuard],
  },
  {
    path: 'db',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'articles/:id',
    component: ArticleComponent,

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
