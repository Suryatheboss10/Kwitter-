function adduser(){
    username = document.getElementById("account_name").value;
    localStorage.setItem("account_name", username);
    window.location="kwitter_room.html"
    }

