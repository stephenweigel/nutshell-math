<?php require_once('./includes/header.inc.php'); ?>

<section class="content">
    <div class="colLeft">
        <h3> Multiplication </h3>
        <p class="instructions"> Multiplication is taking something and copying it a specific number of times. 
                                 When you have one of something, and multiply it by five, you now have five of it. 
                                 <br> That's multiplication in a nutshell. </p>
    
        <form id="multiplicationMain" novalidate>
            <?php include('./includes/multiplicationmainform.inc.php'); ?>
        </form> <!--end multiplicationMain-->
      
        <h3>Things to Keep in Mind: Multiplication</h3>
        <p class="instructions">
            ** anything multiplied by 0 equals 0 ** <br>
            ** anything multiplied by 1 equals itself **
        </p>
    </div><!--end colLeft-->

    <div class="colRight">
	<?php include('./includes/quickquiz.inc.php'); ?>
    </div> <!-- end colRight-->
</section> <!--end Content-->

<?php require_once('./includes/footer.inc.php'); ?>