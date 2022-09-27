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
              <p class="titleTask">
                To Do
              </p>
              <button class="buttonOpenTask">
                +
              </button>
            </div>
            <div class="infoByTask">
              <p>Title of the task 1</p>
              <button class="buttonOpenTask">
                Open
              </button>
            </div>
            <div class="infoByTask">
              <p>Title of the task 2</p>
              <button class="buttonOpenTask">
                Open
              </button>
            </div>
            <div class="infoByTask">
              <p>Title of the task 3</p>
              <button class="buttonOpenTask">
                Open
              </button>
            </div>
            <div class="infoByTask">
              <p>Title of the task 4</p>
              <button class="buttonOpenTask">
                Open
              </button>
            </div>
            <div class="infoByTask">
              <p>Title of the task 5</p>
              <button class="buttonOpenTask">
                Open
              </button>
            </div>
          </div>
        </div>
        <div class="column2">
          <div class="rowByGroup">
            <div class="headerStatusGroup">
              <p class="titleTask">
                In progress
              </p>
              <button class="buttonOpenTask">
                +
              </button>
            </div>
            <div class="infoByTask">
              <p>Title of the task X</p>
              <button class="buttonOpenTask">
                Open
              </button>
            </div>
            <div class="infoByTask">
              <p>Title of the task Y</p>
              <button class="buttonOpenTask">
                Open
              </button>
            </div>
          </div>
        </div>
        <div class="column3">
          <div class="rowByGroup">
            <div class="headerStatusGroup">
              <p class="titleTask">
                Done
              </p>
              <button class="buttonOpenTask">
                +
              </button>
            </div>
            <div class="infoByTask">
              <p>Title of the task A</p>
              <button class="buttonOpenTask">
                Open
              </button>
            </div>
            <div class="infoByTask">
              <p>Title of the task B</p>
              <button class="buttonOpenTask">
                Open
              </button>
            </div>
            <div class="infoByTask">
              <p>Title of the task C</p>
              <button class="buttonOpenTask">
                Open
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  h1 {
    color: #050F43;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
.mainContainer {
  background-color: white;
  margin: 4rem;
}

.buttonsMenu {
  align-items: center;
  background-color: var(--component-three);
  border: 2px solid #050F43;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  height: 3rem;
  width: 15%;
  justify-content: center;
}

.mainMenu {
  display: flex;
  flex-direction: row;
  height: 6rem;
  justify-content: space-between;
  align-items: center;
}

/*.groupStatus {

}*/

.mainRow {
  display: flex;
    height: 100%;
  justify-content: space-between;
  padding-top: 1rem;
  align-items: flex-start;
}
.column1 {
  background-color: var(--component-one);
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  text-align: center;
  width: 30%;
}
.column2 {
  width: 30%;
  background-color: var(--component-two);
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  text-align: center;
}
.column3 {
  width: 30%;
  background-color: #7ba8ff;
  border: 2px solid #1A1A1A;
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
  height: 40px;
  align-items: center;
}

.infoByTask {
  background-color: white;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  border-radius: 10px;
}

.buttonOpenTask {
  width: auto;
  margin-right: 10px;
}

.titleTask {
  margin-left: 10px;
  font-weight: bold;
}
</style>
