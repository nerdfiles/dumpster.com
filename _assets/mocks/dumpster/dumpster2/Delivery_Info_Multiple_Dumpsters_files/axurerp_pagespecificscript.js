
var PageName = 'Delivery Info Multiple Dumpsters';
var PageId = 'ca2a23a143634e4ba930f47048f88653'
var PageUrl = 'Delivery_Info_Multiple_Dumpsters.html'
document.title = 'Delivery Info Multiple Dumpsters';
var PageNotes = 
{
"pageName":"Delivery Info Multiple Dumpsters",
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

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u71 = document.getElementById('u71');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u252 = document.getElementById('u252');

var u105 = document.getElementById('u105');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u105ann'), "<div id='u105Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u105Note').click(function(e) { ToggleWorkflow(e, 'u105', 300, 150, false); return false; });
var u105Ann = 
{
"label":"Proceed to Billing Button",
"Description":"Takes user to Billing Contact page."};

u105.style.cursor = 'pointer';
if (bIE) u105.attachEvent("onclick", Clicku105);
else u105.addEventListener("click", Clicku105, true);
function Clicku105(e)
{
windowEvent = e;


if (true) {

	self.location.href="Billing_Contact_Not_Logged_In.html" + GetQuerystring();

}

}

var u106 = document.getElementById('u106');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u108 = document.getElementById('u108');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u258 = document.getElementById('u258');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
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

var u115 = document.getElementById('u115');

var u88 = document.getElementById('u88');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u90 = document.getElementById('u90');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u120 = document.getElementById('u120');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u124 = document.getElementById('u124');

var u125 = document.getElementById('u125');

var u126 = document.getElementById('u126');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u128 = document.getElementById('u128');

var u129 = document.getElementById('u129');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
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

var u131 = document.getElementById('u131');

var u132 = document.getElementById('u132');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u132ann'), "<div id='u132Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u132Note').click(function(e) { ToggleWorkflow(e, 'u132', 300, 150, false); return false; });
var u132Ann = 
{
"label":"Use WM account checkbox",
"Description":"Deselecting removes prefilled content from delivery fields."};

u132.style.cursor = 'pointer';
if (bIE) u132.attachEvent("onclick", Clicku132);
else u132.addEventListener("click", Clicku132, true);
function Clicku132(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u124', 'pd0u124','none','','500','none','','500');

}

}

var u133 = document.getElementById('u133');

var u134 = document.getElementById('u134');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u136 = document.getElementById('u136');

var u137 = document.getElementById('u137');

var u138 = document.getElementById('u138');

var u139 = document.getElementById('u139');

var u288 = document.getElementById('u288');

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
gv_vAlignTable['u304'] = 'top';
var u305 = document.getElementById('u305');

u305.style.cursor = 'pointer';
if (bIE) u305.attachEvent("onclick", Clicku305);
else u305.addEventListener("click", Clicku305, true);
function Clicku305(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u301','hidden','none',500);

}

}

var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u140 = document.getElementById('u140');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u140ann'), "<div id='u140Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u140Note').click(function(e) { ToggleWorkflow(e, 'u140', 300, 150, false); return false; });
var u140Ann = 
{
"label":"Use WM account checkbox",
"Description":"Selecting provides prefilled content to delivery fields."};

u140.style.cursor = 'pointer';
if (bIE) u140.attachEvent("onclick", Clicku140);
else u140.addEventListener("click", Clicku140, true);
function Clicku140(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u124', 'pd1u124','none','','500','none','','500');

}

}

var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u143 = document.getElementById('u143');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u145 = document.getElementById('u145');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u145ann'), "<div id='u145Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u145Note').click(function(e) { ToggleWorkflow(e, 'u145', 300, 150, false); return false; });
var u145Ann = 
{
"label":"Clickable accordian bar",
"Description":"Clicking expands the product section."};

u145.style.cursor = 'pointer';
if (bIE) u145.attachEvent("onclick", Clicku145);
else u145.addEventListener("click", Clicku145, true);
function Clicku145(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u10', 'pd2u10','none','','500','none','','500');

}

}

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u147 = document.getElementById('u147');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u147ann'), "<div id='u147Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u147Note').click(function(e) { ToggleWorkflow(e, 'u147', 300, 150, false); return false; });
var u147Ann = 
{
"label":"Clickable accordian bar",
"Description":"Clicking expands the product section."};

