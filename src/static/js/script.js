let existingRemindersList = [];
let completedReminders = [];

// Function to display existing reminders
function displayReminders() {
    const reminderList = document.getElementById('reminderList');
    reminderList.innerHTML = ''; // Clear existing list

    existingRemindersList.forEach((reminder, index) => {
        const reminderItem = document.createElement('div');
        reminderItem.innerHTML = `
            <label class="reminderLabel" data-reminder-index="${index}">
                ${reminder.getText() + ", Severity: " + reminder.getSeverity() +  ", Date & Time: " + reminder.getDatetime()}
                <input type="checkbox" id="reminder${index}" ${reminder.checked ? 'checked' : ''} onclick="toggleTransparency(${index}, this)">
            </label>
        `;
        if (reminder.getChecked()) {
            toggleTransparency(index, reminderItem.querySelector('input'), false);
        }
        reminderList.appendChild(reminderItem);
    });
}

function displayCompletedReminders(index) {
    reminder = existingRemindersList[index];
}

// Function to add a new reminder
function addReminder() {
    const reminderText = document.getElementById('reminderText').value;
    const severityRating = document.getElementById('severityRating').value;
    const datetime = document.getElementById('datetime').value;

    if (reminderText.trim() !== '') {
        const newReminder = new Reminder(reminderText, severityRating, datetime);
        existingRemindersList.unshift(newReminder);
        displayReminders();
        document.getElementById('reminderText').value = ''; // Clear the input field
        document.getElementById('severityRating').value = ''; // Clear the input field
        document.getElementById('datetime').value = ''; // Clear the input field
        console.log(newReminder);
    }
}
document.getElementById('reminderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addReminder();
});

// function to clear the existing reminder list
function clearReminderList() {
    existingRemindersList = [];
    displayReminders();
}
document.getElementById('left_clear_btn').addEventListener('click', function(event) {
    event.preventDefault();
    clearReminderList();
});

// function to clear the existing completed reminders list
function clearCompletedList() {
    completedReminders = [];
    displayCompletedReminders(); // change this later
}
document.getElementById('right_clear_btn').addEventListener('click', function(event) {
    event.preventDefault();
    clearCompletedList();
});

function selectAllReminders(){
    console.log("inside");
    existingRemindersList.forEach((reminder, index) => {
        existingRemindersList[index].updateChecked();
    });
    displayReminders();
}
document.getElementById('left_select_btn').addEventListener('click', function(event) {
    event.preventDefault();
    selectAllReminders();
});

function selectAllCompletedReminders() {
    completedReminders = [];
    displayCompletedReminders(); // change this later
}
document.getElementById('right_select_btn').addEventListener('click', function(event) {
    event.preventDefault();
    selectAllCompletedReminders();
});


function toggleTransparency(index, checkbox, update=true) {
    const label = checkbox.parentElement;
    label.classList.toggle('translucent');
    if(update){
        existingRemindersList[index].updateChecked();
    }
}

displayReminders();