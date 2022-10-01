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
                    Add task TO DO
                  </h3>
                  <div class="title">
                    <label for="titleTask"><b>Title</b></label>
                  </div>
                  <textarea
                    id="titleTaskNew"
                    name="titleTask"
                    cols="40"
                    rows="3"
                    placeholder="Enter the name of the new task"
                  />
                  <div class="buttons-div">
                    <button
                      class="button-add"
                      type="button"
                      @click="validateNew"
                    >
                      Save
                    </button>
                    <button
                      class="button-cancel"
                      type="button"
                      @click="cancelAddNewTask"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              v-for="singleNewTask in taskStatusTodo"
              :key="singleNewTask.id"
              class="infoByTask1"
            >
              <div>
                <p>
                  <a class="title-link" href="#" @click.prevent="openModal(singleNewTask)">{{
                    singleNewTask.title
                  }}</a>
                </p>
              </div>
              <div :id="'modifyTaskTodo' + singleNewTask.id" class="form-popup">
                <form action="" class="form-update">
                  <h3>UPDATE TASK</h3>
                  <div class="updateTitle">
                    <label for="titleTask"><b>Title</b></label>
                    <input class="titleTaskUpdate" type="text" :value="singleNewTask.title">
                  </div>
                  <div class="changeStatus">
                    <h4>Change status of this task</h4>
                    <select
                      :id="'status_select' + singleNewTask.id"
                      @change="changeState(singleNewTask)"
                    >
                      <option value="0">
                        Change Status
                      </option>
                      <option v-if="singleNewTask.status != 1" value="1">
                        To Do
                      </option>
                      <option value="2">
                        In Progress
                      </option>
                      <option value="3">
                        Done
                      </option>
                    </select>
                  </div>
                  <div>
                    <button class="button-update" type="button" @click="closeModal(singleNewTask)">
                      Update
                    </button>
                    <button class="cancel-update" type="button" @click="closeModal(singleNewTask)">
                      Cancel
                    </button>
                    <button class="button-delete" type="button" @click="removeTask(singleNewTask)">
                      Delete
                    </button>
                  </div>
                </form>
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
                    Add task IN PROGRESS
                  </h3>
                  <div class="title">
                    <label for="titleTask"><b>Title</b></label>
                  </div>
                  <textarea
                    id="titleTaskProgress"
                    name="titleTask"
                    cols="40"
                    rows="3"
                    placeholder="Enter the name of the new task"
                  />
                  <div class="buttons-div">
                    <button
                      class="button-add"
                      type="button"
                      @click="validateInProgress"
                    >
                      Save
                    </button>
                    <button
                      class="button-cancel"
                      type="button"
                      @click="cancelTaskInProgress"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              v-for="singleProgressTask in taskStatusInProgress"
              :key="singleProgressTask.id"
              class="infoByTask2"
            >
              <div>
                <p>
                  <a class="title-link" href="#" @click.prevent="openModal(singleProgressTask)">{{
                    singleProgressTask.title
                  }}</a>
                </p>
              </div>
              <div
                :id="'modifyTaskTodo' + singleProgressTask.id"
                class="form-popup"
              >
                <form action="" class="form-update">
                  <h3>UPDATE TASK</h3>
                  <div class="updateTitle">
                    <label for="titleTask"><b>Title</b></label>
                    <input class="titleTaskUpdate" type="text" :value="singleProgressTask.title">
                  </div>
                  <div class="changeStatus">
                    <h4>Change status of this task</h4>
                    <select
                      :id="'status_select' + singleProgressTask.id"
                      @change="changeState(singleProgressTask)"
                    >
                      <option value="0">
                        Change Status
                      </option>
                      <option value="1">
                        To Do
                      </option>
                      <option v-if="singleProgressTask.status != 2" value="2">
                        In Progress
                      </option>
                      <option value="3">
                        Done
                      </option>
                    </select>
                  </div>
                  <div>
                    <button class="button-update" type="button" @click="closeModal(singleProgressTask)">
                      Update
                    </button>
                    <button class="cancel-update" type="button" @click="closeModal(singleProgressTask)">
                      Cancel
                    </button>
                    <button class="button-delete" type="button" @click="removeTask(singleProgressTask)">
                      Delete
                    </button>
                  </div>
                </form>
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
                    Add task DONE
                  </h3>
                  <div class="title">
                    <label for="titleTask"><b>Title</b></label>
                  </div>
                  <textarea
                    id="titleTaskDone"
                    name="titleTask"
                    cols="40"
                    rows="3"
                    placeholder="Enter the name of the new task"
                  />
                  <div class="buttons-div">
                    <button
                      class="button-add"
                      type="button"
                      @click="validateDone"
                    >
                      Save
                    </button>
                    <button
                      class="button-cancel"
                      type="button"
                      @click="cancelTaskDone"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              v-for="singleDoneTask in taskStatusDone"
              :key="singleDoneTask.title"
              class="infoByTask3"
            >
              <div>
                <p>
                  <a class="title-link" href="#" @click.prevent="openModal(singleDoneTask)">{{
                    singleDoneTask.title
                  }}</a>
                </p>
              </div>
              <div
                :id="'modifyTaskTodo' + singleDoneTask.id"
                class="form-popup"
              >
                <form action="" class="form-update">
                  <h3>UPDATE TASK</h3>
                  <div class="updateTitle">
                    <label for="titleTask"><b>Title</b></label>
                    <input class="titleTaskUpdate" type="text" :value="singleDoneTask.title">
                  </div>
                  <div class="changeStatus">
                    <h4>Change status of this task</h4>
                    <select
                      :id="'status_select' + singleDoneTask.id"
                      @change="changeState(singleDoneTask)"
                    >
                      <option value="0">
                        Change Status
                      </option>
                      <option value="1">
                        To Do
                      </option>
                      <option value="2">
                        In Progress
                      </option>
                      <option v-if="singleDoneTask.status != 3" value="3">
                        Done
                      </option>
                    </select>
                  </div>
                  <div>
                    <button class="button-update" type="button" @click="closeModal(singleDoneTask)">
                      Update
                    </button>
                    <button class="cancel-update" type="button" @click="closeModal(singleDoneTask)">
                      Cancel
                    </button>
                    <button class="button-delete" type="button" @click="removeTask(singleDoneTask)">
                      Delete
                    </button>
                  </div>
                </form>
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
        { id: 1, title: 'Title of the task 1', status: 1 },
        { id: 2, title: 'Title of the task 2', status: 1 },
        { id: 3, title: 'Title of the task 3', status: 2 },
        { id: 4, title: 'Title of the task 4', status: 2 },
        { id: 5, title: 'Title of the task 5', status: 3 },
        { id: 6, title: 'Title of the task 6', status: 2 },
      ],
      newTaskName: '',
      inProgressTaskName: '',
      doneTaskName: '',
      selectedTodoTask: '',
    };
  },
  computed: {
    taskStatusTodo() {
      const statusTodo = this.tasks.filter((task) => task.status === 1);
      return statusTodo;
    },
    taskStatusInProgress() {
      const statusInProgress = this.tasks.filter((task) => task.status === 2);
      return statusInProgress;
    },
    taskStatusDone() {
      const statusDone = this.tasks.filter((task) => task.status === 3);
      return statusDone;
    },
  },
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
      this.tasks.push({
        id: this.tasks.length + 1,
        title: this.newTaskName,
        status: 1,
      });
      document.getElementById('newTaskToAdd').style.display = 'none';
      document.getElementById('titleTaskNew').value = '';
      console.log(this.tasks);
    },
    validateNew() {
      const nameNewTask = document.getElementById('titleTaskNew').value;
      if (nameNewTask === null || nameNewTask === '') {
        alert(
          'MENSAJE DE ERROR: Hace un Overlay en la ventana. Quitar el alert',
        );
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
      this.tasks.push({ id: this.tasks.length + 1, title: this.inProgressTaskName, status: 2 });
      document.getElementById('inProgressTaskToAdd').style.display = 'none';
      document.getElementById('titleTaskProgress').value = '';
    },
    validateInProgress() {
      console.log('ENTRANDO SAVE PROGRESS NEW');
      const nameProgressTask = document.getElementById('titleTaskProgress').value;
      if (nameProgressTask === null || nameProgressTask === '') {
        alert(
          'MENSAJE DE ERROR: Hace un Overlay en la ventana. Quitar el alert',
        );
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
      this.tasks.push({ id: this.tasks.length + 1, title: this.doneTaskName, status: 3 });
      document.getElementById('doneTaskToAdd').style.display = 'none';
      document.getElementById('titleTaskDone').value = '';
    },
    validateDone() {
      const nameDoneTask = document.getElementById('titleTaskDone').value;
      if (nameDoneTask === null || nameDoneTask === '') {
        alert(
          'MENSAJE DE ERROR: Hace un Overlay en la ventana. Quitar el alert',
        );
      } else {
        this.saveDoneTask();
      }
    },
    openModal(taskCard) {
      console.log('ABRIENDO');
      const modalid = `modifyTaskTodo${taskCard.id}`;
      document.getElementById(modalid).style.display = 'block';
      this.selectedTodoTask = taskCard;
      console.log(taskCard);
    },
    closeModal(taskCard) {
      console.log('CERRADO');
      const modalid = `modifyTaskTodo${taskCard.id}`;
      document.getElementById(modalid).style.display = 'none';
      this.selectedTodoTask = '';
      console.log(taskCard);
    },
    changeState(taskCard) {
      const selectedStatus = document.getElementById(
        `status_select${taskCard.id}`,
      );
      const valueStatus = selectedStatus.options[selectedStatus.selectedIndex].value;
      console.log('value selected');
      console.log(valueStatus);

      // eslint-disable-next-line no-param-reassign
      taskCard.status = parseInt(valueStatus, 10);

      console.log('new status asign');
      console.log(taskCard.status);

      this.closeModal(taskCard);
    },
    removeTask(taskCard) {
      const modalid = `modifyTaskTodo${taskCard.id}`;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.tasks.length; i++) {
        if (`modifyTaskTodo${this.tasks[i].id}` === modalid) {
          console.log('COMPARACION');
          console.log(`modifyTaskTodo${this.tasks[i].id}`);
          this.tasks.splice(i, 1);
        }
      }
      console.log('Array updated');
      console.log(this.tasks);
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
  height: 6rem;
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
  height: 6rem;
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
  height: 6rem;
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
  font-size: 1rem;
  resize: none;
}

#titleTaskProgress{
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

#titleTaskDone {
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
  border-bottom: 2px solid #b6c197;
  padding: 2%;
}

