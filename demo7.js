
var sub = document.getElementById("sub")
var frm = document.querySelector("form")
frm.addEventListener("submit", fun1)

function fun1(e) {
    e.preventDefault();
}
var para1 = document.getElementsByClassName("para1")[0]
var para2 = document.getElementsByClassName("para2")[0]
var para3 = document.getElementsByClassName("para3")[0]
var para4 = document.getElementsByClassName("para4")[0]
var para5 = document.getElementsByClassName("para5")[0]
var para6 = document.getElementsByClassName("para6")[0]
var inp1 = document.getElementById("inp1")
var inp2 = document.getElementById("inp2")
var inp3 = document.getElementById("inp3")
var ch1 = document.getElementById("ch1") 
var ch2 = document.getElementById("ch2")
var chbox1 = document.getElementsByClassName("chbox")[0]
var chbox2 = document.getElementsByClassName("chbox")[1]
var chbox3 = document.getElementsByClassName("chbox")[2]
var select1 = document.getElementsByClassName("slct")[0]
var select2 = document.getElementsByClassName("slct")[1]
var select3 = document.getElementsByClassName("slct")[2]
var select4 = document.getElementsByClassName("slct")[3]
var select5 = document.getElementsByClassName("slct")[4]
var div = document.getElementById("myDIV")
sub.addEventListener("click", fun2)
inp1.addEventListener("focus", function () {
    inp1.style.backgroundColor = "rgb(165, 165, 165)"
})
inp2.addEventListener("focus", function () {
    inp2.style.backgroundColor = "rgb(165, 165, 165)"
})
inp3.addEventListener("focus", function () {
    inp3.style.backgroundColor = "rgb(165, 165, 165)"
})

function fun2() {
    if (inp1.value == false) {
        div.style.backgroundColor = "rgb(241, 220, 219)"
        inp1.style.border = "red 1px solid"
        para1.innerHTML = "-Name is required"
        para1.style.color = "red"
    } else {
        inp1.style.border = "none"
        para1.innerHTML = ""
        div.style.backgroundColor = "rgba(241, 220, 219,0)"
    }
    if (inp2.value == false) {
        div.style.backgroundColor = "rgb(241, 220, 219)"
        inp2.style.border = "red 1px solid"
        para2.innerHTML = "-Email is not valid"
        para2.style.color = "red"
    } else {
        inp2.style.border = "none"
        para2.innerHTML = ""
        div.style.backgroundColor = "rgba(241, 220, 219,0)"
    }
    if (inp3.value == false) {
        div.style.backgroundColor = "rgb(241, 220, 219)"
        inp3.style.border = "red 1px solid"
        para3.innerHTML = "-Password must be 8 chars at least."
        para3.style.color = "red"
    } else {
        inp3.style.border = "none"
        para3.innerHTML = ""
        //div.style.backgroundColor = "white"
    }
    if (ch1.checked == false && ch2.checked == false) {
        div.style.backgroundColor = "rgb(241, 220, 219)"
        para4.innerHTML = "-Please select your gender."
        para4.style.color = "red"
    } else {
        para4.innerHTML = ""
        div.style.backgroundColor = "rgba(241, 220, 219,0)"
    }


    if (chbox1.checked == false && chbox2.checked == false) {
        div.style.backgroundColor = "rgb(241, 220, 219)"
        para5.innerHTML = "-Please select at least two sports."
        para5.style.color = "red"
    } else if (chbox2.checked == false && chbox3.checked == false) {
        div.style.backgroundColor = "rgb(241, 220, 219)"
        para5.innerHTML = "-Please select at least two sports."
        para5.style.color = "red"
    } else if (chbox1.checked == false && chbox3.checked == false) {
        div.style.backgroundColor = "rgb(241, 220, 219)"
        para5.innerHTML = "-Please select at least two sports."
        para5.style.color = "red"
    } else {
        para5.innerHTML = ""
        div.style.backgroundColor = "rgba(241, 220, 219,0)"
    }

    if (select1.selected == false && select2.selected == false && select3.selected == false && select4.selected == false && select5.selected == false) {
        div.style.backgroundColor = "rgb(241, 220, 219)"
        para6.innerHTML = "-Please select your country."
        para6.style.color = "red"
    } else {
        para6.innerHTML = ""
        //div.style.backgroundColor = "rgba(241, 220, 219,0)"
    }

}