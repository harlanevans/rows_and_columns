// function generate() {
//   var form = document.getElementById('form');
//   var text = '';
//   var i;
//   for (i = 0; i < form.length; i++) {
//     text += form.elements[i].value + '<br>';
//   }
//   document.getElementById("js-test").innerHTML = text;
// }

function generate() {
  if (table !== null) {
    reset();
    generateTable();
  } else {
    generateTable();
  }
}

function reset() {
  console.log("Reset Button CLicked");
  var reset = document.getElementById("table");
  reset.innerHTML = "";
  // potential clearing of input fields after reset
  // var resetValues = document.getElementById('row-value');
  // resetValues.value = "";
  // resetColValues = document.getElementById('column-value').value = '';
}

function generateTable() {
  var table = document.getElementById("table");
  var answer;
  //? ------------ Row Logic --------------
  var rowArray = [];
  var newRow;
  var rowValue;
  var defaultValue = 6;
  // Grabs value of row input field
  rowValue = document.getElementById("row-value").value;
  // Makes any falsey value = 0;
  rowValue = rowValue || 0;

  // Grabs number from the row value and spreads number
  // e.g. input = 4 => spreads into 4, 3, 2, 1
  // and pushes those numbers into rowArray
  if (rowValue == 0) {
    // if rowValue === 0? return default of 6
    for (i = 0; i < defaultValue; i++) {
      factorial = defaultValue - i;
      rowArray.push(factorial);
    }
    console.log("Row value is 0 => going to default of 6");
  } else if (rowValue < 0) {
    // If value is a negative number - send alert
    alert(
      "I'm sorry, the number you have chosen is negative and will not be generated. Please try again."
    );
  } else if (rowValue > 0 && rowValue <= 6) {
    // If row value is less than 6 and greater than 0 loop through and push spread into array
    for (i = 0; i < rowValue; i++) {
      factorial = rowValue - i;
      rowArray.push(factorial);
    }
  } else {
    // If value is higher than 6 - send alert
    alert(
      "I'm sorry, The number you have chosen is higher than 6 and will not be generated. Please try again."
    );
  }

  //? ------------ Column Logic --------------
  var colArray = [];
  var newCol;
  var colValue;
  // Grabs value of Column input field
  colValue = document.getElementById("column-value").value;
  // Makes any falsey value = 0;
  colValue = colValue || 0;

  // Grabs number from the Column value and spreads number
  // e.g. input = 4 => spreads into 4, 3, 2, 1
  // and pushes those numbers into colArray
  if (colValue == 0) {
    // if colValue === 0? return default of 6
    for (i = 0; i < defaultValue; i++) {
      factorial = defaultValue - i;
      colArray.push(factorial);
    }
    console.log("Column value is 0 => going to default of 6");
  } else if (colValue < 0) {
    // If value is a negative number - send alert
    alert(
      "I'm sorry, the number you have chosen is negative and will not be generated. Please try again."
    );
  } else if (colValue > 0 && colValue <= 6) {
    // If Column value is less than 6 and greater than 0 loop through and push spread into array
    for (i = 0; i < colValue; i++) {
      factorial = colValue - i;
      colArray.push(factorial);
    }
  } else {
    // If value is higher than 6 - send alert
    alert(
      "I'm sorry, The number you have chosen is higher than 6 and will not be generated. Please try again."
    );
  }

  // Create the Rows
  for (i = 1; i < rowArray.length + 1; i++) {
    // needed to set i to 1 to avoid showing a 0 in table
    // sets the index back to 0 for correct math
    var newRow = table.insertRow(i - 1);

    // Create the Cols
    for (j = 1; j < colArray.length + 1; j++) {
      // needed to set j to 1 to avoid showing a 0 in table
      // creates a new column for every tow there is
      // sets the index back to 0 for correct math
      var newCol = newRow.insertCell(j - 1);
      // Now do the math
      var answer = i * j;
      // Creates the html layout of said math
      var showAnswer = i + " x " + j + " = " + answer;
      // and shove it in there!
      newCol.innerHTML = showAnswer;
    }
  }

  table.scrollIntoView({ behavior: 'smooth'});

  //! ---------- MESS AROUND ------------
}
