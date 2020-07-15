var urlValue = document.getElementById("_urlInput");
// var urlValue = document.getElementById("_urlInput");

var convertBtnFunc = ()=>{
    console.log(`url value : ${urlValue.value}`)
}

function sendURL(URL) {
    fetch(`http://localhost:3000/download?URL=${URL}`, {
        method:'GET'
    }).then(res => res.json())
    .then(json => console.log(json));
}