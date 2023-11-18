let existingRemindersList = [];
let completedRemindersList = [];

// Function to display existing reminders
function displayReminders() {
    const reminderList = document.getElementById('reminderList');
    reminderList.innerHTML = ''; // Clear existing list

    existingRemindersList.forEach((reminder, index) => {
        const reminderItem = document.createElement('div');
        reminderItem.innerHTML = `
            <label class="reminderLabel" data-reminder-index="${index}">
                ${reminder.getText() + ", Severity: " + reminder.getSeverity() +  ", Date & Time: " + reminder.getDatetime()}
                <input type="checkbox" id="reminder${index}" ${reminder.checked ? 'checked' : ''} onclick="toggleTransparency(${index}, this, existingRemindersList)">
            </label>
        `;
        if (reminder.getChecked()) {
            toggleTransparency(index, reminderItem.querySelector('input'), existingRemindersList, false);
        }
        reminderList.appendChild(reminderItem);
    });
}

function displayCompletedReminders() {
    const reminderList = document.getElementById('completedList');
    reminderList.innerHTML = ''; // Clear existing list

    completedRemindersList.forEach((reminder, index) => {
        const reminderItem = document.createElement('div');
        reminderItem.innerHTML = `
            <label class="reminderLabel" data-reminder-index="${index}">
                ${reminder.getText() + ", Severity: " + reminder.getSeverity() +  ", Date & Time: " + reminder.getDatetime()}
                <input type="checkbox" id="reminder${index}" ${reminder.checked ? 'checked' : ''} onclick="toggleTransparency(${index}, this, completedRemindersList)">
            </label>
        `;
        if (reminder.getChecked()) {
            toggleTransparency(index, reminderItem.querySelector('input'), completedRemindersList, false);
        }
        reminderList.appendChild(reminderItem);
    });
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
    existingRemindersList = existingRemindersList.filter(reminder => !reminder.getChecked());
    displayReminders();
}
document.getElementById('left_clear_btn').addEventListener('click', function(event) {
    event.preventDefault();
    clearReminderList();
});

// function to clear the existing completed reminders list
function clearCompletedList() {
    completedRemindersList = [];
    displayCompletedReminders(); // change this later
}
document.getElementById('right_clear_btn').addEventListener('click', function(event) {
    event.preventDefault();
    clearCompletedList();
});

function selectAllReminders(){
    existingRemindersList.forEach((reminder, index) => {
        existingRemindersList[index].updateCheckedTrue();
    });
    displayReminders();
}
document.getElementById('left_select_btn').addEventListener('click', function(event) {
    event.preventDefault();
    selectAllReminders();
});

function selectAllCompletedReminders() {
    completedRemindersList.forEach((reminder, index) => {
        completedRemindersList[index].updateCheckedTrue();
    });
    displayReminders();
    displayCompletedReminders(); // change this later
}
document.getElementById('right_select_btn').addEventListener('click', function(event) {
    event.preventDefault();
    selectAllCompletedReminders();
});

function moveToComplete() {
    buff = existingRemindersList.filter(reminder => reminder.getChecked());
    existingRemindersList = existingRemindersList.filter(reminder => !reminder.getChecked());
    buff.forEach((reminder, index) => {
        buff[index].updateChecked();
    });
    completedRemindersList = completedRemindersList.concat(buff);
    displayReminders();
    displayCompletedReminders();
}
document.getElementById('move_to_complete').addEventListener('click', function(event) {
    event.preventDefault();
    moveToComplete();
});

function moveToReminder() {
    buff = completedRemindersList.filter(reminder => reminder.getChecked());
    completedRemindersList = completedRemindersList.filter(reminder => !reminder.getChecked());
    buff.forEach((reminder, index) => {
        buff[index].updateChecked();
    });
    existingRemindersList = existingRemindersList.concat(buff);
    displayReminders();
    displayCompletedReminders();
}
document.getElementById('move_to_reminder').addEventListener('click', function(event) {
    event.preventDefault();
    moveToReminder();
});

function toggleTransparency(index, checkbox, reminderList, update=true) {
    const label = checkbox.parentElement;
    label.classList.toggle('translucent');
    if(update){
        reminderList[index].updateChecked();
    }
}

displayReminders();