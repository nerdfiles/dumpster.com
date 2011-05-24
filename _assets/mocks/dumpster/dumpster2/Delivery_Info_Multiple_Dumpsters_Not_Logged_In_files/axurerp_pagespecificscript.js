
var PageName = 'Delivery Info Multiple Dumpsters Not Logged In';
var PageId = 'e48d067a2ab1478c963e58b79fc7c7a6'
var PageUrl = 'Delivery_Info_Multiple_Dumpsters_Not_Logged_In.html'
document.title = 'Delivery Info Multiple Dumpsters Not Logged In';
var PageNotes = 
{
"pageName":"Delivery Info Multiple Dumpsters Not Logged In",
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

if (true) {
function waitu3125217df14b4cc8bebc54042a0bf67c1() {

	SetPanelState('u10', 'pd1u10','none','','500','none','','500');
}
setTimeout(waitu3125217df14b4cc8bebc54042a0bf67c1, 1000);

}

}

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u100 = document.getElementById('u100');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u102 = document.getElementById('u102');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u109 = document.getElementById('u109');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u259 = document.getElementById('u259');

var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u84 = document.getElementById('u84');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u86 = document.getElementById('u86');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u88 = document.getElementById('u88');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u91 = document.getElementById('u91');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u122 = document.getElementById('u122');

var u123 = document.getElementById('u123');

var u124 = document.getElementById('u124');

var u125 = document.getElementById('u125');

var u126 = document.getElementById('u126');

var u127 = document.getElementById('u127');

var u128 = document.getElementById('u128');

var u129 = document.getElementById('u129');

var u278 = document.getElementById('u278');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u29 = document.getElementById('u29');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u131 = document.getElementById('u131');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u133 = document.getElementById('u133');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u133ann'), "<div id='u133Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u133Note').click(function(e) { ToggleWorkflow(e, 'u133', 300, 150, false); return false; });
var u133Ann = 
{
"label":"Clickable accordian bar",
"Description":"Clicking expands the product section."};

u133.style.cursor = 'pointer';
if (bIE) u133.attachEvent("onclick", Clicku133);
else u133.addEventListener("click", Clicku133, true);
function Clicku133(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u10', 'pd2u10','none','','500','none','','500');

}

}

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u135 = document.getElementById('u135');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u135ann'), "<div id='u135Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u135Note').click(function(e) { ToggleWorkflow(e, 'u135', 300, 150, false); return false; });
var u135Ann = 
{
"label":"Clickable accordian bar",
"Description":"Clicking expands the product section."};

u135.style.cursor = 'pointer';
if (bIE) u135.attachEvent("onclick", Clicku135);
else u135.addEventListener("click", Clicku135, true);
function Clicku135(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u10', 'pd3u10','none','','500','none','','500');

}

}

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u137 = document.getElementById('u137');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u139 = document.getElementById('u139');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u289 = document.getElementById('u289');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u39 = document.getElementById('u39');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u39ann'), "<div id='u39Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u39Note').click(function(e) { ToggleWorkflow(e, 'u39', 300, 150, false); return false; });
var u39Ann = 
{
"label":"Go Back Link",
"Description":"Link takes user back to the shopping cart page."};

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", u39Click);
else u39.addEventListener("click", u39Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u39LinksClick'></DIV>")
var u39LinksClick = document.getElementById('u39LinksClick');
function u39Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u39LinksClick');
}

InsertBeforeEnd(u39LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u39Clicku64554b2c97314212bb759b34b6b8d822(event)'>Case 1</div>");
function u39Clicku64554b2c97314212bb759b34b6b8d822(e)
{

	self.location.href="javascript:history.back()";

	ToggleLinks(e, 'u39LinksClick');
}

InsertBeforeEnd(u39LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u39Clicku4b1a0e80fd1147ba9961ddd51ecc22cd(event)'>Case 2</div>");
function u39Clicku4b1a0e80fd1147ba9961ddd51ecc22cd(e)
{

	self.location.href="Residential_Cart.html" + GetQuerystring();

	ToggleLinks(e, 'u39LinksClick');
}
gv_vAlignTable['u39'] = 'top';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u304 = document.getElementById('u304');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u143 = document.getElementById('u143');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u145 = document.getElementById('u145');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u147 = document.getElementById('u147');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u298 = document.getElementById('u298');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u298ann'), "<div id='u298Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u298Note').click(function(e) { ToggleWorkflow(e, 'u298', 300, 150, false); return false; });
var u298Ann = 
{
"label":"Log In Button",
"Description":"Clicking button logs in user. User is kept on current page, not taken to My Account."};

u298.style.cursor = 'pointer';
if (bIE) u298.attachEvent("onclick", u298Click);
else u298.addEventListener("click", u298Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u298LinksClick'></DIV>")
var u298LinksClick = document.getElementById('u298LinksClick');
function u298Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u298LinksClick');
}

InsertBeforeEnd(u298LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u298Clickua17a5f86095d46358aaf0a7a8d609d81(event)'>Log In</div>");
function u298Clickua17a5f86095d46358aaf0a7a8d609d81(e)
{

	self.location.href="Delivery_Info_Multiple_Dumpsters.html" + GetQuerystring();

	ToggleLinks(e, 'u298LinksClick');
}

InsertBeforeEnd(u298LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u298Clicku51c7962ecebe44408936e65547954600(event)'>Incorrect Password</div>");
function u298Clicku51c7962ecebe44408936e65547954600(e)
{

	SetPanelState('u283', 'pd3u283','none','','500','none','','500');

	ToggleLinks(e, 'u298LinksClick');
}

InsertBeforeEnd(u298LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u298Clicku493d0a3ba93c4767b1a802496e159057(event)'>Incorrect Password 10x</div>");
function u298Clicku493d0a3ba93c4767b1a802496e159057(e)
{

	SetPanelState('u283', 'pd4u283','none','','500','none','','500');

	ToggleLinks(e, 'u298LinksClick');
}

InsertBeforeEnd(u298LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u298Clicku622a20a583f24984a0228f3b6faa9d32(event)'>Customer Migration</div>");
function u298Clicku622a20a583f24984a0228f3b6faa9d32(e)
{

	self.location.href="Customer_Migration.html" + GetQuerystring();

	ToggleLinks(e, 'u298LinksClick');
}

var u299 = document.getElementById('u299');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u299ann'), "<div id='u299Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u299Note').click(function(e) { ToggleWorkflow(e, 'u299', 300, 150, false); return false; });
var u299Ann = 
{
"label":"Log Out Link",
"Description":"Clicking link will log out the user. The user is kept on current page."};

u299.style.cursor = 'pointer';
if (bIE) u299.attachEvent("onclick", Clicku299);
else u299.addEventListener("click", Clicku299, true);
function Clicku299(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}
gv_vAlignTable['u299'] = 'top';
var u277 = document.getElementById('u277');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u277ann'), "<div id='u277Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u277Note').click(function(e) { ToggleWorkflow(e, 'u277', 300, 150, false); return false; });
var u277Ann = 
{
"label":"Rush Charge More Info Layer",
"Description":"Displays Information about Next Day Rush charge."};

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u150 = document.getElementById('u150');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u157 = document.getElementById('u157');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u157ann'), "<div id='u157Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u157Note').click(function(e) { ToggleWorkflow(e, 'u157', 300, 150, false); return false; });
var u157Ann = 
{
"label":"Go Back Link",
"Description":"Link takes user back to the shopping cart."};

u157.style.cursor = 'pointer';
if (bIE) u157.attachEvent("onclick", Clicku157);
else u157.addEventListener("click", Clicku157, true);
function Clicku157(e)
{
windowEvent = e;


if (true) {

	self.location.href="Residential_Cart.html" + GetQuerystring();

}

}
gv_vAlignTable['u157'] = 'top';
var u158 = document.getElementById('u158');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u158ann'), "<div id='u158Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u158Note').click(function(e) { ToggleWorkflow(e, 'u158', 300, 150, false); return false; });
var u158Ann = 
{
"label":"Proceed to Billing Button",
"Description":"Takes user to Billing Contact page."};

u158.style.cursor = 'pointer';
if (bIE) u158.attachEvent("onclick", Clicku158);
else u158.addEventListener("click", Clicku158, true);
function Clicku158(e)
{
windowEvent = e;


if (true) {

	self.location.href="Billing_Contact_Not_Logged_In.html" + GetQuerystring();

}

}

var u159 = document.getElementById('u159');

var u234 = document.getElementById('u234');

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u284 = document.getElementById('u284');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u284ann'), "<div id='u284Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u284Note').click(function(e) { ToggleWorkflow(e, 'u284', 300, 150, false); return false; });
var u284Ann = 
{
"label":"Reset Password Button",
"Description":"Clicking button will take user to Password Reset page (R2)."};

u284.style.cursor = 'pointer';
if (bIE) u284.attachEvent("onclick", Clicku284);
else u284.addEventListener("click", Clicku284, true);
function Clicku284(e)
{
windowEvent = e;


if (true) {

	self.location.href="Reset_Password.html" + GetQuerystring();

}

}

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u287 = document.getElementById('u287');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u161 = document.getElementById('u161');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u168 = document.getElementById('u168');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u294 = document.getElementById('u294');

var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'top';
var u296 = document.getElementById('u296');

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u173 = document.getElementById('u173');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u177 = document.getElementById('u177');

var u178 = document.getElementById('u178');

var u179 = document.getElementById('u179');

var u251 = document.getElementById('u251');

var u252 = document.getElementById('u252');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u252ann'), "<div id='u252Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u252Note').click(function(e) { ToggleWorkflow(e, 'u252', 300, 150, false); return false; });
var u252Ann = 
{
"label":"More Info link",
"Description":"Hover displays rush charge overlay."};

if (bIE) u252.attachEvent("onmouseover", MouseOveru252);
else u252.addEventListener("mouseover", MouseOveru252, true);
function MouseOveru252(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u252',e)) return;
if (true) {

	SetPanelVisibility('u277','','none',500);

}

}

var u253 = document.getElementById('u253');

var u72 = document.getElementById('u72');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u72ann'), "<div id='u72Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u72Note').click(function(e) { ToggleWorkflow(e, 'u72', 300, 150, false); return false; });
var u72Ann = 
{
"label":"Clickable accordian bar",
"Description":"Clicking expands the product section."};

u72.style.cursor = 'pointer';
if (bIE) u72.attachEvent("onclick", Clicku72);
else u72.addEventListener("click", Clicku72, true);
function Clicku72(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u10', 'pd1u10','none','','500','none','','500');

}

}

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u74 = document.getElementById('u74');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u76 = document.getElementById('u76');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u76ann'), "<div id='u76Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u76Note').click(function(e) { ToggleWorkflow(e, 'u76', 300, 150, false); return false; });
var u76Ann = 
{
"label":"Clickable accordian bar",
"Description":"Clicking expands the product section."};

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u10', 'pd3u10','none','','500','none','','500');

}

}

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u78 = document.getElementById('u78');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u180 = document.getElementById('u180');

var u181 = document.getElementById('u181');

var u182 = document.getElementById('u182');

var u183 = document.getElementById('u183');

var u184 = document.getElementById('u184');

var u185 = document.getElementById('u185');

var u186 = document.getElementById('u186');

var u187 = document.getElementById('u187');

var u188 = document.getElementById('u188');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u82 = document.getElementById('u82');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u190 = document.getElementById('u190');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u192 = document.getElementById('u192');

u192.style.cursor = 'pointer';
if (bIE) u192.attachEvent("onclick", Clicku192);
else u192.addEventListener("click", Clicku192, true);
function Clicku192(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u10', 'pd2u10','none','','500','none','','500');

}

}

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u194 = document.getElementById('u194');

u194.style.cursor = 'pointer';
if (bIE) u194.attachEvent("onclick", Clicku194);
else u194.addEventListener("click", Clicku194, true);
function Clicku194(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u10', 'pd3u10','none','','500','none','','500');

}

}

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u196 = document.getElementById('u196');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u198 = document.getElementById('u198');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u276 = document.getElementById('u276');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u98 = document.getElementById('u98');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u98ann'), "<div id='u98Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u98Note').click(function(e) { ToggleWorkflow(e, 'u98', 300, 150, false); return false; });
var u98Ann = 
{
"label":"Go Back Link",
"Description":"Link takes user back to the shopping cart."};

u98.style.cursor = 'pointer';
if (bIE) u98.attachEvent("onclick", Clicku98);
else u98.addEventListener("click", Clicku98, true);
function Clicku98(e)
{
windowEvent = e;


if (true) {

	self.location.href="Residential_Cart.html" + GetQuerystring();

}

}
gv_vAlignTable['u98'] = 'top';
var u99 = document.getElementById('u99');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u99ann'), "<div id='u99Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u99Note').click(function(e) { ToggleWorkflow(e, 'u99', 300, 150, false); return false; });
var u99Ann = 
{
"label":"Proceed to Billing Button",
"Description":"Takes user to Billing Contact page."};

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{
windowEvent = e;


if (true) {

	self.location.href="Billing_Contact_Not_Logged_In.html" + GetQuerystring();

}

}

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

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u8 = document.getElementById('u8');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u240 = document.getElementById('u240');

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u243 = document.getElementById('u243');

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u11ann'), "<div id='u11Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u11Note').click(function(e) { ToggleWorkflow(e, 'u11', 300, 150, false); return false; });
var u11Ann = 
{
"label":"?",
"Description":"Clicking expands the product section."};

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u10', 'pd1u10','none','','500','none','','500');

}

}

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u15 = document.getElementById('u15');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u15ann'), "<div id='u15Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u15Note').click(function(e) { ToggleWorkflow(e, 'u15', 300, 150, false); return false; });
var u15Ann = 
{
"label":"Clickable accordian bar",
"Description":"Clicking expands the product section."};

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u10', 'pd2u10','none','','500','none','','500');

}

}

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u19 = document.getElementById('u19');

var u300 = document.getElementById('u300');

u300.style.cursor = 'pointer';
if (bIE) u300.attachEvent("onclick", Clicku300);
else u300.addEventListener("click", Clicku300, true);
function Clicku300(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u283', 'pd2u283','none','','500','none','','500');

}

}
gv_vAlignTable['u300'] = 'top';
var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'top';
var u302 = document.getElementById('u302');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u114 = document.getElementById('u114');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u21 = document.getElementById('u21');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u23 = document.getElementById('u23');

var u200 = document.getElementById('u200');

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u202 = document.getElementById('u202');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u204 = document.getElementById('u204');

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u206 = document.getElementById('u206');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u209 = document.getElementById('u209');

var u120 = document.getElementById('u120');

var u121 = document.getElementById('u121');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u264 = document.getElementById('u264');

var u265 = document.getElementById('u265');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u216 = document.getElementById('u216');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u216ann'), "<div id='u216Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u216Note').click(function(e) { ToggleWorkflow(e, 'u216', 300, 150, false); return false; });
var u216Ann = 
{
"label":"Go Back Link",
"Description":"Link takes user back to the make a payment - Information page."};

u216.style.cursor = 'pointer';
if (bIE) u216.attachEvent("onclick", Clicku216);
else u216.addEventListener("click", Clicku216, true);
function Clicku216(e)
{
windowEvent = e;


if (true) {

	self.location.href="javascript:history.back()";

}

}
gv_vAlignTable['u216'] = 'top';
var u217 = document.getElementById('u217');

