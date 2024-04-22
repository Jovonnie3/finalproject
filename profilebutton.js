
function displayVolunteerForm() {
    const form = document.createElement('form');
    form.id = 'volunteerForm';
    form.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        <button type="submit">Submit</button>
    `;
    
    document.body.appendChild(form);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
      
        console.log('Name:', form.elements['name'].value);
        console.log('Email:', form.elements['email'].value);

        form.reset();
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const volunteerButton = document.getElementById('volunteerButton');
    volunteerButton.addEventListener('click', displayVolunteerForm);
});


document.addEventListener('DOMContentLoaded', function() {
    const additionalInfo = document.createElement('p');
    additionalInfo.textContent = 'Hover over this text for more information.';
    additionalInfo.addEventListener('mouseover', function() {
        additionalInfo.textContent = 'By clicking the volunteer now button, it will redirect you to our contant information page where you can submit your information to the charity profile!';
    });
    additionalInfo.addEventListener('mouseout', function() {
        additionalInfo.textContent = 'Hover over this text for more information.';
    });
    document.body.appendChild(additionalInfo);
});