.button-cancel {
  align-items: center;
  background-color: whitesmoke;
  border-radius: 8px;
  margin-top: 3%;
  border: none;
  border-bottom: 2px solid #bd6b6a;
  padding: 2%;
}

.button-cancel:hover {
  background-color: #bd6b6a;
}

.button-add:hover {
  background-color: #b6c197;
}

.buttons-div {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.title-link {
  text-decoration: none;
  color: var(--title-color);
}

.title-link:hover {
  font-weight: bold;

}

.title-link:active {
  font-weight: bold;

}

/* MODAL UPDATE TASK */
.changedToProgress {
  background-color: red;
}

.form-update {
  width: 14rem;
  height: 18rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}

.form-update > button {
  width: 4rem;
}
.form-update > h3 {
  color: var(--subtitle-landing);
}

.updateTitle {
  display: flex;
  flex-direction: column;
}
.updateTitle > label {
  color: var(--subtitle-landing);
  margin-bottom: 0.5rem;
}

.titleTask {
  margin-bottom: 0.5rem;
}

.changeStatus > h4 {
  color: var(--subtitle-landing);
  margin-bottom: 0.5rem;
}

.button-delete {
  align-items: center;
  background-color: whitesmoke;
  border-radius: 8px;
  margin-top: 0.5rem;
  border: none;
  border-bottom: 2px solid darkgrey;
  padding: 2%;
  font-size: 1em;
}

.button-update {
  align-items: center;
  background-color: whitesmoke;
  border-radius: 8px;
  border: none;
  border-bottom: 2px solid #b6c197;
  padding: 2%;
  font-size: 1em;
}

.cancel-update {
  align-items: center;
  background-color: whitesmoke;
  border-radius: 8px;
  border: none;
  border-bottom: 2px solid #bd6b6a;
  padding: 2%;
  margin-left: 0.5rem;
  font-size: 1em;
}
.button-delete:hover {
  background-color: darkgrey;
}

.button-update:hover {
  background-color: #b6c197;
}

.cancel-update:hover {
  background-color:#bd6b6a;
}

.titleTaskUpdate {
  box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
    padding-left: 4%;
}

select {
  padding: 1%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 1rem;
  resize: none;
}

option {
  font-size: 1rem;
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

  #titleTaskNew {
  margin-top:4%;
}

.buttons-div {
  margin-top: 5%;
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

  .form-container {
    width: 12rem;
    height: 13rem;
  }
  option {
  font-size: 0.7rem;
}
.button-delete:active {
  background-color: darkgrey;
}

.button-update:active {
  background-color: #b6c197;
}

.cancel-update:active {
  background-color:#bd6b6a;
}

}
</style>
