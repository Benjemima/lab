
function changeColor(squareId){
    var square = document.getElementById(squareId)
    var randomColor = getRandomColor()
    square.style.backgroundColor = randomColor
}


function getRandomColor(){
    var letters = '0123456789ABCDEFG';
    var color = '#'
    for(var i = 0; i < 6; i++){
        color += letters [Math.floor(Math.random() * 16)];
    }
    return color;
}