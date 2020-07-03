import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-teacher-display',
  templateUrl: './teacher-display.component.html',
  styleUrls: ['./teacher-display.component.less']
})
export class TeacherDisplayComponent {

  constructor() { 
    
  }

  ngOnInit() {
    
  }


  teachers: any[] = [{
    "name":"Jaden Bueno",
    "whatDo":"Trumpet",
    "id":"jadenbueno",
    "bio":`Jaden began playing trumpet at the age of 12, and quickly established himself 
    in the band programs he participated in.  In high school, he joined Caleb Chapman's 
    Soundhouse and performed with the top group, the Crescent Super Band, for a packed house 
    at Carnegie Hall in 2013. Jaden has had the opportunity to share the stage with the likes 
    of Wayne Bergeron, Wycliffe Gordon, David Sanborn, Jeff Coffin, Randy Brecker, Ed Calle, 
    Rashawn Ross, and many more. He has also played with members of Toto, Tower of Power, 
    Gordon Goodwin’s Big Phat Band, the Yellowjackets, Neon Trees and others. With the 
    Soundhouse, he has traveled and performed in Mexico, Croatia, Spain, New Orleans, 
    San Francisco, New York and major festivals around the globe. He has been awarded 5 
    Downbeat awards for his work as a performer and a producer. Jaden is currently majoring 
    in Trumpet Performance and Commercial Music at Utah Valley University. Jaden is a very 
    active performer and educator across the state of Utah.`
  },
  {
    "name":"Lauren Malouf",
    "whatDo":"Piano",
    "id":"laurenmalouf",
    "bio":`Lauren Malouf grew up in the Seattle area, where she started playing piano at age four. 
    One of her biggest inspirations and mentors in her pursuit of music was her own mother, a professional 
    pianist.  In junior high school, Lauren began studying with renowned pianist and teacher Sasha Starcevich 
    and participating in MTNA competitions and other music festivals.  Music is her greatest passion, and she 
    began teaching piano at age 12. In 2015, Lauren began her undergraduate studies in piano performance at 
    Utah State University, where she studied with Gary Amano.  She was also privately mentored and coached in 
    her teaching from various professional musicians in USU’s Youth Conservatory program and became one of 
    their most requested teachers.  Currently, Lauren studies piano performance as a full scholarship student 
    at Utah Valley University under Dr. Hilary Demske.  Besides performing and teaching, she also enjoys 
    collaborative piano and playing piano with orchestras, vocalists, and instrumentalists, and she plans on 
    pursuing a doctoral degree in piano performance.  Aside from playing the piano, Lauren enjoys running, 
    singing, hiking, reading, and spending time with her family and friends.`
  },
  {
    "name":"Jason Fullmer",
    "whatDo":"Guitar/Banjo",
    "id":"jasonfullmer",
    "bio":`Jason Kelly Fullmer is a fretted instrument specialist, playing professionally on guitar, 
    bass, mandolin, ukulele, and banjo. He has played with the Utah Symphony and Opera, the Salt Lake 
    Pops Orchestra and Elacor. He has toured the country playing in different bands, and has taken 
    his solo show to England, Italy, France, and Iceland… so far. He is currently the guitarist for 
    the Chrome Street Quartet and the frontman of the funky jam band Night Sky Supernova. `
  },
  {
    "name":"David Allen",
    "whatDo":"Trombone",
    "id":"davidallen",
    "bio":`From Albany, Oregon, David Allen is a senior at BYU. He studied Trombone Performance with 
    Dr. Will Kimball before transitioning to the Commercial Music program. David has now worked for 
    four years as the Assistant to the Band Director for the BYU Young Ambassadors and has toured 
    with the group to Brazil, Arizona and most recently, China. In addition to arranging music for 
    the YA's, he also does much of the music for the BYU A Cappella Club group, 1AChord, which he has 
    helped direct since he formed it in 2015. In addition to the Young Ambassadors Show Band and 
    1AChord, he has performed with many BYU ensembles including Synthesis, Wind Ensemble, Symphony 
    Orchestra, Symphonic Band, Marching Band, Pep Band, Jazz Ensemble, and the Trombone Choir. David 
    has also recently started working as a Recording Studio TA on campus before he graduates in April.`
  },
  {
    "name":"Madison Moline",
    "whatDo":"Violin/Viola",
    "id":"madisonmoline",
    "bio":`Madison is a senior at BYU studying music education and viola performance. She has recently 
    been principal violist of the BYU Philharmonic and a member of a successful piano quintet at BYU. 
    In highschool, Madison was the top violist in Arkansas for 2 years, and as a senior was accepted 
    as one of the 16 violists across the US to be a member of the National Youth Orchestra of the USA. 
    There she gained connections with the top young musicians in the US and China, toured 7 cities in 
    China, and worked with many world-renowned artists. Since coming to BYU, Madison has been apart of 
    both of the BYU orchestras and has been on tour with the chamber orchestra to the Philippines. 
    She has had many solo performance opportunities such as performing the western US premiere of 
    Ballast, a work by David Liptak, with Dr. Mathias, a BYU organ faculty member. She has been 
    associate principal in the BYU Chamber Orchestra while accompanying artists including Jordan 
    Smith, Amy Grant, and Lea Salonga. Madison has played in masterclasses for the Utah Viola Society, 
    the Primrose Memorial Concert, and at Domaine Forget (a summer festival in Quebec) for artists 
    including: Neithard Rosa (previous principal violist of the Berlin Philharmonic), Misha Amory 
    (Juilliard professor), Atar Arad (world famous teacher at  Indiana University), and many more. 
    Madison loves performing in both full orchestras as well as small chamber groups, and enjoys teaching 
    students of all ages and levels. She would love to help you with your solo and ensemble, Region, or 
    State music this summer!`
  },
  {
    "name":"Jennifer Williamson",
    "whatDo":"Voice & Piano",
    "id":"jenniferwilliamson",
    "bio":`Jennifer Williamson is a professional, experienced vocal and piano teacher for 25 years. She 
    received her Bachelors Degree in Music Education with Choral and Instrumental emphasis at the 
    University of Utah. She also is currently working on a Masters in Education from ASU. Jennifer is 
    a National level teacher in the (NATS)National Association of Teachers of Singing affiliation. Her 
    Vocal students compete yearly and place 1st-3rd in Classical and Musical Theatre Competitions at BYU 
    and the University of Utah currently and since 2005. Jennifer has performed lead vocal roles at the 
    U of U in Puccini Opera performances as well as lead theatre roles for ACT back in the day. She is 
    a professional experienced vocal soloist that performs locally on a regular basis. She currently 
    directs and teaches a successful music studio in Cedar Hills. Jennifer is also an accomplished pianist 
    that studied at BYU Idaho. Her piano students receive superior ratings at the Utah Federation of Music 
    Festivals. She has accompanied choirs and vocal soloists for 25 years. Jennifer has directed and taught 
    Choir, Theatre, Band, Orchestra for 4 years in charter and public school systems. She is a talented, 
    passionate educator and takes great pride in her students' success.`
  },
  {
    "name":"Kelly Oja",
    "whatDo":"Bass",
    "id":"kellyoja",
    "bio":`Kelly graduated from Brigham Young University in 2018 with a Bachelor of Music degree in Bass 
    Performance. While attending she performed with numerous jazz combos, local pit orchestras, various 
    rock/indie bands, BYU’s Philharmonic and Chamber Orchestra, American West Symphony, Jazz Voices, Young 
    Ambassadors, Wind Ensemble, and Synthesis. After graduation, Kelly spent a year pursuing a 
    master’s degree in  jazz at New York University in Manhattan. While in New York, she performed 
    with many jazz groups at different NYC venues in addition to subbing for pit orchestras and laying 
    down bass tracks in the recording studio.If Kelly isn’t writing, arranging, teaching or 
    performing music, you can find her in the great outdoors, reading, or catching up on the latest Star 
    Wars canon.`
  },
  {
    "name":"Natalie Browning",
    "whatDo":"Cello",
    "id":"nataliebrowning",
    "bio":`Natalie Browning received a Bachelor of Music degree in cello performance from Utah Valley 
    University, studying under Dr. Cheung Chau. She has held the position of principal cellist of the 
    symphony and chamber orchestras at UVU, and was the recipient of the Exceptional Performance, the 
    Rebecca Marriott Champion String Endowed, and the Music Resident scholarships for cello at UVU. 
    She was also selected by the UVU Department of Music to receive their prestigious Award of Merit 
    in Music Performance for 2018-2019.Natalie has performed with a wide variety of groups 
    as a cellist, including the Utah All-State Orchestra, UVU's symphony and chamber orchestras, 
    jazz band, percussion ensemble and cello choir, the Solstice Singers vocal group based in Orem Utah, 
    and the Brigham Young University Opera. She was also the cellist for the world premiere of pre-Broadway 
    musical "Fly More Than You Fall," starring Sony- and Paradigm Talent Agency-signed artist Lexi Walker. 
    She has also recorded for multiple student compositions and projects.She was a participant 
    of the International Musicians Academy 2019 in Bulgaria, where she soloed with the Vidin State 
    Sinfonietta and performed in masterclasses and ensembles with internationally-known cellists Ovidiu 
    Marinescu and Cheung Chau, and violinist Blanka Bednarz. She also performed as a guest with the 
    Sinfonietta Polonia for their New Year's program in 2020 where they performed in venues in Obra, 
    Grodzisk Wielkopolski, Piła, Pleszew, Warsaw, and Poznań on their tour of the Greater Poland area.`
  },
  {
    "name":"Mitchell Romney",
    "whatDo":"Drums",
    "id":"mitchellromney",
    "bio":`Mitchell Romney teaches drums and percussion. He was born and raised in Craig, Colorado where 
    he began drumming at 11 years old. He is a senior studying Percussion Performance at BYU. In his time 
    at BYU he has played with the BYU Philharmonic, Wind Symphony, Percussion Ensemble, Panoramic Steel, 
    BYU Synthesis, and other jazz ensembles. Highlights from his time at BYU include a 2014 tour to Thailand, 
    Cambodia, and Vietnam with the Young Ambassadors and a recent tour to Puerto Rico, the Dominican Republic, 
    and Cuba with Synthesis. He also works as an accompanist for the BYU Contemporary Dance department. 
    Outside of school, he enjoys playing and recording with local artists and bands. Mitch plays a variety 
    of styles on drum set–jazz, latin, funk, pop, indie, hip-hop, country, folk, classic rock, punk, metal, 
    and progressive rock to name a few, as well as orchestral and solo percussion. He also has a particular 
    love for hand drumming and loves to learn about drums from around the world, especially West Africa, 
    the Caribbean, and the Middle East.`
  },
  {
    "name":"Myles Lawrence",
    "whatDo":"Saxophone & Clarinet",
    "id":"myleslawrence",
    "bio":`Myles Lawrence studied Jazz at Brigham Young University with a Saxophone and Clarient emphasis. 
    Myles has played all over the world with big names like Sting, Neon Trees, Kelly Clarkson and many others. 
    He is a member of the well known band the Strike. Myles can be found in Dubai, China and LA frequently 
    playing with the Strike but one of his biggest passions is teaching his private students not only skills 
    related to pop and jazz but also classical. Myles is a wonderful classical saxophone and clarinet player 
    and has helped many students prepare for college auditions and state competitions. Myles is extremely 
    high in demand, learn with him today!`
  },
  {
    "name":"Calee Gardner",
    "whatDo":"Voice & Acting",
    "id":"caleegardner",
    "bio":`Calee Gardner, a local grown gal, has been singing and performing since she was small. Part of 
    the 2020 Graduating Class Calee has worked for a BFA in the Music Dance Theater Program at BYU. Calee 
    has been coaching voice and audition preparation for the last two years and loves to help students 
    discover their voice.Her work in theater and music has allowed performances both locally and 
    internationally. Performed and presented at the 2018 IUGTE Physical Theater Conference in Leibniz 
    Austria and took honors in the Utah Fringe theater festival. Calee has performed lead roles in the 
    Utah theater community including the Hale Center Theater, with Renaissance Now, the musical Improv 
    main cast at Improv Broadway, and as a soloist in the Scera Theater Night of Broadway. Calee also 
    served as a Young performing Missionary in Nauvoo Illinois as a stage performer, singing in dancing 
    in seven shows per day.`
  }];

  displayTeacherBio(teacherID){
    document.getElementById(`${teacherID}Bio`).classList.remove('hidden');
  }
  hideTeacherBio(teacherID){
    document.getElementById(`${teacherID}Bio`).classList.add('hidden');
  }

}

