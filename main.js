function startClassifying() {
    navigator.mediaDevices.getUserMedia({audio: true})

console.log("ml5 version",ml5.version)

classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3BtHgckf1/model.json", modelLoaded)
}

function modelLoaded(){
    console.log("Teachable Model Loaded")
    classifier.classify(gotResults)
}
var dog = 0;
var cat = 0;
var cow = 0;
var lion = 0;

function gotResults(error, results) {
    if(error) {
        console.error(error)
    }
    else {
        console.log(results)
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;


        document.getElementById("labelsound").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("labelcount").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat+ 'Detected Cow - '+cow+ 'Detected Lion - '+lion
    document.getElementById("labelsound").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("labelcount").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('Animal1');
    img1 = document.getElementById('Animal2');
    img2 = document.getElementById('Animal3');
    img3 = document.getElementById('Animal4');

    if(results[0].label=="Cat") {
        img.src = "Cat.gif"
        img1.src = "Animal2.png"
        img2.src = "Animal3.png"
        img3.src = "Animal4.png"
        cat = cat+1
    }
    else if(results[0].label=="Dog") {
        img.src = "Animal1.png"
        img1.src = "Dog.gif"
        img2.src = "Animal3.png"
        img3.src = "Animal4.png"
        dog = dog+1
    }
    else if(results[0].label=="Lion") {
        img.src = "Animal1.png"
        img1.src = "Animal2.png"
        img2.src = "Lion.gif"
        img3.src = "Animal4.png"
        lion = lion+1
    }
    else if(results[0].label=="Cow") {
        img.src = "Animal1.png"
        img1.src = "Animal2.png"
        img2.src = "Animal3.png"
        img3.src = "Cow.gif"
        cow = cow+1
    }
  }
}

