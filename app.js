// CHAPTER 26-30
// TASK 1
// var positiveInteger=+prompt("Enter your positive  integer")
// document.write("Number :"+positiveInteger,"<br>")
// var round=Math.round(positiveInteger,"<br>")
// document.write("Round off :"+round,"<br>")
// var floo=Math.floor(3.42451);
// document.write("Floor :"+floo,"<br>")
//  var ceil=Math.ceil(3.45213)
//  document.write("Ceil :"+ceil)

// Task2
// var positiveInteger=+prompt("Enter your Negative  integer")
// document.write("Number :"+positiveInteger,"<br>")
// var round=Math.round(positiveInteger,"<br>")
// document.write("Round off :"+round,"<br>")
// var floo=Math.floor(-2.673);
// document.write("Floor :"+floo,"<br>")
//  var ceil=Math.ceil(-2.673)
//  document.write("Ceil :"+ceil)

// // Task3
//  var absolute=+prompt("Enter your absolute value")
//  if(i=-absolute){
//      i=absolute*-
//      document.write("The absolute value of "+absolute," is",+i)

// }
// else if(i==+absolute){
//     i=absolute*--
//     document.write("The value of "+absolute,"is :"+i)
// }

// Task4
// var dice=Math.random();
// var impdice=(dice*6)+1;
// var number=Math.floor(impdice)
// document.write("The Randome value"+number)
// Task5
// var user1=prompt("Choose Coin User 1")
// var user2=prompt("Choose Coin User 2")
// var toss=Math.random()*2;
// var floor=Math.floor(toss)
// console.log(floor)
// if(floor===0){
//     alert("" + user1+ "win the toss")

// }
// else{
//     (""+ user2+"win the toss")

// }
// Task6
// var dice=Math.random();
// var impdice=(dice*100)+1;
// var number=Math.floor(impdice)
// document.write("The Randome value Between 1 and 100 :"+number)

// Tak7
// var waight=+prompt("Enter your Weight :")
// document.write("The Waight of user is "+waight,"Kilograms")

// Task8
// var secerat=6;
// var userNbr=+prompt("Enter your Guezz number 1 to 10")
// if(userNbr===secerat){
//     document.write("You Winn!")
// }
// else{
//     document.write("Please TRY Again :) ")
// }


// CHAPTER 31-34
// TASK1
// var now=new Date();
// document.write(now)
// Task2
// var now=new Date()
// var month=now.getMonth()
//  var str=month.toString()
// document.write("Current Month :"+str)

// Task3
// var days=["Sunday","Monday","Tuesday","wendesday","Thursday","Friday","Saturday"]
// var now=new Date()
// var theday=now.getDay();
// var nameoftoday=days[theday]
// document.write("Today is :"+nameoftoday)
// Task4
// var days=["Sunday","Monday","Tuesday","wendesday","Thursday","Friday","Saturday"]
// var now=new Date()
// var theday=now.getDay();
// var nameoftoday=days[theday]
// if(nameoftoday==="Saturday"&&"Sunday"){
//     document.write("Its Fun Day :"+nameoftoday)
// }else{
//     Document.write("Today is not fun day")
// }
// Task5

// var now=new Date()
// var date=now.getDate()
// if(date<=16){
//     document.write("Frist fifteen day of month")
// }
// else if(date>16){
//     document.write("Last day of month")

// }
// Task6
// var now=new Date();
// document.write("Current Date :"+now,"<br>")
// var mills=now.getMilliseconds()
// document.write("Elapsed Millisecond since Jan 1,1970"+mills,"<br>")
// var min=now.getMinutes()
// document.write("Elapsed Minitue since Jan 1,1970"+min,"<br>")

// Task7
// var now=new Date()
// var time=now.getHours();
// if(time<=12){
//     document.write("It's AM")
// }
// else if(time>12){
//     document.write("It's PM")
// }
// Task8
// var doomsday = new Date("Dec 31, 2020");
// document.write("Latter Date :"+doomsday)
// Task9
// var msDiff = new Date("jun 18, 2015").getTime() - new Date().getTime();
// var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));
// document.write(+daysTillDoom ," ","days has been passed since frist ramzan,2015")
// Task10
// var msDiff = new Date(" Sat Dec 05, 2015 22:50:16").getTime() - new Date().getTime();
// var daysTillDoom = Math.floor(msDiff / (1000 * 60  ));
// document.write(+daysTillDoom ," had passed since beging 2015 ","")
// Task11
// var a=new Date()
// document.write("Current :"+a,"<br>")
// var currenttime=a.getHours()
// var currenminutes=a.getMinutes()
// var currentsecond=a.getSeconds()
// var hourago=currenttime-1
// var Minitue=currenminutes-60+60
// var secodago=currentsecond-1000
// document.write("1 hour ago time is :"+hourago," :"+Minitue,":"+currentsecond," ","GMT+0500 (Pakistan Standard Time)")

