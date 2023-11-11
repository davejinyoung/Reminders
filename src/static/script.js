// app.js

// Sample data for existing reminders
const existingReminders = [];

// Function to display existing reminders
function displayReminders() {
    const reminderList = document.getElementById('reminderList');
    reminderList.innerHTML = ''; // Clear existing list

    existingReminders.forEach((reminder, index) => {
        const reminderItem = document.createElement('div');
        reminderItem.innerHTML = `
            <label>
                ${reminder.text}
                <input type="checkbox" id="reminder${index}" ${reminder.checked ? 'checked' : ''}>
            </label>
        `;
        reminderList.appendChild(reminderItem);
    });
}

// Function to add a new reminder
function addReminder() {
    const reminderText = document.getElementById('reminderText').value;

    if (reminderText.trim() !== '') {
        existingReminders.push({ text: reminderText, checked: false });
        displayReminders();
        document.getElementById('reminderText').value = ''; // Clear the input field
    }
}
document.getElementById('reminderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    addReminder();
});

displayReminders();