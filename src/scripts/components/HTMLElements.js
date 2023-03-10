export const root = document.getElementById("root");
export const container = document.createElement("div");
container.className = "container";
root.append(container);

export const mainItems = document.createElement("div");
mainItems.className = "wrapper main-items";
container.append(mainItems);

export const deleteAll = document.createElement("button");
deleteAll.className = "btn delete-all";
deleteAll.textContent = "Delete All";
mainItems.append(deleteAll);

export const deleteLast = document.createElement("button");
deleteLast.className = "btn delete-last";
deleteLast.textContent = "Delete Last";
mainItems.append(deleteLast);

export const enterItem = document.createElement("input");
enterItem.className = "input__enter-todo";
enterItem.setAttribute("placeholder", "Enter todo...");
mainItems.append(enterItem);

export const add = document.createElement("button");
add.className = "btn add";
add.textContent = "Add";
mainItems.append(add);

export const additionalItems = document.createElement("div");
additionalItems.className = "wrapper addition-items";
container.append(additionalItems);

export const divAllCount = document.createElement("div");
divAllCount.className = "wrapper__all-count";
additionalItems.append(divAllCount);

export const allCountName = document.createElement("p");
allCountName.className = "text-count-name";
allCountName.textContent = "All:";
divAllCount.append(allCountName);

export const allCount = document.createElement("p");
allCount.className = "text-all-count";
allCount.textContent = "0";
divAllCount.append(allCount);

export const completed = document.createElement("div");
completed.className = "wrapper__completed";
additionalItems.append(completed);

export const allCompletedName = document.createElement("p");
allCompletedName.className = "text-completed-name";
allCompletedName.textContent = "Completed:";
completed.append(allCompletedName);

export const allCompleted = document.createElement("p");
allCompleted.className = "text-all-completed";
allCompleted.textContent = "0";
completed.append(allCompleted);

export const hideCompleted = document.createElement("button");
hideCompleted.className = "btn hide-completed";
hideCompleted.textContent = "Hide completed";
additionalItems.append(hideCompleted);

export const showCompleted = document.createElement("button");
showCompleted.className = "btn show-completed";
showCompleted.textContent = "Show Completed";
additionalItems.append(showCompleted);

export const inputSearch = document.createElement("input");
inputSearch.className = "input__search-todo";
inputSearch.setAttribute("placeholder", "Search...");
additionalItems.append(inputSearch);

export const listItems = document.createElement("ul");
listItems.className = "wrapper list-todo";
container.append(listItems);

export let modalWindowContainer = document.createElement("div");
modalWindowContainer.id = "prompt-form-container";
container.append(modalWindowContainer);

export let modalWindowForm = document.createElement("form");
modalWindowForm.id = "prompt-form";
modalWindowContainer.append(modalWindowForm);

export let modalWindowMessage = document.createElement("div");
modalWindowMessage.id = "prompt-message";
modalWindowForm.append(modalWindowMessage);

export let modalWindowInputOK = document.createElement("input");
modalWindowInputOK.type = "submit";
modalWindowInputOK.value = "Ok";
modalWindowForm.append(modalWindowInputOK);

export let modalWindowInputCancel = document.createElement("input");
modalWindowInputCancel.type = "button";
modalWindowInputCancel.name = "cancel";
modalWindowInputCancel.value = "Cancel";
modalWindowForm.append(modalWindowInputCancel);
