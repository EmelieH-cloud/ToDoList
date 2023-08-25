


let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', addTask);

/*A task will be an object made from a class */

let tasks = [];

//---------------------------------------------------
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

}

function removeTask()
{

}


function displayTable(theTask) 
{
    // get the table to add rows to
    var table = document.getElementById('tasks');
  
    // do the following for all tasks
    for (var i = 0; i < tasks.length; ++i)
     {
      //create a row and a cell element for each task
      var row = document.createElement('tr');
      var cell1 = document.createElement('td');
      var cell2 = document.createElement('td');
      var cell3 = document.createElement('td');

      //set the cell data
      cell1.innerHTML = "Type: " + tasks[i].activity;
      cell2.innerHTML = "Duration: " + tasks[i].duration;
      cell3.innerHTML = "Status: " + tasks[i].status;

      //Add cell to row
      row.appendChild(cell1, cell2, cell3);
      
      //add row to table. 
      table.appendChild(row);
    }
}
