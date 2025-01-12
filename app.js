const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const userName = localStorage.getItem('userName');
document.getElementById('userElement').textContent = userName || '';
document.getElementById('userElement1').textContent = "User: "+userName;

// Ensure the secret key is set in localStorage, otherwise, no comparison can be made.
const ____________________________________________________________________________________________________________________________________ = localStorage.getItem('____________________________________________________________________________________________________________________________________') || null;

// Function to get a cookie by name
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length); // Trim leading spaces
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Example: Retrieve the 'skibidi' cookie
const ________________________________________________________________________________________________________________ = getCookie('_______________________________________________________________________________________________________________________________________________');
// Outputs: 'exampleValue' if the cookie exists

function checkKey() {
    // If there's no stored key, deny access immediately
    if (!____________________________________________________________________________________________________________________________________ && !________________________________________________________________________________________________________________) {
        alert("You are not an approved user. Please contact the admin.");
        window.location.href = "https://www.example.com";
        return;
    }

    //const hasAccess = localStorage.getItem('hasAccess');
    const correctAccessFlag = "true"; // Use consistent flag value
    const h = "‏‏‎ ‎"
    const a = "‏‏‎ ‎‏‏‎ ‎"

    // Check if user already has access
    /*if (hasAccess === correctAccessFlag) {
        document.getElementById('content').style.display = 'block'; // Show content
        return; // Skip asking for the key again
    }*/

    // Ask for the user's key
    //const userKey = prompt("Please enter your key:");

    if (h === ____________________________________________________________________________________________________________________________________ && a === ________________________________________________________________________________________________________________) {
        // If correct key, grant access
        localStorage.setItem('hasAccess', correctAccessFlag);
        document.getElementById('content').style.display = 'block';
        alert("You are a verified user.");
    } else {
        // If the key is wrong, deny access
        alert("Incorrect key. Contact admin");
        window.location.href = "https://www.example.com"; // Redirect
    }
}

// Check the key after all elements are loaded
document.addEventListener('DOMContentLoaded', (event) => {
    checkKey();
});

// Variable to store the IP address
let ip;

// Fetch the visitor's IP address
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        ip = data.ip; // Store the IP address
        console.log("Visitor's IP:", ip); // Log the IP for testing
        sendEmail(); // Call sendEmail after IP is fetched
    })
    .catch(error => {
        console.error('Error fetching IP address:', error);
    });

// Function to send an email with the visitor details
function sendEmail() {
    const user1 = localStorage.getItem('userName') || 'Guest';
    Email.send({
        SecureToken: "2cb791fa-2538-4ce4-a6ba-1380e89fdce3", // Ensure this token is valid
        To: 'killerkingmega10@gmail.com',
        From: "killerkingmega10@gmail.com",
        Subject: "Someone visited your website",
        Body: `${user1} visited your page. Visitor's IP: ${ip}`
    })
    .then(function (message) {
        console.log("Email sent successfully: " + message);
    })
    .catch(function (error) {
        console.error("Error sending email: " + error);
    });
}

// Sidebar toggle functions
function toggleSidebar() {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
    closeAllSubMenus();
}

function toggleSubMenu(button) {
    if (!button.nextElementSibling.classList.contains('show')) {
        closeAllSubMenus();
    }

    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');

    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close');
        toggleButton.classList.toggle('rotate');
    }
}

// Add active state to submenu links
document.addEventListener("DOMContentLoaded", function () {
    // Select all submenu links
    const submenuLinks = document.querySelectorAll("#sidebar .sub-menu a");

    // Add click event to each submenu link
    submenuLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove 'active' class from all submenu links
            submenuLinks.forEach(item => item.classList.remove("active"));

            // Add 'active' class to the clicked link
            this.classList.add("active");
        });
    });
});

// Function to show a specific video
function showVideo(videoId) {
    console.log('Showing video with ID:', videoId);

    // Hide all videos
    const videos = document.querySelectorAll('#video-container .video');
    videos.forEach(video => {
        video.style.display = 'none';
    });

    // Show the selected video
    const selectedVideo = document.getElementById(videoId);
    if (selectedVideo) {
        selectedVideo.style.display = 'block';
        const iframe = selectedVideo.querySelector('iframe');
        if (iframe) {
            iframe.src = iframe.dataset.src; // Set src from data-src attribute
            console.log('Setting iframe src to:', iframe.src);
        }
    }
}

// Function to close all submenus
function closeAllSubMenus() {
    const sidebar = document.getElementById('sidebar');
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
    });
}

// Disable right-click context menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

