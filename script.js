const button = document.querySelector("button");
const recordList = document.getElementById("record-list");


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

    const record = document.createElement("p");
 
   
    record.textContent = date + " / " + 
    sport + " / " + 
    number + " 分 / " +
    memo;
    const recordData = { id: Date.now(),sport, date, number, memo };
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "削除";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";
    deleteButton.addEventListener("click", function () {
        record.remove();
    const savedRecords = JSON.parse(localStorage.getItem("records")) || [];
    const newRecords = 
    savedRecords.filter(function (item)
    {
        return item.id !== recordData.id;
    });
    localStorage.setItem("records",JSON.stringify(newRecords));
    });

    record.appendChild(deleteButton);
    recordList.appendChild(record);
      
    const savedRecords = JSON.parse(localStorage.getItem("records")) || [];
    savedRecords.push(recordData);
    localStorage.setItem("records",JSON.stringify(savedRecords));
  
 
    document.getElementById("sport").value = "";
    document.getElementById("number").value = "";
    document.getElementById("memo").value = "";
});

    const records = JSON.parse(localStorage.getItem("records")) || [];
    records.forEach(function(recordData) {
    const record = document.createElement("div");
    record.className = "record-card";
    const sportText = document.createElement("h3");
    sportText.textContent = recordData.sport;
    sportText.className = "record-sport";

    const dateText = document.createElement("p");
    dateText.textContent = recordData.date;
    dateText.className = "record-date";

    const numberText = document.createElement("p");
    numberText.textContent = recordData.number + "分";
    numberText.className = "record-number";

    const memoText = document.createElement("p");
    memoText.textContent = recordData.memo;
    memoText.className = "record-memo";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";
    deleteButton.addEventListener("click", function () {
    record.remove();
    const savedRecords = JSON.parse(localStorage.getItem("records")) || [];
    const newRecords = savedRecords.filter(function(item) {
    return item.id !== recordData.id;
    });
    localStorage.setItem("records",
        JSON.stringify(newRecords));
    });
     

　　 record.appendChild(sportText);
    record.appendChild(dateText);
    record.appendChild(numberText);
    record.appendChild(memoText);
    record.appendChild(deleteButton);
    recordList.appendChild(record);
});