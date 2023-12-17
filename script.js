const container = document.querySelector('.container');
const button = document.getElementById('addTask');
const input = document.getElementById('inputTask');

button.addEventListener('click', function(){

    let tasks = document.createElement('div');
    tasks.classList.add('tasks');
    
    let li = document.createElement('li');
    li.innerHTML = `${input.value}`;
    tasks.appendChild(li);

    // Check button
    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    tasks.appendChild(checkButton);

    // delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    tasks.appendChild(deleteButton);

    //checking to see if limit of tasks has reached
    let checkLength = document.querySelectorAll('.tasks');
    let taskNumber = checkLength.length;
    if(checkLength.length >=10 ){
        alert("!Limit reached! PLease complete tasks before adding more ");
        checkLength[10].remove();
    }

    // checking if the field is empty or not
    if(input.value == "" || input.value[0] == " "){
        alert("Please, Enter a task first!");
    }
    else{
        container.appendChild(tasks);
        localStorage.setItem(taskNumber,input.value);
        console.log(localStorage);
    }

        //checkButton logic
        checkButton.addEventListener('click', function(){
            li.classList.toggle('done');
        })

        // deleteBUtton logic
        deleteButton.addEventListener('click', function(){
            deleteButton.parentElement.remove();
            localStorage.removeItem(taskNumber);
            let currentTaskNumber = document.querySelectorAll('.tasks');
            for(i = taskNumber; i<=currentTaskNumber.length; i++){
                nextValue = i+1;
                let value = localStorage.getItem(nextValue);
                localStorage.setItem(i,value);
            }
            localStorage.removeItem(currentTaskNumber.length);
        })

        //resetting value to empty
        input.value = "";

})




// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>



// Importing tasks from LOCAL STORAGE !!
// Running the code to create tasks for each key pair value that has been stored in LOCAL STORAGE;
Object.keys(localStorage).sort(function(a, b){return a - b}).forEach(function(key){
    
    let taskValue = localStorage.getItem(key);
    let tasks = document.createElement('div');
    tasks.classList.add('tasks');
    
    let li = document.createElement('li');
    li.innerHTML = `${taskValue}`;
    tasks.appendChild(li);

    // Check button
    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    tasks.appendChild(checkButton);

    // delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    tasks.appendChild(deleteButton);

    container.appendChild(tasks);
    let checkLength = document.querySelectorAll('.tasks');
    let taskNumber = checkLength.length;

    //checkButton logic
    checkButton.addEventListener('click', function(){
        li.classList.toggle('done');
    })

    // deleteBUtton logic
    deleteButton.addEventListener('click', function(){
    deleteButton.parentElement.remove();
    localStorage.removeItem(taskNumber);
    let currentTaskNumber = document.querySelectorAll('.tasks');
    for(i = taskNumber; i<=currentTaskNumber.length; i++){
        nextValue = i+1;
        let value = localStorage.getItem(nextValue);
        localStorage.setItem(i,value);
    }

    localStorage.removeItem(currentTaskNumber.length);
    })

});

// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>




