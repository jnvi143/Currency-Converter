//acccesing elements 
let fetchAPI = document.querySelector("#fetch-API")
let useramount=document.querySelector("#amount")
let options=document.querySelectorAll(".option")
let convert=document.querySelector("#convert")
let result=document.querySelector("#result")

//fetching API keys 
let APIStore;
let url = "https://api.freecurrencyapi.com/v1/latest?apikey=YOUR_API_KEY";
let promise = fetch(url)
 promise.then((response)=>{
    return response.json()

}).then((data)=>{
   APIStore=(data.data.INR);
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
    convert.addEventListener("click",()=>{

    //userenteredAmount
    let amount=Number(useramount.value)
    
    //formula
    let finalresult;
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
});
   userChoice="";

});
 
