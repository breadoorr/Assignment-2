<div class="reviews" id="reviews">
    <h2>Reviews</h2>
    <div class="container">
        <?php
//        session_start();
        global $connection;
        include 'db_connection.php';
//        $id = $_SESSION['product_id'];
        $id = json_decode($_COOKIE['product']);

        $sql = "SELECT * FROM tbl_reviews WHERE product_id LIKE '$id'";
        $result = mysqli_query($connection, $sql);

            // Check if the query was successful
            if (!$result) {
                die("Query failed: " . mysqli_error($connection));
            }

            // Fetch and display the data
            while ($row = mysqli_fetch_assoc($result)){
               $rating = $row['review_rating'];
                $rating_text = '';

                // Determine the rating text based on the numeric rating
                if ($rating == "5") {
                    $rating_text = 'Excellent';
                } elseif ($rating == "4") {
                    $rating_text = 'Good';
                } elseif ($rating == "3") {
                    $rating_text = 'Fair';
                } elseif ($rating == "2") {
                    $rating_text = 'Poor';
                } else {
                    $rating_text = 'Very Poor';
                }

                // Output the review with the corresponding rating text
                echo '<div class="review"> 
                        <h2>' . $row['review_title'] . '</h2>
                        <p>Product rating: ' . $rating_text . '</p>
                        <p>' . $row['review_desc'] . '</p>
                      </div>';
            }
        ?>
    </div>
</div>
