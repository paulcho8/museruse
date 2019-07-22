import Key from './key';
import BeatMap from './beatmap';
import music from '../media/beatmaps/brahms.js';
// import gd from '../media/audio/gd.mp3';


const COLORS = {
    RED: "#F9B9B9",
    BLUE: "#5DC9FF",
    YELLOW: "#FFFC66",
}

class Game {
    constructor(cvs, ctx) {
        this.cvs = cvs;
        this.ctx = ctx;
        this.keys = [];
        this.notes = [];
        this.playSong = this.playSong.bind(this);
        this.init = this.init.bind(this);
        this.beatMap;
        // this.loop = this.loop.bind(this);
    }

    init() {
        const offset = 70;
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 , this.cvs.height - 120, COLORS['RED'], 'S'));
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 + offset, this.cvs.height - 120, COLORS['BLUE'], 'D'));
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 + (offset * 2), this.cvs.height - 120, COLORS['YELLOW'], 'F'));
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 + (offset * 3), this.cvs.height - 120, COLORS['YELLOW'], 'J'));
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 + (offset * 4), this.cvs.height - 120, COLORS['BLUE'], 'K'));
        this.keys.push(new Key(game, this.cvs.width / 2 - 70 * 3 + (offset * 5), this.cvs.height - 120, COLORS['RED'], 'L'));
        // Song.playSong('gd');
        this.draw()
        this.keys[0].trackInput();  
    }

    playSong() {
        this.beatMap = new BeatMap(
            music.notes[0].slice(0),
            music.notes[1].slice(0),
            music.notes[2].slice(0),
            music.notes[3].slice(0),
            music.notes[4].slice(0),
            music.notes[5].slice(0),
            music.speed
        );
        this.beatMap.startTime = new Date().getTime();
        this.beatMap.currentTime = new Date().getTime();
        this.drawInterval = setInterval(() => {
            this.beatMap.addNotes(0);
            this.beatMap.addNotes(1);
            this.beatMap.addNotes(2);
            this.beatMap.addNotes(3);
            this.beatMap.addNotes(4);
            this.beatMap.addNotes(5);
            this.beatMap.drawBeatMap();
        }, 1);
        
        // debugger;
        // setTimeout( () => {
        //     Song.playSong('gd');
        // }, 900);    
        // let song = new Audio();
        // song.src = gd;
        // song.play();

        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {

                case 83:
                    this.beatMap.keyHit(0);
                    break;

                case 68:
                    this.beatMap.keyHit(1);
                    break;

                case 70:
                    this.beatMap.keyHit(2);
                    break;

                case 74:
                    this.beatMap.keyHit(3);
                    break;

                case 75:
                    this.beatMap.keyHit(4);
                    break;

                case 76:
                    this.beatMap.keyHit(5);
                    break;
            }
        })
    }
    
    draw() {
        this.keys.forEach(key => key.draw());    
        // this.notes.forEach(note => note.draw());
    }
    
    // update(){
    //     this.keys.forEach(key => key.update());
    //     this.notes.forEach(note => note.update());
    // }
    

    // loop() {
    //     this.update();
    //     this.draw();
    //     window.requestAnimationFrame(this.loop);
    // }
}

export default Game