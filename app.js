window.addEventListener("message", (event) =>{
    if (event.data.action == true){
        $('.container').fadeIn(300);
        $('.key').text(event.data.key);
        $('.text').text(event.data.text);
    }
    else if (event.data.action == false){
        $('.container').fadeOut(300);
    }
})

