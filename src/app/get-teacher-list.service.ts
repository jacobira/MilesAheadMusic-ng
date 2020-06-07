import { Injectable } from '@angular/core';
import { ServerLinkService } from './server-link.service';

@Injectable({
  providedIn: 'root'
})
export class GetTeacherListService {

  constructor(private serverLink: ServerLinkService) {
    this.getTeachersDB();
  }

  getTeachersDB(){
    this.serverLink.ioSocket.emit('getTeachers');
    this.serverLink.ioSocket.on('teacherListSend', (data) => {
        console.log('teachers cleared');
        let teacherData = JSON.parse(data);
        for (let i=0; i<teacherData.rows.length; i++){
            this.teachers.push(
                {
                    "name": teacherData.rows[i].name,
                    "basicDes": teacherData.rows[i].basicdes,
                    "bio": teacherData.rows[i].bio,
                    "id": teacherData.rows[i].id,
                    "photo": teacherData.rows[i].photo
                }
            );
        }
    });

    console.log(this.teachers);
  }

  photoDisplay: string = "";
  nameDisplay: string = "";
  skillsDisplay: string = "";
  bioDisplay: string = "";

  teachers: any[] = [

    ];

}
