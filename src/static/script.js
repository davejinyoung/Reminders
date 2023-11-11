var existingReminders = [];

// Function to display existing reminders
function displayReminders() {
    const reminderList = document.getElementById('reminderList');
    reminderList.innerHTML = ''; // Clear existing list

    existingReminders.forEach((reminder, index) => {
        const reminderItem = document.createElement('div');
        reminderItem.innerHTML = `
            <label>
                ${reminder.text}
                <input type="checkbox" id="reminder${index}" ${reminder.checked ? 'checked' : ''} onclick="toggleTransparency(${index})">
            </label>
        `;
        reminderList.appendChild(reminderItem);
        if (reminder.checked) {
            toggleTransparency(index);
        }
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
    event.preventDefault();
    addReminder();
});

function toggleTransparency(index) {
    const label = document.querySelector(`#reminderList label:nth-child(${index + 1})`);
    label.classList.toggle('translucent');
}

displayReminders();