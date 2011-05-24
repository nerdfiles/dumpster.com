
var PageName = 'Residential Cart';
var PageId = '91160b26c2774f07aa40315e753c8173'
var PageUrl = 'Residential_Cart.html'
document.title = 'Residential Cart';
var PageNotes = 
{
"pageName":"Residential Cart",
"showNotesNames":"False",
"Page Descriptions":"<p style=\"text-align:left;\"><span style=\"\">This page is displayed when the &quot;Select and Proceed to Checkout&quot; has been clicked, and the &quot;Unacceptable Materials&quot; terms have been agreed to by the user.<\/span><\/p>",
"UC Reference":"<p style=\"text-align:left;\"><span style=\"\">Shopping Experience-001 Shopping Cart&nbsp; &nbsp;&nbsp; <\/span><\/p><p style=\"text-align:left;\"><span style=\"\">UC-Shopping Experience-001 Add to Cart&nbsp; &nbsp;&nbsp; <\/span><\/p><p style=\"text-align:left;\"><span style=\"\">&nbsp;<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">&nbsp;<\/span><\/p>"}
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
gv_vAlignTable['u80'] = 'top';
var u81 = document.getElementById('u81');

var u82 = document.getElementById('u82');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u82ann'), "<div id='u82Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u82Note').click(function(e) { ToggleWorkflow(e, 'u82', 300, 150, false); return false; });
var u82Ann = 
{
"label":"More Info link",
"Description":"Hover displays rush charge overlay."};

if (bIE) u82.attachEvent("onmouseover", MouseOveru82);
else u82.addEventListener("mouseover", MouseOveru82, true);
function MouseOveru82(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u82',e)) return;
if (true) {

	SetPanelVisibility('u110','','fade',500);

}

}

var u83 = document.getElementById('u83');

u83.style.cursor = 'pointer';
if (bIE) u83.attachEvent("onclick", Clicku83);
else u83.addEventListener("click", Clicku83, true);
function Clicku83(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u115','','none',500);

}

}

var u84 = document.getElementById('u84');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u84ann'), "<div id='u84Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u84Note').click(function(e) { ToggleWorkflow(e, 'u84', 300, 150, false); return false; });
var u84Ann = 
{
"label":"Promo Code function",
"Description":"Provides user the opportunity to enter a promo code provided by WM."};

var u85 = document.getElementById('u85');

var u86 = document.getElementById('u86');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u86ann'), "<div id='u86Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u86Note').click(function(e) { ToggleWorkflow(e, 'u86', 300, 150, false); return false; });
var u86Ann = 
{
"label":"Code entry button",
"Description":"Submits the entered code."};

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u84', 'pd1u84','none','','500','none','','500');

	SetPanelState('u55', 'pd1u55','none','','500','fade','','200');

}

}

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u88 = document.getElementById('u88');

var u89 = document.getElementById('u89');

if (bIE) u89.attachEvent("onmouseover", MouseOveru89);
else u89.addEventListener("mouseover", MouseOveru89, true);
function MouseOveru89(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u89',e)) return;
if (true) {

	SetPanelVisibility('u93','','fade',500);

}

}
gv_vAlignTable['u89'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u91 = document.getElementById('u91');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u110 = document.getElementById('u110');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u110ann'), "<div id='u110Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u110Note').click(function(e) { ToggleWorkflow(e, 'u110', 300, 150, false); return false; });
var u110Ann = 
{
"label":"Rush Charge More Info Layer",
"Description":"Displays Information about Next Day Rush charge."};

var u111 = document.getElementById('u111');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u114 = document.getElementById('u114');

u114.style.cursor = 'pointer';
if (bIE) u114.attachEvent("onclick", Clicku114);
else u114.addEventListener("click", Clicku114, true);
function Clicku114(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u110','hidden','none',500);

}

}

var u115 = document.getElementById('u115');

var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u26 = document.getElementById('u26');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u26ann'), "<div id='u26Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u26Note').click(function(e) { ToggleWorkflow(e, 'u26', 300, 150, false); return false; });
var u26Ann = 
{
"label":"Calendar pop up",
"Description":"Displays calendar with changeable dates."};

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{
windowEvent = e;


if (true) {

}

}

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u29ann'), "<div id='u29Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u29Note').click(function(e) { ToggleWorkflow(e, 'u29', 300, 150, false); return false; });
var u29Ann = 
{
"label":"Calendar overlay",
"Description":"Displays calendar with changeable dates."};

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{
windowEvent = e;


if (true) {

}

}

var u100 = document.getElementById('u100');

var u101 = document.getElementById('u101');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u101ann'), "<div id='u101Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u101Note').click(function(e) { ToggleWorkflow(e, 'u101', 300, 150, false); return false; });
var u101Ann = 
{
"label":"Code entry button",
"Description":"Submits the entered code."};

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", u101Click);
else u101.addEventListener("click", u101Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u101LinksClick'></DIV>")
var u101LinksClick = document.getElementById('u101LinksClick');
function u101Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u101LinksClick');
}

