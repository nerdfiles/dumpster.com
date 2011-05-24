
var PageName = 'CA Dumpster Landing Page';
var PageId = 'cd8d5f9409b240ba889323ba8cc12d7b'
var PageUrl = 'CA_Dumpster_Landing_Page.html'
document.title = 'CA Dumpster Landing Page';
var PageNotes = 
{
"pageName":"CA Dumpster Landing Page",
"showNotesNames":"False",
"Page Descriptions":"<p style=\"text-align:left;\"><span style=\"\">This page is displayed when the user links over to dumpster.com from a search engine.<\/span><\/p>",
"UC Reference":"<p style=\"text-align:left;\"><span style=\"\">Shopping Experience 001 Landing Page<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">UC_LanguageSelection&nbsp; &nbsp;&nbsp; <\/span><\/p><p style=\"text-align:left;\"><span style=\"\">&nbsp;<\/span><\/p>"}
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

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u29 = document.getElementById('u29');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u31 = document.getElementById('u31');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{
windowEvent = e;


if (true) {

	self.location.href="http://www.wm.com" + "";

}

}

var u34 = document.getElementById('u34');

u34.style.cursor = 'pointer';
if (bIE) u34.attachEvent("onclick", Clicku34);
else u34.addEventListener("click", Clicku34, true);
function Clicku34(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u35 = document.getElementById('u35');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u6 = document.getElementById('u6');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u8 = document.getElementById('u8');

var u9 = document.getElementById('u9');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u9ann'), "<div id='u9Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u9Note').click(function(e) { ToggleWorkflow(e, 'u9', 300, 150, false); return false; });
var u9Ann = 
{
"label":"Postal Code Entry Button",
"Description":"After a valid postal code is entered, this button will take the user to the Canadian Dumpster selection page."};

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{
windowEvent = e;


if (true) {

	self.location.href="CA_Dumpster_Selection.html" + GetQuerystring();

}

}

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u14ann'), "<div id='u14Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u14Note').click(function(e) { ToggleWorkflow(e, 'u14', 300, 150, false); return false; });
var u14Ann = 
{
"label":"Canadian Language Selector",
"Description":"For the Canadian site, a French\/English language selector is displayed. All content within Canadian Dumpster site will be provided in both languages.<BR><BR>When the selector is toggled to another language, the user will stay on the same page, however, the content will display in the newly selected language. This includes all modal dialog boxes and error messages."};

var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u19 = document.getElementById('u19');

if (window.OnLoad) OnLoad();
