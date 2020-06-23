
// chap  21 to 25
//  assign 1
// var firstName=prompt("Enter first name")
// var lasttName=prompt("Enter last name")
// var fullName=firstName+" "+lasttName
// document.write("Welcome to "+fullName)

// assign 2
// var favr=prompt("Enter Fav mobile model")
// document.write("My favorite phone is "+favr +" <br>")
// document.write("Length of string "+favr.length)

// assign 3
// var letter="pakistan"
// for(var a=0;a<letter.length;a++){
// if(letter[a]==="n"){
//     document.write("String: Pakistani <br>")
//     document.write("Index of 'n': "+a)
// }
// }

// assign 4
// var letter="hello world"
// for(var a=letter.length;a>0;a--){
// if(letter[a]==="l"){
//     document.write("String: Hello world <br>")
//     document.write("Last index of 'l': "+a)
//     break
// }
// }


// assign 5
// var letter="pakistan"
// for(var a=0;a<letter.length;a++){
// if(a===3){
//     document.write("String: Pakistani <br>")
//     document.write("Character at index 3: "+letter[a])
//     break
// }
// }

// assign 6
// var firstName=prompt("Enter first name")
// var lasttName=prompt("Enter last name")
// var fullName=firstName.concat(" "+lasttName)
// document.write("Welcome to "+fullName)

// assign 7
// var letter = "Hyderabad";
// var rep = letter.replace("Hyder", "Islam");
// document.write("City: "+letter+"<br>")
// document.write("After replacement: "+rep)

// assign 9
// var letter="472" 
// var num=Number(letter)
// document.write("Value: "+ letter +"<br>")
// document.write("Type:  string" +"<br>")
// document.write("Value: "+ num +"<br>")
// document.write("Type:  number" +"<br>")

// assign 10
// var letter=prompt("enter word")
// document.write("Upper case: "+letter.toUpperCase())



//assign 14
// var input=prompt("enter name")
// var input1=input.toLowerCase()
// var arr=["cake", "apple pie", "cookie", "chips", "patties"] 
// for(var a=0; a<=arr.length; a++){
// if(input1===arr[a]){
// document.write(arr[a] +" is avaiable at index "+a+" in our bakery")
// }
// }

// assign 17
// var letter=prompt("enter word")
// letterIndex=letter.length
// document.write("Last character of input: "+letter[letterIndex-1])






// chap 26 to 30
// assign 1
// var num=3.45214
// document.write("number: "+num+"<br>")
// document.write("round off value: "+Math.round(num)+"<br>")
// document.write("flore value: "+Math.floor(num)+"<br>")
// document.write("ceil value: "+Math.ceil(num)+"<br>")

// assign 2
// var num=-2.673
// document.write("number: "+num+"<br>")
// document.write("round off value: "+Math.round(num)+"<br>")
// document.write("flore value: "+Math.floor(num)+"<br>")
// document.write("ceil value: "+Math.ceil(num)+"<br>")


// assign 6
// var num=Math.floor((Math.random() * 100) + 1);
// document.write("Random number between 1 and 100 is: "+num)
 
// assign 5

// var num=Number(prompt("enter a number"))
// var match=Math.floor((Math.random() * 10) + 1);
// if(num===match){
// document.write("congratulate you win")
// }else{
//     document.write("Sorry try again")
// }








//chap 31 to 34
// assign 1
// var d = new Date("2020-06-23")
// document.write(d)

// assign 2
// var d = new Date();
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// alert( months[d.getMonth()])

// assign 3
// var d = new Date();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// alert( days[d.getDay()])

// assign 4
// var d = new Date();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var da=days[d.getDay()]
// if(da=="Sunday" ||da=="Saturday"){
// alert("Its fun day")
// }








//chap 35 to 38
//assign 1
// function date(){
//     var d = new Date();
//     document.write(d.toString())
// }
// date()

//assign 2
// function greeting(){
// var firstName=prompt("Enter first name")
// var lasttName=prompt("Enter last name")
// var fullName=firstName.concat(" "+lasttName)
// document.write("Welcome "+fullName)
// }
// greeting()

//assign 3
// function sumNum(){
// var firstNumber=Number(prompt("Enter first number"))
// var secondNumbere=Number(prompt("Enter second nummber"))
// var sum=firstNumber+secondNumbere
// document.write("Sum is "+sum)
// }sumNum()

//assign 4
// function sumNum(num1,num2,operator){
//     if(operator==="+"){
// return (num1+num2)
//     }
//    else if(operator==="-"){
//         return (num1-num2)
//             }
//             else if(operator==="*"){
//                 return (num1*num2)
//                     }
//                     else if(operator==="/"){
//                         return (num1/num2)
//                             }
//                             else if(operator==="%"){
//                                 return (num1%num2)
//                                     }
//                                         }
// document.write("result is "+sumNum(2,2,"+"))


// assign 5
    // function counter(start, end){
    //     for(var z=start; z<=end; z++){
    // document.write(z+"<br>")
    //     }
    // }
    // counter(2,10)







