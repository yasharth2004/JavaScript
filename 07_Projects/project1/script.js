const buttons = document.querySelectorAll(".button")
const body =document.querySelector("body")
const html = document.documentElement;

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='ashgray')
        {    body.style.backgroundColor = "#bfcbc2";
             html.style.backgroundColor = "#bfcbc2";
        }
        else if(e.target.id==='green')
        {
            body.style.backgroundColor = "#c2e812";
            html.style.backgroundColor = "#c2e812";
        }
        else if(e.target.id==='lightgreen')
        {
            body.style.backgroundColor = "#91f5ad";
             html.style.backgroundColor = "#91f5ad";
        }
        else if(e.target.id==='orange')
        {
            body.style.backgroundColor = "#ff934f";
             html.style.backgroundColor = "#ff934f";
        }
    })
});