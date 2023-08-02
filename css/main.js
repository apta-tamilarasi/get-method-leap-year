var today=new Date();

document.write("TODAY"+"<br><br>"+today+"<br><br>");

var year=today.getFullYear();

document.write("This year "+year+"<br><br>");

if(year%4==0){
   document.write("Given year  "+ year+"  is leap year"); 
}

else{
    document.write("Given year "+year+" is  not a leap year"); 
}
