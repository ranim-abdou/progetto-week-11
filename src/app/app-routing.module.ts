import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomePage } from './home/home/home.page';
/* import { ErrPage } from './err404/err/err.page'; */
/* import { UsersPage } from './users/users/users.page'; */

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'signup',
    component: SignupPage
  },
  {
    path: 'users',
    /* component: UsersPage, */
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)

  },
  {
    path: 'contact',
    canActivate: [AuthGuard],
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '**',
    /* component: ErrPage */
    loadChildren: () => import('./err404/err404.module').then(m => m.Err404Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
