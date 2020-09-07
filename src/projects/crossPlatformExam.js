const crossPlatformExam = {
  technologies: ["angular", "ionic", "typescript"],
  name: "Appointment",
  descriptionShort: "– Exam in cross platform development course.",
  created: "October 2019 - December 2019",
  fileType: "png",
  link: "tds200-exam-2019.firebaseapp.com",
  github: "github.com/MarcusTJensen/Cross_platfrom_development_exam",
  descriptionLong: [
    `In this exam we were tasked with developing an application where you could rent rooms.
    There was also specified functionality that needed to be implemented. This functionality was:
    Every user should see a feed of the available rooms, if a room is booked it disappears from the feed.
    There has to be a user system in place, users needs to be able to register, login and logout of the application.
    There should be a detail view with more information for every room.`,
    `In addition to this there was some extra functionality you could implement to raise the quality of the application.
    For example adding rating functionality, using google maps for directions to the room, GPS and camera among others.`,
    `All of the functionality mentioned above is implemented in the final product. I have also used Firebase in the backend.
    In Firebase i store all user data (username, email, password) aswell as information about the rooms (pictures and general information).
    The application also uses Cordova in order to access camera and GPS.`
  ],
  images: [
    'Appointment1.JPG',
    'Appointment2.JPG',
    'Appointment3.JPG',
    'Appointment4.JPG',
    'Appointment5.JPG',
    'Appointment6.PNG'
  ]
};

export default crossPlatformExam;
