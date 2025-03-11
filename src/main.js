import './style.css'
import { format } from 'date-fns';

const currentDateAndTime = {
  dateInput: document.querySelector('#date'),
  timeInput: document.querySelector('#time'),

  run() {
    this.setMinDateAndTime();
    this.addDateChangeListener();
  },

  setMinDateAndTime() {
    const now = new Date();

    const currentDate = format(now, 'yyyy-MM-dd');
    const currentTime = format(now, 'HH:mm');

    this.dateInput.setAttribute('min', currentDate);
    this.timeInput.setAttribute('min', currentTime);
  },

  addDateChangeListener() {
    this.dateInput.addEventListener('change', () => {
      const selectedDate = new Date(this.dateInput.value);
      const currentDateObj = new Date();

      if (selectedDate.toDateString() === currentDateObj.toDateString()) {
        this.timeInput.setAttribute('min', format(currentDateObj, 'HH:mm'));
      } else {
        this.timeInput.removeAttribute('min');
      }
    });
  }
};

const modal = {
    openModalButton: document.querySelector(".add"),
    modalDialog: document.querySelector("dialog"),
    closeModalButton: document.querySelector(".modalClose"),
    modalDate: document.querySelector("#date"),
    modalTime: document.querySelector("#time"),
    modalTask: document.querySelector("#task"),

    openModal: function() {
        this.openModalButton.addEventListener("click", () => {
            this.modalDialog.showModal();
            currentDateAndTime.run();
        });
    },

    closeModal: function() {
        this.closeModalButton.addEventListener("click", () => {

            if (this.modalDate.value && this.modalTime.value && this.modalTask.value) {
                createAndPlaceTaskInDom(this.modalDate.value, this.modalTime.value, this.modalTask.value);
                this.modalDialog.close();
                this.modalTask.value = '';
            }

        });
    },

    run: function() {
        this.openModal();
        this.closeModal();
    }
};

modal.run();

class Task {
    constructor(date, time, task, id = null) {
        this.id = id || Date.now().toString();
        this.date = date;
        this.time = time;
        this.task = task;
    }

    createTaskDomElement() {
        const div = document.createElement("div");
        div.classList.add("task-item");
        div.dataset.id = this.id;

        div.innerHTML = `
            <div class="top"> 
                <span class="x">${this.date}</span> 
                <span class="y">${this.time}</span> 
            </div>
            <div class="bottom">
            <p>${this.task}</p> 
            <button class="delete-task"><img src="check.svg"></button>
            </div>
        `;
        
        div.querySelector('.delete-task').addEventListener('click', () => {
            deleteTask(this.id);
            div.remove();
        });
        
        return div;
    }
}

function createAndPlaceTaskInDom(date, time, task) {
    const newTask = new Task(date, time, task);    
    const taskElement = newTask.createTaskDomElement();
    const main = document.querySelector("main");

    if (main) {
        main.appendChild(taskElement);
        saveTask(newTask);
    }
}

function saveTask(newTask) {
    const tasks = getAllTasks(); 
    tasks.push(newTask); 
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getAllTasks() {
    const tasksJSON = localStorage.getItem('tasks');
    return tasksJSON ? JSON.parse(tasksJSON) : [];
}


function deleteTask(id) {
    let tasks = getAllTasks();
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function loadTasksFromLocalStorage() {
    const tasks = getAllTasks();
    const main = document.querySelector("main");
    
    if (main && tasks.length > 0) {
        tasks.forEach(taskData => {
            const task = new Task(
                taskData.date, 
                taskData.time, 
                taskData.task, 
                taskData.id
            );
            
            main.appendChild(task.createTaskDomElement());
        });
    }
}


document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);



