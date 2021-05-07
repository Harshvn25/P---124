function setup() {

    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 175);

    canvas = createCanvas(520, 520);
    canvas.position(750, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw() {

    background('#673147');

}

function modelLoaded() {

    console.log("PoseNet is initialized");

}

function gotPoses(results) {

    if (results.length > 0) {

        console.log(results);

    }
}