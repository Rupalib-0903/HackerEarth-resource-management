document.getElementById('sectionForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const sectionName = document.getElementById('sectionName').value;
    const timetableFile = document.getElementById('timetableFile').files[0];

    const formData = new FormData();
    formData.append('name', sectionName);
    formData.append('timetable', timetableFile);

    try {
        const response = await fetch('http://localhost:5000/api/sections', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();
        if (response.ok) {
            alert('Section added successfully!');
            document.getElementById('sectionForm').reset();
            searchDepartment();
        } else {
            alert('Error: ' + result.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

async function searchDepartment() {
    const depName = document.getElementById('depNameInput').value;

    try {
        const response = await fetch('http://localhost:5000/api/sections');
        const sections = await response.json();
        const filteredSections = sections.filter(section => section.name.toLowerCase().includes(depName.toLowerCase()));

        const timetableBody = document.getElementById('timetableBody');
        timetableBody.innerHTML = ''; // Clear previous results

        filteredSections.forEach(section => {
            const row = document.createElement('tr');

            const classCell = document.createElement('td');
            classCell.textContent = section.name;
            row.appendChild(classCell);

            const viewCell = document.createElement('td');
            const viewButton = document.createElement('button');
            viewButton.textContent = 'View';
            viewButton.onclick = () => toggleTimetable(section._id, viewButton, section.timetable);
            viewCell.appendChild(viewButton);
            row.appendChild(viewCell);

            timetableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

async function toggleTimetable(classId, button, timetablePath) {
    const container = button.parentElement;

    if (button.textContent === 'View') {
        const response = await fetch(`http://localhost:5000/${timetablePath}`);
        const timetableHTML = `<img src="${response.url}" class="timetable-image">`;
        button.textContent = 'Close';
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = timetableHTML;
        container.appendChild(tempDiv.firstChild);
    } else {
        button.textContent = 'View';
        const img = container.querySelector('.timetable-image');
        if (img) {
            container.removeChild(img);
        }
    }
}

// Initial fetch to display all sections
searchDepartment();
