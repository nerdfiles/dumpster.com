<!doctype html>
<?php
if (isset($_GET['module'])) {
    $c = $_GET['module'];
} 
if (isset($_GET['page'])) {
    $c = 'page/'.$_GET['page'];
}  
?>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>dumpster.com Prototype: Viewing "<?php echo $c; ?>"</title>

        <link rel="shortcut icon" href="http://www.wm.com/favicon.ico" />
        <link rel="stylesheet" type="text/css" media="all" href="http://www.wm.com/_assets/css/960.css" />
        <link rel="stylesheet" type="text/css" media="all" href="http://www.wm.com/_assets/css/global.css" />
        <!--[if lte IE 7]>
        <link rel="stylesheet" type="text/css" media="all" href="http://www.wm.com/_assets/css/global_ie6-7.css" />
        <![endif]-->
        <link rel="stylesheet" type="text/css" media="print" href="http://www.wm.com/_assets/css/print.css" />
        
        <link rel="stylesheet" type="text/css" href="../_assets/js-lib/jcarousel/skins/wm/skin.css" />
        <link rel="stylesheet" type="text/css" href="../_assets/css/static-template.css" />
        <link rel="stylesheet" type="text/css" href="../_assets/css/dumpster.css" />
        <link rel="stylesheet" type="text/css" media="all" href="../_assets/js-lib/jquery.tabbed/jquery.tabbed.css" />

        <script type="text/javascript" src="http://www.wm.com/_assets/js/swfobject.js"></script> 		
        <script type="text/javascript" src="http://www.wm.com/_assets/js/cufon.js"></script> 		
        <script type="text/javascript" src="http://www.wm.com/_assets/js/wm_book_400.font.js"></script>	
        <script type="text/javascript">
            // Cufon...
            Cufon.replace('h1');
            Cufon.replace('h2');
            Cufon.replace('.module_zipSearch h3');
        </script>

        <!--
            link rel="stylesheet" type="text/css" href="../_assets/js/shadowbox/shadowbox.css"
        -->
        <script type="text/javascript" src="../_assets/js-lib/dynamicCSS.js"></script>
        <script type="text/javascript" src="../_assets/js-lib/dcss-init.js"></script>
        
        <script src="http://www.wm.com/_assets/js/s_code.js"></script>
		<script src="http://www.wm.com/_assets/js/omniConfig.js"></script>
		
</head>
<body>

<div id="page" class="container_16 clearfix">

<!-- Header -->
<?php include_once('template/header_with_nav_copy.html'); ?>
<!-- Header -->

<div id="page_content" class="clearfix">

<?php if ($_GET['left_nav'] != 'hide') : ?>
<div id="left_nav" class="grid_3"></div>
<?php endif; ?>

<?php if ($_GET['left_nav'] == 'show') { ?>
<div id="content" class="grid_13 omega">
<?php } else { ?>
<div id="content" class="grid_16 omega">
<?php } ?>

<!--
    h1 style="background:url('http://www.wm.com/_assets/images/heros/hero_residentialproductsandservices_final.jpg');" class="hero"><span>Header 1</span></h1 
-->

<?php if ($_GET['breadcrumb'] != 'hide') : ?>
<ul id="breadcrumb" class="clearfix">
<li>
<a href="/" id="homeCrumb">Home</a>
</li> 
<li>
<span>&gt;</span> Careers</li>
</ul>
<?php endif; ?>

<?php if ($_GET['left_nav'] == 'show') { ?>
    <div id="main_content" class="grid_13 alpha">
<?php } else { ?>
    <div id="main_content" class="grid_16 alpha">
<?php } ?>

<!-- Page Begins -->
<?php include_once($c); ?>
<!-- Page Ends -->

</div><!-- #main_content.grid_13 -->

</div></div></div>

<!-- Footer Begins -->
<?php include_once('template/footer_copy.html'); ?>
<!-- Footer Ends -->

<script type="text/javascript" src="http://www.wm.com/_assets/js/plugins.js"></script>
<script type="text/javascript" src="http://www.wm.com/_assets/js/global.js"></script>  
<script type="text/javascript"> <!-- try {Cufon.now();} catch (e) {} --> </script>


<script type="text/javascript" src="../_assets/js-lib/modernizr-1.6.min.js"></script>
<script type="text/javascript" src="../_assets/js-lib/jquery.metadata.js"></script>
<script type="text/javascript" src="../_assets/js-lib/jquery.tabbed/jquery.tabbed-0.1.js"></script>
<script type="text/javascript" src="../_assets/js-lib/jcarousel/lib/jquery.jcarousel.min.js"></script>
<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.8/jquery.validate.min.js"></script>
<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.8/additional-methods.min.js"></script>
<script type="text/javascript" src="../_assets/js/dumpster-global.js"></script>

</body>
</html>


