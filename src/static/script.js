var existingReminders = [];

// Function to display existing reminders
function displayReminders() {
    const reminderList = document.getElementById('reminderList');
    reminderList.innerHTML = ''; // Clear existing list

    existingReminders.forEach((reminder, index) => {
        const reminderItem = document.createElement('div');
        reminderItem.innerHTML = `
            <label class="reminderLabel" data-reminder-index="${index}">
                ${reminder.text}
                <input type="checkbox" id="reminder${index}" ${reminder.checked ? 'checked' : ''} onclick="toggleTransparency(${index}, this)">
            </label>
        `;
        if (reminder.checked) {
            toggleTransparency(index, reminderItem.querySelector('input'));
        }

        reminderList.appendChild(reminderItem);
    });
}

// Function to add a new reminder
function addReminder() {
    const reminderText = document.getElementById('reminderText').value;

    if (reminderText.trim() !== '') {
        const newReminder = { text: reminderText, checked: false };
        existingReminders.unshift(newReminder);
        displayReminders();
        document.getElementById('reminderText').value = ''; // Clear the input field
    }
}
document.getElementById('reminderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addReminder();
});

function toggleTransparency(index, checkbox) {
    const label = checkbox.parentElement;
    label.classList.toggle('translucent');
    existingReminders[index].checked = checkbox.checked;
}

displayReminders();