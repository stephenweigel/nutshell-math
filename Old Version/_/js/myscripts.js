$(function(){
    setTriggers();
    
}); // jQuery Ready

// Functions //

/**
 * Check if an element exists on the page, and if it does, call the functions that 
 * correspond to that element. 
 * @returns {Boolean}
 */
function setTriggers() {
    if ( $('.quickCalcSection').length ) quickCalc();  // should trigger on all pages
    if ( $('#quickQuiz').length ) quickQuiz();
    if ( $('#additionMain').length ) {
        $( '#additionMain').submit(function(){ additionMain(); return false; });
        $( '#additionMultiple').submit(function() { additionMultiple(); return false; });
    }
    if ( $('#subtractionMain').length ) {
         $( '#subtractionMain').submit(function(){ subtractionMain(); return false; });
         $( '#budget' ).submit(function(){ calculateRemainingBudget(); return false; });
    }
    if ( $('#multiplicationMain').length ) {
         $( '#multiplicationMain').submit(function(){ multiplicationMain(); return false; });
    }
    if ( $('#divisionMain').length ) {
         $( '#divisionMain').submit(function(){ divisionMain(); return false; });
    }
    return true;
}

function getAnswer( x, y, operation) {
    x = verifyNumber( x.val() );   
    y = verifyNumber( y.val() );   
    return doOperation( x, y, operation );
     
}

function verifyNumber( number ) {
    number = parseInt( number, 10 );
    if (isNaN( number )) {
        $( '#errorAlerts' ).text( 'You must enter a valid number');
        return false;
    }
    return number;
}

function doOperation( x, y, operation ) {
    var answer;
    switch( operation ) {
        case 'add':
            answer = x + y;
            break;
        case 'subtract':
            answer = x - y;
            break;
        case 'multiply':
            answer = x * y;
            break;
        case 'divide':
            answer = x / y;
            break;
        default:
            console.log('QuickCalc: Define Operation');
    }
    return answer;
}

// Quick Calc
function quickCalc() {
    $('#addQC').submit(function(){
        displayQuickCalcAnswer( 'add' );
        return false;
    });
    $('#subQC').submit(function(){
        displayQuickCalcAnswer( 'subtract' );
        return false;
    });
    $('#mulQC').submit(function(){
        displayQuickCalcAnswer( 'multiply' );
        return false;
    });
    $('#divQC').submit(function(){
        displayQuickCalcAnswer( 'divide' );
        return false;
    });
}

function displayQuickCalcAnswer( operation ) {
    switch( operation ) {
        case 'add':
            $('#quickAddAnswer').val( 
                getAnswer( $('#quickAddFirst'), $('#quickAddSecond'), 'add')
            );
            break;
        case 'subtract':
            $('#quickSubAnswer').val( 
                getAnswer( $('#quickSubFirst'), $('#quickSubSecond'), 'subtract')    
            );
            break;
        case 'multiply':
            $('#quickMultAnswer').val( 
                getAnswer( $('#quickMultFirst'), $('#quickMultSecond'), 'multiply')
            );
            break;
        case 'divide':
            $('#quickDivAnswer').val( 
                getAnswer( $('#quickDivFirst'), $('#quickDivSecond'), 'divide')
            );
            break;
        default:
            console.log('QuickCalc Answer: Define Operation');
    }
    return true;
}

// Quick Quiz
function quickQuiz() {
    loadQuickQuiz();
    $('#quickQuiz').submit( function(){
        processQuickQuiz() 
        return false;
    }); 
}

function loadQuickQuiz() {
    $('#addX,#addY,#subX,#subY').each(function(){
       $(this).val( Math.floor( Math.random()*101 ));
    });
    $('#mulX,#mulY,#divX,#divY').each(function(){
       $(this).val( Math.floor( Math.random()*11 ));
    });
    return true;
}

function processQuickQuiz() {
    var correctAnswers, userAnswers, score; 
    correctAnswers = getCorrectQuizAnswers();
    if ( userAnswers = getUserQuizAnswers() ) {
        score = gradeQuickQuiz( correctAnswers, userAnswers );
        displayQuickQuizScore( score );
        return true;
    } else {
        
    }
}

