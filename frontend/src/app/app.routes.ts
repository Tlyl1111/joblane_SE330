import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignIn1Component } from './pages/sign-in-1/sign-in-1.component';
import { SignIn2Component } from './pages/sign-in-2/sign-in-2.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { JobPostDetailComponent } from './pages/job-post-detail/job-post-detail.component';
import { ApplicantListComponent} from './pages/applicant-list/applicant-list.component'
import { PostListComponent} from './pages/post-list/post-list.component'
import { PersonalEmployerComponent} from './pages/personal-employer/personal-employer.component'
import { PersonalJobSeekerComponent} from './pages/personal-jobseeker/personal-jobseeker.component'
import {FavListComponent} from './pages/fav-list/fav-list.component'
import {ListAppliedJobComponent} from './pages/list-applied-job/list-applied-job.component'
import { NewCompanyComponent } from './pages/new-company/new-company.component';
import { ApplyCVComponent } from './pages/apply-cv/apply-cv.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PostNewJobComponent } from './pages/post-new-job/post-new-job.component';


import { NgModule } from '@angular/core';



export const routes: Routes = [
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-in-1', component: SignIn1Component},
  { path: 'sign-in-2', component: SignIn2Component},
  { path: 'forget-password', component: ForgetPasswordComponent},
  { path: 'search-result', component: SearchResultsComponent},
  { path: 'job-post', component: JobPostDetailComponent},
  { path: 'applicant-list', component: ApplicantListComponent},
  { path: 'post-list', component: PostListComponent},
  { path: 'personal-employer', component: PersonalEmployerComponent},
  { path: 'personal-jobseeker', component: PersonalJobSeekerComponent},
  { path: 'fav-list', component: FavListComponent},
  { path: 'list-applied-job', component: ListAppliedJobComponent},
  { path: 'new-company', component: NewCompanyComponent},
  { path: 'apply-cv', component: ApplyCVComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'post-new-job', component: PostNewJobComponent}
  

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }