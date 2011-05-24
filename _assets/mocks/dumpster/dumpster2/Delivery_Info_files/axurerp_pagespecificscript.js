
var PageName = 'Delivery Info';
var PageId = '16159f7c6a53432fb71f34011fef311d'
var PageUrl = 'Delivery_Info.html'
document.title = 'Delivery Info';
var PageNotes = 
{
"pageName":"Delivery Info",
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
gv_vAlignTable['u80'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u78','hidden','none',500);

}

}

var u83 = document.getElementById('u83');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u83ann'), "<div id='u83Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u83Note').click(function(e) { ToggleWorkflow(e, 'u83', 300, 150, false); return false; });
var u83Ann = 
{
"label":"More Info link",
"Description":"Hover displays rush charge overlay."};

if (bIE) u83.attachEvent("onmouseover", MouseOveru83);
else u83.addEventListener("mouseover", MouseOveru83, true);
function MouseOveru83(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u83',e)) return;
if (true) {

	SetPanelVisibility('u78','','none',500);

}

}

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u86 = document.getElementById('u86');

var u87 = document.getElementById('u87');

var u88 = document.getElementById('u88');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u88ann'), "<div id='u88Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u88Note').click(function(e) { ToggleWorkflow(e, 'u88', 300, 150, false); return false; });
var u88Ann = 
{
"label":"Inline Log In Box",
"Description":"User can log in during the checkout process."};

var u89 = document.getElementById('u89');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u89ann'), "<div id='u89Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u89Note').click(function(e) { ToggleWorkflow(e, 'u89', 300, 150, false); return false; });
var u89Ann = 
{
"label":"Reset Password Button",
"Description":"Clicking button will take user to Password Reset page (R2)."};

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{
windowEvent = e;


if (true) {

	self.location.href="Reset_Password.html" + GetQuerystring();

}

}

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u92 = document.getElementById('u92');

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
"Description":"Link takes user back to the shopping cart."};

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
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u114 = document.getElementById('u114');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');

var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u28ann'), "<div id='u28Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u28Note').click(function(e) { ToggleWorkflow(e, 'u28', 300, 150, false); return false; });
var u28Ann = 
{
"label":"Use WM account checkbox",
"Description":"Deselecting removes prefilled content from delivery fields."};

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u20', 'pd0u20','none','','500','none','','500');

}

}

var u29 = document.getElementById('u29');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u101 = document.getElementById('u101');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u103 = document.getElementById('u103');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u103ann'), "<div id='u103Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u103Note').click(function(e) { ToggleWorkflow(e, 'u103', 300, 150, false); return false; });
var u103Ann = 
{
"label":"Log In Button",
"Description":"Clicking button logs in user. User is kept on current page, not taken to My Account."};

u103.style.cursor = 'pointer';
if (bIE) u103.attachEvent("onclick", u103Click);
else u103.addEventListener("click", u103Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u103LinksClick'></DIV>")
var u103LinksClick = document.getElementById('u103LinksClick');
function u103Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u103LinksClick');
}