// Task12
// var now=new Date()
// document.write("Current Date :"+now,"<br>")
// var currentday=now.getDay()
// var currentmonth=now.getMonth()
// var currentdate=now.getDate();
// var currentyear=now.getFullYear();
// var dayago=currentday+1
// var monthsago=currentmonth-11
// var datesago=currentdate-31
// var yearago=currentyear-100
// document.write("100 year ago ",+dayago,"  " +monthsago," :"+datesago," :"+yearago)
// Task13
// var currrentage=+prompt("Enter your current age")
// var now=new Date();
//  var currentyear=now.getFullYear()
//  var Birthyear=currentyear-currrentage;
//  document.write("Your Birth Year "+Birthyear)
// Task 14
// var custerName=prompt("Enter your Name");
// var now=new Date();
// var currentmonth=now.getMonth();
// var numsofUnits=410;
// var chargesPerUnits=16;
// var netAmount=numsofUnits*chargesPerUnits;
// var latepyment=350;
// var grossAmount=netAmount*latepyment
// document.write("K-Electric-Bill","<br>")
// document.write("Customer Name :"+custerName,"<br>")
// document.write("Number Of Units :"+numsofUnits,"<br>")
// document.write("Charges Per Units : "+chargesPerUnits,"<br>")
// document.write(" Net Amount Payable (within Due Date) :"+netAmount,"<br>")
// document.write("Late Payment Surcharge :"+latepyment,"<br>")
// document.write("Gross Amount Payable (after Due Date) :"+grossAmount)

// console.log(latepyment)

// CHAPTER 35-38
// // TASK1
//  function tellTime() {
//     var now = new Date();
     
//      document.write("Current time:  "+now);
// }
// tellTime();
// Task2
// function greet()
// {
//     var fristname="Kamran"
//     var lastname="Ayoub"
//     document.write("Wellcome "+fristname," "+lastname," In the world of Javascript")
// }
// greet();
// Task
// function add(){
//      var num1=+prompt("Enter your frist number")
//      var num2=+prompt("Enter your second number")
//     var num3=num1+num2
//     document.write( "Addition of two number "+num3)

// }
// add();
// Task4
// function Calc(){
//     var num1=+prompt("Enter your Frist Value")
//     var num2=+prompt("Enter your Second Value")
//     var oper=prompt("Enter your Desired Operator ")
    
//     if(oper==="+"){
//         var num3=num1+num2
//         document.write("Addition of Number : "+num3)
//     }
//     else if(oper==="-"){
//         var num3=num1-num2
//         document.write("Substraction of Numbers : "+num3)
//     }
//     else if(oper==="*"){
//         var num3=num1*num2
//         document.write("Multiplication of Numbers : "+num3)
//     }
//     else if(oper==="/"){
//         var num3=num1/num2
//         document.write("Division of Numbers : "+num3)
//     }
//     else if(oper==="%"){
//         var num3=num1%num2
//         document.write("Modulus of Numbers : "+num3)
//     }
//     else{
//         document.write("Wrong Operator input Please RETRY :) ")
//     }

// }
// Calc();

// Task5
// function sequire(a,b){
//     var c=2*2;
//     document.write(c)

// }
// sequire();
// Task6



// Task7
// function input(){
//     var Startnbr=+prompt("Enter your Start number")
//     var Endnumbr=+prompt("Enter your End number")
//     for(i=Startnbr;i<=Endnumbr;i++){
//         document.write(+i," ,")
//     }


// }
// input();
// Task8
// function outer(){
//     var base=+prompt("Enter your base")
//     var per=+prompt("Enter your perpandicular")
//     var hypo=inner.calbase*inner.calcper
//     document.write(hypo)
//     inner()

//     function inner(){
//         var calbase=base*base;
//         var calcper=per*per;

//     }

// }
// outer();
// Task9
// function tringel(width,height){
//     var a=4*6
//     document.write("area")
// }
// tringel();
// function tringel(width,height){
//     var i=4*3
//     document.write(i)
// }
// tringel()

// Task10
// function check_Palindrome(str_entry){
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//         for (var x = 0; x < ccount; x++) {
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return true;
//     }
//     check_Palindrome('madam');
//     check_Palindrome('nurses run');
//     check_Palindrome('fox');
// }
// Task11
// function upper(){
//     var name =" Example in :Kamran ayoub"
//     document.write(name,"<br>")

//     name = name.toUpperCase();
//     document.write(name)

// }
// upper();
// Task12
// function bigger(name){
//     for(i=0; i>=arguments.length;i++){
        
//         document.write(arguments[i])
//     }
// }
// bigger("The Web Devlopment")
// Task13
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('jsresource.com', 'o'));
// Task14
// function calcCircumference(r){
   
//     var calculat=2*3.14*r
//     document.write( "The cercumfarance is "+calculat,"<br>")

// }
// calcCircumference(6)
// function calcArea(r){
//     var cal=3.14*r*r
//     document.write("The Area is :"+cal)
// }
// calcArea(6)
