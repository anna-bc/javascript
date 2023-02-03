const form = document.querySelector("form");
const todoList = document.getElementById("todoList");
const todoListInput = document.getElementById("todoInput");
const dueDateInput = document.getElementById("dueDate");
const prioInput = document.getElementById("priority");
const sortBtn = document.getElementById("sortByPrio");

let todos = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = todoListInput.value;
  todoListInput.value = " ";

  let todo = {
    title: value,
    dueDate: dueDateInput.value,
    priority: prioInput.value,
    done: false

  };
  todos.push(todo);
  createTodoList(todos);
});

function createTodoList(todos) {
    document.querySelectorAll(".todo-item").forEach((el) => el.remove());
  todos.forEach((element) => {
    const newItem = document.createElement("li");
    newItem.classList.add("todo-item");

    const prioWrapper = document.createElement("div");
    prioWrapper.classList.add("todo-item__elem");
    prioWrapper.classList.add("todo-item__elem--prio");
    const prioText = document.createElement("div");
    prioText.innerText = "Priority";
    prioWrapper.appendChild(prioText);
    prioText.classList.add("prio");
    const prioBox = document.createElement("div");
    prioBox.innerText = element.priority;
    prioWrapper.appendChild(prioBox);
    prioBox.classList.add("prio");
    prioBox.classList.add("prio--box");
    newItem.appendChild(prioWrapper);

    const wrapper = document.createElement("div");
    wrapper.classList.add("todo-item__elem");
    wrapper.classList.add("todo-item__elem--infos");
    const text = document.createElement("h3");
    text.classList.add("infos__item");
    wrapper.appendChild(text)
    newItem.appendChild(wrapper);

    const dueDateText = document.createElement("div");
    dueDateText.innerText = "Due Date: " + element.dueDate;
    wrapper.appendChild(dueDateText);
    dueDateText.classList.add("infos__item");

    const btnWrapper = document.createElement("div");
    btnWrapper.classList.add("todo-item__elem");
    btnWrapper.classList.add("todo-item__elem--buttons");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.classList.add("todo-item__elem");

    deleteBtn.addEventListener("click", () => {
      deleteTodo(element);
    });

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    checkbox.addEventListener('change', () => {
        newItem.classList.toggle('checked');
        let newTodos = [];
        if (checkbox.checked) {
            newTodos = todos.filter(el => {
                if (el !== element) {
                    console.log(el);
                    console.log(element);
                    newTodos.push(el);
                }
            });
            todos = newTodos;
            // let idx = todos.indexOf(element);
            // delete todos[idx];
            console.log(todos);
        } else {
            todos.push(element);
        }
    })

    btnWrapper.appendChild(checkbox);
    btnWrapper.appendChild(deleteBtn)
    newItem.appendChild(btnWrapper);
    todoList.appendChild(newItem);
    text.innerText = element.title;
    })
}

sortBtn.addEventListener('click', (e) => {
    sortByPriority(todos);
    createTodoList(todos);
})

function deleteTodo(todo) {
    let idx = todos.indexOf(todo);
    delete todos[idx];
    createTodoList(todos);
}

function sortByPriority(todos) {
    let done = false;
    while(!done) {
        done = true;
        for (let i = 1; i < todos.length; i++) {
            if (todos[i - 1].priority > todos[i].priority) {
                done = false;
                let tmp = todos[i - 1];
                todos[i - 1] = todos[i];
                todos[i] = tmp;
            }
        }
    }
}