<?php require_once('./includes/header.inc.php'); ?>
       
<section class="content">
    <div class="colLeft">
	<h3> Addition </h3>
        <p class="instructions"> Addition is the combining of numbers. When you have one of something, and you add one 
                                 more of it, you now have two. That's addition in a nutshell. </p>
    
        <form id="additionMain" novalidate>
            <?php include('./includes/additionmainform.inc.php'); ?>
        </form> <!--end additionMain-->
      
        <p class="instructions"> Addition isn't limited to just two numbers. Try combining three or more numbers below. <br> 
                                 Separate each number with a space. </p>
     
        <form id="additionMultiple">
            <?php include('./includes/additionmultipleform.inc.php'); ?>
        </form><!--end additionMultiple-->
     
    </div><!--end colLeft-->

    <div class="colRight">
	<?php include('./includes/quickquiz.inc.php'); ?>
    </div> <!-- end colRight-->
</section> <!--end Content-->

<?php require_once('./includes/footer.inc.php'); ?>