InsertBeforeEnd(u103LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u103Clickub7aa46722c344e4fa359aa5ade8d4c30(event)'>Log In</div>");
function u103Clickub7aa46722c344e4fa359aa5ade8d4c30(e)
{

	SetPanelState('u88', 'pd0u88','none','','500','none','','500');

	ToggleLinks(e, 'u103LinksClick');
}

InsertBeforeEnd(u103LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u103Clickub646ef515cac4750bbb3c0777d87f4d0(event)'>Incorrect Password</div>");
function u103Clickub646ef515cac4750bbb3c0777d87f4d0(e)
{

	SetPanelState('u88', 'pd3u88','none','','500','none','','500');

	ToggleLinks(e, 'u103LinksClick');
}

InsertBeforeEnd(u103LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u103Clickufddd6fa1b26f49a3be02d14091f4db1a(event)'>Incorrect Password 10x</div>");
function u103Clickufddd6fa1b26f49a3be02d14091f4db1a(e)
{

	SetPanelState('u88', 'pd4u88','none','','500','none','','500');

	ToggleLinks(e, 'u103LinksClick');
}

InsertBeforeEnd(u103LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u103Clicku4afac25d07a44ea88b447dc22ecf56a3(event)'>Customer Migration</div>");
function u103Clicku4afac25d07a44ea88b447dc22ecf56a3(e)
{

	self.location.href="Customer_Migration.html" + GetQuerystring();

	ToggleLinks(e, 'u103LinksClick');
}

var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u88', 'pd2u88','none','','500','none','','500');

}

}
gv_vAlignTable['u104'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u106 = document.getElementById('u106');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u106ann'), "<div id='u106Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u106Note').click(function(e) { ToggleWorkflow(e, 'u106', 300, 150, false); return false; });
var u106Ann = 
{
"label":"Log Out Link",
"Description":"Clicking link will log out the user. The user is kept on current page."};

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{
windowEvent = e;


if (true) {

	self.location.href="Delivery_Info_Not_Logged_In.html" + GetQuerystring();

}

}
gv_vAlignTable['u106'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');

var u36 = document.getElementById('u36');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u36ann'), "<div id='u36Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u36Note').click(function(e) { ToggleWorkflow(e, 'u36', 300, 150, false); return false; });
var u36Ann = 
{
"label":"Use WM account checkbox",
"Description":"Selecting provides prefilled content to delivery fields."};

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u20', 'pd1u20','none','','500','none','','500');

}

}

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u94 = document.getElementById('u94');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u96ann'), "<div id='u96Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u96Note').click(function(e) { ToggleWorkflow(e, 'u96', 300, 150, false); return false; });
var u96Ann = 
{
"label":"Log In Button",
"Description":"Clicking button logs in user. User is kept on current page, not taken to My Account."};

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", u96Click);
else u96.addEventListener("click", u96Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u96LinksClick'></DIV>")
var u96LinksClick = document.getElementById('u96LinksClick');
function u96Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u96LinksClick');
}

InsertBeforeEnd(u96LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u96Clickud3521efe9a614e06b31757d63644025e(event)'>Log In</div>");
function u96Clickud3521efe9a614e06b31757d63644025e(e)
{

	SetPanelState('u88', 'pd0u88','none','','500','none','','500');

	ToggleLinks(e, 'u96LinksClick');
}

InsertBeforeEnd(u96LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u96Clickuf335f953f9024ed29c57b4063b666afd(event)'>Incorrect Log In</div>");
function u96Clickuf335f953f9024ed29c57b4063b666afd(e)
{

	SetPanelState('u88', 'pd3u88','none','','500','none','','500');

	ToggleLinks(e, 'u96LinksClick');
}

InsertBeforeEnd(u96LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u96Clicku69d9bad2fd444001a9782b49b51ed7e7(event)'>Incorrect Log In 10x</div>");
function u96Clicku69d9bad2fd444001a9782b49b51ed7e7(e)
{

	SetPanelState('u88', 'pd4u88','none','','500','none','','500');

	ToggleLinks(e, 'u96LinksClick');
}

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u99 = document.getElementById('u99');

var u116 = document.getElementById('u116');

var u40 = document.getElementById('u40');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u40ann'), "<div id='u40Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u40Note').click(function(e) { ToggleWorkflow(e, 'u40', 300, 150, false); return false; });
var u40Ann = 
{
"label":"Proceed to Billing Contact button",
"Description":"Takes user to Billing Contact page."};

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{
windowEvent = e;


if (true) {

	self.location.href="Billing_Contact.html" + GetQuerystring();

}

}

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');

var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
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
gv_vAlignTable['u50'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u59 = document.getElementById('u59');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u65 = document.getElementById('u65');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
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
gv_vAlignTable['u76'] = 'top';
var u77 = document.getElementById('u77');

var u78 = document.getElementById('u78');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u78ann'), "<div id='u78Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u78Note').click(function(e) { ToggleWorkflow(e, 'u78', 300, 150, false); return false; });
var u78Ann = 
{
"label":"Rush Charge More Info Layer",
"Description":"Displays Information about Next Day Rush charge."};

var u79 = document.getElementById('u79');

if (window.OnLoad) OnLoad();
