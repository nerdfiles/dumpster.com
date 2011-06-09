// plugins

try {

    var origin = window.location.origin;
    var projectPath = origin + '/dumpster.com/';

    $script(projectPath + '_assets/js-lib/jquery.tablesorter.min.js', 'jquery-tablesorter-min', function() {
        $script(projectPath + '_assets/js-lib/jquery.tablesorter.pager.js', 'jquery-tablesorter-pager', function() {
            $(function(e) {
                $('.mod_itemTable').tablesorter();
            });
        });
    });

} catch(e) { }

