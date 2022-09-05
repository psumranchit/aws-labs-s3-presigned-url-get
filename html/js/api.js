var keyValue = 0;
function handleClick(rdo) {
    if (rdo.id === "chomper"){
        keyValue = "lbt-chomper.png";
    }
    else {
        keyValue = "lbt-ducky.png";
    }
    fetchPreSigned(keyValue)
}

function fetchPreSigned(dino_selected){ 

    var url = "API-INVOKE-URL";
    var obj = {
        dino : dino_selected
    };
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    })
    .then(function fetchPreSigned(response){
    return response.json()
    })
    .then(function fetchPreSigned(data){
        dino_pic=document.getElementById("dino_pic")
        
        dino_pic.src = data.URL
        dino_pic.style.visibility='visible'
        
    })
}