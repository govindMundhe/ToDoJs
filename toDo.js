var x=1
function addTask() {
	var task = document.getElementById('new').value;
	console.log(task);
	if (task == "") 
	{
		alert("Please Enter Task");
	}
	else
	{
		// var d = document.getElementById('Task');
		// d.innerHTML += "<input type='text' class= 'todo' id='tst"+ x++ +"' value = "+ task +"><br >";
		// document.getElementById('new').value = "";
		var text = document.createElement("input");
		text.type = 'text';
		text.setAttribute('class', 'todo');
		text.setAttribute('value', task);
		var d = document.getElementById('Task');
		d.appendChild(text);
		document.getElementById('new').value = "";
		

		var complete = document.createElement("input");
		complete.type = 'button';
		complete.setAttribute('class', 'com')
		complete.setAttribute('onClick', 'complete()')
		d.appendChild(complete);

		var del = document.createElement("input");
		del.type = 'button';
		del.setAttribute('class', 'del')
		complete.setAttribute('onClick', 'del()')
		d.appendChild(del);
	}

}

function complete()
{
	console.log("Success");
}


function del()
{
	console.log("Success");
}