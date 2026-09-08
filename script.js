alert("NEW JS");
const button = document.querySelector("button");


button.addEventListener("click", function () {
    const sport = document.getElementById("sport").value;
    const date = document.getElementById("date").value;
    const number = document.getElementById("number").value;
    const memo = document.getElementById("memo").value;
    if (sport === "") {
        alert("スポーツを入力してください");
        return;
    }
    if (date === "") {
        alert("日付を入力してください");
        return;
    }
    if (number === "") {
        alert("練習時間を入力してください");
        return;
    }

    const recordList = document.getElementById("record-list");
    const record = document.createElement("p");
 
   
    record.textContent = "TEST / " + date + " / " + sport + " / " + number + " 分 / " + memo;
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "削除";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";
    deleteButton.addEventListener("click", function () {
        record.remove();
    });
    record.appendChild(deleteButton);
    recordList.appendChild(record);
  

    document.getElementById("sport").value = "";
    document.getElementById("number").value = "";
    document.getElementById("memo").value = "";
});