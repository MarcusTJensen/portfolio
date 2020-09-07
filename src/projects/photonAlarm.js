const photonAlarm ={
    technologies: ["swift", "c++"],
    name: "Particle photon alarm",
    descriptionShort: "– Exam in embedded systems course",
    created: "December 2019",
    github: "github.com/MarcusTJensen/particle-photon-alarm-w-iOS-app",
    fileType: "png",
    descriptionLong: [
        `For this exam i decided to create an alarm with Particle photon.
        I set the alarm up using a speaker, ultrasonic sensor, temperature and humidity sensor and flame sensor.`,
        `The code that runs on the Particle photon is written in C++. The microcontroller is connected to wifi 
        with a built in chip. This allowed me to use the Particle APIs through the Swift app.`,
        `The iOS app is quite simple. After you have logged in to your Particle user it finds the device.
        Then it just listens for the values to change and the application is updated. You can also turn the alarm
        on and off through the app.`,
        `The alarm also uses the IFTTT app to send push notifications if the values are very low or very high.
        IFTTT connects to your Particle device and listens for events that gets published.`
    ]
};

export default photonAlarm;