u147.style.cursor = 'pointer';
if (bIE) u147.attachEvent("onclick", Clicku147);
else u147.addEventListener("click", Clicku147, true);
function Clicku147(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u10', 'pd3u10','none','','500','none','','500');

}

}

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u149 = document.getElementById('u149');

var u275 = document.getElementById('u275');

var u276 = document.getElementById('u276');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u276ann'), "<div id='u276Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u276Note').click(function(e) { ToggleWorkflow(e, 'u276', 300, 150, false); return false; });
var u276Ann = 
{
"label":"More Info link",
"Description":"Hover displays rush charge overlay."};

if (bIE) u276.attachEvent("onmouseover", MouseOveru276);
else u276.addEventListener("mouseover", MouseOveru276, true);
function MouseOveru276(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u276',e)) return;
if (true) {

	SetPanelVisibility('u301','','none',500);

}

}

var u277 = document.getElementById('u277');

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
var u313 = document.getElementById('u313');

var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'top';
var u315 = document.getElementById('u315');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u315ann'), "<div id='u315Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u315Note').click(function(e) { ToggleWorkflow(e, 'u315', 300, 150, false); return false; });
var u315Ann = 
{
"label":"Log In Button",
"Description":"Clicking button logs in user. User is kept on current page, not taken to My Account."};

u315.style.cursor = 'pointer';
if (bIE) u315.attachEvent("onclick", u315Click);
else u315.addEventListener("click", u315Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u315LinksClick'></DIV>")
var u315LinksClick = document.getElementById('u315LinksClick');
function u315Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u315LinksClick');
}

InsertBeforeEnd(u315LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u315Clicku994ff3f5e71c49fcbfe012c7e002ccda(event)'>Log In</div>");
function u315Clicku994ff3f5e71c49fcbfe012c7e002ccda(e)
{

	SetPanelState('u307', 'pd0u307','none','','500','none','','500');

	ToggleLinks(e, 'u315LinksClick');
}

InsertBeforeEnd(u315LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u315Clicku009de2c78269443ba2d7ef5b5a841fcb(event)'>Incorrect Log In</div>");
function u315Clicku009de2c78269443ba2d7ef5b5a841fcb(e)
{

	SetPanelState('u307', 'pd3u307','none','','500','none','','500');

	ToggleLinks(e, 'u315LinksClick');
}

InsertBeforeEnd(u315LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u315Clicku12adbfa62e2948a2a201163d38a4aa0a(event)'>Incorrect Log In 10x</div>");
function u315Clicku12adbfa62e2948a2a201163d38a4aa0a(e)
{

	SetPanelState('u307', 'pd4u307','none','','500','none','','500');

	ToggleLinks(e, 'u315LinksClick');
}

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u151 = document.getElementById('u151');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u153 = document.getElementById('u153');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u155 = document.getElementById('u155');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u157 = document.getElementById('u157');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u159 = document.getElementById('u159');

var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
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

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u162 = document.getElementById('u162');

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
gv_vAlignTable['u168'] = 'top';
var u169 = document.getElementById('u169');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u169ann'), "<div id='u169Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u169Note').click(function(e) { ToggleWorkflow(e, 'u169', 300, 150, false); return false; });
var u169Ann = 
{
"label":"Go Back Link",
"Description":"Link takes user back to the shopping cart."};

u169.style.cursor = 'pointer';
if (bIE) u169.attachEvent("onclick", Clicku169);
else u169.addEventListener("click", Clicku169, true);
function Clicku169(e)
{
windowEvent = e;


if (true) {

	self.location.href="Residential_Cart.html" + GetQuerystring();

}

}
gv_vAlignTable['u169'] = 'top';
var u64 = document.getElementById('u64');

var u65 = document.getElementById('u65');

var u66 = document.getElementById('u66');

var u67 = document.getElementById('u67');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u67ann'), "<div id='u67Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u67Note').click(function(e) { ToggleWorkflow(e, 'u67', 300, 150, false); return false; });
var u67Ann = 
{
"label":"Use WM account checkbox",
"Description":"Deselecting removes prefilled content from delivery fields."};

u67.style.cursor = 'pointer';
if (bIE) u67.attachEvent("onclick", Clicku67);
else u67.addEventListener("click", Clicku67, true);
function Clicku67(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u59', 'pd0u59','none','','500','none','','500');

}

}

var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');

var u170 = document.getElementById('u170');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u170ann'), "<div id='u170Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u170Note').click(function(e) { ToggleWorkflow(e, 'u170', 300, 150, false); return false; });
var u170Ann = 
{
"label":"Proceed to Billing Button",
"Description":"Takes user to Billing Contact page."};

u170.style.cursor = 'pointer';
if (bIE) u170.attachEvent("onclick", Clicku170);
else u170.addEventListener("click", Clicku170, true);
function Clicku170(e)
{
windowEvent = e;


if (true) {

	self.location.href="Billing_Contact_Not_Logged_In.html" + GetQuerystring();

}

}

var u171 = document.getElementById('u171');

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
gv_vAlignTable['u177'] = 'top';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u253 = document.getElementById('u253');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u253ann'), "<div id='u253Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u253Note').click(function(e) { ToggleWorkflow(e, 'u253', 300, 150, false); return false; });
var u253Ann = 
{
"label":"Use WM account checkbox",
"Description":"Selecting provides prefilled content to delivery fields."};

u253.style.cursor = 'pointer';
if (bIE) u253.attachEvent("onclick", Clicku253);
else u253.addEventListener("click", Clicku253, true);
function Clicku253(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u237', 'pd1u237','none','','500','none','','500');

}

}

var u72 = document.getElementById('u72');

var u73 = document.getElementById('u73');

var u74 = document.getElementById('u74');

var u75 = document.getElementById('u75');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u75ann'), "<div id='u75Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u75Note').click(function(e) { ToggleWorkflow(e, 'u75', 300, 150, false); return false; });
var u75Ann = 
{
"label":"Use WM account checkbox",
"Description":"Selecting provides prefilled content to delivery fields."};

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u59', 'pd1u59','none','','500','none','','500');

}

}

