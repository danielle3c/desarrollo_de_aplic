let like1 = 0;
let like2 = 0;
let like3 = 0;

function mostrarMeGusta1() {
    like1++;
    document.getElementById("likes1").innerText = `${like1} like(s)`;
}

function mostrarMeGusta2() {
    like2++;
    document.getElementById("likes2").innerText = `${like2} like(s)`;
}

function mostrarMeGusta3() {
    like3++;
    document.getElementById("likes3").innerText = `${like3} like(s)`;
}
