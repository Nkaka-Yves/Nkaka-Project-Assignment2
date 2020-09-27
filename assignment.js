function myFunction() {
   var inday=document.getElementById("day").value;
   var inmonth=document.getElementById("month").value;
    var inyear=document.getElementById("year").value;
    var gender=document.getElementById("male").value;
   var day=parseInt(inday);
   var month=parseInt(inmonth);
   var year=parseInt(inyear);
   var sum=day+month+year;
   document.getElementById("demo").innerHTML=sum;
  }
