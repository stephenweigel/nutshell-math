<?php require_once('./includes/header.inc.php'); ?>
    
<section class="content">
    <div class="colLeft">
        <h3> Division </h3>
        <p class="instructions"> When you separate something into equal parts you are dividing it. When you 
                                 have one pizza to share between 4 friends, and you each take the same sized slice, 
                                 you have divided the pizza by four.  <br>That's division in a nutshell. </p>
    
        <form id="divisionMain" novalidate>
            <?php include('./includes/divisionmainform.inc.php'); ?>
        </form> <!--end divisionMain-->
     
        <h3>Things to Keep in Mind: Division</h3>
        <p class="instructions">
            ** anything divided by 0 equals 0 ** <br>
            ** anything divided by 1 equals itself **
        </p>
    </div><!--end colLeft-->

    <div class="colRight">
        <?php include('./includes/quickquiz.inc.php'); ?>
    </div> <!-- end colRight-->
</section> <!--end Content-->

<?php require_once('./includes/footer.inc.php'); ?>