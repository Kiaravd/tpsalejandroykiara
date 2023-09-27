var seg = 0;
var min = 0;
var hor = 0;
var avance = setInterval('segundos()',1000);
function segundos ()
{
    seg = ((new Date().getSeconds())*6);
    document.getElementById("segundo").style.transform = "rotate("+seg+"deg)";

    min = ((new Date().getMinutes())*6);
    document.getElementById("minuto").style.transform = "rotate("+min+"deg)";

    hor = ((new Date().getHours())*30);
    document.getElementById("hora").style.transform = "rotate("+hor+"deg)";

}
tiempo= document.getElementById('tiempo');
setInterval(() => {
    texto='Hora: '+new Date().getHours()+' : ' + new Date().getMinutes()+' : ' + new Date().getSeconds()
    tiempo.innerHTML= texto;
}, 1000)

