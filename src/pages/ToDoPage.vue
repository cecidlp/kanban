<!-- eslint-disable no-console -->
<template>
  <div class="mainContainer">
    <div>
      <h1>Your projects</h1>
    </div>
    <div class="mainMenu">
      <button class="buttonsMenu">
        Workspaces
      </button>
      <button class="buttonsMenu">
        Stars
      </button>
      <button class="buttonsMenu">
        Current Board
      </button>
      <button class="buttonsMenu">
        Private
      </button>
      <button class="buttonsMenu">
        Share
      </button>
      <button class="buttonsMenu">
        Statistical Report
      </button>
    </div>
    <div class="groupStatus">
      <div class="mainRow">
        <!--NEW TASKS-->
        <div class="column1">
          <div class="rowByGroup">
            <div class="headerStatusGroup">
              <h2 class="titleTask">
                To Do
              </h2>
              <button class="addTask" @click="addNewTask">
                +
              </button>
              <div id="newTaskToAdd" class="form-popup">
                <form action="" class="form-container">
                  <h3 class="title-newtask">
                    Add New Task TO DO
                  </h3>
                  <div class="title">
                    <label for="titleTask"><b>Title</b></label>
                  </div>
                  <textarea id="titleTaskNew" name="titleTask" cols="40" rows="3" placeholder="Enter the name of the new task" />
                  <div class="buttons-div">
                    <button class="button-add" type="button" @click="validateNew">Save</button>
                  <button class="button-cancel" type="button" @click="cancelAddNewTask">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
            <div
              v-for="singleNewTask in taskStatusTodo()"
              :key="singleNewTask.title"
              class="infoByTask1"
              @click="openModal"
            >
              <div>
                <p>{{ singleNewTask.title }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column2">
          <div class="rowByGroup">
            <div class="headerStatusGroup">
              <h2 class="titleTask">
                In progress
              </h2>
              <button class="addTask" @click="addTaskInProgress">
                +
              </button>
              <div id="inProgressTaskToAdd" class="form-popup">
                <form action="" class="form-container">
                  <h3 class="title-newtask">
                    Add New Task IN PROGRESS
                  </h3>
                  <div class="title">
                    <label for="titleTask"><b>Title</b></label>
                  </div>
                  <textarea id="titleTaskProgress" name="titleTask" cols="40" rows="3" placeholder="Enter the name of the new task in progress" />
                  <div class="buttons-div">
                    <button class="button-add" type="button" @click="validateInProgress">Save</button>
                  <button class="button-cancel" type="button" @click="cancelTaskInProgress">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
            <div v-for="singleProgressTask in taskStatusInProgress()" v-bind:key="singleProgressTask.title" class="infoByTask2">
              <div>
                <p>{{ singleProgressTask.title }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column3">
          <div class="rowByGroup">
            <div class="headerStatusGroup">
              <h2 class="titleTask">
                Done
              </h2>
              <button class="addTask" @click="addTaskDone">
                +
              </button>
              <div id="doneTaskToAdd" class="form-popup">
                <form action="" class="form-container">
                  <h3 class="title-newtask">
                    Add New Task DONE
                  </h3>
                  <div class="title">
                    <label for="titleTask"><b>Title</b></label>
                  </div>
                  <textarea id="titleTaskDone" name="titleTask" cols="40" rows="3" placeholder="Enter the name of the new task finished" />
                  <div class="buttons-div">
                    <button class="button-add" type="button" @click="validateDone">Save</button>
                  <button class="button-cancel" type="button" @click="cancelTaskDone">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
            <div v-for="singleDoneTask in taskStatusDone()" v-bind:key="singleDoneTask.title" class="infoByTask3">
              <div>
                <p>{{ singleDoneTask.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { title: 'Title of the task 1', status: 1 },
        { title: 'Title of the task 2', status: 1 },
        { title: 'Title of the task 3', status: 2 },
        { title: 'Title of the task 4', status: 2 },
        { title: 'Title of the task 5', status: 3 },
        { title: 'Title of the task 6', status: 2 },
      ],
      newTaskName: '',
      inProgressTaskName: '',
      doneTaskName: '',
    };
  },
  computed: {},
  methods: {
    /** NEW TASK MODAL  */
    addNewTask() {
      document.getElementById('newTaskToAdd').style.display = 'block';
    },
    cancelAddNewTask() {
      document.getElementById('newTaskToAdd').style.display = 'none';
      document.getElementById('titleTaskNew').value = '';
    },
    saveNewTask() {
      this.newTaskName = document.getElementById('titleTaskNew').value;
      this.tasks.push({ title: this.newTaskName, status: 1 });
      this.taskStatusTodo();
      document.getElementById('newTaskToAdd').style.display = 'none';
      document.getElementById('titleTaskNew').value = '';
    },
    taskStatusTodo() {
      const statusTodo = this.tasks.filter((task) => task.status === 1);
      return statusTodo;
    },
    validateNew() {
      const nameNewTask = document.getElementById('titleTaskNew').value;
      if (nameNewTask === null || nameNewTask === '') {
        alert('MENSAJE DE ERROR: Hace un Overlay en la ventana. Quitar el alert');
      } else {
        this.saveNewTask();
      }
    },
    /** IN PROGRESS MODAL  */
    addTaskInProgress() {
      document.getElementById('inProgressTaskToAdd').style.display = 'block';
    },
    cancelTaskInProgress() {
      document.getElementById('inProgressTaskToAdd').style.display = 'none';
      document.getElementById('titleTaskProgress').value = '';
    },
    saveProgressTask() {
      this.inProgressTaskName = document.getElementById('titleTaskProgress').value;
      this.tasks.push({ title: this.inProgressTaskName, status: 2 });
      this.taskStatusInProgress();
      document.getElementById('inProgressTaskToAdd').style.display = 'none';
      document.getElementById('titleTaskProgress').value = '';
    },
    taskStatusInProgress() {
      const statusInProgress = this.tasks.filter((task) => task.status === 2);
      return statusInProgress;
    },
    validateInProgress() {
      const nameProgressTask = document.getElementById('titleTaskProgress').value;
      if (nameProgressTask === null || nameProgressTask === '') {
        alert('MENSAJE DE ERROR: Hace un Overlay en la ventana. Quitar el alert');
      } else {
        this.saveProgressTask();
      }
    },
    /** DONE  MODAL  */
    addTaskDone() {
      document.getElementById('doneTaskToAdd').style.display = 'block';
    },
    cancelTaskDone() {
      document.getElementById('doneTaskToAdd').style.display = 'none';
      document.getElementById('titleTaskDone').value = '';
    },
    saveDoneTask() {
      this.doneTaskName = document.getElementById('titleTaskDone').value;
      this.tasks.push({ title: this.doneTaskName, status: 3 });
      this.taskStatusDone();
      document.getElementById('doneTaskToAdd').style.display = 'none';
      document.getElementById('titleTaskDone').value = '';
    },
    taskStatusDone() {
      const statusDone = this.tasks.filter((task) => task.status === 3);
      return statusDone;
    },
    validateDone() {
      const nameDoneTask = document.getElementById('titleTaskDone').value;
      if (nameDoneTask === null || nameDoneTask === '') {
        alert('MENSAJE DE ERROR: Hace un Overlay en la ventana. Quitar el alert');
      } else {
        this.saveDoneTask();
      }
    },

  },
};
</script>

