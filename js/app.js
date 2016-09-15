var array = ["Antonio", "Duc", "Steve", "Mike"];

function DisplayResults() {
  var ResultsDiv = document.getElementById('arrayResults');
  var n = array.length;

  for (var i = 0; i < n; i++) {
     var ChildDiv = document.createElement('div');
     var string = "Item at index " + i.toString() + 
                  " of " + n.toString() + " items: " + array[i].toString();
      ChildDiv.innerHTML = string;
      ResultsDiv.appendChild(ChildDiv);
  }
};

window.onload = DisplayResults;