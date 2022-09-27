<script setup>
import { useRouter } from 'vue-router';

// eslint-disable-next-line no-unused-vars
const router = useRouter();
</script>

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
        <div class="column1">
          <div class="rowByGroup">
            <div class="headerStatusGroup">
              <h2 class="titleTask">
                To Do
              </h2>
              <button class="addTask">
                +
              </button>
            </div>
            <div class="infoByTask1" @click="openModal">
              <p>Title of the task 1</p>
            </div>
            <div class="infoByTask1">
              <p>Title of the task 2</p>
            </div>
            <div class="infoByTask1">
              <p>Title of the task 3</p>
            </div>
            <div class="infoByTask1">
              <p>Title of the task 4</p>
            </div>
            <div class="infoByTask1">
              <p>Title of the task 5</p>
            </div>
          </div>
        </div>
        <div class="column2">
          <div class="rowByGroup">
            <div class="headerStatusGroup">
              <h2 class="titleTask">
                In progress
              </h2>
              <button class="addTask">
                +
              </button>
            </div>
            <div class="infoByTask2">
              <p>Title of the task X</p>
            </div>
            <div class="infoByTask2">
              <p>Title of the task Y</p>
            </div>
          </div>
        </div>
        <div class="column3">
          <div class="rowByGroup">
            <div class="headerStatusGroup">
              <h2 class="titleTask">
                Done
              </h2>
              <button class="addTask">
                +
              </button>
            </div>
            <div class="infoByTask3">
              <p>Title of the task A</p>
            </div>
            <div class="infoByTask3">
              <p>Title of the task B</p>
            </div>
            <div class="infoByTask3">
              <p>Title of the task C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
  background-color: var(--component-three);
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 3rem;
  width: 15%;
  justify-content: center;
  border: none;
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
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  text-align: center;
  width: 30%;
}
.column2 {
  width: 30%;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  text-align: center;
}
.column3 {
  width: 30%;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
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
  padding-left: 4%;
}

.infoByTask2 {
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 4%;
  border-radius: 1rem;
  background-color: var(--component-two);
  padding-left: 4%;
}

.infoByTask3 {
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 4%;
  border-radius: 1rem;
  background-color: #7ba8ff;
  padding-left: 4%;
}

.addTask {
  margin-right: 2%;
  background-color: var(--component-three);
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

@media only screen and (max-width: 700px) {

  .mainMenu {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;
    margin-bottom: 5%;

  }
  .buttonsMenu {
    background-color: var(--component-three);
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 1rem;
    width: 30%;
    border: none;
}
.mainRow {
    display: flex;
    height: 100%;
    padding-top: 1rem;
    flex-direction: column;
}
.column1, .column2, .column3 {
  width: 100%;
  margin-bottom: 10%;
}
}
</style>
