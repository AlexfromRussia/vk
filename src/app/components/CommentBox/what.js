let taskslIST = ['task 1', 'task 2', 'task3'];

const tasks = localStorage.getItem('storedTasks');
if (tasks) {
  taskslIST = JSON.parse(tasks);
}
console.log(taskslIST);
export default taskslIST;
