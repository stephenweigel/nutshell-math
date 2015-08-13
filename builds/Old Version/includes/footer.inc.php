<footer>
    <div id="footLeft" class="quickCalcSection">  
        <h3>Quick Calculations</h3>
        <div id="quickAddition">
            <h4>Addition</h4>
            <form class="quickCalc" id="addQC" novalidate>
                <?php require_once('./includes/footeraddcalc.inc.php'); ?>
            </form>
        </div> <!--End quickAddition-->

        <div id="quickSubtraction">
            <h4>Subtraction</h4>
            <form class="quickCalc" id="subQC" novalidate>
                <?php require_once('./includes/footersubcalc.inc.php'); ?>
            </form>
        </div><!--End quickSubtraction-->

        <div id="quickMult">
            <h4>Multiplication</h4>
            <form class="quickCalc" id="mulQC" novalidate>
                <?php require_once('./includes/footermulcalc.inc.php'); ?>
            </form>
        </div><!--End quickMult-->

        <div id="quickDiv">
            <h4>Division</h4>
            <form class="quickCalc" id="divQC" novalidate>
                <?php require_once('./includes/footerdivcalc.inc.php'); ?>
            </form>
        </div><!--End quickDiv-->
    </div> <!--end footLeft-->

    <div id="footRight">
        <div id="contactUs">
            <p class="contactHeader">Contact Us:</p>
            <p class="contactInfo">Phone: 1-800-123-4567</p>
            <p class="contactInfo">Fax: 1-800-123-7890</p>
        </div> <!--End contactUs-->
        <div id="socialMedia">
            <p>Follow Us:</p>
                <div id="socialMediaLinks">
                    <a href="./socialMedia.php"><img src="./_/img/facebook.png" 
                       alt="Facebook" height="78" width="62"></a>
                    <a href="./socialMedia.php"><img src="./_/img/twitter.png" 
                       alt="Twitter" height="78" width="62"></a>
                </div> <!--end socialMediaLinks-->
        </div><!--end socialMedia-->
    </div> <!--end footRight-->

</footer>

</div><!--End Global Wrapper-->
</body>
</html>
