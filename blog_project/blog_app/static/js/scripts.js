/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})
function enableEdit() {
    // Enable editing for profile details
    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail");
    const userBio = document.getElementById("userBio");
  
    // Convert text to input fields
    userName.innerHTML = `<input type="text" value="${userName.innerText}" id="editName">`;
    userEmail.innerHTML = `<input type="email" value="${userEmail.innerText}" id="editEmail">`;
    userBio.innerHTML = `<textarea id="editBio">${userBio.innerText}</textarea>`;
  
    // Change the button to "Save Changes"
    const editButton = document.querySelector(".edit-button");
    editButton.innerText = "Save Changes";
    editButton.onclick = saveChanges;
  }
  
  function saveChanges() {
    // Save the updated profile details
    const editName = document.getElementById("editName").value;
    const editEmail = document.getElementById("editEmail").value;
    const editBio = document.getElementById("editBio").value;
  
    // Update the profile details
    document.getElementById("userName").innerText = editName;
    document.getElementById("userEmail").innerText = editEmail;
    document.getElementById("userBio").innerText = editBio;
  
    // Change the button back to "Edit Profile"
    const editButton = document.querySelector(".edit-button");
    editButton.innerText = "Edit Profile";
    editButton.onclick = enableEdit;
  
    alert("Profile updated successfully!");
  }