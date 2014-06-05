<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
     <?php 
     $currentPage = basename($_SERVER['SCRIPT_FILENAME']); 
     switch( $currentPage ) {
         case 'addition.php':
             $currentTitle = 'Addition | ';
             break;
         case 'subtraction.php':
             $currentTitle = 'Subtraction | ';
             break;
         case 'multiplication.php':
             $currentTitle = 'Multiplication | ';
             break;
         case 'division.php':
             $currentTitle = 'Division | ';
             break;
         default:
             $currentTitle = '';
     } 
     ?>
    
    <title> <?php echo $currentTitle; ?>Nutshell Math | StephenWeigel.com </title>
    
    <link rel="shortcut icon" href="./favicon.ico" type="image/ico">
    <link href="./_/css/jquery.placeholder.css" rel="stylesheet">
    <link href="./_/css/styles.css" rel="stylesheet">
    
    <script src="./_/js/jquery-1.9.1.min.js"></script>
    <script src="./_/js/jquery.placeholder.min.js"></script>
    <script src="./_/js/myscripts.js"></script>
</head>

<body>
    <div id="globalWrapper">
        <section class="globalHeader">
            <header> 
                <h1> <a href="./index.php">Nutshell Math</a></h1>
            </header>
            <nav> 
                <ul>
                    <li><a href="./addition.php" <?php if ($currentPage == 'addition.php') { echo 'id="currentPage"'; } ?>>addition</a></li>
                    <li><a href="./subtraction.php" <?php if ($currentPage == 'subtraction.php') { echo 'id="currentPage"'; } ?>>subtraction</a></li>
                    <li><a href="./multiplication.php" <?php if ($currentPage == 'multiplication.php') { echo 'id="currentPage"'; } ?>>multiplication</a></li>
                    <li><a href="./division.php" <?php if ($currentPage == 'division.php') { echo 'id="currentPage"'; } ?>>division</a></li>
                </ul>
            </nav>
        </section> <!--end globalHeader-->
        <div id="errorAlerts"></div>