import { Component, OnInit } from '@angular/core';
import { GetTeacherListService } from '../get-teacher-list.service';

@Component({
  selector: 'app-bio-display',
  templateUrl: './bio-display.component.html',
  styleUrls: ['./bio-display.component.less']
})
export class BioDisplayComponent implements OnInit {

  constructor(private getTeachers: GetTeacherListService) { }

  ngOnInit() {
  }

  teachers: any[] = this.getTeachers.teachers;

  hideTeacherBio(teacherID){
    for(let i=0; i<this.teachers.length; i++){
      if(this.teachers[i].id == teacherID){
        document.getElementById(`${teacherID}Bio`).classList.add('hidden');
      }
    }
  }
}
