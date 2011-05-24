
var PageName = 'Billing Contact Not Logged In';
var PageId = '97b19b41fc5f4430a20f86b0fbfb3cb8'
var PageUrl = 'Billing_Contact_Not_Logged_In.html'
document.title = 'Billing Contact Not Logged In';
var PageNotes = 
{
"pageName":"Billing Contact Not Logged In",
"showNotesNames":"False",
"Page Descriptions":"<p style=\"text-align:left;\"><span style=\"\">This page is displayed when &quot;Proceed to Checkout&quot; has been clicked on the Shopping Cart page.<\/span><\/p>",
"UC Reference":"<p style=\"text-align:left;\"><span style=\"\">UC-Check Out-001 Payment&nbsp; &nbsp;&nbsp; <\/span><\/p>"}
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
gv_vAlignTable['u80'] = 'top';
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

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');

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

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u28ann'), "<div id='u28Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u28Note').click(function(e) { ToggleWorkflow(e, 'u28', 300, 150, false); return false; });
var u28Ann = 
{
"label":"Proceed to Payment Button",
"Description":"Takes user to payment page."};

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{
windowEvent = e;


if (true) {

	self.location.href="Payment_Info_Guest.html" + GetQuerystring();

}

}

var u29 = document.getElementById('u29');

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

InsertBeforeEnd(u70LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u70Clickudd4332faeaa64f29bd06a93e41530196(event)'>Log In</div>");
function u70Clickudd4332faeaa64f29bd06a93e41530196(e)
{

	SetPanelState('u62', 'pd2u62','none','','500','none','','500');

	ToggleLinks(e, 'u70LinksClick');
}

InsertBeforeEnd(u70LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u70Clicku3f010962d5e746138be219aee02a4e8a(event)'>Incorrect Log In</div>");
function u70Clicku3f010962d5e746138be219aee02a4e8a(e)
{

	SetPanelState('u62', 'pd3u62','none','','500','none','','500');

	ToggleLinks(e, 'u70LinksClick');
}

InsertBeforeEnd(u70LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u70Clicku37278a25f5104798bff4948cc4d277b8(event)'>Incorrect Log In 10x</div>");
function u70Clicku37278a25f5104798bff4948cc4d277b8(e)
{

	SetPanelState('u62', 'pd4u62','none','','500','none','','500');

	ToggleLinks(e, 'u70LinksClick');
}

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u72 = document.getElementById('u72');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u72ann'), "<div id='u72Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u72Note').click(function(e) { ToggleWorkflow(e, 'u72', 300, 150, false); return false; });
var u72Ann = 
{
"label":"Log Out Link",
"Description":"Clicking link will log out the user. The user is kept on current page."};

u72.style.cursor = 'pointer';
if (bIE) u72.attachEvent("onclick", Clicku72);
else u72.addEventListener("click", Clicku72, true);
function Clicku72(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u62', 'pd0u62','none','','500','none','','500');

}

}
gv_vAlignTable['u72'] = 'top';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u74 = document.getElementById('u74');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u78 = document.getElementById('u78');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u78ann'), "<div id='u78Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u78Note').click(function(e) { ToggleWorkflow(e, 'u78', 300, 150, false); return false; });
var u78Ann = 
{
"label":"Log In Button",
"Description":"Clicking button logs in user. User is kept on current page, not taken to My Account."};

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", u78Click);
else u78.addEventListener("click", u78Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u78LinksClick'></DIV>")
var u78LinksClick = document.getElementById('u78LinksClick');
function u78Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u78LinksClick');
}

InsertBeforeEnd(u78LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u78Clickud8ef7864de12489395edef8bab4407ff(event)'>Log In</div>");
function u78Clickud8ef7864de12489395edef8bab4407ff(e)
{

	SetPanelState('u62', 'pd2u62','none','','500','none','','500');

	ToggleLinks(e, 'u78LinksClick');
}

InsertBeforeEnd(u78LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u78Clickub03c273cad8247038c231dbf6f1c3221(event)'>Incorrect Password</div>");
function u78Clickub03c273cad8247038c231dbf6f1c3221(e)
{

	SetPanelState('u62', 'pd3u62','none','','500','none','','500');

	ToggleLinks(e, 'u78LinksClick');
}

InsertBeforeEnd(u78LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u78Clicku3a5a6c13adf3494f804ce2f850b25f58(event)'>Incorrect Password 10x</div>");
function u78Clicku3a5a6c13adf3494f804ce2f850b25f58(e)
{

	SetPanelState('u62', 'pd4u62','none','','500','none','','500');

	ToggleLinks(e, 'u78LinksClick');
}

InsertBeforeEnd(u78LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u78Clickue909e389a8aa44d9a7898e5b81c95070(event)'>Customer Migration</div>");
function u78Clickue909e389a8aa44d9a7898e5b81c95070(e)
{

	self.location.href="Customer_Migration.html" + GetQuerystring();

	ToggleLinks(e, 'u78LinksClick');
}

var u79 = document.getElementById('u79');

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u62', 'pd1u62','none','','500','none','','500');

}

}
gv_vAlignTable['u79'] = 'top';
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
gv_vAlignTable['u7'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u42 = document.getElementById('u42');

var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');

var u48 = document.getElementById('u48');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
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
"label":"Go Back Link",
"Description":"Link takes user back to the make a payment - Information page."};

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}
gv_vAlignTable['u12'] = 'top';
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

if (window.OnLoad) OnLoad();
