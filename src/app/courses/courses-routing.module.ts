import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';

const routes: Routes = [
  {path:'courses',component:CourseListComponent},
  {path:'courses/:id', component:CourseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class CoursesRoutingModule { }
