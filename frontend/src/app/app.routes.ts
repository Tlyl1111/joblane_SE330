import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignIn1Component } from './pages/sign-in-1/sign-in-1.component';
import { SignIn2Component } from './pages/sign-in-2/sign-in-2.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { JobPostDetailComponent } from './pages/job-post-detail/job-post-detail.component';
import { NgModule } from '@angular/core';



export const routes: Routes = [
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-in-1', component: SignIn1Component},
  { path: 'sign-in-2', component: SignIn2Component},
  { path: 'forget-password', component: ForgetPasswordComponent},
  { path: 'search-result', component: SearchResultsComponent},
  { path: 'job-post', component: JobPostDetailComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }