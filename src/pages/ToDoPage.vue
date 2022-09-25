<script setup>
import { useRouter } from 'vue-router';

// eslint-disable-next-line no-unused-vars
const router = useRouter();
</script>

<template>
  <div class="mainContainer">
    <div>
      <h1>ToDo Page</h1>
    </div>
    <div class="mainMenu">
      <button class="buttonsMenu">Workspaces</button>
      <button class="buttonsMenu">Stars</button>
      <button class="buttonsMenu">Current Board</button>
      <button class="buttonsMenu">Private</button>
      <button class="buttonsMenu">Share</button>
      <button class="buttonsMenu">Statistical Report</button>
    </div>
    <div class="groupStatus">
      <div class="mainRow">
        <div class="column">
          <div class="rowByGroup">
            <div class="headerStatusGroup">
              <p class="titleTask">To Do</p>
            <button class="buttonOpenTask">+</button>
            </div>
            <div class="infoByTask">
              <p>Title of the task 1</p>
              <button class="buttonOpenTask">Open</button>
            </div>
            <div class="infoByTask">
              <p>Title of the task 2</p>
              <button class="buttonOpenTask">Open</button>
            </div>
            <div class="infoByTask">
              <p>Title of the task 3</p>
              <button class="buttonOpenTask">Open</button>
            </div>
            <div class="infoByTask">
              <p>Title of the task 4</p>
              <button class="buttonOpenTask">Open</button>
            </div>
            <div class="infoByTask">
              <p>Title of the task 5</p>
              <button class="buttonOpenTask">Open</button>
            </div>
          </div>

        </div>
        <div class="column">
          <div class="rowByGroup">
            <div class="headerStatusGroup">
              <p class="titleTask">In progress</p>
            <button class="buttonOpenTask">+</button>
            </div>
            <div class="infoByTask">
              <p>Title of the task X</p>
              <button class="buttonOpenTask">Open</button>
            </div>
            <div class="infoByTask">
              <p>Title of the task Y</p>
              <button class="buttonOpenTask">Open</button>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="rowByGroup">
            <div class="headerStatusGroup">
              <p class="titleTask">Done</p>
            <button class="buttonOpenTask">+</button>
            </div>
            <div class="infoByTask">
              <p>Title of the task A</p>
              <button class="buttonOpenTask">Open</button>
            </div>
            <div class="infoByTask">
              <p>Title of the task B</p>
              <button class="buttonOpenTask">Open</button>
            </div>
            <div class="infoByTask">
              <p>Title of the task C</p>
              <button class="buttonOpenTask">Open</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.mainContainer {
  background-color: cyan;
}

.buttonsMenu {
  width: 100%;
  height: 60%;
}

.mainMenu {
  background-color: blue;
  display: flex;
  flex-direction: row;
  height: 90px;
  justify-content: space-around;
  align-items: center;
}

.groupStatus {
  background-color: grey;
  height: 800px;
}

.mainRow {
  display: flex;
  background-color: darkblue;
  height: 100%;
  justify-content: space-around;
  padding-top: 20px;
}
.column{
  width: 30%;
  padding: 15px;
}

.rowByGroup {
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: royalblue;
  height: auto;
  border-radius: 5px;
  padding: 10px;
}

.headerStatusGroup{
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
}

.infoByTask{
  background-color: white;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  border-radius: 10px;
}

.buttonOpenTask{
  width: auto;
  margin-right: 10px;
}

.titleTask{
  margin-left: 10px;
  font-weight: bold;
}
</style>