var u218 = document.getElementById('u218');

var u219 = document.getElementById('u219');

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u271 = document.getElementById('u271');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u40 = document.getElementById('u40');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u40ann'), "<div id='u40Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u40Note').click(function(e) { ToggleWorkflow(e, 'u40', 300, 150, false); return false; });
var u40Ann = 
{
"label":"Proceed to Billing Button",
"Description":"Takes user to Billing Contact page."};

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{
windowEvent = e;


if (true) {

	self.location.href="Billing_Contact_Not_Logged_In.html" + GetQuerystring();

}

}

var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u43 = document.getElementById('u43');

var u220 = document.getElementById('u220');

var u221 = document.getElementById('u221');

var u222 = document.getElementById('u222');

var u223 = document.getElementById('u223');

var u224 = document.getElementById('u224');

var u225 = document.getElementById('u225');

var u226 = document.getElementById('u226');

var u227 = document.getElementById('u227');

var u228 = document.getElementById('u228');

var u229 = document.getElementById('u229');

var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
var u281 = document.getElementById('u281');

u281.style.cursor = 'pointer';
if (bIE) u281.attachEvent("onclick", Clicku281);
else u281.addEventListener("click", Clicku281, true);
function Clicku281(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u277','hidden','none',500);

}

}

var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u283 = document.getElementById('u283');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u283ann'), "<div id='u283Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u283Note').click(function(e) { ToggleWorkflow(e, 'u283', 300, 150, false); return false; });
var u283Ann = 
{
"label":"Inline Log In Box",
"Description":"User can log in during the checkout process."};

