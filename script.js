function attTemp() {

var dis = document.querySelector('.display')

var agora = new Date();

var hor = agora.getHours() + ':' + agora.getMinutes() + ':' + agora.getSeconds();

dis.textContent = hor
}
setInterval(attTemp, 1000)