const existingReminders = ["Meeting at 10 AM", "Submit report by 3 PM"];

// Function to display existing reminders
function displayReminders() {
    const reminderList = document.getElementById('reminderList');
    reminderList.innerHTML = ''; // Clear existing list

    existingReminders.forEach(reminder => {
        const reminderItem = document.createElement('div');
        reminderItem.textContent = reminder;
        reminderList.appendChild(reminderItem);
    });
}

// Function to add a new reminder
function addReminder() {
    const reminderText = document.getElementById('reminderText').value;

    if (reminderText.trim() !== '') {
        existingReminders.push(reminderText);
        displayReminders();
        document.getElementById('reminderText').value = ''; // Clear the input field
    }
}

// Display existing reminders on page load
displayReminders();
