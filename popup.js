
var tableRef = document.getElementById('overview').getElementsByTagName('tbody')[0];

tabList = chrome.extension.getBackgroundPage().tabList;

tabList.forEach(function(t){ 

	console.log(t.tab.title.substr(0, 20) + "...")

	// Insert a row in the table at the last row
	var newRow   = tableRef.insertRow();

	// Insert cells
	var newCell  = newRow.insertCell(0);
	var newText  = document.createTextNode(t.tab.title.substr(0,20)+"...");
	newCell.appendChild(newText);
	var newCell  = newRow.insertCell(1);
	var newText  = document.createTextNode(t.opened);
	newCell.appendChild(newText);
	var newCell  = newRow.insertCell(2);
	var newText  = document.createTextNode(t.lastActive);
	newCell.appendChild(newText);

});

