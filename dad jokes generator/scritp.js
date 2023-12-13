const x=document.querySelector("#btn");
const k=document.getElementById("k");
const api="OmXpngt4x6xdED/xGcxLyA==WcAe114S018YDnzJ"

const apiurl='https://api.api-ninjas.com/v1/dadjokes?limit=1'

const options={
method :"GET" , 
headers:{
"X-Api-Key": api , 
} , 
};
async function getjoke(){
try{
    k.innerText="updating please wait!";
    x.innerText="loading....";
    const response =await fetch(apiurl , options);
    const data =await response.json();
    k.innerText=data[0].joke;
    x.innerText="tell me a joke"
    //console.log(data[0].joke);   
}
catch(error){
k.innerText="error occured"
x.innerText="try again later"
}
}

x.addEventListener("click" , getjoke);