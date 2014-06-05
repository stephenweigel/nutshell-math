    <h3> Quick Quiz </h3>
    <form id="quickQuiz" novalidate>
    	<div class="quickQuizSection">
            <input type="text" name="addX" id="addX" placeholder="X" disabled>
            + 
            <input type="text" name="addY" id="addY" placeholder="Y" disabled>
            = 
            <input type="text" name="addZ" id="addZ" placeholder="Answer" required>
        </div><!--end  Addition QuickQuizSection-->
    
    	<div class="quickQuizSection">
            <input type="text" name="subX" id="subX" placeholder="X" disabled>
            - 
            <input type="text" name="subY" id="subY" placeholder="Y" disabled>
            = 
            <input type="text" name="subZ" id="subZ" placeholder="Answer" required>
        </div> <!--end Subtraction QuizQuizSection-->
        
        <div class="quickQuizSection">
            <input type="text" name="mulX" id="mulX" placeholder="X" disabled>
            <span id="multiplicationSign">x</span> 
            <input type="text" name="mulY" id="mulY" placeholder="Y" disabled>
            = 
            <input type="text" name="mulZ" id="mulZ" placeholder="Answer" required>
        </div> <!--end Multiplication QuickQuizSection-->
        
        <div class="quickQuizSection">
            <input type="text" name="divX" id="divX" placeholder="X" disabled>
            &divide; 
            <input type="text" name="divY" id="divY" placeholder="Y" disabled>
            = 
            <input type="text" name="divZ" id="divZ" placeholder="Answer" required>
            <span class="decimalPlaces">**</span>
        </div> <!--end Division QuickQuizSection-->
        
        <input type="submit" value="See How You Did" id="submit">
        
        <div class="quickQuizAnswers">
            <input type="text" name="addA" id="addA" placeholder="+ Answer +" disabled>
            <input type="text" name="subA" id="subA" placeholder="- Answer -" disabled>
            <input type="text" name="mulA" id="mulA" placeholder="x Answer x" disabled>
            <input type="text" name="divA" id="divA" placeholder="&divide; Answer &divide;" disabled>
            <input type="text" name="score" id="score" placeholder="Score" disabled>        
        </div><!--end quickQuizAnswers-->
    </form><!--end quickQuiz-->
	
    <p class="decimalPlaces">** Rounded to 2 decimal places **</p>

