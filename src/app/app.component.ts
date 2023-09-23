import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from "./model/course";
import { Pipe } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  inject,
  InjectionToken,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { Observable, throwError } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  /* 
dev = {title :"angular core"};

onInsertDate(newTitle:string){
  this.dev.title = newTitle;
}



startDate = new Date(2000,1,1);
price = 9.9666645569;
rate=0.75;
*/
  //coursesData = COURSES;
  coursesData;
  @ViewChild("card1", { read: ElementRef })
  card: CourseCardComponent;

  @ViewChild("container")
  element: ElementRef;

  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  constructor(private http: HttpClient) {
    //console.log(this.coursesData);
  }
  ngAfterViewInit() {
    // console.log("NG after view init");
    // this.cards.changes.subscribe((data) => console.log(data));
    // this.coursesData.push({
    //   id: 3,
    //   description: "NgRx In Depth",
    //   longDescription:
    //     "Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.",
    //   iconUrl:
    //     "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png",
    //   category: "ADVANCED",
    // });
  }

  ngOnInit() {
    const params = new HttpParams().set("page", 1).set("pageSize", 3);
    // this.http
    //   .get("http://localhost:9000/api/courses", { params })
    //   .subscribe((course) => {
    //     this.coursesData = course;
    //   });

    this.http
      .get<Course[]>("http://localhost:9000/api/courses", { params })
      .subscribe((courses) => (this.coursesData = courses));
    console.log(this.coursesData);
  }

  onRecieve(courseRev: Course) {
    //console.log(courseRev);
    //console.log(this.element);
  }

  directiveCalled(isHighlighted: boolean) {
    console.log("diretive called" + isHighlighted);
  }
}
