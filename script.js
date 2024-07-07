document.addEventListener("DOMContentLoaded", () => {
  const itemInput = document.getElementById("itemInput");
  const addBtn = document.getElementById("addBtn");
  const clearBtn = document.getElementById("clearBtn");
  const list = document.getElementById("list");

  addBtn.addEventListener("click", () => {
      const listItem = document.createElement("li");
      listItem.textContent = itemInput.value;

      // Create a button to remove the item
       const removeBtn = document.createElement("button");
       removeBtn.textContent = "Remove";
       removeBtn.addEventListener("click", () => {
         list.removeChild(listItem);
       });

      // Append  remove button to the list item
    
        listItem.appendChild(removeBtn);

      // Append the list item to the list
      list.appendChild(listItem);

      // Clear the input field
      itemInput.value = "";
    });
  });

  clearBtn.addEventListener("click", () => {
    list.innerHTML = "";
  });

