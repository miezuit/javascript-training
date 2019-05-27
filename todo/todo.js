if (localStorage.getItem('tasks') == null) {
  var tasks = [];
  saveTasks();
} else {
  var tasks = JSON.parse(localStorage.getItem('tasks'));
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  saveTasks();
  $('#myList').text('');
  tasks.forEach(function(task) {
    let item = $('<li></li>')
                .text(task.name)
                .attr('id', task.id)
                .click(completeTask);
    if(task.completed) {
      item.addClass('checked')
      let close = $('<span>\u2718</span>')
                  .addClass('close')
                  .attr('removeId', task.id)
                  .click(removeTask);
      item.append(close);
    }
    $('#myList').append(item);
  });
}

function addTask() {
  let newTask = {
    id: Math.floor(Math.random() * 1000000000),
    name: $('#taskName').val(),
    completed: false
  };
  tasks.unshift(newTask);
  renderTasks();
}

function completeTask(event) {
  let taskId = $(event.target).attr('id');
  tasks.forEach(function(task) {
    if(task.id == taskId) {
      task.completed = !task.completed;
    }
  });
  renderTasks();
}

function removeTask(event) {
  let taskId = $(event.target).attr('removeId');
  let newTasks = tasks.filter(function(task) {
    return task.id != taskId;
  });
  tasks = newTasks;
  renderTasks();
}

renderTasks();
$('.addBtn').click(addTask);
