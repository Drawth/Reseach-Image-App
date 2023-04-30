const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
let searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector("#button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imageList-wrapper");

runEventListener();
function runEventListener() {
    form.addEventListener("submit", search)
    clearButton.addEventListener("click",clearData)
}


function search(e) {
    const value = searchInput.value.trim();
    if (value === "") {
        alert("Lütfen bir değer giriniz");
    }
    else {
        fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
            method: "GET",
            headers: {
                Authorization: "Client-ID lrEf43HiC-8XUKVmRKVshJFTg3TAEytfswZnptc00YQ"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                Array.from(data.results).forEach(element => {
                    showDataToUI(element.urls.small);
                });
            })
            .catch((err) => console.log(err));
        e.preventDefault();
    }

}
function showDataToUI(url) {

    const div = document.createElement("div");
    div.className = "card";
    const img =document.createElement("img");
    img.setAttribute("src",url);
    img.height='400';
    img.width='400';
    div.appendChild(img);
    imageListWrapper.appendChild(div);


}

function clearData(){
    searchInput="";
//    Array.forEach(imageListWrapper.children).forEach((image)=>{
        // image.remove();
    // })
    imageListWrapper.innerHTML="";
}