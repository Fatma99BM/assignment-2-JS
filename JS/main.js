

function getFunction(){
    var quoteText = ["Do not take life too seriously. You will not get out alive." , "Resentment is like drinking poison and waiting for your enemies to die." ,"It's not what happens to you, but how you react to it that matters." ,"You miss 100% of the shots you don't take."];
var name = ["--Elbert Hubbard" , "--Nelson Mandela" ,"--Epictetus" ,"--Wayne Gretzy"];
var num = Math.floor(Math.random()* quoteText.length);
document.getElementById("quote").innerHTML = quoteText[num] ;
document.getElementById("quoteName").innerHTML = name[num];
}