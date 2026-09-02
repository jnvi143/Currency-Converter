//acccesing elements 
let fetchAPI = document.querySelector("#fetch-API")
let useramount=document.querySelector("#amount")
let options=document.querySelectorAll(".option")
let convert=document.querySelectorAll("#convert")
let result=document.querySelector("#result")


//fetching API keys 

let APIStore;
let url = "https://api.twelvedata.com/currency_conversion?symbol=USD/INR&amount=100&apikey=5e0277b5e891419aa13d3ece9f78cb4a";
let promise = fetch(url)
 promise.then((response)=>{
    return response.json()

}).then((data)=>{
   APIStore=(data.rate);
   console.log(APIStore)
    fetchAPI.innerText=`1USD =${APIStore} INR`
})
    


//adding event listener to options
let userChoice = "";
options.forEach((option)=>{
option.addEventListener("click",()=>{
    option.style.backgroundColor="grey"
    userChoice=option.innerText
    console.log(userChoice)

});
});

//adding eventlistener to convert button
convert.forEach((convert)=>{
    convert.addEventListener("click",()=>{

    //userenteredAmount
    let amount=Number(useramount.value)
    


    //formula
 if(userChoice==="INR-USD"){
    finalresult=amount/APIStore;
    console.log(finalresult)
 }
else{
    finalresult=APIStore*amount;
    console.log(finalresult)
 }
 result.innerText=finalresult;

//reset all options button color
options.forEach((option)=>{
 option.style.backgroundColor="";
 
  
})
   userChoice="";

 });
})
 
