
var PageName = 'Dumpster Landing Page';
var PageId = 'ee0e002317014449a6343313ee6f43e6'
var PageUrl = 'Dumpster_Landing_Page.html'
document.title = 'Dumpster Landing Page';
var PageNotes = 
{
"pageName":"Dumpster Landing Page",
"showNotesNames":"False",
"Page Descriptions":"<p style=\"text-align:left;\"><span style=\"\">This page is displayed when the user links over to dumpster.com from a search engine.<\/span><\/p>",
"UC Reference":"<p style=\"text-align:left;\"><span style=\"\">Shopping Experience 001 Landing Page<\/span><\/p>"}
var $OnLoadVariable = '';

var $LoginID = '';

var $LoginPassword = '';

var $AccountNumber = '';

var $SegmentState = '';

var $SiteSegment = '';

var $Page = '';

var $ProceedToBilling = '';

var $FromWhere = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&LoginID=' + encodeURIComponent($LoginID) + '&LoginPassword=' + encodeURIComponent($LoginPassword) + '&AccountNumber=' + encodeURIComponent($AccountNumber) + '&SegmentState=' + encodeURIComponent($SegmentState) + '&SiteSegment=' + encodeURIComponent($SiteSegment) + '&Page=' + encodeURIComponent($Page) + '&ProceedToBilling=' + encodeURIComponent($ProceedToBilling) + '&FromWhere=' + encodeURIComponent($FromWhere) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[LoginID\]\]/g, $LoginID);
  value = value.replace(/\[\[LoginPassword\]\]/g, $LoginPassword);
  value = value.replace(/\[\[AccountNumber\]\]/g, $AccountNumber);
  value = value.replace(/\[\[SegmentState\]\]/g, $SegmentState);
  value = value.replace(/\[\[SiteSegment\]\]/g, $SiteSegment);
  value = value.replace(/\[\[Page\]\]/g, $Page);
  value = value.replace(/\[\[ProceedToBilling\]\]/g, $ProceedToBilling);
  value = value.replace(/\[\[FromWhere\]\]/g, $FromWhere);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '29');
  value = value.replace(/\[\[GenMonth\]\]/g, '4');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'April');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Friday');
  value = value.replace(/\[\[GenYear\]\]/g, '2011');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u18 = document.getElementById('u18');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u18ann'), "<div id='u18Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u18Note').click(function(e) { ToggleWorkflow(e, 'u18', 300, 150, false); return false; });
var u18Ann = 
{
"label":"Zip Code Entry Button",
"Description":"After a valid postal code is entered, this button will take the user to the Residential Dumpster selection page."};

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{
windowEvent = e;


if (true) {

	self.location.href="Residential_Dumpster_Selection.html" + GetQuerystring();

}

}

var u17 = document.getElementById('u17');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u15 = document.getElementById('u15');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u8 = document.getElementById('u8');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u24 = document.getElementById('u24');

var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
if (window.OnLoad) OnLoad();
