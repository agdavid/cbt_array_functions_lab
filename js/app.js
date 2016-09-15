var array = ["Antonio", "Duc", "Steve", "Mike"];

function DisplayResults() {
  var ResultsDiv = document.getElementById('arrayResults');
  ResultsDiv.innerHTML = '';
  var n = array.length;

  for (var i = 0; i < n; i++) {
     var ChildDiv = document.createElement('div');
     var string = "Item at index " + i.toString() + 
                  " of " + n.toString() + " items: " + array[i].toString();
      ChildDiv.innerHTML = string;
      ResultsDiv.appendChild(ChildDiv);
  }
};

function arrayPush() {
  var value = document.getElementById('newValue').value;
  array.push(value);
  DisplayResults();
};

function arrayPop() {
  var lostValue = array.pop();
  alert("You just removed " + lostValue + " from the end.");
  DisplayResults();
};

function arrayUnshift() {
  var value = document.getElementById('newValue').value;
  array.unshift(value);
  DisplayResults();
};

function arrayShift() {
  var lostValue = array.shift();
  alert("You just removed " + lostValue + " from the start.");
  DisplayResults();
};

window.onload = DisplayResults;