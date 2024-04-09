<div class="container">
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" id="reviewForm"> <!-- Adjust the action as needed -->
    <div class="rating">
        <span id="rating">0</span>/5
        <input type="hidden" name="rating" id="hiddenRating" value="0" required>
    </div>
    <div class="stars" id="stars">
        <span class="star" data-value="1">★</span>
        <span class="star" data-value="2">★</span>
        <span class="star" data-value="3">★</span>
        <span class="star" data-value="4">★</span>
        <span class="star" data-value="5">★</span>
    </div>
    <p>Share your review:</p>
    <textarea name="title" id="title" placeholder="Title of your review" required></textarea>
    <textarea name="review" id="review" placeholder="Write your review here" required></textarea>
    <button type="submit" id="submit">Submit</button>
</form>
</div>
<script src="script/review.js"></script>

<?php
global $connection;
if(!$connection)
{

    die("failed to connect!");
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_SESSION['user_id'];
    $id = $_COOKIE['product'];
    $rating = $_POST['rating'];
    $review = $_POST['review'];
    $title = $_POST['title'];

    $sql = "INSERT INTO tbl_reviews (user_id, product_id, review_title, review_desc, review_rating) VALUES ('$user_id', '$id', '$title', '$review', '$rating')";
    $result = mysqli_query($connection, $sql);
    echo "<script>alert('Your review has been added successfully');</script>";
}

