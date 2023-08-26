

let submitBtn = document.getElementById('submit');
let undoBtn = document.getElementById('undo');
undoBtn.addEventListener('click', DeleteTableRow);
submitBtn.addEventListener('click', addTask);
let tasks = [];

class Task
 {
    constructor(activity, duration, status)
    {
      this.activity = activity;
      this.duration = duration;
      this.status= status;
    }
}
function addTask()
{
    if (tasks.length<10)
    {
    // Get the HTML elements
    let act = document.getElementById('activity');
    let dur = document.getElementById('duration');
    let st = document.getElementById('status');

    //create a new object with these values
    const createTask = new Task(act.value, dur.value, st.value);

    //add task to array
    tasks.push(createTask);

    //display the new object in table
    displayTable(createTask);
    displayNumber();
     }
     else  
     {
        alert("Calm down sir!");
     }
}

function displayTable(theTask) 
{
    // get the table to add rows to
    var table = document.getElementById('tasks');
 
      //create a row and a cell element for each task
      var row = document.createElement('tr');
      var cell1 = document.createElement('td');
      var cell2 = document.createElement('td');
      var cell3 = document.createElement('td');

      //set the cell data
      cell1.innerHTML = "Type: " + theTask.activity;
      cell2.innerHTML = "Duration: " + theTask.duration;
      cell3.innerHTML = "Status: " + theTask.status;
      colorStatus(cell3);

      //Add cell to row
      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
      
      //add row to table. 
      table.appendChild(row);
}

function displayNumber()
{
    const showTotal = document.getElementById('count');
    showTotal.textContent = tasks.length;
}

function colorStatus(cell)
{
    if (cell.innerHTML =="Status: Not finished")
    {
          cell.style.color="red";
    }
    else if (cell.innerHTML = "Status: Finished")
    {
        cell.style.color="green";
    }
}

function DeleteArrayObject()
{
    tasks.pop(); // last element removed from array
    displayNumber(); //update array length
}

function DeleteTableRow()
{
    var table = document.getElementById('tasks');
    var rowCount = table.rows.length;
    table.deleteRow(rowCount -1);
    DeleteArrayObject();
}


      
      //add row to table. 
      table.appendChild(row);
    }
}
