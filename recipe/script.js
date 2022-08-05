function validTextColor(strColor) {
    const instanceStyle = new Option().style;
    instanceStyle.color = strColor; 
    return instanceStyle === strColor;
}

let backgroundColor = function() {
    let userColor = prompt("What background color do you want?", 'rgb(164, 247, 222)');
    if(!validTextColor(userColor)){
      console.log("This is not a valid input");
    }
    return document.body.style.backgroundColor = userColor;
  }
  
  backgroundColor();

  let textColor = function() {
    let userColor = prompt("What text color do you want?", 'black');
    if(!validTextColor(userColor)){
      console.log("This is not a valid input");
    }
    return document.body.style.color = userColor;
  }
  
  textColor();


const ingredients = ['Chocolate Mix','7 eggs', 'oil', 'sugar', 'condensed Milk', 'Evaporated Milk', 'Vanilla Extract']; 

function createList(arr){
    const ol = document.createElement("ol"); 
    document.getElementById('ingredients').appendChild(ol); 
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li'); 
        
        ol.appendChild(li); 
        li.innerHTML = `<a href=${arr[i]}>${arr[i]}</a>`
}
}

createList(ingredients);

