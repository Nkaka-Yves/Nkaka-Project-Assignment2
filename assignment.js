function weekdays() {
    var day = document.getElementById("day").value;
    var indate =day.split("-");
    var d=parseInt(indate[2]);
    var m=parseInt(indate[1]);
    var y=parseInt(indate[0]);
      var CC= (y-1)/100+1;
      var birthday=(CC/4-2*CC-1+5*y/4+26*(m+1)/10+d)%7;
      document.getElementById("display").innerHTML=Math.round(birthday);

      var maleNa=["kwasi","kwando","kwabena","kwaku","yaw","kofi","kwame"];
      var femaleNa=["akosua","adwoa","abena","akua","yaa","afua","ama"];
      var gender=document.querySelector('input[name="optradio"]:checked').value;
      console.log(gender);
      if (gender=="male") {
          console.log(maleNa[Math.round(birthday)]);
          document.getElementById("names").innerHTML=maleNa[Math.round(birthday)];
      } else if (gender=="female") {
        console.log(femaleNa[Math.round(birthday)]);
        document.getElementById("names").innerHTML=femaleNa[Math.round(birthday)];
      } else {
          console.log("Invalid");
      }
}