var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u78 = document.getElementById('u78');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u78ann'), "<div id='u78Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u78Note').click(function(e) { ToggleWorkflow(e, 'u78', 300, 150, false); return false; });
var u78Ann = 
{
"label":"Clickable accordian bar",
"Description":"Clicking expands the product section."};

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u10', 'pd1u10','none','','500','none','','500');

}

}

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u180 = document.getElementById('u180');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u185 = document.getElementById('u185');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u189 = document.getElementById('u189');

var u307 = document.getElementById('u307');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u307ann'), "<div id='u307Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u307Note').click(function(e) { ToggleWorkflow(e, 'u307', 300, 150, false); return false; });
var u307Ann = 
{
"label":"Inline Log In Box",
"Description":"User can log in during the checkout process."};

var u308 = document.getElementById('u308');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u308ann'), "<div id='u308Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u308Note').click(function(e) { ToggleWorkflow(e, 'u308', 300, 150, false); return false; });
var u308Ann = 
{
"label":"Reset Password Button",
"Description":"Clicking button will take user to Password Reset page (R2)."};

u308.style.cursor = 'pointer';
if (bIE) u308.attachEvent("onclick", Clicku308);
else u308.addEventListener("click", Clicku308, true);
function Clicku308(e)
{
windowEvent = e;


if (true) {

	self.location.href="Reset_Password.html" + GetQuerystring();

}

}

var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'top';
var u82 = document.getElementById('u82');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u82ann'), "<div id='u82Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u82Note').click(function(e) { ToggleWorkflow(e, 'u82', 300, 150, false); return false; });
var u82Ann = 
{
"label":"Clickable accordian bar",
"Description":"Clicking expands the product section."};

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u10', 'pd3u10','none','','500','none','','500');

}

}

var u267 = document.getElementById('u267');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u190 = document.getElementById('u190');

var u191 = document.getElementById('u191');

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u193 = document.getElementById('u193');

var u194 = document.getElementById('u194');

var u195 = document.getElementById('u195');

var u196 = document.getElementById('u196');

var u197 = document.getElementById('u197');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u197ann'), "<div id='u197Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u197Note').click(function(e) { ToggleWorkflow(e, 'u197', 300, 150, false); return false; });
var u197Ann = 
{
"label":"Use WM account checkbox",
"Description":"Deselecting removes prefilled content from delivery fields."};

