function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Rrm7hbwNe/', modelReady);
}

function modelReady() {
classifier.classify(gotResults);
}