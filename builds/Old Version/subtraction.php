<?php require_once('./includes/header.inc.php'); ?>

<section class="content">
    <div class="colLeft">
	<h3> Subtraction </h3>
        <p class="instructions"> Subtraction is taking something away from something else. When you have two of something, 
                                 and you take one away, you are left with one. <br>That's subtraction in a nutshell. </p>
    
        <form id="subtractionMain" novalidate>
            <?php include('./includes/subtractionmainform.inc.php'); ?>
        </form> <!--end subtractionMain-->
      
        <p class="instructions"> Sometimes, in a budget for example, you start with one number and subtract multiple 
                                 numbers from it. <br> Enter your budget (money available to spend):
            <form id="budget" novalidate> 
                <?php include('./includes/subtractionbudgetform.inc.php'); ?>
            </form>
        </p>
    </div><!--end colLeft-->

    <div class="colRight">
	<?php include('./includes/quickquiz.inc.php'); ?>
    </div> <!-- end colRight-->
</section> <!--end Content-->

<?php require_once('includes/footer.inc.php'); ?>