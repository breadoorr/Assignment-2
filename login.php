<!-- Login/Register Form -->
<div id="overlay">
    <div id="loginRegisterForm">
        <span class="close" onclick="closeOverlay()"><i class="fa fa-times fa-l"></i
            ></span>
        <!-- Login form -->
        <form id="loginForm" class="loginForm" method="post">
            <h2>Log In</h2>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" placeholder="Enter email" required><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter password" required><br>
            <button type="submit">Log In</button>
            <p>Do not have an account? <a href="#" onclick="toggleForm()">Register</a></p>
        </form>
        <!-- Registration form -->
        <form id="registerForm" class="loginForm" method="post" style="display: none;">
            <h2>Register</h2>
            <label for="newEmail">Email:</label>
            <input type="text" id="newEmail" name="newEmail" placeholder="Enter email" required><br>
            <label for="newUsername">Username:</label>
            <input type="text" id="newUsername" name="newUsername" placeholder="Enter username" required><br>
            <label for="newPassword">Password:</label>
            <input type="password" id="newPassword" name="newPassword" placeholder="Enter password" required><br>
            <button type="submit">Register</button>
            <p>Have an account? <a href="#" onclick="toggleForm()">Log In</a></p>
        </form>
    </div>
</div>

<script>
    function openOverlay() {
        document.getElementById("overlay").style.display = "block";
    }

    function closeOverlay() {
        document.getElementById("overlay").style.display = "none";
    }

    function toggleForm() {
        const loginForm = document.getElementById("loginForm");
        const registerForm = document.getElementById("registerForm");

        // Toggle display of login and registration forms
        if (loginForm.style.display === "none") {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
        } else {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
        }
    }
</script>
