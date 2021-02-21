let input = document.getElementById("input");
let ul = document.getElementById("list");

function add() {
    let text = input.value;
    if (text === ""){
		alert("input field should not be empty...");
    }else{
        let li = document.createElement("li");
        
        //new element add at 0 index
        li.innerHTML = text;
        ul.insertBefore(li, ul.childNodes[0])
        
        //new element add at the end of the list
        // let txtValue = document.createTextNode(text);
        // li.appendChild(txtValue);
        // ul.appendChild(li);

        //Empty input filed after adding element
        input.value = "";

      
      
      //ADD line / strike on element
      let flag = 0;
      li.addEventListener('click', () => {
        if (flag == 0) {
          li.style.textDecoration = "line-through";
          flag++;
        } else {
          li.style.textDecoration = "none";
          flag = 0;
        }
      })

      //Remove the element using double click
      li.addEventListener('dblclick', () => {
        // li.style.display="none";
        li.remove();
      })

    }
}