var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'top';
var u291 = document.getElementById('u291');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u291ann'), "<div id='u291Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u291Note').click(function(e) { ToggleWorkflow(e, 'u291', 300, 150, false); return false; });
var u291Ann = 
{
"label":"Log In Button",
"Description":"Clicking button logs in user. User is kept on current page, not taken to My Account."};

u291.style.cursor = 'pointer';
if (bIE) u291.attachEvent("onclick", u291Click);
else u291.addEventListener("click", u291Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u291LinksClick'></DIV>")
var u291LinksClick = document.getElementById('u291LinksClick');
function u291Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u291LinksClick');
}

InsertBeforeEnd(u291LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u291Clicku994ff3f5e71c49fcbfe012c7e002ccda(event)'>Log In</div>");
function u291Clicku994ff3f5e71c49fcbfe012c7e002ccda(e)
{

	SetPanelState('u283', 'pd1u283','none','','500','none','','500');

	ToggleLinks(e, 'u291LinksClick');
}

InsertBeforeEnd(u291LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u291Clicku009de2c78269443ba2d7ef5b5a841fcb(event)'>Incorrect Log In</div>");
function u291Clicku009de2c78269443ba2d7ef5b5a841fcb(e)
{

	SetPanelState('u283', 'pd3u283','none','','500','none','','500');

	ToggleLinks(e, 'u291LinksClick');
}

InsertBeforeEnd(u291LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u291Clicku12adbfa62e2948a2a201163d38a4aa0a(event)'>Incorrect Log In 10x</div>");
function u291Clicku12adbfa62e2948a2a201163d38a4aa0a(e)
{

	SetPanelState('u283', 'pd4u283','none','','500','none','','500');

	ToggleLinks(e, 'u291LinksClick');
}

var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u60 = document.getElementById('u60');

var u61 = document.getElementById('u61');

var u62 = document.getElementById('u62');

var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');

var u65 = document.getElementById('u65');

var u66 = document.getElementById('u66');

var u67 = document.getElementById('u67');

var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
if (window.OnLoad) OnLoad();
