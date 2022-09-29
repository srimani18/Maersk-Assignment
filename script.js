let gridItems = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

//assigning a variable for container div
let mainGrid = document.getElementById('grid-container');

//creating array item with span element
gridItems.forEach((item) => {
    mainGrid.innerHTML += '<span id=' + item + '>' + item + '</span>'
  });

//appending each array item dynamically to main grid container by id attribute
appendItem = () => {
    let count = 0;
    mainGrid.innerHTML = ''; // this will clear main grid and resssign items in main grid for every button click
    while (count < gridItems.length) {
        let gridItem = document.createElement("span");
        gridItem.innerHTML = gridItems[count];
        gridItem.setAttribute('id', gridItems[count]);
        mainGrid.appendChild(gridItem);
        ++count;
      }
}

//shuffle array items
shuffle = () => {
  for (let i = gridItems.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = gridItems[i];
    gridItems[i] = gridItems[j];
    gridItems[j] = temp;
}
  this.appendItem();
}

 //sort array items
sort = () => {
    for (let i = 0; i < gridItems.length; i++) {
        for (let j = i + 1; j < gridItems.length; j++) {
          if (gridItems[i] > gridItems[j]) {
            let temp = gridItems[i];
            gridItems[i] = gridItems[j];
            gridItems[j] = temp;
          }
        }
      }
  this.appendItem();
}