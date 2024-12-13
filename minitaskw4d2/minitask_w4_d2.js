const mainArticle = document.querySelector(".main-article")
const text = document.createElement("p")
text.innerHTML = "Ini Muncul"
text.textContent = "Hayo muncul Apa"
text.style.fontSize = "30px"
const angka = ["1", "2", "3", "4", "5"]
for (let i = 0; i < angka.length; i++) {
    const textChild = document.createElement("p");
    textChild.innerHTML = angka[i];
    text.appendChild(textChild)
}
mainArticle.append(text)
const textTwo = document.createElement("div")
const reset = document.createElement("button")
reset.textContent = "Reset"
reset.onclick = function(){
    while (text.firstChild){
        text.removeChild(text.firstChild);
    }
}

FileList.insertAdjacentText("beforeBegin", "This Number")
text.appendChild