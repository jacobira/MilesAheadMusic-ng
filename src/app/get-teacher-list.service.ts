import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTeacherListService {

  constructor() {
    this.getTeachersDB();
  }

  getTeachersDB(){
    //For future query of database.
    //this.teachers = #queried content#
  }

  photoDisplay: string = "";
  nameDisplay: string = "";
  skillsDisplay: string = "";
  bioDisplay: string = "";

  teachers: any[] = [{
    "name":"Madison Moline",
    "basicDes":"Viola & Violin",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor1",
    "photo":"madisonMoline.png"
},
{
    "name":"Jason Fullmer",
    "basicDes":"Guitar, Ukulele, Banjo & Mandolin",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor2",
    "photo":"jasonFullmer.png"
},
{
    "name":"Austie Robinson",
    "basicDes":"Trumpet",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor3",
    "photo":"austieRobinson.png"
},
{
    "name":"Nelsen Campbell",
    "basicDes":"Trombone",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor4",
    "photo":"nelsenCampbell.png"
},
{
    "name":"Myles Lawrence",
    "basicDes":"Saxophone & Clarinet",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor5",
    "photo":"mylesLawrence.png"
},
{
    "name":"Megan Carson",
    "basicDes":"Voice",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor6",
    "photo":"meganCarson.png"
},
{
    "name":"Jordan Turner",
    "basicDes":"Songwriting & Music Production",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor7",
    "photo":"generic.png"
},
{
    "name":"Mitch Romney",
    "basicDes":"Drums",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor8",
    "photo":"mitchRomney.png"
}
,
{
    "name":"Lauren Erickson",
    "basicDes":"Flute",
    "bio": "Bacon ipsum dolor amet kevin beef tri-tip swine. Ground round tenderloin bresaola, porchetta burgdoggen tri-tip shankle chuck andouille salami pastrami hamburger. Beef brisket cow, rump chicken capicola filet mignon bacon alcatra shank boudin sirloin pastrami turkey.",
    "id":"instructor9",
    "photo":"generic.png"
}
];

}
