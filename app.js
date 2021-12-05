class DrumKit {
    constructor() {
        this.pads = document.querySelectorAll("");
        this.kickAduio = document.querySelector(".kick-sound");
        this.snareAduio = document.querySelector(".snare-sound");
        this.hihatAduio = document.querySelector(".hihat-sound");
        this.index = 0;
    }
    repeat() {
        let step = this.index % 8;
        console.log(step);
    }
    start() {
        setInterval(() => {
            this.repeat();
        }, 1000);
    }
}

const drumKit = new DrumKit();

drumKit.start()