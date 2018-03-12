import { CourseService } from './course.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  title = 'List of courses.';
  colspan = 2;
  courses;
  text = 'This a long text & long text &long text &long text &long text.';

  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }

}
