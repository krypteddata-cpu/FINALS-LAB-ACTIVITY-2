// Initial array holding 5 student names
let students = ["Fred", "Zyrelle", "Franz", "Hal", "Tyler   "];

// Helper function to update output DOM element
function displayOutput(message) {
  document.getElementById("output").textContent = message;
}

// Re-renders list and updates total count on page
function updateList() {
  const listElement = document.getElementById("studentList");
  listElement.innerHTML = "";

  for (let i = 0; i < students.length; i++) {
    const li = document.createElement("li");
    li.textContent = students[i];
    listElement.appendChild(li);
  }

  document.getElementById("arrayLength").textContent = getLength(students);
}

// --- Helper Functions ---

function getLength(arr) {
  return arr.length;
}

function addItem(arr, name) {
  arr.push(name);
  return arr;
}

function removeLastItem(arr) {
  return arr.pop();
}

function getItemAtIndex(arr, index) {
  return arr.at(index);
}

function joinItems(arr, separator) {
  return arr.join(separator);
}

function convertToString(arr) {
  return arr.toString();
}

// --- Event Handlers ---

function handleAdd() {
  const input = document.getElementById("nameInput");
  const value = input.value.trim();

  if (value === "") {
    displayOutput("Please enter a valid student name.");
    return;
  }

  addItem(students, value);
  input.value = "";
  updateList();
  displayOutput('Added "' + value + '" to the list.');
}

function handlePop() {
  if (students.length === 0) {
    displayOutput("The list is already empty!");
    return;
  }

  const removed = removeLastItem(students);
  updateList();
  displayOutput('Removed last item: "' + removed + '"');
}

function handleFindAt() {
  const input = document.getElementById("indexInput");
  const index = parseInt(input.value);

  if (isNaN(index)) {
    displayOutput("Please enter a valid index number.");
    return;
  }

  const result = getItemAtIndex(students, index);

  if (result === undefined) {
    displayOutput("Invalid index! Out of range.");
  } else {
    displayOutput("Item at index " + index + ': "' + result + '"');
  }
}

function handleJoin() {
  const joinedStr = joinItems(students, " | ");
  displayOutput("Joined Result: " + joinedStr);
}

function handleToString() {
  const str = convertToString(students);
  displayOutput("toString() Result: " + str);
}

// Run initial list render
updateList();
