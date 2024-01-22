let btn= document.querySelector("button")

btn.addEventListener("click",check)



function check(){
let inputText = document.getElementById("input").value

inputText=inputText.toUpperCase()
inputText=inputText.replaceAll(" ","")
inputText=inputText.replaceAll(".","")
inputText=inputText.replaceAll(",","")
inputText=inputText.replaceAll("?","")
inputText=inputText.replaceAll("'","")



// console.log(inputText)
// console.log(typeof(inputText))
 let textLength = inputText.length
let reverseString=""
let result="Palindrome"

for(let i=textLength-1;i>=0;i--)
reverseString+=inputText.charAt(i)


// console.log(reverseString)

if(inputText==reverseString)
 result="Palindrome"
else
 result="Not a Palindrome"

//  console.log(result)

 let finalResult=document.getElementById("result")
 finalResult.innerHTML=result


}