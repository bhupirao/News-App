// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML=navbar;


const url=`https://masai-mock-api.herokuapp.com/news?q=${search_input}`
let results =document.getElementById("results")

fetch(url)
.then(function (res){
    return res.json();

})
.then(function (res){
    console.log(res)
})
.catch(function (err){
    console.log(err)
});
