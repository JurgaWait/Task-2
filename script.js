/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const btn = document.querySelector('#btn__element');
btn.onclick = Counter;
const clicks = document.querySelector('#btn__state');
clicks.div = document.querySelector('#btn__state');

let i = 0;

function Counter() {
    i += 1;
    clicks.innerHTML = i;
}