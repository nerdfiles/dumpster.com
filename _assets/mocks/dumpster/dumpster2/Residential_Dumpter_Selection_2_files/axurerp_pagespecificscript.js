
var PageName = 'Residential Dumpter Selection 2';
var PageId = 'b5fd6917d2c6482aa4d92a24b3614f41'
var PageUrl = 'Residential_Dumpter_Selection_2.html'
document.title = 'Residential Dumpter Selection 2';
var PageNotes = 
{
"pageName":"Residential Dumpter Selection 2",
"showNotesNames":"False",
"Page Descriptions":"<p style=\"text-align:left;\"><span style=\"\">Additional functionality is displayed when &quot;Select&quot; is clicked in the dumpster selection page. Schedule delivery, rush option, and pricing are displayed, along with button to proceed to checkout.<\/span><\/p>",
"UC Reference":"<p style=\"text-align:left;\"><span style=\"\">Shopping Experience 001 Product Detail Page<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">Shopping Experience-001 Mini Cart&nbsp; &nbsp;&nbsp; <\/span><\/p><p style=\"text-align:left;\"><span style=\"\">DUMPSTER UC-USERS-001 User Login (3)&nbsp; &nbsp;&nbsp; <\/span><\/p><p style=\"text-align:left;\"><span style=\"\">&nbsp;<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">&nbsp;<\/span><\/p>"}
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

var u270 = document.getElementById('u270');

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u272 = document.getElementById('u272');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u274 = document.getElementById('u274');

var u275 = document.getElementById('u275');

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u277 = document.getElementById('u277');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
var u631 = document.getElementById('u631');

var u632 = document.getElementById('u632');
gv_vAlignTable['u632'] = 'top';
var u633 = document.getElementById('u633');

var u634 = document.getElementById('u634');
gv_vAlignTable['u634'] = 'top';
var u635 = document.getElementById('u635');

var u636 = document.getElementById('u636');
gv_vAlignTable['u636'] = 'top';
var u637 = document.getElementById('u637');

var u638 = document.getElementById('u638');
gv_vAlignTable['u638'] = 'top';
var u639 = document.getElementById('u639');

var u280 = document.getElementById('u280');

var u281 = document.getElementById('u281');

var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u283 = document.getElementById('u283');

var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u285 = document.getElementById('u285');

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u287 = document.getElementById('u287');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u289 = document.getElementById('u289');

var u641 = document.getElementById('u641');

var u642 = document.getElementById('u642');
gv_vAlignTable['u642'] = 'top';
var u643 = document.getElementById('u643');

var u644 = document.getElementById('u644');
gv_vAlignTable['u644'] = 'top';
var u645 = document.getElementById('u645');

var u646 = document.getElementById('u646');
gv_vAlignTable['u646'] = 'top';
var u647 = document.getElementById('u647');

var u648 = document.getElementById('u648');
gv_vAlignTable['u648'] = 'top';
var u490 = document.getElementById('u490');

var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'top';
var u492 = document.getElementById('u492');

var u493 = document.getElementById('u493');
gv_vAlignTable['u493'] = 'top';
var u494 = document.getElementById('u494');

var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'top';
var u496 = document.getElementById('u496');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u102 = document.getElementById('u102');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u104 = document.getElementById('u104');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u106 = document.getElementById('u106');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u108 = document.getElementById('u108');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u297 = document.getElementById('u297');

var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u299 = document.getElementById('u299');

var u651 = document.getElementById('u651');

var u652 = document.getElementById('u652');
gv_vAlignTable['u652'] = 'top';
var u653 = document.getElementById('u653');

var u654 = document.getElementById('u654');
gv_vAlignTable['u654'] = 'top';
var u655 = document.getElementById('u655');

var u500 = document.getElementById('u500');

var u392 = document.getElementById('u392');

var u658 = document.getElementById('u658');
gv_vAlignTable['u658'] = 'top';
var u659 = document.getElementById('u659');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u660 = document.getElementById('u660');
gv_vAlignTable['u660'] = 'top';
var u661 = document.getElementById('u661');

var u662 = document.getElementById('u662');
gv_vAlignTable['u662'] = 'top';
var u663 = document.getElementById('u663');
gv_vAlignTable['u663'] = 'top';
var u664 = document.getElementById('u664');
gv_vAlignTable['u664'] = 'top';
var u665 = document.getElementById('u665');
gv_vAlignTable['u665'] = 'top';
var u510 = document.getElementById('u510');

var u667 = document.getElementById('u667');
gv_vAlignTable['u667'] = 'top';
var u668 = document.getElementById('u668');
gv_vAlignTable['u668'] = 'top';
var u669 = document.getElementById('u669');
gv_vAlignTable['u669'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u33 = document.getElementById('u33');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u33ann'), "<div id='u33Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u33Note').click(function(e) { ToggleWorkflow(e, 'u33', 300, 150, false); return false; });
var u33Ann = 
{
"label":"Proceed to Checkout button",
"Description":"Clicking selects product and takes user to shopping cart."};

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", u33Click);
else u33.addEventListener("click", u33Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u33LinksClick'></DIV>")
var u33LinksClick = document.getElementById('u33LinksClick');
function u33Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u33LinksClick');
}

InsertBeforeEnd(u33LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u33Clicku5382ab9e78bb4dfeba5d1df8f5e1b9a4(event)'>Unacceptable Materials</div>");
function u33Clicku5382ab9e78bb4dfeba5d1df8f5e1b9a4(e)
{

	self.location.href="Overlay_-_Unacceptable_Materials.html" + GetQuerystring();

	ToggleLinks(e, 'u33LinksClick');
}

InsertBeforeEnd(u33LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u33Clicku81cbdb94788142c9801d79ef54b7f5e8(event)'>Cart Full</div>");
function u33Clicku81cbdb94788142c9801d79ef54b7f5e8(e)
{

	self.location.href="Res_Dumpter_Selection_Full_Cart.html" + GetQuerystring();

	ToggleLinks(e, 'u33LinksClick');
}

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u120 = document.getElementById('u120');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u122 = document.getElementById('u122');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u124 = document.getElementById('u124');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u126 = document.getElementById('u126');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u128 = document.getElementById('u128');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u670 = document.getElementById('u670');
gv_vAlignTable['u670'] = 'top';
var u671 = document.getElementById('u671');

var u672 = document.getElementById('u672');
gv_vAlignTable['u672'] = 'center';
var u673 = document.getElementById('u673');

var u674 = document.getElementById('u674');
gv_vAlignTable['u674'] = 'center';
var u675 = document.getElementById('u675');

var u676 = document.getElementById('u676');
gv_vAlignTable['u676'] = 'center';
var u677 = document.getElementById('u677');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u677ann'), "<div id='u677Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u677Note').click(function(e) { ToggleWorkflow(e, 'u677', 300, 150, false); return false; });
var u677Ann = 
{
"label":"Select Date",
"Description":"Selecting a date closes the calendar overlay and displays selected date on Dumpster Selection Page."};

u677.style.cursor = 'pointer';
if (bIE) u677.attachEvent("onclick", Clicku677);
else u677.addEventListener("click", Clicku677, true);
function Clicku677(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u477','hidden','fade',200);

	SetPanelVisibility('u272','','none',500);

}

}

var u678 = document.getElementById('u678');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u678ann'), "<div id='u678Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u678Note').click(function(e) { ToggleWorkflow(e, 'u678', 300, 150, false); return false; });
var u678Ann = 
{
"label":"Close Button",
"Description":"Closes calendar overlay"};

u678.style.cursor = 'pointer';
if (bIE) u678.attachEvent("onclick", Clicku678);
else u678.addEventListener("click", Clicku678, true);
function Clicku678(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u477','hidden','fade',200);

}

}

var u679 = document.getElementById('u679');
gv_vAlignTable['u679'] = 'top';
var u130 = document.getElementById('u130');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u132 = document.getElementById('u132');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u134 = document.getElementById('u134');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u136 = document.getElementById('u136');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u138 = document.getElementById('u138');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u140 = document.getElementById('u140');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u144 = document.getElementById('u144');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u146 = document.getElementById('u146');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u148 = document.getElementById('u148');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u501 = document.getElementById('u501');
gv_vAlignTable['u501'] = 'top';
var u502 = document.getElementById('u502');

var u503 = document.getElementById('u503');
gv_vAlignTable['u503'] = 'top';
var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u12 = document.getElementById('u12');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u12ann'), "<div id='u12Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u12Note').click(function(e) { ToggleWorkflow(e, 'u12', 300, 150, false); return false; });
var u12Ann = 
{
"label":"Calendar pop up button",
"Description":"Opens calendar function."};

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u274','','none',500);

	SetPanelVisibility('u477','hidden','fade',200);

}

}

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u15ann'), "<div id='u15Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u15Note').click(function(e) { ToggleWorkflow(e, 'u15', 300, 150, false); return false; });
var u15Ann = 
{
"label":"Calendar pop up button",
"Description":"Opens calendar function."};

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u477','','none',500);

}

}

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u150 = document.getElementById('u150');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u152 = document.getElementById('u152');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u154 = document.getElementById('u154');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u156 = document.getElementById('u156');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u158 = document.getElementById('u158');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u511 = document.getElementById('u511');
gv_vAlignTable['u511'] = 'top';
var u512 = document.getElementById('u512');

