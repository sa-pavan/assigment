function clearFrame() {
    document.getElementById("grid").innerHTML = "";
  }
  function processedArray(arr, action) {
    var ele = document.getElementById("grid");
    var sortBtn = document.getElementById("sort");
    if (action === "shuffle") {
      ele.classList.remove("sorted");
      sortBtn.classList.remove("disabled");
      return (temp = arr.sort(() => Math.random() - 0.5));
    } else {
      ele.classList.add("sorted");
      return (temp = arr.sort());
    }
  }

  function sortNShuffle(action) {
    clearFrame();
    var arr = [9, 2, 1, 3, 5, 8, 4, 7, 6];
    var temp = processedArray(arr, action);
    var sortBtn = document.getElementById("sort");
    var isSorted = document
      .getElementById("grid")
      .classList.contains("sorted");
    /* to disable button if its sorted */
    isSorted &&
      (sortBtn.disabled = true && sortBtn.classList.add("disabled"));

    for (let i = 0; i < temp.length; i++) {
      var node = document.createElement("div");
      var textnode = document.createTextNode(temp[i]);
      node.className += `${"item" + " " + "item" + [temp[i]]}`;
      node.appendChild(textnode);
      document.getElementById("grid").appendChild(node);
    }
  }