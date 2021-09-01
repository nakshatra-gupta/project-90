function addUser()
{
    Player_1_ID = document.getElementById("Input_1").value;
    Player_2_ID = document.getElementById("Input_2").value;
    
    localStorage.setItem("Input_1", Player_1_ID);
    localStorage.setItem("Input_2", Player_2_ID);

    window.location  =  "game.html";
}