var u513 = document.getElementById('u513');
gv_vAlignTable['u513'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u23ann'), "<div id='u23Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u23Note').click(function(e) { ToggleWorkflow(e, 'u23', 300, 150, false); return false; });
var u23Ann = 
{
"label":"Update Zip\/Postal Code",
"Description":"Opens zip\/postal change overlay"};

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", u23Click);
else u23.addEventListener("click", u23Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u23LinksClick'></DIV>")
var u23LinksClick = document.getElementById('u23LinksClick');
function u23Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u23LinksClick');
}

InsertBeforeEnd(u23LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u23Clicku0eb3f661ae6f4bc39419fd04dd4bb655(event)'>Zip US to CA</div>");
function u23Clicku0eb3f661ae6f4bc39419fd04dd4bb655(e)
{

	self.location.href="Overlay_-_Switch_to_CA_from_US.html" + GetQuerystring();

	ToggleLinks(e, 'u23LinksClick');
}

InsertBeforeEnd(u23LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u23Clicku8e7a07591e8a4796a945140bb9c6dbd8(event)'>Zip US to US</div>");
function u23Clicku8e7a07591e8a4796a945140bb9c6dbd8(e)
{

	self.location.href="Overlay_-_Switch_to_another_US_zip.html" + GetQuerystring();

	ToggleLinks(e, 'u23LinksClick');
}

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u160 = document.getElementById('u160');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u162 = document.getElementById('u162');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u164 = document.getElementById('u164');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u166 = document.getElementById('u166');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u168 = document.getElementById('u168');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u521 = document.getElementById('u521');
gv_vAlignTable['u521'] = 'top';
var u522 = document.getElementById('u522');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u207 = document.getElementById('u207');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u209 = document.getElementById('u209');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u170 = document.getElementById('u170');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u172 = document.getElementById('u172');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u172ann'), "<div id='u172Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u172Note').click(function(e) { ToggleWorkflow(e, 'u172', 300, 150, false); return false; });
var u172Ann = 
{
"label":"Select Dumpster button",
"Description":"Button will expand selection to display &quot;Schedule Your Delivery&quot; section. "};

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u179 = document.getElementById('u179');

var u531 = document.getElementById('u531');
gv_vAlignTable['u531'] = 'top';
var u532 = document.getElementById('u532');

var u533 = document.getElementById('u533');
gv_vAlignTable['u533'] = 'top';
var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u45 = document.getElementById('u45');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u49 = document.getElementById('u49');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u181 = document.getElementById('u181');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u183 = document.getElementById('u183');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u183ann'), "<div id='u183Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u183Note').click(function(e) { ToggleWorkflow(e, 'u183', 300, 150, false); return false; });
var u183Ann = 
{
"label":"Select Dumpster button",
"Description":"Button will expand selection to display &quot;Schedule Your Delivery&quot; section. "};

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u541 = document.getElementById('u541');
gv_vAlignTable['u541'] = 'top';
var u542 = document.getElementById('u542');

var u543 = document.getElementById('u543');
gv_vAlignTable['u543'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u51 = document.getElementById('u51');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u53 = document.getElementById('u53');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u55 = document.getElementById('u55');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u59 = document.getElementById('u59');

var u190 = document.getElementById('u190');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u192 = document.getElementById('u192');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u196 = document.getElementById('u196');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u551 = document.getElementById('u551');
gv_vAlignTable['u551'] = 'top';
var u552 = document.getElementById('u552');

var u553 = document.getElementById('u553');
gv_vAlignTable['u553'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u69 = document.getElementById('u69');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u69ann'), "<div id='u69Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u69Note').click(function(e) { ToggleWorkflow(e, 'u69', 300, 150, false); return false; });
var u69Ann = 
{
"label":"Container details link",
"Description":"Link opens the Container Details overlay (modal)"};
gv_vAlignTable['u69'] = 'top';
var u560 = document.getElementById('u560');

var u561 = document.getElementById('u561');
gv_vAlignTable['u561'] = 'top';
var u562 = document.getElementById('u562');

var u563 = document.getElementById('u563');
gv_vAlignTable['u563'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u71 = document.getElementById('u71');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u73 = document.getElementById('u73');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u75 = document.getElementById('u75');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u77 = document.getElementById('u77');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u570 = document.getElementById('u570');
gv_vAlignTable['u570'] = 'top';
var u571 = document.getElementById('u571');
gv_vAlignTable['u571'] = 'top';
var u572 = document.getElementById('u572');
gv_vAlignTable['u572'] = 'top';
var u573 = document.getElementById('u573');
gv_vAlignTable['u573'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u83 = document.getElementById('u83');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u88 = document.getElementById('u88');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u580 = document.getElementById('u580');
gv_vAlignTable['u580'] = 'top';
var u581 = document.getElementById('u581');

var u582 = document.getElementById('u582');
gv_vAlignTable['u582'] = 'top';
var u583 = document.getElementById('u583');

var u90 = document.getElementById('u90');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u92 = document.getElementById('u92');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u97 = document.getElementById('u97');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u400 = document.getElementById('u400');

var u401 = document.getElementById('u401');
gv_vAlignTable['u401'] = 'top';
var u402 = document.getElementById('u402');

var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'top';
var u404 = document.getElementById('u404');

var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'top';
var u406 = document.getElementById('u406');

var u407 = document.getElementById('u407');
gv_vAlignTable['u407'] = 'top';
var u408 = document.getElementById('u408');

var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'top';
var u597 = document.getElementById('u597');

var u598 = document.getElementById('u598');
gv_vAlignTable['u598'] = 'top';
var u599 = document.getElementById('u599');

var u410 = document.getElementById('u410');

var u411 = document.getElementById('u411');
gv_vAlignTable['u411'] = 'top';
var u412 = document.getElementById('u412');

var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'top';
var u414 = document.getElementById('u414');

var u415 = document.getElementById('u415');
gv_vAlignTable['u415'] = 'top';
var u416 = document.getElementById('u416');

var u417 = document.getElementById('u417');
gv_vAlignTable['u417'] = 'top';
var u418 = document.getElementById('u418');

var u419 = document.getElementById('u419');
gv_vAlignTable['u419'] = 'top';
var u620 = document.getElementById('u620');
gv_vAlignTable['u620'] = 'top';
var u420 = document.getElementById('u420');

var u421 = document.getElementById('u421');
gv_vAlignTable['u421'] = 'top';
var u422 = document.getElementById('u422');

var u423 = document.getElementById('u423');
gv_vAlignTable['u423'] = 'top';
var u424 = document.getElementById('u424');

var u425 = document.getElementById('u425');
gv_vAlignTable['u425'] = 'top';
var u426 = document.getElementById('u426');

var u427 = document.getElementById('u427');
gv_vAlignTable['u427'] = 'top';
var u428 = document.getElementById('u428');

var u429 = document.getElementById('u429');
gv_vAlignTable['u429'] = 'top';
var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'top';
var u291 = document.getElementById('u291');

var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u293 = document.getElementById('u293');

var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u295 = document.getElementById('u295');

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'top';
var u430 = document.getElementById('u430');

var u431 = document.getElementById('u431');
gv_vAlignTable['u431'] = 'top';
var u432 = document.getElementById('u432');

var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'top';
var u434 = document.getElementById('u434');

var u435 = document.getElementById('u435');
gv_vAlignTable['u435'] = 'top';
var u436 = document.getElementById('u436');

var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'top';
var u438 = document.getElementById('u438');

var u439 = document.getElementById('u439');
gv_vAlignTable['u439'] = 'top';
var u440 = document.getElementById('u440');

var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'top';
var u442 = document.getElementById('u442');

var u443 = document.getElementById('u443');
gv_vAlignTable['u443'] = 'top';
var u444 = document.getElementById('u444');

var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'top';
var u446 = document.getElementById('u446');

var u447 = document.getElementById('u447');
gv_vAlignTable['u447'] = 'top';
var u448 = document.getElementById('u448');

var u449 = document.getElementById('u449');
gv_vAlignTable['u449'] = 'top';
var u630 = document.getElementById('u630');
gv_vAlignTable['u630'] = 'top';
var u450 = document.getElementById('u450');

var u451 = document.getElementById('u451');
gv_vAlignTable['u451'] = 'top';
var u452 = document.getElementById('u452');

var u453 = document.getElementById('u453');
gv_vAlignTable['u453'] = 'top';
var u454 = document.getElementById('u454');

var u455 = document.getElementById('u455');
gv_vAlignTable['u455'] = 'top';
var u456 = document.getElementById('u456');

var u457 = document.getElementById('u457');
gv_vAlignTable['u457'] = 'top';
var u458 = document.getElementById('u458');

var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'top';
var u640 = document.getElementById('u640');
gv_vAlignTable['u640'] = 'top';
var u649 = document.getElementById('u649');

var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'top';
var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'top';
var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'top';
var u463 = document.getElementById('u463');
gv_vAlignTable['u463'] = 'top';
var u464 = document.getElementById('u464');
gv_vAlignTable['u464'] = 'top';
var u465 = document.getElementById('u465');
gv_vAlignTable['u465'] = 'top';
var u466 = document.getElementById('u466');
gv_vAlignTable['u466'] = 'top';
var u467 = document.getElementById('u467');
gv_vAlignTable['u467'] = 'top';
var u468 = document.getElementById('u468');

var u469 = document.getElementById('u469');
gv_vAlignTable['u469'] = 'center';
var u650 = document.getElementById('u650');
gv_vAlignTable['u650'] = 'top';
var u656 = document.getElementById('u656');
gv_vAlignTable['u656'] = 'top';
var u657 = document.getElementById('u657');

var u470 = document.getElementById('u470');

var u471 = document.getElementById('u471');
gv_vAlignTable['u471'] = 'center';
var u472 = document.getElementById('u472');

var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'center';
var u474 = document.getElementById('u474');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u474ann'), "<div id='u474Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u474Note').click(function(e) { ToggleWorkflow(e, 'u474', 300, 150, false); return false; });
var u474Ann = 
{
"label":"Select Date",
"Description":"Selecting a date closes the calendar overlay and displays selected date on Dumpster Selection Page."};

u474.style.cursor = 'pointer';
if (bIE) u474.attachEvent("onclick", Clicku474);
else u474.addEventListener("click", Clicku474, true);
function Clicku474(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u274','hidden','fade',200);

	SetPanelVisibility('u270','','none',500);

}

}

var u475 = document.getElementById('u475');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u475ann'), "<div id='u475Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u475Note').click(function(e) { ToggleWorkflow(e, 'u475', 300, 150, false); return false; });
var u475Ann = 
{
"label":"Close Button",
"Description":"Closes calendar overlay"};

u475.style.cursor = 'pointer';
if (bIE) u475.attachEvent("onclick", Clicku475);
else u475.addEventListener("click", Clicku475, true);
function Clicku475(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u274','hidden','fade',200);

}

}

var u476 = document.getElementById('u476');
gv_vAlignTable['u476'] = 'top';
var u477 = document.getElementById('u477');

var u478 = document.getElementById('u478');

var u479 = document.getElementById('u479');
gv_vAlignTable['u479'] = 'center';
var u666 = document.getElementById('u666');
gv_vAlignTable['u666'] = 'top';
var u480 = document.getElementById('u480');

var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'center';
var u482 = document.getElementById('u482');
gv_vAlignTable['u482'] = 'top';
var u483 = document.getElementById('u483');

var u484 = document.getElementById('u484');

var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'top';
var u486 = document.getElementById('u486');

var u487 = document.getElementById('u487');
gv_vAlignTable['u487'] = 'top';
var u488 = document.getElementById('u488');

var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'top';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'top';
var u301 = document.getElementById('u301');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'top';
var u303 = document.getElementById('u303');

var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u305 = document.getElementById('u305');

var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u307 = document.getElementById('u307');

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'top';
var u309 = document.getElementById('u309');

var u497 = document.getElementById('u497');
gv_vAlignTable['u497'] = 'top';
var u498 = document.getElementById('u498');

var u499 = document.getElementById('u499');
gv_vAlignTable['u499'] = 'top';
var u504 = document.getElementById('u504');

var u505 = document.getElementById('u505');
gv_vAlignTable['u505'] = 'top';
var u506 = document.getElementById('u506');

var u507 = document.getElementById('u507');
gv_vAlignTable['u507'] = 'top';
var u508 = document.getElementById('u508');

var u509 = document.getElementById('u509');
gv_vAlignTable['u509'] = 'top';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'top';
var u311 = document.getElementById('u311');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'top';
var u313 = document.getElementById('u313');

var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'top';
var u315 = document.getElementById('u315');

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'top';
var u317 = document.getElementById('u317');

var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'top';
var u319 = document.getElementById('u319');

var u514 = document.getElementById('u514');

var u515 = document.getElementById('u515');
gv_vAlignTable['u515'] = 'top';
var u516 = document.getElementById('u516');

var u517 = document.getElementById('u517');
gv_vAlignTable['u517'] = 'top';
var u518 = document.getElementById('u518');

var u519 = document.getElementById('u519');
gv_vAlignTable['u519'] = 'top';
var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'top';
var u321 = document.getElementById('u321');

var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'top';
var u323 = document.getElementById('u323');

var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'top';
var u325 = document.getElementById('u325');

var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'top';
var u327 = document.getElementById('u327');

var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
var u329 = document.getElementById('u329');

var u520 = document.getElementById('u520');

var u523 = document.getElementById('u523');
gv_vAlignTable['u523'] = 'top';
var u524 = document.getElementById('u524');

var u525 = document.getElementById('u525');
gv_vAlignTable['u525'] = 'top';
var u526 = document.getElementById('u526');

var u527 = document.getElementById('u527');
gv_vAlignTable['u527'] = 'top';
var u528 = document.getElementById('u528');

var u529 = document.getElementById('u529');
gv_vAlignTable['u529'] = 'top';
var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'top';
var u331 = document.getElementById('u331');

var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'top';
var u333 = document.getElementById('u333');

var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'top';
var u335 = document.getElementById('u335');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'top';
var u337 = document.getElementById('u337');

var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'top';
var u339 = document.getElementById('u339');

var u530 = document.getElementById('u530');

var u534 = document.getElementById('u534');

var u535 = document.getElementById('u535');
gv_vAlignTable['u535'] = 'top';
var u536 = document.getElementById('u536');

var u537 = document.getElementById('u537');
gv_vAlignTable['u537'] = 'top';
var u538 = document.getElementById('u538');

var u539 = document.getElementById('u539');
gv_vAlignTable['u539'] = 'top';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'top';
var u341 = document.getElementById('u341');

var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'top';
var u343 = document.getElementById('u343');

var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u345 = document.getElementById('u345');

var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'top';
var u347 = document.getElementById('u347');

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'top';
var u349 = document.getElementById('u349');

var u540 = document.getElementById('u540');

var u544 = document.getElementById('u544');

var u545 = document.getElementById('u545');
gv_vAlignTable['u545'] = 'top';
var u546 = document.getElementById('u546');

var u547 = document.getElementById('u547');
gv_vAlignTable['u547'] = 'top';
var u548 = document.getElementById('u548');

var u549 = document.getElementById('u549');
gv_vAlignTable['u549'] = 'top';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'top';
var u351 = document.getElementById('u351');

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'top';
var u353 = document.getElementById('u353');

var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'top';
var u355 = document.getElementById('u355');

var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'top';
var u357 = document.getElementById('u357');

var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'top';
var u359 = document.getElementById('u359');

var u550 = document.getElementById('u550');

var u554 = document.getElementById('u554');

var u555 = document.getElementById('u555');
gv_vAlignTable['u555'] = 'top';
var u556 = document.getElementById('u556');

var u557 = document.getElementById('u557');
gv_vAlignTable['u557'] = 'top';
var u558 = document.getElementById('u558');

var u559 = document.getElementById('u559');
gv_vAlignTable['u559'] = 'top';
var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'top';
var u361 = document.getElementById('u361');

var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'top';
var u363 = document.getElementById('u363');

var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'top';
var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'top';
var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'top';
var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'top';
var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'top';
var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'top';
var u564 = document.getElementById('u564');

var u565 = document.getElementById('u565');
gv_vAlignTable['u565'] = 'top';
var u566 = document.getElementById('u566');

var u567 = document.getElementById('u567');
gv_vAlignTable['u567'] = 'top';
var u568 = document.getElementById('u568');
gv_vAlignTable['u568'] = 'top';
var u569 = document.getElementById('u569');
gv_vAlignTable['u569'] = 'top';
var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'top';
var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'top';
var u372 = document.getElementById('u372');

var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'center';
var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'top';
var u375 = document.getElementById('u375');

var u376 = document.getElementById('u376');

var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'top';
var u378 = document.getElementById('u378');

var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'top';
var u574 = document.getElementById('u574');
gv_vAlignTable['u574'] = 'top';
var u575 = document.getElementById('u575');

var u576 = document.getElementById('u576');
gv_vAlignTable['u576'] = 'center';
var u577 = document.getElementById('u577');
gv_vAlignTable['u577'] = 'top';
var u578 = document.getElementById('u578');

var u579 = document.getElementById('u579');

var u380 = document.getElementById('u380');

var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'top';
var u382 = document.getElementById('u382');

var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'top';
var u384 = document.getElementById('u384');

var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'top';
var u386 = document.getElementById('u386');

var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'top';
var u388 = document.getElementById('u388');

var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'top';
var u584 = document.getElementById('u584');
gv_vAlignTable['u584'] = 'top';
var u585 = document.getElementById('u585');

var u586 = document.getElementById('u586');
gv_vAlignTable['u586'] = 'top';
var u587 = document.getElementById('u587');

var u588 = document.getElementById('u588');
gv_vAlignTable['u588'] = 'top';
var u589 = document.getElementById('u589');

var u200 = document.getElementById('u200');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u200ann'), "<div id='u200Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u200Note').click(function(e) { ToggleWorkflow(e, 'u200', 300, 150, false); return false; });
var u200Ann = 
{
"label":"Container details link",
"Description":"Link opens the Container Details overlay (modal)"};
gv_vAlignTable['u200'] = 'top';
var u201 = document.getElementById('u201');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u201ann'), "<div id='u201Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u201Note').click(function(e) { ToggleWorkflow(e, 'u201', 300, 150, false); return false; });
var u201Ann = 
{
"label":"Container details link",
"Description":"Link opens the Container Details overlay (modal)"};
gv_vAlignTable['u201'] = 'top';
var u202 = document.getElementById('u202');

var u390 = document.getElementById('u390');

var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'top';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'top';
var u394 = document.getElementById('u394');

var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'top';
var u396 = document.getElementById('u396');

var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'top';
var u398 = document.getElementById('u398');

var u399 = document.getElementById('u399');
gv_vAlignTable['u399'] = 'top';
var u590 = document.getElementById('u590');
gv_vAlignTable['u590'] = 'top';
var u591 = document.getElementById('u591');

var u592 = document.getElementById('u592');
gv_vAlignTable['u592'] = 'top';
var u593 = document.getElementById('u593');

var u594 = document.getElementById('u594');
gv_vAlignTable['u594'] = 'top';
var u595 = document.getElementById('u595');

var u596 = document.getElementById('u596');
gv_vAlignTable['u596'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u214 = document.getElementById('u214');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u218 = document.getElementById('u218');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u221 = document.getElementById('u221');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u223 = document.getElementById('u223');

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'center';
var u225 = document.getElementById('u225');

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u227 = document.getElementById('u227');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u600 = document.getElementById('u600');
gv_vAlignTable['u600'] = 'top';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u236 = document.getElementById('u236');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u238 = document.getElementById('u238');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u610 = document.getElementById('u610');
gv_vAlignTable['u610'] = 'top';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u241 = document.getElementById('u241');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u248 = document.getElementById('u248');

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u601 = document.getElementById('u601');

var u602 = document.getElementById('u602');
gv_vAlignTable['u602'] = 'top';
var u603 = document.getElementById('u603');

var u604 = document.getElementById('u604');
gv_vAlignTable['u604'] = 'top';
var u605 = document.getElementById('u605');

var u606 = document.getElementById('u606');
gv_vAlignTable['u606'] = 'top';
var u607 = document.getElementById('u607');

var u608 = document.getElementById('u608');
gv_vAlignTable['u608'] = 'top';
var u609 = document.getElementById('u609');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u252 = document.getElementById('u252');

var u253 = document.getElementById('u253');

var u254 = document.getElementById('u254');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u254ann'), "<div id='u254Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u254Note').click(function(e) { ToggleWorkflow(e, 'u254', 300, 150, false); return false; });
var u254Ann = 
{
"label":"Rush charge onHover box.",
"Description":"Overlay appears on hover, but is closed using the close widget in the upper right corner."};

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u257 = document.getElementById('u257');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u257ann'), "<div id='u257Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u257Note').click(function(e) { ToggleWorkflow(e, 'u257', 300, 150, false); return false; });
var u257Ann = 
{
"label":"Close widget",
"Description":"Closes overlay."};

u257.style.cursor = 'pointer';
if (bIE) u257.attachEvent("onclick", Clicku257);
else u257.addEventListener("click", Clicku257, true);
function Clicku257(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u253','hidden','none',500);

}

}

var u258 = document.getElementById('u258');

if (bIE) u258.attachEvent("onmouseover", MouseOveru258);
else u258.addEventListener("mouseover", MouseOveru258, true);
function MouseOveru258(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u258',e)) return;
if (true) {

	SetPanelVisibility('u253','','none',500);

}

}

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u611 = document.getElementById('u611');

var u612 = document.getElementById('u612');
gv_vAlignTable['u612'] = 'top';
var u613 = document.getElementById('u613');

var u614 = document.getElementById('u614');
gv_vAlignTable['u614'] = 'top';
var u615 = document.getElementById('u615');

var u616 = document.getElementById('u616');
gv_vAlignTable['u616'] = 'top';
var u617 = document.getElementById('u617');

var u618 = document.getElementById('u618');
gv_vAlignTable['u618'] = 'top';
var u619 = document.getElementById('u619');

var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u5 = document.getElementById('u5');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u7 = document.getElementById('u7');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u260 = document.getElementById('u260');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u260ann'), "<div id='u260Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u260Note').click(function(e) { ToggleWorkflow(e, 'u260', 300, 150, false); return false; });
var u260Ann = 
{
"label":"Bagster Site Button",
"Description":"Takes User to Bagster Website"};

u260.style.cursor = 'pointer';
if (bIE) u260.attachEvent("onclick", Clicku260);
else u260.addEventListener("click", Clicku260, true);
function Clicku260(e)
{
windowEvent = e;


if (true) {

	self.location.href="Bagster_Page.html" + GetQuerystring();

}

}

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u262 = document.getElementById('u262');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u264 = document.getElementById('u264');

var u265 = document.getElementById('u265');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u265ann'), "<div id='u265Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u265Note').click(function(e) { ToggleWorkflow(e, 'u265', 300, 150, false); return false; });
var u265Ann = 
{
"label":"Mini Shopping Cart",
"Description":"Indicates items currently in cart.<BR>Only displayed when there is one or more items in cart.<BR>Clicking takes user to shopping cart."};

u265.style.cursor = 'pointer';
if (bIE) u265.attachEvent("onclick", Clicku265);
else u265.addEventListener("click", Clicku265, true);
function Clicku265(e)
{
windowEvent = e;


if (true) {

	self.location.href="Residential_Cart.html" + GetQuerystring();

}

}

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u268 = document.getElementById('u268');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u268ann'), "<div id='u268Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u268Note').click(function(e) { ToggleWorkflow(e, 'u268', 300, 150, false); return false; });
var u268Ann = 
{
"label":"Link to Selection Guide Overlay",
"Description":"Clicking on link opens the Selection Guide overlay."};

u268.style.cursor = 'pointer';
if (bIE) u268.attachEvent("onclick", Clicku268);
else u268.addEventListener("click", Clicku268, true);
function Clicku268(e)
{
windowEvent = e;


if (true) {

	self.location.href="Overlay_-_Selection_Guide.html" + GetQuerystring();

}

}
gv_vAlignTable['u268'] = 'top';
var u269 = document.getElementById('u269');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u269ann'), "<div id='u269Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u269Note').click(function(e) { ToggleWorkflow(e, 'u269', 300, 150, false); return false; });
var u269Ann = 
{
"label":"Link to Dumpster FAQs",
"Description":"Takes user to Dumpster FAQs page."};

u269.style.cursor = 'pointer';
if (bIE) u269.attachEvent("onclick", Clicku269);
else u269.addEventListener("click", Clicku269, true);
function Clicku269(e)
{
windowEvent = e;


if (true) {

	self.location.href="FAQs.html" + GetQuerystring();

}

}
gv_vAlignTable['u269'] = 'top';
var u621 = document.getElementById('u621');

var u622 = document.getElementById('u622');
gv_vAlignTable['u622'] = 'top';
var u623 = document.getElementById('u623');

var u624 = document.getElementById('u624');
gv_vAlignTable['u624'] = 'top';
var u625 = document.getElementById('u625');

var u626 = document.getElementById('u626');
gv_vAlignTable['u626'] = 'top';
var u627 = document.getElementById('u627');

var u628 = document.getElementById('u628');
gv_vAlignTable['u628'] = 'top';
var u629 = document.getElementById('u629');

if (window.OnLoad) OnLoad();
