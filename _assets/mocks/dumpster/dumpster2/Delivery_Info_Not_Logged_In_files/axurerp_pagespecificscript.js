
var PageName = 'Delivery Info Not Logged In';
var PageId = '1095ac727e204f1ab2a5bb9a4dbdce8d'
var PageUrl = 'Delivery_Info_Not_Logged_In.html'
document.title = 'Delivery Info Not Logged In';
var PageNotes = 
{
"pageName":"Delivery Info Not Logged In",
"showNotesNames":"False",
"Page Descriptions":"<p style=\"text-align:left;\"><span style=\"\">This page is displayed when &quot;Proceed to Checkout&quot; has been clicked on the Shopping Cart page.<\/span><\/p>",
"UC Reference":"<p style=\"text-align:left;\"><span style=\"\">Check Out-001 Delivery&nbsp; &nbsp;&nbsp; <\/span><\/p><p style=\"text-align:left;\"><span style=\"\">&nbsp;<\/span><\/p>"}
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

var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u82 = document.getElementById('u82');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u82ann'), "<div id='u82Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u82Note').click(function(e) { ToggleWorkflow(e, 'u82', 300, 150, false); return false; });
var u82Ann = 
{
"label":"Log In Button",
"Description":"Clicking button logs in user. User is kept on current page, not taken to My Account."};

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", u82Click);
else u82.addEventListener("click", u82Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u82LinksClick'></DIV>")
var u82LinksClick = document.getElementById('u82LinksClick');
function u82Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u82LinksClick');
}

