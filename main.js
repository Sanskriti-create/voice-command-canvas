x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "";
draw_apple = "";
speak_data = "";
to_no = "";

function preload()
{
  apple = loadImage("apple.png")
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_no = Number(content);
    if(Number.isInteger(to_no)){
      document.getElementById("status").innerHTML = "Started drawing apples ";
      draw_apple = "set";
    }
    else{
      document.getElementById("status").innerHTML = "The speech has not recognized a number ";
    }

}

function setup() {
     screen_width = window.innerWidth;
     screen_height = window.innerHeight
     canvas = createCanvas(screen_width - 20, screen_height - 160);
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1; i <= to_no; i++)
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_no+ " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("status").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    
}
