
var PageName = 'Billing Contact - No saved payment';
var PageId = '26239438b819492eb7614100e9d30176'
var PageUrl = 'Billing_Contact_-_No_saved_payment.html'
document.title = 'Billing Contact - No saved payment';
var PageNotes = 
{
"pageName":"Billing Contact - No saved payment",
"showNotesNames":"False",
"Page Descriptions":"<p style=\"text-align:left;\"><span style=\"\">This page is displayed when &quot;Proceed to Checkout&quot; has been clicked on the Shopping Cart page.<\/span><\/p>",
"UC Reference":"<p style=\"text-align:left;\"><span style=\"\">UC-Check Out-001 Payment&nbsp; &nbsp;&nbsp; <\/span><\/p><p style=\"text-align:left;\"><span style=\"\">&nbsp;<\/span><\/p>"}
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

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u80ann'), "<div id='u80Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u80Note').click(function(e) { ToggleWorkflow(e, 'u80', 300, 150, false); return false; });
var u80Ann = 
{
"label":"Log Out Link",
"Description":"Clicking link will log out the user. The user is kept on current page."};

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u62', 'pd1u62','none','','500','none','','500');

}

}
gv_vAlignTable['u80'] = 'top';
var u81 = document.getElementById('u81');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u83 = document.getElementById('u83');

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
"Description":"Link takes user back to the make a payment - Information page."};

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{
windowEvent = e;


if (true) {

	self.location.href="javascript:history.back()";

}

}
gv_vAlignTable['u11'] = 'top';
var u12 = document.getElementById('u12');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u27 = document.getElementById('u27');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u27ann'), "<div id='u27Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u27Note').click(function(e) { ToggleWorkflow(e, 'u27', 300, 150, false); return false; });
var u27Ann = 
{
"label":"Proceed to Payment Button",
"Description":"If user has logged in and selected a saved payment method, button should take user to Verification page. <BR><BR>If user chooses a new payment method, button will take user to the Payment page."};

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{
windowEvent = e;


if (true) {

	self.location.href="Payment_Info.html" + GetQuerystring();

}

}

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u33ann'), "<div id='u33Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u33Note').click(function(e) { ToggleWorkflow(e, 'u33', 300, 150, false); return false; });
var u33Ann = 
{
"label":"Rush Charge More Info Layer",
"Description":"Displays Information about Next Day Rush charge."};

var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u33','hidden','none',500);

}

}

var u38 = document.getElementById('u38');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u38ann'), "<div id='u38Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u38Note').click(function(e) { ToggleWorkflow(e, 'u38', 300, 150, false); return false; });
var u38Ann = 
{
"label":"More Info link",
"Description":"Hover displays rush charge overlay."};

if (bIE) u38.attachEvent("onmouseover", MouseOveru38);
else u38.addEventListener("mouseover", MouseOveru38, true);
function MouseOveru38(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u38',e)) return;
if (true) {

	SetPanelVisibility('u33','','none',500);

}

}

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');

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
gv_vAlignTable['u51'] = 'top';
var u52 = document.getElementById('u52');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');

var u60 = document.getElementById('u60');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u62ann'), "<div id='u62Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u62Note').click(function(e) { ToggleWorkflow(e, 'u62', 300, 150, false); return false; });
var u62Ann = 
{
"label":"Inline Log In Box",
"Description":"User can log in during the checkout process."};

var u63 = document.getElementById('u63');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u63ann'), "<div id='u63Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u63Note').click(function(e) { ToggleWorkflow(e, 'u63', 300, 150, false); return false; });
var u63Ann = 
{
"label":"Reset Password Button",
"Description":"Clicking button will take user to Password Reset page (R2)."};

u63.style.cursor = 'pointer';
if (bIE) u63.attachEvent("onclick", Clicku63);
else u63.addEventListener("click", Clicku63, true);
function Clicku63(e)
{
windowEvent = e;


if (true) {

	self.location.href="Reset_Password.html" + GetQuerystring();

}

}

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u70 = document.getElementById('u70');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u70ann'), "<div id='u70Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u70Note').click(function(e) { ToggleWorkflow(e, 'u70', 300, 150, false); return false; });
var u70Ann = 
{
"label":"Log In Button",
"Description":"Clicking button logs in user. User is kept on current page, not taken to My Account."};

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

InsertBeforeEnd(u70LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u70Clicku6ba62ff8f1244123b1cf612113bd5517(event)'>Log In</div>");
function u70Clicku6ba62ff8f1244123b1cf612113bd5517(e)
{

	SetPanelState('u62', 'pd0u62','none','','500','none','','500');

	ToggleLinks(e, 'u70LinksClick');
}

InsertBeforeEnd(u70LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u70Clicku46ac2fdbbda24b96a839de3906a1698c(event)'>Incorrect Log In</div>");
function u70Clicku46ac2fdbbda24b96a839de3906a1698c(e)
{

	SetPanelState('u62', 'pd3u62','none','','500','none','','500');

	ToggleLinks(e, 'u70LinksClick');
}

InsertBeforeEnd(u70LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u70Clicku6a77499610964339b4de0ee0ae9d6d98(event)'>Incorrect Log In 10x</div>");
function u70Clicku6a77499610964339b4de0ee0ae9d6d98(e)
{

	SetPanelState('u62', 'pd4u62','none','','500','none','','500');

	ToggleLinks(e, 'u70LinksClick');
}

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u73 = document.getElementById('u73');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u75 = document.getElementById('u75');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u77 = document.getElementById('u77');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u77ann'), "<div id='u77Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u77Note').click(function(e) { ToggleWorkflow(e, 'u77', 300, 150, false); return false; });
var u77Ann = 
{
"label":"Log In Button",
"Description":"Clicking button logs in user. User is kept on current page, not taken to My Account."};

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", u77Click);
else u77.addEventListener("click", u77Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u77LinksClick'></DIV>")
var u77LinksClick = document.getElementById('u77LinksClick');
function u77Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u77LinksClick');
}

InsertBeforeEnd(u77LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u77Clicku1e835d114f1844f0b4bffea15ca8fbdb(event)'>Log In</div>");
function u77Clicku1e835d114f1844f0b4bffea15ca8fbdb(e)
{

	SetPanelState('u62', 'pd0u62','none','','500','none','','500');

	ToggleLinks(e, 'u77LinksClick');
}

InsertBeforeEnd(u77LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u77Clickub4f20ceb72864adcafbab21f978fa72f(event)'>Incorrect Password</div>");
function u77Clickub4f20ceb72864adcafbab21f978fa72f(e)
{

	SetPanelState('u62', 'pd3u62','none','','500','none','','500');

	ToggleLinks(e, 'u77LinksClick');
}

InsertBeforeEnd(u77LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u77Clicku51cfcb63ea12432cbab600215f7100a5(event)'>Incorrect Password 10x</div>");
function u77Clicku51cfcb63ea12432cbab600215f7100a5(e)
{

	SetPanelState('u62', 'pd4u62','none','','500','none','','500');

	ToggleLinks(e, 'u77LinksClick');
}

InsertBeforeEnd(u77LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u77Clickua129dabe6c9e41fa97679d1924435596(event)'>Customer Migration</div>");
function u77Clickua129dabe6c9e41fa97679d1924435596(e)
{

	self.location.href="Customer_Migration.html" + GetQuerystring();

	ToggleLinks(e, 'u77LinksClick');
}

var u78 = document.getElementById('u78');

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u62', 'pd2u62','none','','500','none','','500');

}

}
gv_vAlignTable['u78'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
if (window.OnLoad) OnLoad();
