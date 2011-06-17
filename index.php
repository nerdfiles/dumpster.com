<!DOCTYPE HTML>
<?php

include_once('functions.php');


if (!isset($_GET['standard'])) {
    $standard = false;
} else {
    $standard = $_GET['standard'];
}

if (!isset($_GET['wide'])) {
    $wide = false;
} else {
    $wide = $_GET['wide'];
}

if (!isset($_GET['lang'])) {
    $lang = 'en';
} else {
    $lang = $_GET['lang'];
}

if (!isset($_GET['header'])) {
   $header = 'hide';
} else {
   $header = $_GET['header'];
}

if (!isset($_GET['left_nav'])) {
   $left_nav = 'hide';
} else {
   $left_nav = $_GET['left_nav'];
}

if (!isset($_GET['breadcrumb'])) {
   $breadcrumb = 'hide';
} else {
   $breadcrumb = $_GET['breadcrumb'];
}

if (isset($_GET['module'])) {
    $c = $_GET['module'];
} 
if (isset($_GET['page'])) {
    $c = 'page/'.$_GET['page'];
   
   if ($c == 'page/') {
    $c = 'page/show-all.html';
   }
} else {
   $c = 'page/show-all.html';
} 

$host = $_SERVER['HTTP_HOST'];

if ( $host !== 'localhost' && $host !== 'localhost:8888' && $host !== 'localhost:8080' )
    $path = $host . '/ui/prototypes';
else
    $path = $host; // localhost
    
if ( $host === 'txhous10pc1400.wm.com')
    $path = $host;

$env = 'http://' . $path . '/dumpster.com';
?>

<!--

/**
 * Base Layout for Dumpster.com
 * 
 * Base Layout for Dumpster.com
 * 
 * @creator         aalexan1
 * 
 * @lastauthor      $Author$
 * @lastmodified    $Date$
 * @revision        $Rev$
 */

-->

<html lang="<?php echo $lang; ?>" class="no-js <?php echo $lang; ?>">

