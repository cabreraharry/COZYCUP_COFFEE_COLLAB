function showOnClick(id){
    var element = document.getElementById(id)

    if(element.style.display=="none"){
        element.style.display="flex"
    }
    else{
        element.style.display="none"
    }
}

function alertOrder(id){
    var element = document.getElementById(id)
    alert("ORDER PLACED")
    element.style.display="initial"
}
