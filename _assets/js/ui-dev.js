// plugins

var host = window.location.host;
var pathname = (host.indexOf('localhost') != -1) ? '/dumpster.com/' : '/ui/prototypes/dumpster.com/';
var projectPath = 'http://' + host + pathname;

$script(projectPath + '_assets/js-lib/jquery.tablesorter.min.js', 'jquery-tablesorter-min', function() {
    $script(projectPath + '_assets/js-lib/jquery.tablesorter.pager.js', 'jquery-tablesorter-pager', function() {
        $(function(e) {
            $('.mod_itemTable').tablesorter();
        });
    });
});

