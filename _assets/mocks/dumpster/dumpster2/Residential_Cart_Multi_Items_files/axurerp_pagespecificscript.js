
var PageName = 'Residential Cart Multi Items';
var PageId = 'd97534f480634e64894efbe711ed2e0b'
var PageUrl = 'Residential_Cart_Multi_Items.html'
document.title = 'Residential Cart Multi Items';
var PageNotes = 
{
"pageName":"Residential Cart Multi Items",
"showNotesNames":"False",
"Page Descriptions":"<p style=\"text-align:left;\"><span style=\"\">This page is displayed when the &quot;Select and Proceed to Checkout&quot; has been clicked, and the &quot;Unacceptable Materials&quot; terms have been agreed to by the user.<\/span><\/p>",
"UC Reference":"<p style=\"text-align:left;\"><span style=\"\">Shopping Experience-001 Shopping Cart&nbsp; &nbsp;&nbsp; <\/span><\/p><p style=\"text-align:left;\"><span style=\"\">UC-Shopping Experience-001 Add to Cart&nbsp; &nbsp;&nbsp; <\/span><\/p><p style=\"text-align:left;\"><span style=\"\">&nbsp;<\/span><\/p>"}
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

if (true) {

}

}

var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u82 = document.getElementById('u82');

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
gv_vAlignTable['u88'] = 'top';
var u89 = document.getElementById('u89');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u19ann'), "<div id='u19Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u19Note').click(function(e) { ToggleWorkflow(e, 'u19', 300, 150, false); return false; });
var u19Ann = 
{
"label":"Calendar overlay",
"Description":"Displays calendar with changeable dates."};

u19.style.cursor = 'pointer';
if (bIE) u19.attachEvent("onclick", Clicku19);
else u19.addEventListener("click", Clicku19, true);
function Clicku19(e)
{
windowEvent = e;


if (true) {

}

}

var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u22ann'), "<div id='u22Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u22Note').click(function(e) { ToggleWorkflow(e, 'u22', 300, 150, false); return false; });
var u22Ann = 
{
"label":"Calendar overlay",
"Description":"Displays calendar with changeable dates."};

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{
windowEvent = e;


if (true) {

}

}

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u100 = document.getElementById('u100');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u102 = document.getElementById('u102');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u104 = document.getElementById('u104');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u107 = document.getElementById('u107');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u127 = document.getElementById('u127');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u127ann'), "<div id='u127Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u127Note').click(function(e) { ToggleWorkflow(e, 'u127', 300, 150, false); return false; });
var u127Ann = 
{
"label":"Code entry button",
"Description":"Submits the entered code."};

u127.style.cursor = 'pointer';
if (bIE) u127.attachEvent("onclick", Clicku127);
else u127.addEventListener("click", Clicku127, true);
function Clicku127(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u125', 'pd1u125','none','','500','none','','500');

	SetPanelState('u110', 'pd1u110','none','','500','none','','500');

}

}

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u129 = document.getElementById('u129');

var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u35 = document.getElementById('u35');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u94 = document.getElementById('u94');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u94ann'), "<div id='u94Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u94Note').click(function(e) { ToggleWorkflow(e, 'u94', 300, 150, false); return false; });
var u94Ann = 
{
"label":"More Info link",
"Description":"Hover displays rush charge overlay."};

if (bIE) u94.attachEvent("onmouseover", MouseOveru94);
else u94.addEventListener("mouseover", MouseOveru94, true);
function MouseOveru94(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u94',e)) return;
if (true) {

	SetPanelVisibility('u95','','none',500);

}

}

var u95 = document.getElementById('u95');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u95ann'), "<div id='u95Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u95Note').click(function(e) { ToggleWorkflow(e, 'u95', 300, 150, false); return false; });
var u95Ann = 
{
"label":"Rush Charge More Info Layer",
"Description":"Displays Information about Next Day Rush charge."};

var u96 = document.getElementById('u96');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u95','hidden','none',500);

}

}

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u119 = document.getElementById('u119');

