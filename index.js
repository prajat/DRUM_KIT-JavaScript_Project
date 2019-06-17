console.log("hey rajat");



let numberofdrus=document.querySelectorAll(".drum").length;

for(let i=0;i<numberofdrus;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",()=>{
        alert("button clicked");
    });

}


// function handleclick(){
//     alert("button clicked");
// }
// setTimeout(()=>{
// console.log("hey rajat");
// },2000);

