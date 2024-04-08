<!-- Login/Register Form -->
<div id="overlay" style="display: none;">
    <div id="loginRegisterForm">
        <span class="close" onclick="closeOverlay()"><i class="fa fa-times fa-l"></i
            ></span>
        <!-- Login form -->
        <form id="loginForm" class="loginForm" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <h2>Log In</h2>
            <label for="email">Full name:</label>
            <input type="text" id="email" name="email" placeholder="Enter full name" required><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter password" required><br>
            <button type="submit" name="login">Log In</button>
            <p>Do not have an account? <a href="#" onclick="toggleForm()">Register</a></p>
        </form>




        <!-- Registration form -->
        <form id="registerForm" class="loginForm" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" style="display: none;">
            <h2>Register</h2>
            <label for="newEmail">Email:</label>
            <input type="text" id="newEmail" name="newEmail" placeholder="Enter email" required><br>
            <label for="newUsername">Full name:</label>
            <input type="text" id="newUsername" name="newUsername" placeholder="Enter full name" required><br>
            <label for="newPassword">Password:</label>
            <input type="password" id="newPassword" name="newPassword" placeholder="Enter password" required><br>
            <button type="submit" name="register">Register</button>
            <p>Have an account? <a href="#" onclick="toggleForm()">Log In</a></p>
        </form>
    </div>
</div>
<?php
global $connection;
include 'db_connection.php';
function json_response($message, $success = true) {
http_response_code($success ? 200 : 400);
//echo json_encode(['message' => $message, 'success' => $success]);
echo '<script>alert("' . $message . '")</script>';
//exit;
}

// Check if the form was submitted for registration
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['register'])) {
// Retrieve form data
$email = $_POST['newEmail'];
$username = $_POST['newUsername'];
$password = $_POST['newPassword'];

// Prepare a select statement
$sql = "SELECT * FROM tbl_users WHERE user_email LIKE '$email'";
$result = mysqli_query($connection, $sql);
$row = mysqli_fetch_assoc($result);
if ($row !== null) {
json_response("The user already exists, please log in", 400);
} else {
// Hash the password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Prepare an insert statement
$sql = "INSERT INTO tbl_users (user_email, user_full_name, user_pass, user_address) VALUES ('$email', '$username', '$hashed_password', 'dd')";
$result = mysqli_query($connection, $sql);

if ($result) {
json_response("Registration successful");
} else {
json_response("Error: " . mysqli_error($connection), 500);
}
}
}

// Check if the form was submitted for login
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login'])) {
// Retrieve form data
    if (isset($_SESSION['user_id'])) {
        header("Location: user.php");
    } else {
        $email = mysqli_real_escape_string($connection, $_POST['email']);
        $password = mysqli_real_escape_string($connection, $_POST['password']);

// Prepare a select statement
        $sql = "SELECT * FROM tbl_users WHERE user_full_name LIKE '%" . $email . "%'";
        $result = mysqli_query($connection, $sql);
        $row = mysqli_fetch_assoc($result);
//echo $row['user_email'];
        if ($row !== null) {
// Verify password
            if (password_verify($password, $row['user_pass'])) {
// Start session and store user data if login successful
                $_SESSION['user_id'] = $row['user_id'];
                $_SESSION['username'] = $row['user_full_name'];
                json_response("Login successful");
            } else {
                json_response("Invalid password", 401);
            }
        } else {
            json_response("User not found", 404);
        }
    }
}
?>

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
