var name = document.getElementById('name');
var pwd=document.getElementById('pwd');

function reg(){
    var StoreN = document.getElementById("name").value;
    var StoreP = document.getElementById("pwd").value;
    localStorage.setItem('name',StoreN);
    localStorage.setItem('pwd',StoreP);
    if(StoreN.length > 0 && StoreP.length >0) alert("data has been recorded");
}

function login(){
    //儲存register data在localstorage
    var StoreN=localStorage.getItem('name');
    var StoreP=localStorage.getItem('pwd');

    //儲存login data在localstorage
    var name = document.getElementById("Enteruser").value;
    var pass = document.getElementById("Entertype").value;
    localStorage.setItem('Enteruser', name);
    localStorage.setItem('Entertype', pass);
    var EnterN = localStorage.getItem('Enteruser');
    var EnterP = localStorage.getItem('Entertype');
    if(StoreN!=EnterN||StoreP!=EnterP){
        alert("Error");
    }
    else{
        location.href="Pos/index.html";
        alert("The ans is correct");
    }
}