var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u49 = document.getElementById('u49');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u49ann'), "<div id='u49Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u49Note').click(function(e) { ToggleWorkflow(e, 'u49', 300, 150, false); return false; });
var u49Ann = 
{
"label":"Proceed to Checkout Button",
"Description":"Takes user to Delivery Information page."};

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", u49Click);
else u49.addEventListener("click", u49Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u49LinksClick'></DIV>")
var u49LinksClick = document.getElementById('u49LinksClick');
function u49Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u49LinksClick');
}

InsertBeforeEnd(u49LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u49Clicku1c8c080a1c684a80bae176165602f595(event)'>Delivery Info - Not Logged In</div>");
function u49Clicku1c8c080a1c684a80bae176165602f595(e)
{

	self.location.href="Delivery_Info_Not_Logged_In.html" + GetQuerystring();

	ToggleLinks(e, 'u49LinksClick');
}

InsertBeforeEnd(u49LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u49Clicku5cd858fd4d0945659bc0a42bc1e5f2d0(event)'>Delivery Info - Logged In</div>");
function u49Clicku5cd858fd4d0945659bc0a42bc1e5f2d0(e)
{

	self.location.href="Delivery_Info.html" + GetQuerystring();

	ToggleLinks(e, 'u49LinksClick');
}

InsertBeforeEnd(u49LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u49Clicku15e82f90b8134415b0868fbc073e90f9(event)'>Delivery Info - Multiple Items</div>");
function u49Clicku15e82f90b8134415b0868fbc073e90f9(e)
{

	self.location.href="Delivery_Info_Multiple_Dumpsters.html" + GetQuerystring();

	ToggleLinks(e, 'u49LinksClick');
}

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u125 = document.getElementById('u125');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u125ann'), "<div id='u125Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u125Note').click(function(e) { ToggleWorkflow(e, 'u125', 300, 150, false); return false; });
var u125Ann = 
{
"label":"Promo Code function",
"Description":"Provides user the opportunity to enter a promo code provided by WM."};

var u126 = document.getElementById('u126');

var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u5 = document.getElementById('u5');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u7 = document.getElementById('u7');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u9 = document.getElementById('u9');

var u50 = document.getElementById('u50');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u50ann'), "<div id='u50Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u50Note').click(function(e) { ToggleWorkflow(e, 'u50', 300, 150, false); return false; });
var u50Ann = 
{
"label":"Add Dumpster Link",
"Description":"Takes user to Dumpster Selection Page"};

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{
windowEvent = e;


if (true) {

	self.location.href="Residential_Dumpster_Selection.html" + GetQuerystring();

}

}
gv_vAlignTable['u50'] = 'top';
var u51 = document.getElementById('u51');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u58ann'), "<div id='u58Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u58Note').click(function(e) { ToggleWorkflow(e, 'u58', 300, 150, false); return false; });
var u58Ann = 
{
"label":"More Info link",
"Description":"Hover displays rush charge overlay."};

if (bIE) u58.attachEvent("onmouseover", MouseOveru58);
else u58.addEventListener("mouseover", MouseOveru58, true);
function MouseOveru58(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u58',e)) return;
if (true) {

	SetPanelVisibility('u95','','fade',500);

}

}

var u59 = document.getElementById('u59');

var u130 = document.getElementById('u130');

if (bIE) u130.attachEvent("onmouseover", MouseOveru130);
else u130.addEventListener("mouseover", MouseOveru130, true);
function MouseOveru130(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u130',e)) return;
if (true) {

	SetPanelVisibility('u134','','fade',500);

}

}
gv_vAlignTable['u130'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u132 = document.getElementById('u132');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u134 = document.getElementById('u134');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u134ann'), "<div id='u134Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u134Note').click(function(e) { ToggleWorkflow(e, 'u134', 300, 150, false); return false; });
var u134Ann = 
{
"label":"Promo Code More Info hover box",
"Description":"Displays additional information about promo codes."};

var u135 = document.getElementById('u135');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u138 = document.getElementById('u138');

u138.style.cursor = 'pointer';
if (bIE) u138.attachEvent("onclick", Clicku138);
else u138.addEventListener("click", Clicku138, true);
function Clicku138(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u134','hidden','none',500);

}

}

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u60 = document.getElementById('u60');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u66ann'), "<div id='u66Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u66Note').click(function(e) { ToggleWorkflow(e, 'u66', 300, 150, false); return false; });
var u66Ann = 
{
"label":"Calendar overlay",
"Description":"Displays calendar with changeable dates."};

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{
windowEvent = e;


if (true) {

}

}

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
"label":"Calendar overlay",
"Description":"Displays calendar with changeable dates."};

u69.style.cursor = 'pointer';
if (bIE) u69.attachEvent("onclick", Clicku69);
else u69.addEventListener("click", Clicku69, true);
function Clicku69(e)
{
windowEvent = e;


if (true) {

}

}

var u140 = document.getElementById('u140');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u140ann'), "<div id='u140Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u140Note').click(function(e) { ToggleWorkflow(e, 'u140', 300, 150, false); return false; });
var u140Ann = 
{
"label":"Clear function",
"Description":"Clears the entered promo code."};

u140.style.cursor = 'pointer';
if (bIE) u140.attachEvent("onclick", Clicku140);
else u140.addEventListener("click", Clicku140, true);
function Clicku140(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u125', 'pd0u125','none','','500','none','','500');

	SetPanelState('u110', 'pd0u110','none','','500','fade','','200');

}

}
gv_vAlignTable['u140'] = 'top';
var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u142ann'), "<div id='u142Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u142Note').click(function(e) { ToggleWorkflow(e, 'u142', 300, 150, false); return false; });
var u142Ann = 
{
"label":"Code entry button",
"Description":"Submits the entered code."};

u142.style.cursor = 'pointer';
if (bIE) u142.attachEvent("onclick", u142Click);
else u142.addEventListener("click", u142Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u142LinksClick'></DIV>")
var u142LinksClick = document.getElementById('u142LinksClick');
function u142Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u142LinksClick');
}

InsertBeforeEnd(u142LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u142Clickub23439227bcb4cc9b19a3f500d10e5d3(event)'>Enter Promo Code</div>");
function u142Clickub23439227bcb4cc9b19a3f500d10e5d3(e)
{

	SetPanelState('u125', 'pd1u125','none','','500','none','','500');

	SetPanelState('u110', 'pd1u110','none','','500','fade','','200');

	ToggleLinks(e, 'u142LinksClick');
}

InsertBeforeEnd(u142LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u142Clickufee6f56ba4554f48a7bf3c3ac7b420da(event)'>Invalid Promo Code</div>");
function u142Clickufee6f56ba4554f48a7bf3c3ac7b420da(e)
{

	SetPanelState('u125', 'pd2u125','none','','500','none','','500');

	ToggleLinks(e, 'u142LinksClick');
}

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u144 = document.getElementById('u144');

var u145 = document.getElementById('u145');

if (bIE) u145.attachEvent("onmouseover", MouseOveru145);
else u145.addEventListener("mouseover", MouseOveru145, true);
function MouseOveru145(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u145',e)) return;
if (true) {

	SetPanelVisibility('u146','','fade',500);

}

}
gv_vAlignTable['u145'] = 'top';
var u146 = document.getElementById('u146');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u146ann'), "<div id='u146Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u146Note').click(function(e) { ToggleWorkflow(e, 'u146', 300, 150, false); return false; });
var u146Ann = 
{
"label":"Promo Code More Info hover box",
"Description":"Displays additional information about promo codes."};

var u147 = document.getElementById('u147');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u150 = document.getElementById('u150');

u150.style.cursor = 'pointer';
if (bIE) u150.attachEvent("onclick", Clicku150);
else u150.addEventListener("click", Clicku150, true);
function Clicku150(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u146','hidden','none',500);

}

}

if (window.OnLoad) OnLoad();