<head>
   
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta http-equiv="viewport" content="width=device-width,initial-scale=1.0" />
        
    <title>dumpster.com Prototype: Viewing "<?php echo $c; ?>"</title>

    <link rel="shortcut icon" href="http://www.wm.com/favicon.ico" />
    
    <link rel="stylesheet" type="text/css" media="all" href="http://www.wm.com/_assets/css/960.css" />
    <link rel="stylesheet" type="text/css" media="all" href="<?php echo $env; ?>/_assets/css/global.css" />
    <!--[if lte IE 7]>
    <link rel="stylesheet" type="text/css" media="all" href="http://www.wm.com/_assets/css/global_ie6-7.css" />
    <![endif]-->
    <link rel="stylesheet" type="text/css" media="print" href="http://www.wm.com/_assets/css/print.css" />
    
    <!-- Dumpster -->
    <link rel="stylesheet" type="text/css" media="all" href="<?php echo $env; ?>/_assets/css/dumpster.css" />
    <link rel="stylesheet" type="text/css" media="all" href="http://www.wm.com/myaccount/html/_js-lib/jquery.ui/css/ui-lightness/jquery-ui-1.8.4.custom.css" /> 
    <link rel="stylesheet" type="text/css" media="all" href="<?php echo $env; ?>/_assets/js-lib/jquery.tabbed/jquery.tabbed.css" />
    <link rel="stylesheet" type="text/css" media="all" href="<?php echo $env; ?>/_assets/js-lib/jquery.modalwindow/jquery.modalwindow.css" />
    
    
    <!-- UI Prototype Development only *DO NOT INCLUDE BELOW IN JAVA APP* -->
    <link rel="stylesheet" type="text/css" media="all" href="<?php echo $env; ?>/_assets/css/ui-dev.css" />
    <link rel="stylesheet" type="text/css" media="all" href="<?php echo $env; ?>/_assets/css/kevin.css" />
    <link rel="stylesheet" type="text/css" media="all" href="<?php echo $env; ?>/_assets/css/brian.css" />
    <link rel="stylesheet" type="text/css" media="all" href="<?php echo $env; ?>/_assets/css/aaron.css" />
    <!-- END UI PROTOTYPE ONLY *DO NOT INCLUDE ABOVE IN JAVA APP*-->
    
    <!-- JavaScript --> 
   <script type="text/javascript" src="<?php echo $env; ?>/_assets/js-lib/script.js/dist/script.min.js"></script>
    <script type="text/javascript" src="http://www.wm.com/_assets/js/cufon.js"></script>
    <!--[if gte IE 9]>
        <script type="text/javascript">
            Cufon.set('engine', 'canvas');
        </script>
    <![endif]--> 
    <script type="text/javascript" src="http://www.wm.com/_assets/js/wm_book_400.font.js"></script>
    <script type="text/javascript" src="<?php echo $env; ?>/_assets/js/wm_sterling_600.font.js"></script>    
    <script type="text/javascript">
        
        // Global Cufon
        Cufon.set('fontFamily', 'wm_book');
        
        Cufon.replace('h1', {
            fontFamily: 'wm_book'
        });
        Cufon.replace('h2', {
            fontFamily: 'wm_book'
        });
        
        // Carousel 
        Cufon.replace('.header h3', {
            fontFamily: 'wm_book'
        });
        Cufon.replace('#carousel p', {
            fontFamily: 'wm_book'
        });
        
        // Promo Table
        Cufon.replace('.promo-table .display-footer .line-1', {
            fontFamily: 'wm_book'
        }); // at this level?
        Cufon.replace('.promo-table .display-footer .line-2', {
            fontFamily: 'wm_book'
        });
        Cufon.replace('.promo-table .summary', {
            fontFamily: 'wm_book'
        });
        
        Cufon.refresh();
        
        // Foundry
        Cufon.set('fontFamily', 'Foundry Sterling');
        
        // Dumpster
        Cufon.replace('.module_zipSearch h3', {
            fontFamily: 'Foundry Sterling'
        });
        Cufon.replace('#carousel h2', {
            letterSpacing: '2px',
            fontFamily: 'Foundry Sterling'
        });
        Cufon.replace('.mod_need-help h2', {
            fontFamily: 'Foundry Sterling'
        });
        
        Cufon.refresh();

        $script('http://www.wm.com/_assets/js/plugins.js', 'plugins', function() {
            // Support Plugins
            $script('http://ajax.cdnjs.com/ajax/libs/modernizr/1.7/modernizr-1.7.min.js', 'modernizr');
            $script('<?php echo $env; ?>/_assets/js-lib/jquery.metadata.js', 'metadata');
            $script('<?php echo $env; ?>/_assets/js-lib/dynamicCSS.js', function(){
                $script('<?php echo $env; ?>/_assets/js-lib/dcss-init.js');
            });
            $script('http://www.wm.com/_assets/js/swfobject.js','swfobject');
            
            // UI Plugins
            $script('<?php echo $env; ?>/_assets/js-lib/jquery.tabbed/jquery.tabbed-0.1.js', 'tabbed');
            $script('<?php echo $env; ?>/_assets/js-lib/jcarousel/lib/jquery.jcarousel.min.js', 'jcarousel');
        $script('<?php echo $env; ?>/_assets/js-lib/jquery.modalwindow/jquery.modalwindow.js', 'modalwindow');

            // Validation
            $script('http://ajax.aspnetcdn.com/ajax/jquery.validate/1.8/jquery.validate.min.js', 'validate');
            $script('http://ajax.aspnetcdn.com/ajax/jquery.validate/1.8/additional-methods.min.js', 'add-methods');
            
            // Global
            $script('http://www.wm.com/_assets/js/global.js', 'global.js');
            $script('http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js', 'jquery-ui', function() {
                $script('<?php echo $env; ?>/_assets/js/dumpster-global.js', 'dumpster-global');

            // French Language
            if( $('html[lang*=fr]').length ) {
                $script('<?php echo $env; ?>/_assets/js-lib/jquery.ui/jquery.ui.datepicker-fr.js', 'jquery-ui-fr');
            }

            });
        //DO NOT INCLUDE BELOW THIS IN JAVA APP - UI PROTOTYPE ONLY
            $script('<?php echo $env; ?>/_assets/js/ui-dev.js', 'ui-dev'); //DO NOT INCLUDE THIS IN JAVA APP - UI PROTOTYPE ONLY
            $script('<?php echo $env; ?>/_assets/js-lib/jquery.image-preview-tooltip.js', 'image-preview-tooltip'); //DO NOT INCLUDE THIS IN JAVA APP - UI PROTOTYPE ONLY
        //DO NOT INCLUDE ABOVE THIS IN JAVA APP - UI PROTOTYPE ONLY
        });
    </script>  
   <script type="text/javascript" src="http://www.wm.com/_assets/js/s_code.js"></script>
   <script type="text/javascript" src="http://www.wm.com/_assets/js/omniConfig.js"></script>
   
