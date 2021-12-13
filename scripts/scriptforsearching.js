function search() {
 let whatsearch = document.getElementById("input-id").value;
 if (whatsearch == "Главная" || whatsearch == "Польза"){
     location.href = "new2.html";
 }
 else if (whatsearch == "Виды растений" || whatsearch == "Растения"){
     location.href = "typesofflowers.html";
 }
 else if (whatsearch == "Актуальное" || whatsearch == "Популярное"){
    location.href = "actual.html";
 }
 else if (whatsearch == "Полезное" || whatsearch == "Болезни" || whatsearch == "Вредители") {
    location.href = "useful.html";
 }
 else if (whatsearch == "Советы новичкам") {
    location.href = "rec.html";
 }
 else if (whatsearch == "Температура"){
   location.href = "temp.html";
}
else if (whatsearch == "Свет"){
   location.href = "light.html";
}
else if (whatsearch == "Почва"){
   location.href = "ground.html";
}
}