var inputArray = [];
var limit;
function enter() {
//Taking Input from user
 limit= prompt('Enter array limit');
for(var i=0; i<limit; i++) {
inputArray[i] = prompt('Enter Array Element ' + (i+1));
}
alert(inputArray);
}

//display
function print(){
    if(inputArray[0]==null)
    {
        alert("Please enter the array first");
    }

document.getElementById("p1").innerHTML=inputArray;
}

//Sorting
function sortit(){

     inputArray.sort(function(a ,b){
         return a-b;
     });
        document.getElementById("p2").innerHTML=inputArray;

}

//Reversing
function reverse(){
inputArray.reverse();
document.getElementById("p3").innerHTML=inputArray;
}

//Checking for even number
function even(){
    var c=0;
    var temparr=[];
    var j=0;
for(var i=0; i<limit; i++)
 {
    if(inputArray[i]%2==0)
    {    c++;
        temparr[j]=inputArray[i];
        j++;
    
    }    
 }
 document.getElementById("p4").innerHTML=temparr;
 if(c==0)
 {alert("There is no even number");}
}
//Checking for even number
function odd(){
    var c=0;
    var temparr=[];
    var j=0;
for(var i=0; i<limit; i++)
 {
    if(inputArray[i]%2!=0)
    {    c++;
        temparr[j]=inputArray[i];
        j++;

    //document.write("     " +inputArray[i]) ;   
    }    
 }
 document.getElementById("p5").innerHTML=temparr;
 if(c==0)
 {alert("There is no odd number");}
}