InsertBeforeEnd(u82LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u82Clicku52c9cc0dea0e4abf913e995805669b1b(event)'>Log In</div>");
function u82Clicku52c9cc0dea0e4abf913e995805669b1b(e)
{

	self.location.href="Delivery_Info.html" + GetQuerystring();

	ToggleLinks(e, 'u82LinksClick');
}

InsertBeforeEnd(u82LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u82Clicku05d570861b544e75bacf58e7ea197e15(event)'>Incorrect Password</div>");
function u82Clicku05d570861b544e75bacf58e7ea197e15(e)
{

	SetPanelState('u66', 'pd3u66','none','','500','none','','500');

	ToggleLinks(e, 'u82LinksClick');
}

InsertBeforeEnd(u82LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u82Clicku415642c268694d2c9f2678dcde683d2b(event)'>Incorrect Password 10x</div>");
function u82Clicku415642c268694d2c9f2678dcde683d2b(e)
{

	SetPanelState('u66', 'pd4u66','none','','500','none','','500');

	ToggleLinks(e, 'u82LinksClick');
}

InsertBeforeEnd(u82LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u82Clicku6777d1a110da439b97c84698166a587b(event)'>Customer Migration</div>");
function u82Clicku6777d1a110da439b97c84698166a587b(e)
{

	self.location.href="Customer_Migration.html" + GetQuerystring();

	ToggleLinks(e, 'u82LinksClick');
}

var u83 = document.getElementById('u83');

u83.style.cursor = 'pointer';
if (bIE) u83.attachEvent("onclick", Clicku83);
else u83.addEventListener("click", Clicku83, true);
function Clicku83(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u66', 'pd1u66','none','','500','none','','500');

}

}
gv_vAlignTable['u83'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u85 = document.getElementById('u85');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u87 = document.getElementById('u87');

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
gv_vAlignTable['u10'] = 'top';
var u11 = document.getElementById('u11');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u11ann'), "<div id='u11Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u11Note').click(function(e) { ToggleWorkflow(e, 'u11', 300, 150, false); return false; });
var u11Ann = 
{
"label":"Go Back Link",
"Description":"Link takes user back to the shopping cart page."};

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{
windowEvent = e;


if (true) {

	self.location.href="Residential_Cart.html" + GetQuerystring();

}

}
gv_vAlignTable['u11'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u28ann'), "<div id='u28Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u28Note').click(function(e) { ToggleWorkflow(e, 'u28', 300, 150, false); return false; });
var u28Ann = 
{
"label":"Proceed to Billing button",
"Description":"Takes user to Billing Contact page."};

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{
windowEvent = e;


if (true) {

	self.location.href="Billing_Contact_Not_Logged_In.html" + GetQuerystring();

}

}

var u29 = document.getElementById('u29');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
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
gv_vAlignTable['u35'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');

var u97 = document.getElementById('u97');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u1 = document.getElementById('u1');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u3 = document.getElementById('u3');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u5 = document.getElementById('u5');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u9 = document.getElementById('u9');

var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');

var u60 = document.getElementById('u60');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u60ann'), "<div id='u60Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u60Note').click(function(e) { ToggleWorkflow(e, 'u60', 300, 150, false); return false; });
var u60Ann = 
{
"label":"Rush Charge More Info Layer",
"Description":"Displays Information about Next Day Rush charge."};

var u61 = document.getElementById('u61');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u60','hidden','none',500);

}

}

var u65 = document.getElementById('u65');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u65ann'), "<div id='u65Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u65Note').click(function(e) { ToggleWorkflow(e, 'u65', 300, 150, false); return false; });
var u65Ann = 
{
"label":"More Info link",
"Description":"Hover displays rush charge overlay."};

if (bIE) u65.attachEvent("onmouseover", MouseOveru65);
else u65.addEventListener("mouseover", MouseOveru65, true);
function MouseOveru65(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u65',e)) return;
if (true) {

	SetPanelVisibility('u60','','none',500);

}

}

var u66 = document.getElementById('u66');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u66ann'), "<div id='u66Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u66Note').click(function(e) { ToggleWorkflow(e, 'u66', 300, 150, false); return false; });
var u66Ann = 
{
"label":"Inline Log In Box",
"Description":"User can log in during the checkout process."};

var u67 = document.getElementById('u67');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u67ann'), "<div id='u67Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u67Note').click(function(e) { ToggleWorkflow(e, 'u67', 300, 150, false); return false; });
var u67Ann = 
{
"label":"Reset Password Button",
"Description":"Clicking button will take user to Password Reset page (R2)."};

u67.style.cursor = 'pointer';
if (bIE) u67.attachEvent("onclick", Clicku67);
else u67.addEventListener("click", Clicku67, true);
function Clicku67(e)
{
windowEvent = e;


if (true) {

	self.location.href="Reset_Password.html" + GetQuerystring();

}

}

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u72 = document.getElementById('u72');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u74 = document.getElementById('u74');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u74ann'), "<div id='u74Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u74Note').click(function(e) { ToggleWorkflow(e, 'u74', 300, 150, false); return false; });
var u74Ann = 
{
"label":"Log In Button",
"Description":"Clicking button logs in user. User is kept on current page, not taken to My Account."};

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", u74Click);
else u74.addEventListener("click", u74Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u74LinksClick'></DIV>")
var u74LinksClick = document.getElementById('u74LinksClick');
function u74Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u74LinksClick');
}

InsertBeforeEnd(u74LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u74Clickudf2e61528136494e87466a36837090f2(event)'>Log In</div>");
function u74Clickudf2e61528136494e87466a36837090f2(e)
{

	SetPanelState('u66', 'pd2u66','none','','500','none','','500');

	ToggleLinks(e, 'u74LinksClick');
}

InsertBeforeEnd(u74LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u74Clicku4f90e83ca3724f809d6edde37e5e32d3(event)'>Incorrect Log In</div>");
function u74Clicku4f90e83ca3724f809d6edde37e5e32d3(e)
{

	SetPanelState('u66', 'pd3u66','none','','500','none','','500');

	ToggleLinks(e, 'u74LinksClick');
}

InsertBeforeEnd(u74LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u74Clicku65bc634bf4154183b18035162e6de086(event)'>Incorrect Log In 10x</div>");
function u74Clicku65bc634bf4154183b18035162e6de086(e)
{

	SetPanelState('u66', 'pd4u66','none','','500','none','','500');

	ToggleLinks(e, 'u74LinksClick');
}

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u76 = document.getElementById('u76');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u76ann'), "<div id='u76Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u76Note').click(function(e) { ToggleWorkflow(e, 'u76', 300, 150, false); return false; });
var u76Ann = 
{
"label":"Log Out Link",
"Description":"Clicking link will log out the user. The user is kept on current page."};

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u66', 'pd0u66','none','','500','none','','500');

}

}
gv_vAlignTable['u76'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u78 = document.getElementById('u78');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
if (window.OnLoad) OnLoad();
