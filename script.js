let add = document.querySelector("#add");
let follow = document.querySelector("h2");
let check = 0;

add.addEventListener("click", function(){
    if(check === 0){
        follow.innerHTML = "Friend"
        add.innerHTML = "Remove Friend"
        follow.style.color = "green"
        check = 1;
    }else{
        follow.innerHTML = "Stranger"
        add.innerHTML = "Add Friend"
        follow.style.color = "red"
        check = 0;
    }
})