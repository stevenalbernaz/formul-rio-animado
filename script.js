let left = true;
function validateForm(){
    var btn = document.getElementById("btn")
    var name = document.forms["Form"]["name"].value;
    var senha = document.forms["Form"]["senha"].value;

    if (name == null || name == "", senha == null || senha == ""){
        btn.classList.add("error");
        changePosition(btn);
        }else {
            btn.classList.add("Success");
        }
}

function changePosition(btn){
    if(left){
        btn.style.marginLeft = '150px';
        left = false;
    } else {
        btn.style.marginLeft = '0px';
        left = true;
    }
}