u197.style.cursor = 'pointer';
if (bIE) u197.attachEvent("onclick", Clicku197);
else u197.addEventListener("click", Clicku197, true);
function Clicku197(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u189', 'pd0u189','none','','500','none','','500');

}

}

var u198 = document.getElementById('u198');

var u199 = document.getElementById('u199');

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'top';
var u318 = document.getElementById('u318');

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'top';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u92 = document.getElementById('u92');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u94 = document.getElementById('u94');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u97 = document.getElementById('u97');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u320 = document.getElementById('u320');

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u322 = document.getElementById('u322');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u322ann'), "<div id='u322Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u322Note').click(function(e) { ToggleWorkflow(e, 'u322', 300, 150, false); return false; });
var u322Ann = 
{
"label":"Log In Button",
"Description":"Clicking button logs in user. User is kept on current page, not taken to My Account."};

u322.style.cursor = 'pointer';
if (bIE) u322.attachEvent("onclick", u322Click);
else u322.addEventListener("click", u322Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u322LinksClick'></DIV>")
var u322LinksClick = document.getElementById('u322LinksClick');
function u322Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u322LinksClick');
}

InsertBeforeEnd(u322LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u322Clickuf5ecc2f755e04b53bb9ebc3b8d7c4c5f(event)'>Log In</div>");
function u322Clickuf5ecc2f755e04b53bb9ebc3b8d7c4c5f(e)
{

	SetPanelState('u307', 'pd0u307','none','','500','none','','500');

	ToggleLinks(e, 'u322LinksClick');
}

InsertBeforeEnd(u322LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u322Clickudcf9da0ad84a480f9774889679194988(event)'>Incorrect Password</div>");
function u322Clickudcf9da0ad84a480f9774889679194988(e)
{

	SetPanelState('u307', 'pd3u307','none','','500','none','','500');

	ToggleLinks(e, 'u322LinksClick');
}

InsertBeforeEnd(u322LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u322Clickucabbc28e1da740e6a77321ab88da46f5(event)'>Incorrect Password 10x</div>");
function u322Clickucabbc28e1da740e6a77321ab88da46f5(e)
{

	SetPanelState('u307', 'pd4u307','none','','500','none','','500');

	ToggleLinks(e, 'u322LinksClick');
}

InsertBeforeEnd(u322LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u322Clicku2ccf90cdf7d34673ac1df86723e30173(event)'>Customer Migration</div>");
function u322Clicku2ccf90cdf7d34673ac1df86723e30173(e)
{

	self.location.href="Customer_Migration.html" + GetQuerystring();

	ToggleLinks(e, 'u322LinksClick');
}

var u323 = document.getElementById('u323');

u323.style.cursor = 'pointer';
if (bIE) u323.attachEvent("onclick", Clicku323);
else u323.addEventListener("click", Clicku323, true);
function Clicku323(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u307', 'pd2u307','none','','500','none','','500');

}

}
gv_vAlignTable['u323'] = 'top';
var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'top';
var u325 = document.getElementById('u325');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u325ann'), "<div id='u325Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u325Note').click(function(e) { ToggleWorkflow(e, 'u325', 300, 150, false); return false; });
var u325Ann = 
{
"label":"Log Out Link",
"Description":"Clicking link will log out the user. The user is kept on current page."};

u325.style.cursor = 'pointer';
if (bIE) u325.attachEvent("onclick", Clicku325);
else u325.addEventListener("click", Clicku325, true);
function Clicku325(e)
{
windowEvent = e;


if (true) {

	self.location.href="Delivery_Info_Multiple_Dumpsters_Not_Logged_In.html" + GetQuerystring();

}

}
gv_vAlignTable['u325'] = 'top';
var u326 = document.getElementById('u326');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'center';
var u328 = document.getElementById('u328');

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
var u104 = document.getElementById('u104');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u104ann'), "<div id='u104Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u104Note').click(function(e) { ToggleWorkflow(e, 'u104', 300, 150, false); return false; });
var u104Ann = 
{
"label":"Go Back Link",
"Description":"Link takes user back to the shopping cart."};

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{
windowEvent = e;


if (true) {

	self.location.href="Residential_Cart.html" + GetQuerystring();

}

}
gv_vAlignTable['u104'] = 'top';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u295 = document.getElementById('u295');

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'top';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
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

var u301 = document.getElementById('u301');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u301ann'), "<div id='u301Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u301Note').click(function(e) { ToggleWorkflow(e, 'u301', 300, 150, false); return false; });
var u301Ann = 
{
"label":"Rush Charge More Info Layer",
"Description":"Displays Information about Next Day Rush charge."};

var u302 = document.getElementById('u302');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u250 = document.getElementById('u250');

var u251 = document.getElementById('u251');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
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
gv_vAlignTable['u200'] = 'top';
var u201 = document.getElementById('u201');

var u202 = document.getElementById('u202');

var u203 = document.getElementById('u203');

var u204 = document.getElementById('u204');

var u205 = document.getElementById('u205');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u205ann'), "<div id='u205Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u205Note').click(function(e) { ToggleWorkflow(e, 'u205', 300, 150, false); return false; });
var u205Ann = 
{
"label":"Use WM account checkbox",
"Description":"Selecting provides prefilled content to delivery fields."};

u205.style.cursor = 'pointer';
if (bIE) u205.attachEvent("onclick", Clicku205);
else u205.addEventListener("click", Clicku205, true);
function Clicku205(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u189', 'pd1u189','none','','500','none','','500');

}

}

var u206 = document.getElementById('u206');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u208 = document.getElementById('u208');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'top';
var u311 = document.getElementById('u311');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'top';
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
gv_vAlignTable['u265'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u210 = document.getElementById('u210');

u210.style.cursor = 'pointer';
if (bIE) u210.attachEvent("onclick", Clicku210);
else u210.addEventListener("click", Clicku210, true);
function Clicku210(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u10', 'pd2u10','none','','500','none','','500');

}

}

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u212 = document.getElementById('u212');

u212.style.cursor = 'pointer';
if (bIE) u212.attachEvent("onclick", Clicku212);
else u212.addEventListener("click", Clicku212, true);
function Clicku212(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u10', 'pd3u10','none','','500','none','','500');

}

}

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u214 = document.getElementById('u214');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u216 = document.getElementById('u216');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u218 = document.getElementById('u218');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
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
gv_vAlignTable['u221'] = 'center';
var u222 = document.getElementById('u222');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u224 = document.getElementById('u224');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u227 = document.getElementById('u227');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u283 = document.getElementById('u283');

var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u234 = document.getElementById('u234');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u234ann'), "<div id='u234Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u234Note').click(function(e) { ToggleWorkflow(e, 'u234', 300, 150, false); return false; });
var u234Ann = 
{
"label":"Go Back Link",
"Description":"Link takes user back to the make a payment - Information page."};

u234.style.cursor = 'pointer';
if (bIE) u234.attachEvent("onclick", Clicku234);
else u234.addEventListener("click", Clicku234, true);
function Clicku234(e)
{
windowEvent = e;


if (true) {

	self.location.href="javascript:history.back()";

}

}
gv_vAlignTable['u234'] = 'top';
var u235 = document.getElementById('u235');

var u236 = document.getElementById('u236');

var u237 = document.getElementById('u237');

var u238 = document.getElementById('u238');

var u239 = document.getElementById('u239');

var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u60 = document.getElementById('u60');

var u61 = document.getElementById('u61');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u63 = document.getElementById('u63');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u241 = document.getElementById('u241');

var u242 = document.getElementById('u242');

var u243 = document.getElementById('u243');

var u244 = document.getElementById('u244');

var u245 = document.getElementById('u245');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u245ann'), "<div id='u245Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u245Note').click(function(e) { ToggleWorkflow(e, 'u245', 300, 150, false); return false; });
var u245Ann = 
{
"label":"Use WM account checkbox",
"Description":"Deselecting removes prefilled content from delivery fields."};

u245.style.cursor = 'pointer';
if (bIE) u245.attachEvent("onclick", Clicku245);
else u245.addEventListener("click", Clicku245, true);
function Clicku245(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u237', 'pd0u237','none','','500','none','','500');

}

}

var u246 = document.getElementById('u246');

var u247 = document.getElementById('u247');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u249 = document.getElementById('u249');

if (window.OnLoad) OnLoad();
