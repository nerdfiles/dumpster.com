// plugins

$script('_assets/js-lib/jquery.tablesorter.min.js', 'jquery-tablesorter-min', function() {
    $script('_assets/js-lib/jquery.tablesorter.pager.js', 'jquery-tablesorter-pager', function() {
        $(function(e) {
            $('.mod_itemTable').tablesorter();
        });
    });
});