</head>
   
<body class="<?php body_class(); ?>">

<div id="page" class="container_16 clearfix">

<?php if ($header != '' && $header != 'hide') : ?>
<?php include_once('template/' . $header); ?><!-- #header -->
<?php else: ?>
<?php include_once('template/header_with_nav_copy.html'); ?><!-- #header -->
<?php endif; ?>

<div id="page_content" class="clearfix">

<!-- left_nav should be re-used from R1/R2 -->
<?php if ( $left_nav != 'hide' && $c != 'page/show-all.html' && $c != 'page/' && !file_exists('template/right_content/' . str_replace('page/', '', $c) ) ) : ?>
<div id="left_nav" class="grid_3"></div>
<?php endif; ?>

<!-- content should be re-used from R1/R2 -->

<?php  
if ($c == 'page/show-all.html' || $left_nav == 'hide' && $wide == 'true') { ?>
<div id="content" class="grid_16 omega">
<?php } else { ?>
    
    <?php
    if ( file_exists('template/right_content/' . str_replace('page/', '', $c) ) ) {
    ?>
        <div id="content" class="grid_16 omega">
    <?php } else { ?>
        <div id="content" class="grid_13 omega">
    <?php
    } 
    ?>
    
<?php } ?>

<!--
    h1 style="background:url('http://www.wm.com/_assets/images/heros/hero_residentialproductsandservices_final.jpg');" class="hero"><span>Header 1</span></h1 
-->

<!-- breadcrumb should be re-used from R1/R2 -->

<?php if ($breadcrumb != 'hide' && $breadcrumb != '' || $c == 'page/show-all.html') : ?>
<ul id="breadcrumb" class="clearfix">
   <li><a href="/" id="homeCrumb">Home</a></li>
   <li><span>&gt;</span> Page Name</li>
   <li><span>&gt;</span> Page Name</li>
</ul><!-- #breadcrumb -->
<?php endif; ?>

<?php if ($c == 'page/show-all.html' || $left_nav == 'hide' && $wide == 'true' && !file_exists('template/right_content/' . str_replace('page/', '', $c) ) ) { ?>
    <div id="main_content" class="grid_16 alpha">
<?php } else { ?>
    <?php if ($standard != false) { ?>
        <div id="main_content" class="grid_13 alpha">
    <?php } else { ?>
        <div id="main_content" class="grid_12 alpha">
    <?php } ?>
<?php } ?>

<!-- Page Begins -->

<?php include_once($c); ?><!-- <?php echo "Include: ".$c; ?> -->

<!-- Page Ends -->

</div><!-- #main_content -->

<?php 
if ( file_exists('template/right_content/' . str_replace('page/', '', $c) ) ) {
     include('template/right_content/' . str_replace('page/', '', $c));
}
?>

</div></div></div>
</div>
</div>
<?php include_once('template/footer_copy.html'); ?><!-- #footer -->

<script type="text/javascript">
   try {
    Cufon.now();
   } catch (e) { }
</script>

</body>
</html>