function getCorrectQuizAnswers() {
     var add, sub, mul, div;
     add = getAnswer( $('#addX'), $('#addY'), 'add');
     sub = getAnswer( $('#subX'), $('#subY'), 'subtract');
     mul = getAnswer( $('#mulX'), $('#mulY'), 'multiply');
     div = getAnswer( $('#divX'), $('#divY'), 'divide');
     div = Math.round( div * 100 ) / 100; // round to 2 decimal points
     return {'add' : add, 'sub' : sub, 'mul' : mul, 'div' : div };
}

function getUserQuizAnswers() {
    var add, sub, mul, div;
    add = ( verifyNumber( $('#addZ').val() )) ;
    sub = ( verifyNumber( $('#subZ').val() )) ;
    mul = ( verifyNumber( $('#mulZ').val() )) ;
    div = ( verifyNumber( $('#divZ').val() )) ;
    if ( (add == false ) || (sub == false ) || (mul == false ) || (div == false )) {
        return false; // displays error alert
    } else {
        hideErrorAlert();
        return {'add' : add, 'sub' : sub, 'mul' : mul, 'div' : div };
    }
    
}

function hideErrorAlert() {
    if ( $('#errorAlerts').length > 0 ) {
        $('#errorAlerts').text('');
    }
}

function gradeQuickQuiz( correctAnswers, userAnswers ) {
    var score = 0;
    if ( checkQuizQuizProblem( correctAnswers.add, userAnswers.add, $('#addA') )) score++ ;
    if ( checkQuizQuizProblem( correctAnswers.sub, userAnswers.sub, $('#subA') ))score++ ;
    if ( checkQuizQuizProblem( correctAnswers.mul, userAnswers.mul, $('#mulA') )) score++ ;
    if ( checkQuizQuizProblem( correctAnswers.div, userAnswers.div, $('#divA') )) score++ ;
    return score;
}

function checkQuizQuizProblem( correctAnswer, userAnswer, resultID ) {
    if ( userAnswer == correctAnswer ) {
        resultID.val( userAnswer + ' is the correct answer!');
        return true;
    } else {
        resultID.val( 'The correct answer is ' + correctAnswer );
        return false;
    }
}

function displayQuickQuizScore( score ) {
    switch( score ) {
        case 4:
            $('#score').val('You got them all right!');
            break;
        case 3:
            $('#score').val('Three out of four correct, not bad!');
            break;
        case 2:
            $('#score').val('Half right, better luck next time!');
            break;
        case 1:
            $('#score').val('One right, better luck next time!');
            break;
        case 0:
            $('#score').val('Sadly, none were correct.');
            break;
        default:
            console.log('QuizScore: For some reason, there was no score');
    }
    return true;
}

// Addition Page Functions
function additionMain() {
    $('#z').val( getAnswer( $( '#x' ), $( '#y' ), 'add' ));
    return true;
}

function additionMultiple() {
    var total = addMultipleValues( $('#addMultiple') );
    $('#answer').val( total ); return true;
}

function addMultipleValues( source ) {
    var numArray, total = 0, x;
    numArray = source.val().split( " " );
    $.each( numArray, function( i ){
       if ( numArray[i] != '' ) { // prevent accidental double space from triggering error
          ( x = verifyNumber( numArray[i] )) ?  total += x : '' ;
       } // if
    }); // $.each
    return total;
}

// Subtraction Page Functions 
function subtractionMain() {
    $('#z').val( getAnswer( $( '#x' ), $( '#y' ), 'subtract' ));
    return true;
}

function calculateRemainingBudget() {
    var  budget, expenses, remaining;
    budget = verifyNumber( $('#budgetTotal').val() );
    expenses = addMultipleValues( $( '#expenses'));
    remaining = budget - expenses;
    $('#leftOver').val( 'You have $' + remaining + ' left in your budget' );
    return true;
}

// Multiplication Page Functions 
function multiplicationMain() {
    $('#z').val( getAnswer( $( '#x' ), $( '#y' ), 'multiply' ));
    return true;
}

// Division Page Functions
function divisionMain() {
    $('#z').val( getAnswer( $( '#x' ), $( '#y' ), 'divide' ));
    return true;
}