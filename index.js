//  var name = 'Felix';
// var str = "I am Front end developer";
// var para = ` 
//              I am learning html
//              I am learning css.
//              I am learing javascript.`; 


// property= length


 var name ='felix its';
 document.writeln(" legnth "+ name.length + "<br>");

//  Strings Methods 
// 1) indexOf
 
  var index = name.indexOf("i");
  document.writeln("index of i is " + index + "<br>");
   

  var lastIndex = name.lastIndexOf("i");
  document.writeln("last index of i is:" + lastIndex + "<br>");

// 2)search =>regular Expression

var searchIndex = name.search("e");
document.writeln("search index of e is:" +searchIndex + "<br>");
 
var i = name.search("a-z");
document.writeln("find small letter index of i is:" + o + "<br>");


// 3)subString start - end point


  //start - end-1
  var sub = name.substring(2,7);
  document.writeln("substring = " + sub + "<br>");

  //start-end
  var str1 = name.substr(2,7);
  document.writeln("substring of :" + str1 + "<br>");

//   slice
 var str2 = name.slice(-7,-2);
 document.writeln("slice is :" + str2 + "<br>");


 var str3 = name.toUpperCase();
 document.writeln("to uppercase : " + str3 + "<br>");

 var str3 = name.toLowerCase();
 document.writeln("to lowercase : " + str3 + "<br>");
 
 var str4 = name.replace("i","f");
 document.writeln("to replace : " + str3 + "<br>");

 var str5 = name.replace(/i/g,"e");
 document.writeln("string replace: " + str5 + "<br>");


 //trim Method
  var s1 = "                 Jyoti           Kailas             Ghuge     ";
  s1.trim();
  document.writeln(s1 + "<br>");
 
//Dates

 var today = new Date();
 document.writeln(today + "<br>");

 var dob = new Date(1998, 0, 18, 7, 30, 888);
 document.writeln(dob + "<br>");

 var dob2 = new Date("14 jul 1998,7:09 am");
 document.writeln(dob2 + "<br>");

 var dob3 = new Date(98899815000);
 document.writeln(dob3 + "<br>");

//  getter Method

document.writeln(today.getFullYear() + "<br>");
document.writeln(today.getDate() + "<br>");
document.writeln(today.getMonth() + "<br>");
document.writeln(today.getHours() + "<br>");
document.writeln(today.getMinutes() + "<br>");
document.writeln(today.getSeconds() + "<br>");

//setter Method
today.setDate(18);
document.writeln(today + "<br>");

today.setFullYear(1998);
document.writeln(today + "<br>");

today.setHours(7);
document.writeln(today + "<br>");

today.setMinutes(50);
document.writeln(today + "<br>");

today.setMonth(1);
document.writeln(today + "<br>");