let menu = ['mohamed','ahmed',[1,2,3]]


for (let i = 0; i < menu.length; i++) {
    // console.log(menu[i])
    for (let k = 0; k < menu[i].length; k++) {
        const element = menu[i][k]
        // console.log(element)
        
    }
}

let colors = ['blue','pink','green','purple','red','yellow']
let n = getRandomN();
function call() {
    n++
    if(n > colors.length - 1){
        n = 0
    }
    if(n < 0){
        n = colors.length - 1
    }
    let currentColor = colors[n]
    document.body.style.backgroundColor = currentColor
    document.querySelector('h1').innerText = currentColor
}
function set(){
    setInterval(call, 1000)
}
window.addEventListener('load',set)
function getRandomN(){
    return Math.floor(Math.random() * colors.length)
}