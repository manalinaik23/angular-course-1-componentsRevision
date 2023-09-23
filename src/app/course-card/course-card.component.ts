import {
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { CourseImageComponent } from "../course-image/course-image.component";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Input()
  noImageTPL: TemplateRef<any>;

  @ContentChild(CourseImageComponent)
  courseImage: CourseImageComponent;

  @ContentChildren(CourseImageComponent)
  Images: QueryList<CourseImageComponent>;

  @Output("courseSelected")
  courseSelected = new EventEmitter<Course>();

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    console.log("after Content Init");
    this.Images.forEach((data) => console.log(data));
  }

  viewCourse() {
    this.courseSelected.emit(this.course);
  }
  onApplyCSS() {
    return {
      beginner: this.course.category === "BEGINNER",
      advanced: this.course.category === "ADVANCED",
    };
  }
}
