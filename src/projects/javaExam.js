const javaExam = {
    technologies: ["java", "postgresql", "travis ci", "maven"],
    name: "Advanced Java Exam",
    descriptionShort: "– Exam in course called Advanced Java programming",
    created: "February 2020",
    fileType: "jpg",
    github: "github.com/MarcusTJensen/eksamenavansertjava",
    descriptionLong : [
        `In this exam we were tasked with developing program with a http client, server and database.
        In the program you can add, retrieve and update tasks for a project.
        The client and server communicates via http and sockets.
        The product uses Maven to generate executable .jar files`,
        `It was also important that we avoided the possibility of SQL injections in our program.
        To achieve this i used prepared SQL statements whenever i made queries to the database.
        It was also expected that we wrote tests for the program.
        I wrote unit-tests for all of the classes where it made the most sense.`,
        `In addition to this  I used Travis CI to run the tests automatically on every push to git.
        This was not mandatory, but would raise the quality of the final product.
        The program can be downloaded from git and run with the instructions in the readme.`
    ]
};

export default javaExam;
