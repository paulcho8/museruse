

# MuseRuse

[MuseRuse Live](https://museruse.live) -- Open in a new tab to avoid being redirected!

## Showcase

Javascript/HTML5 Canvas rhythm game.

#### Timing Bar

<img width="420" alt="Screen Shot 2019-08-07 at 11 06 12 PM" src="https://user-images.githubusercontent.com/49211034/62679014-fe41b580-b967-11e9-98e7-af87c2de9ecf.png">

When a note reaches the gray timing bar, players should press the appropriate key for that column.

#### Score System

Points are determined by checking the height of the note when a key is pressed. If the note is closer to the sweet spot, more points are given. If the player can maintain a combo, the score will be multiplicative

#### BeatMap and Note Speed

Based on the music's beats per minute, given that the note's speed was two, it would mean that every subsequent quarter note would require 400ms to match the beat and 600ms for a dotted quarter note. The BeatMap was written with these two musical notes and timings.

```js

const col0 =
[0, 2800, 3200, 4800, 6400, 7800, 9000, 15200, 15800, 16600, 20600, 22200, 23000, 28400, 29000, 33200, 36600, 40400, 40800, 45200, 48800]
const col1 =
[700, 2400, 5600, 7400, 8600, 9800, 14800, 18200, 21800, 28000, 31400, 31800, 32800, 34800, 35200, 36200, 39800, 43600, 45400]
const col2 =
[800, 2800, 3800, 4600, 5400, 7200, 8200, 11600, 14400, 19800, 21400, 23600, 27600, 32200, 33200, 35600, 36600, 39400, 42000, 43800, 45800]
const col3 =
[0, 1600, 1800, 7300, 7800, 10600, 12200, 12400, 14000, 17200, 18000, 18800, 19000, 24800, 27200, 31400, 31800, 32800, 34800, 35200, 36200, 37000, 37800, 39000, 42200, 44200, 46400, 48400]
const col4 =
[1200, 2400, 4000, 8800, 10700, 11400, 12300, 13600, 17400, 18900, 20400, 23800, 24600, 25400, 25600, 26800, 32200, 35600, 37400, 38900, 42600, 44600, 46200]
const col5 =
[0, 1600, 1800, 7800, 10800, 13200, 16000, 20500, 24000, 25500, 26400, 29200, 37000, 41400, 43000, 48000]

const beatMap = new BeatMap(col0, col1, col2, col3, col4, col5);
```

#### Challenges

Originally, the canvas had a set height which was not optimized for different screen resolutions. 

```js 
window.innerHeight
```

This allowed the canvas height to change based on the resolution. However, the rhythm timing would no longer work for larger resolutions! The note speed needed to change as well to account for the change in canvas height. This was accomplished by calculating the previous ratio of canvas height to note speed and using it to dynamically set the note speed.

```js
this.speed = canvas.height / 400;
```

## Deployment Instructions

1. `npm install`
2. `open html on browser`