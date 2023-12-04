
const questions=[
    {
        'que':'which of the following markup language?',
        'a':'css',
        'b':'html',
        'c':'javascript',
        'd':'php',
        'correct':'b'
    },
    {
        'que':'when ES6 was introduced?',
        'a':'2010',
        'b':'1022',
        'c':'2013',
        'd':'2015',
        'correct':'d'
    },
    {
        'que':'which of the following is not correct css selector',
        'a':'id selector',
        'b':'class selector',
        'c':'pseudo class selector',
        'd':'special selector',
        'correct':'d'
    },
    {
        'que':'which of the following is not correct table tag',
        'a':'<td> </td>',
        'b':'<th> </th>',
        'c':'<table> </table>',
        'd':'<row> </row>',
        'correct':'d'
    },
    {
        'que':'which of the following is not correct value of display attribute',
        'a':'none',
        'b':'hidden',
        'c':'start',
        'd':'inline',
        'correct':'c'
    },
    {
        'que':'DOM stand for',
        'a':'document object module',
        'b':'dividi object machin',
        'c':'drive optical machin',
        'd':'dom object model',
        'correct':'a'
    },
    {
        'que':'which option is not correct',
        'a':'string.length() method is use to get length of string',
        'b':'string.trim() method is use to remove white spece of string',
        'c':'concat() method use to extract the part of string in new string',
        'd':'charAt() method returns the character at a specified index (position) in a string',
        'correct':'c'
    },
];

let index=0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options")
function htmlquize(){
    optionInputs=document.querySelectorAll("htmlquestions")
    return;
}
const loadquestion=()=>{
    if(index===total){
       return endquiz();
    }
     reset();

   const data=questions[index];
   quesBox.innerHTML=`${index+1})${data.que}`;
   optionInputs[0].nextElementSibling.innerText=data.a;
   optionInputs[1].nextElementSibling.innerText=data.b;
   optionInputs[2].nextElementSibling.innerText=data.c;
   optionInputs[3].nextElementSibling.innerText=data.d;

   //console.log(data);
}

const reset=()=>{
    optionInputs.forEach((input)=>{
        input.checked=false;
    })
}
let total=questions.length;
let right=0;
let wrong=0;

const submitquiz = ()=>{
    const data=questions[index];
    const ans=getAnswer();
    if(ans===data.correct){
     right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

function backquiz(){
    index--;
    loadquestion();
}
const getAnswer = ()=>{
    let answer;
    optionInputs.forEach((input)=>{
            if(input.checked){
               answer=input.value;
               // console.log("yes");
               //console.log(input.value);
            }
        }
    )
    return answer;
}

const endquiz=()=>{
    document.getElementById("box").innerHTML=`<h1>Thanks for solving this quize. You got following Score<h1>
    <h2>${right}/${total}are correct<h2>`
}
//initial quall
loadquestion();
























