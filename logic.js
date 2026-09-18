
var arr = [];

x = document.getElementsByClassName("disp")[0];
y1 = document.getElementById("1");
y2 = document.getElementById("2");
y3 = document.getElementById("3");
y4 = document.getElementById("4");
y5 = document.getElementById("5");
y6 = document.getElementById("6");
y7 = document.getElementById("7");
y8 = document.getElementById("8");
y9 = document.getElementById("9");
y0 = document.getElementById("0");
ac = document.getElementById("ac");
C = document.getElementById("c1");
P = document.getElementById("perc");
S = document.getElementById("sub");
D = document.getElementById("divi");
M = document.getElementById("mult");
A = document.getElementById("add");
eq = document.getElementById("eq");
ph = document.getElementById("pho");
dot = document.getElementById("dot");

function mat(n) {
   if (check >= 15 && n != "X") return;
   if (n != "X") {
      arr.push(n);
      check++;
   }      

   else { arr.pop(); check--; }
   x.innerHTML = `<h1>${arr.join("")}</h1>`;

}

ac.addEventListener("click", function () {
   arr = []; x.innerHTML = "";
});
C.addEventListener("click", function () {
   mat("X");
});

let check = 0;
y0.addEventListener("click", function () {
   mat(0);

});

y1.addEventListener("click", function () {
   mat(1);

});

y2.addEventListener("click", function () {
   mat(2);

});

y3.addEventListener("click", function () {
   mat(3);

});

y4.addEventListener("click", function () {
   mat(4);

});

y5.addEventListener("click", function () {
   mat(5);

});

y6.addEventListener("click", function () {
   mat(6);

});

y7.addEventListener("click", function () {
   mat(7);

});

y8.addEventListener("click", function () {
   mat(8)

});

y9.addEventListener("click", function () {
   mat(9);

});

bool = false;

S.addEventListener("click", function () {
   mat("-");
});

D.addEventListener("click", function () {
   mat("/");
});

M.addEventListener("click", function () {
   mat("*");
});

A.addEventListener("click", function () {
   mat("+");
});

dot.addEventListener("click", function () {
   mat(".");
});

eq.addEventListener("click", function () {
   x.innerHTML = `<h1>${eval(arr.join(""))}</h1>`;
})
// eq.addEventListener("click",function(){
// ph.style.transition = " all .90s ease-in-out 0.2s"
// ph.style.opacity ="1";
// ph.style.zIndex = "100";
// })