InsertBeforeEnd(u101LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u101Clicku6ae26c461db34bdfbc2626329eefe31d(event)'>Enter Promo Code</div>");
function u101Clicku6ae26c461db34bdfbc2626329eefe31d(e)
{

	SetPanelState('u84', 'pd1u84','none','','500','none','','500');

	SetPanelState('u55', 'pd1u55','none','','500','fade','','200');

	ToggleLinks(e, 'u101LinksClick');
}

InsertBeforeEnd(u101LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u101Clicku62005cc10c644dccbd365a8784901924(event)'>Invalid Promo Code</div>");
function u101Clicku62005cc10c644dccbd365a8784901924(e)
{

	SetPanelState('u84', 'pd2u84','none','','500','none','','500');

	ToggleLinks(e, 'u101LinksClick');
}

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u103 = document.getElementById('u103');

var u104 = document.getElementById('u104');

if (bIE) u104.attachEvent("onmouseover", MouseOveru104);
else u104.addEventListener("mouseover", MouseOveru104, true);
function MouseOveru104(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u104',e)) return;
if (true) {

	SetPanelVisibility('u105','','fade',500);

}

}
gv_vAlignTable['u104'] = 'top';
var u105 = document.getElementById('u105');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u105ann'), "<div id='u105Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u105Note').click(function(e) { ToggleWorkflow(e, 'u105', 300, 150, false); return false; });
var u105Ann = 
{
"label":"Promo Code More Info hover box",
"Description":"Displays additional information about promo codes."};

var u106 = document.getElementById('u106');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u109 = document.getElementById('u109');

u109.style.cursor = 'pointer';
if (bIE) u109.attachEvent("onclick", Clicku109);
else u109.addEventListener("click", Clicku109, true);
function Clicku109(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u105','hidden','none',500);

}

}

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u128 = document.getElementById('u128');

u128.style.cursor = 'pointer';
if (bIE) u128.attachEvent("onclick", Clicku128);
else u128.addEventListener("click", Clicku128, true);
function Clicku128(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u115','hidden','none',500);

}

}

var u129 = document.getElementById('u129');

u129.style.cursor = 'pointer';
if (bIE) u129.attachEvent("onclick", Clicku129);
else u129.addEventListener("click", Clicku129, true);
function Clicku129(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u115','hidden','none',500);

	self.location.href="Residential_Cart_Empty.html" + GetQuerystring();

}

}

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u93 = document.getElementById('u93');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u93ann'), "<div id='u93Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u93Note').click(function(e) { ToggleWorkflow(e, 'u93', 300, 150, false); return false; });
var u93Ann = 
{
"label":"Promo Code More Info hover box",
"Description":"Displays additional information about promo codes."};

var u94 = document.getElementById('u94');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u93','hidden','none',500);

}

}

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u99 = document.getElementById('u99');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u99ann'), "<div id='u99Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u99Note').click(function(e) { ToggleWorkflow(e, 'u99', 300, 150, false); return false; });
var u99Ann = 
{
"label":"Clear function",
"Description":"Clears the entered promo code."};

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u84', 'pd0u84','none','','500','none','','500');

	SetPanelState('u55', 'pd0u55','none','','500','fade','','200');

}

}
gv_vAlignTable['u99'] = 'top';
var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u122 = document.getElementById('u122');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u124 = document.getElementById('u124');

u124.style.cursor = 'pointer';
if (bIE) u124.attachEvent("onclick", Clicku124);
else u124.addEventListener("click", Clicku124, true);
function Clicku124(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u126 = document.getElementById('u126');

u126.style.cursor = 'pointer';
if (bIE) u126.attachEvent("onclick", Clicku126);
else u126.addEventListener("click", Clicku126, true);
function Clicku126(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'top';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');

var u7 = document.getElementById('u7');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u9 = document.getElementById('u9');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u52 = document.getElementById('u52');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');

var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u130 = document.getElementById('u130');

u130.style.cursor = 'pointer';
if (bIE) u130.attachEvent("onclick", Clicku130);
else u130.addEventListener("click", Clicku130, true);
function Clicku130(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u115','hidden','none',500);

}

}

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u64 = document.getElementById('u64');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u70 = document.getElementById('u70');

u70.style.cursor = 'pointer';
if (bIE) u70.attachEvent("onclick", u70Click);
else u70.addEventListener("click", u70Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u70LinksClick'></DIV>")
var u70LinksClick = document.getElementById('u70LinksClick');
function u70Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u70LinksClick');
}

InsertBeforeEnd(u70LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u70Clickufbc36e640640483b9e6e1a067978676e(event)'>Delivery Info - Not Logged In</div>");
function u70Clickufbc36e640640483b9e6e1a067978676e(e)
{

	self.location.href="Delivery_Info_Not_Logged_In.html" + GetQuerystring();

	ToggleLinks(e, 'u70LinksClick');
}

InsertBeforeEnd(u70LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u70Clicku33d5f68dea394a4cbdc25303edfffca4(event)'>Delivery Info - Multiple Items</div>");
function u70Clicku33d5f68dea394a4cbdc25303edfffca4(e)
{

	self.location.href="Delivery_Info_Multiple_Dumpsters.html" + GetQuerystring();

	ToggleLinks(e, 'u70LinksClick');
}

var u71 = document.getElementById('u71');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u71ann'), "<div id='u71Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u71Note').click(function(e) { ToggleWorkflow(e, 'u71', 300, 150, false); return false; });
var u71Ann = 
{
"label":"Add Dumpster Link",
"Description":"Takes user to Dumpster Selection Page"};

u71.style.cursor = 'pointer';
if (bIE) u71.attachEvent("onclick", Clicku71);
else u71.addEventListener("click", Clicku71, true);
function Clicku71(e)
{
windowEvent = e;


if (true) {

	self.location.href="Residential_Dumpster_Selection.html" + GetQuerystring();

}

}
gv_vAlignTable['u71'] = 'top';
var u72 = document.getElementById('u72');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
if (window.OnLoad) OnLoad();
