import { Component, AfterViewInit } from '@angular/core';
import { GetTeacherListService } from '../get-teacher-list.service';

@Component({
  selector: 'app-teacher-display',
  templateUrl: './teacher-display.component.html',
  styleUrls: ['./teacher-display.component.less']
})
export class TeacherDisplayComponent implements AfterViewInit {

  constructor(private getTeachers: GetTeacherListService) { 
    
  }

  ngAfterViewInit() {
    this.createTeacherDisplay();
    
  }

  teachers: any[] = this.getTeachers.teachers;
  indexCounter: number = this.teachers.length;

  mobileScrollStackCheck(){
    let view = document.getElementById('cardViewport').getBoundingClientRect();
    
    for(let i=0; i<this.teachers.length; i++){

      let card = document.getElementById(this.teachers[i].id);
      let rect = card.getBoundingClientRect();

      if(rect.top >= 0 && rect.left >= 0 && rect.bottom <=(window.innerHeight || document.documentElement.clientHeight) && 
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)){
        this.toTopOfStack(this.teachers[i].id);
        card.classList.add("scaled");
        for(let a=0; a<this.teachers.length; a++){
          if(a !== i){
            document.getElementById(this.teachers[a].id).classList.remove("scaled");
          }
        }
      }
      if(i == 0 && view.top > 130){
        document.getElementById(this.teachers[i].id).classList.remove("scaled");
      }
      if(i == (this.teachers.length - 1) && rect.top < -30){
        document.getElementById(this.teachers[i].id).classList.remove("scaled");
      }
    }
  }

  toTopOfStack(boxId){
    let el = document.getElementById(boxId);
    el.style.zIndex = `${this.teachers.length}`;
    for (let i = 0; i < this.teachers.length; i++){
      if (this.teachers[i].id === boxId){
        let lowIndexCounter = 1;
        let highIndexCounter = this.teachers.length - 1;
        for (let a = 0; a < this.teachers.length; a++){
          if (a < i){
            document.getElementById(this.teachers[a].id).style.zIndex = `${lowIndexCounter}`;
            lowIndexCounter++;
          }
          if (a > i){
            document.getElementById(this.teachers[a].id).style.zIndex = `${highIndexCounter}`;
            highIndexCounter--;
          }
        }
        break;
      }
    }
  }

  createTeacherDisplay(){
    if(window.innerWidth < 1300){
      document.getElementById("cardViewport").style.height = `calc(${this.teachers.length * 50}vh - 50vh + 30px)`;
      for(let i=0; i<this.teachers.length; i++){
        let projectId = this.teachers[i].id;
        
        
        let el = document.getElementById(this.teachers[i].id);
        el.style.top = `${40 * i}vh`;
        el.style.zIndex = `${this.indexCounter}`;
        this.indexCounter--;
      }
    }
    window.addEventListener('scroll', () => {this.mobileScrollStackCheck()});
  }

}

