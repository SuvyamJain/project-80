var name_of_guest = [];
function submit(
    {
   var guestname = document.getElementById("name1").value
   name_of_guest.push(guestname);

   console.log(guestname);
   console.log(name_of_guest);
   var length_of_name = name_of_guest.length
   console.log(length_of_name)
   document.getElementById("display_name").innerHTML=name_of_guest.tostrin();
    }


function show() {
    var i= name_of_guest.join("<br>");
    console.log(name_of_guest)
    document.getElementById("p1").innerHTML=i.toString();
    document.getElementById("sort").style.display="block";
    
}



function sorting() {
name_of_guest.sorting
var i= name_of_guest.join("<br>");
console.log(name_of_guest);
document.getElementById("sorted").innerHTML=i.tostring(); 
}
function searching() {
   var s= document.getElementById("s1").value
var found=0;
var j;
for(j=0; j<name_of_guest.length j++)
{
    if(s==name_of_guest[j]){
        found=found+1;  
}

}

document.getElementById("p2").innerHTML="name found "+found+"times/s";
console.log("found name"+found+" times/s;")
}

