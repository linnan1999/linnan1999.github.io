function vForm(){
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["fmess"].value;
    if(x == ""){
        alert("Enter name!");
        return false;
    }
    if(y == ""){
        alert("Write something");
        return false;
    }
}

