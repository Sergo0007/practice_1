const formNode = document.querySelector("#addForm");
const taskListNode = document.querySelector("#taskList");
const tasks = [];

formNode.addEventListener("submit" ,(event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const employee = event.target.employee.value;
    const price = event.target.price.value;

    const task = {title,employee,price};
    tasks.push(task);

    renderTasks();

    event.target.reset();
});

function renderTasks(){
    taskListNode.innerHTML = "";

    tasks.forEach((task) => {
    const taskNode = document.createElement("li");
    taskNode.textContent = `${task.title} - ${task.employee} - $${task.price}`;
    taskListNode.appendChild(taskNode);
    });
}