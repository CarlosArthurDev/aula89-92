function adduser(){
    var val1= document.getElementById("user1").value
    var val2= document.getElementById("user2").value

    localStorage.setItem("name1",val1)
    localStorage.setItem("name2",val2)

    window.location="game_page.html"
}