<style scoped>
h1 {
  color: #050f43;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.mainContainer {
  background-color: white;
  margin: 10%;
}

.buttonsMenu {
  align-items: center;
  background-color: white;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 3rem;
  width: 15%;
  justify-content: center;
  border: none;
  border-bottom: 2px solid grey;
}

.buttonsMenu:hover {
 border-bottom: 2px solid var(--component-three);
}

.mainMenu {
  display: flex;
  flex-direction: row;
  height: 6rem;
  justify-content: space-between;
  align-items: center;
}

.mainRow {
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding-top: 1rem;
  align-items: flex-start;
}

.column1 {
  border-radius: 15px;
  text-align: center;
  width: 30%;
}

.column2 {
  width: 30%;
  border-radius: 15px;
  text-align: center;
}

.column3 {
  width: 30%;
  border-radius: 15px;
  text-align: center;
}

.rowByGroup {
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  height: auto;
  border-radius: 5px;
  padding: 10px;
}

.headerStatusGroup {
  display: flex;
  justify-content: space-between;
  height: 2rem;
  align-items: center;
}

.infoByTask1 {
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 4%;
  border-radius: 1rem;
  background-color: var(--component-one);
  padding-left: 8%;
  border-bottom: 1px solid grey;
}

.infoByTask2 {
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 4%;
  border-radius: 1rem;
  background-color: var(--component-two);
  padding-left: 8%;
  border-bottom: 1px solid grey;
}

.infoByTask3 {
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 4%;
  border-radius: 1rem;
  background-color: #7ba8ff;
  padding-left: 8%;
  border-bottom: 1px solid grey;
}

.addTask {
  margin-right: 2%;
  background-color: whitesmoke;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  border: none;
}

.titleTask {
  margin-left: 10px;
  font-weight: bold;
  color: var(--title-color);
  font-size: 1rem;
  margin-left: 4%;
}

p {
  color: var(--title-color);
  font-size: 0.9rem;
}

/** MODAL Add New Task */
.form-popup {
  display: none;
  border-radius: 8px;
  background-color: white;
  z-index: 9;
  margin-left: 10%;
  margin-top: 40%;
  border: 1px solid black;
}
#titleTaskNew {
  width: 90%;
  height: 5rem;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}

.form-container {
  width: 17rem;
  height: 12rem;
}

.title-newtask {
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: var(--subtitle-landing);
}

.title {
  font-size: 1rem;
  margin-bottom: 2%;
  color: var(--subtitle-landing);
}

.button-add {
  align-items: center;
  background-color: whitesmoke;
  border-radius: 8px;
  margin-top: 3%;
  border: none;
  border-bottom: 2px solid #B6C197;
    padding: 2%;
}

.button-cancel {
  align-items: center;
  background-color: whitesmoke;
  border-radius: 8px;
  margin-top: 3%;
  border: none;
  border-bottom: 2px solid #BD6B6A;
    padding: 2%;
}

.buttons-div {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

@media only screen and (max-width: 700px) {
  h1 {
    margin-bottom: 4%;
  }
  .mainMenu {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
    margin-bottom: 10%;
  }

  .buttonsMenu {
    box-sizing: border-box;
    cursor: pointer;
    width: 30%;
    border: none;
    margin-top: 3%;
    align-items: center;
  background-color: white;
  border: none;
  border-bottom: 2px solid grey;
  }

  .buttonsmenu:active {
    border-bottom: 2px solid var(--component-three);
  }

  .mainRow {
    display: flex;
    height: 100%;
    padding-top: 1rem;
    flex-direction: column;
  }

  .column1,
  .column2,
  .column3 {
    width: 100%;
    margin-bottom: 10%;
  }
}
</style>
