import { Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignIn1Component } from './pages/sign-in-1/sign-in-1.component';
import { SignIn2Component } from './pages/sign-in-2/sign-in-2.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { JobPostDetailComponent } from './pages/job-post-detail/job-post-detail.component';
import {ListAppliedJobComponent} from './pages/list-applied-job/list-applied-job.component';
import {FavListComponent} from './pages/fav-list/fav-list.component';
import {PostListComponent} from './pages/post-list/post-list.component';
import {ApplicantListComponent} from './pages/applicant-list/applicant-list.component';
import { CompanyComponent } from './pages/company/company.component';
import { CategoriesComponent } from './pages/categories/categories.component';





export const routes: Routes = [
  { path: 'sign-in', component: SignInComponent, pathMatch: 'full' },
  { path: 'sign-in-1', component: SignIn1Component, pathMatch:'full'},
  { path: 'sign-in-2', component: SignIn2Component, pathMatch:'full'},
  { path: 'forget-password', component: ForgetPasswordComponent, pathMatch:'full'},
  { path: 'search-result', component: SearchResultsComponent, pathMatch:'full'},
  { path: 'job-post', component: JobPostDetailComponent, pathMatch:'full'},
  {path:'list-applied-job',component: ListAppliedJobComponent, pathMatch:'full'},
  {path:'fav-list',component: FavListComponent, pathMatch:'full'},
  {path:'post-list',component: PostListComponent, pathMatch:'full'},
  {path:'applicant-list',component: ApplicantListComponent, pathMatch:'full'},
  {path:'company',component: CompanyComponent, pathMatch:'full'},
  {path:'categories',component: CategoriesComponent, pathMatch:'full'},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }