console.log("hey rajat");


let numberofdrums = document.querySelectorAll(".drum").length;


for (let i = 0; i < numberofdrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttontext = this.innerHTML;
        buttonAnimation(buttontext);
        sounds(buttontext);


    });
}

document.addEventListener("keydown", function (event) {
    sounds(event.key);

    buttonAnimation(event.key);

});

function sounds(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "k":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log(buttontext);
    }
}

function buttonAnimation(currkey) {
    var activeButton = document.querySelector("." + currkey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");

    }, 50);
}



// function handleclick(){
//     alert("button clicked");
// }
// setTimeout(()=>{
// console.log("hey rajat");
// },2000);

// let audio=new Audio("sounds/tom-1.mp3");
//         audio.play();