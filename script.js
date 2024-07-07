document.addEventListener("DOMContentLoaded", () => {
  const itemInput = document.getElementById("itemInput");
  const addBtn = document.getElementById("addBtn");
  const clearBtn = document.getElementById("clearBtn");
  const list = document.getElementById("list");

  addBtn.addEventListener("click", () => {
    if (itemInput.value.trim() !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = itemInput.value;

      // Create a button to remove the item
      const removeBtn = document.createElement("button");
      removeBtn.style.backgroundColor = "black";
      removeBtn.style.color = "red";
      removeBtn.style.borderRadius = "4px";
      removeBtn.textContent = "X";
      removeBtn.addEventListener("click", () => {
        list.removeChild(listItem);
      });
      //mark purchased with a line through
      const purchased = document.createElement("button");
      listItem.appendChild(purchased);
      purchased.textContent = "mark";

      purchased.addEventListener("click", () => {
        listItem.style.textDecoration = "line-through";
      });
      //un mark purchased removing the line through
      const removePurchased = document.createElement("button");
      listItem.appendChild(removePurchased);
      removePurchased.textContent = "un mark";

      removePurchased.addEventListener("click", function () {
        listItem.style.textDecoration = "none";
      });

      // Append  remove button to the list item

      listItem.appendChild(removeBtn);

      // Append the list item to the list
      list.appendChild(listItem);

      itemInput.value = "";
    } else {
      alert("please add an item");
    }
  });

  clearBtn.addEventListener("click", () => {
    list.innerHTML = "";
  });
});
