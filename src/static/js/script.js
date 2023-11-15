const existingRemindersPQ = new PriorityQueue();
existingRemindersList = [];
var completedReminders = [];

// Function to display existing reminders
function displayReminders() {
    const descendingOrderReminders = existingRemindersPQ.getItemsDescendingOrder();
    const reminderList = document.getElementById('reminderList');
    reminderList.innerHTML = ''; // Clear existing list

    descendingOrderReminders.forEach((reminder, index) => {
        const reminderItem = document.createElement('div');
        reminderItem.innerHTML = `
            <label class="reminderLabel" data-reminder-index="${index}">
                ${reminder.text + ", Severity: " + reminder.severity +  ", Date & Time: " + reminder.datetime}
                <input type="checkbox" id="reminder${index}" ${reminder.checked ? 'checked' : ''} onclick="toggleTransparency(${index}, this)">
            </label>
        `;
        if (reminder.checked) {
            toggleTransparency(index, reminderItem.querySelector('input'));
        }
        reminderList.appendChild(reminderItem);
    });
}

function displayCompletedReminders() {
    console.log("out")
}

// Function to add a new reminder
function addReminder() {
    const reminderText = document.getElementById('reminderText').value;
    const severityRating = document.getElementById('severityRating').value;
    const datetime = document.getElementById('datetime').value;

    if (reminderText.trim() !== '') {
        const newReminder = { text: reminderText, severity: severityRating, datetime: datetime, checked: false };
        existingRemindersPQ.add(newReminder);
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
    existingRemindersPQ.removeAll();
    displayReminders();
}
document.getElementById('left_clear_btn').addEventListener('submit', function(event) {
    event.preventDefault();
    clearCompletedList();
});

// function to clear the existing completed reminders list
function clearCompletedList() {
    completedReminders = [];
    displayCompletedReminders(); // change this later
}
document.getElementById('right_clear_btn').addEventListener('submit', function(event) {
    event.preventDefault();
    clearCompletedList();
});


function toggleTransparency(index, checkbox) {
    const label = checkbox.parentElement;
    console.log(index);
    label.classList.toggle('translucent');
    existingRemindersPQ.getByIndex(index).checked = checkbox.checked;
}

displayReminders();