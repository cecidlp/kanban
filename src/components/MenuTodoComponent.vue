<template>
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
</template>

<style>
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

@media only screen and (max-width: 700px) {
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
}
</style>
