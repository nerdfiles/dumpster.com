
var PageName = 'Profile Dashboard (w/ Account)';
var PageId = 'ae3b713fc58145d8bf899cf2afadabf2'
var PageUrl = 'Profile_Dashboard__w__Account_.html'
document.title = 'Profile Dashboard (w/ Account)';
var PageNotes = 
{
"pageName":"Profile Dashboard (w\/ Account)",
"showNotesNames":"False",
"Page Descriptions":"<p style=\"text-align:left;\"><span style=\"\">This page is displayed when a registered user creates an online account and links their EZPay account number to their profile.<\/span><\/p>",
"UC Reference":"<p style=\"text-align:left;\"><span style=\"\">UC_USER_09 - Profile Dashboard<\/span><\/p>"}
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

if ((GetGlobalVariableValue('$SegmentState')) == ('resi')) {

	SetPanelState('u36', 'pd2u36','none','','500','none','','500');

}
else
if ((GetGlobalVariableValue('$SegmentState')) == ('smbiz')) {

	SetPanelState('u36', 'pd1u36','none','','500','none','','500');

}

if (((GetGlobalVariableValue('$LoginPassword')) == ('waste1')) || (((GetGlobalVariableValue('$LoginPassword')) == ('dumpster2')) || (((GetGlobalVariableValue('$LoginPassword')) == ('recycle3')) || ((GetGlobalVariableValue('$LoginPassword')) == ('green4'))))) {

	SetPanelState('u88', 'pd2u88','none','','500','none','','500');

}

}

var u230 = document.getElementById('u230');

u230.style.cursor = 'pointer';
if (bIE) u230.attachEvent("onclick", Clicku230);
else u230.addEventListener("click", Clicku230, true);
function Clicku230(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u232 = document.getElementById('u232');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u70 = document.getElementById('u70');

u70.style.cursor = 'pointer';
if (bIE) u70.attachEvent("onclick", Clicku70);
else u70.addEventListener("click", Clicku70, true);
function Clicku70(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u71 = document.getElementById('u71');

u71.style.cursor = 'pointer';
if (bIE) u71.attachEvent("onclick", Clicku71);
else u71.addEventListener("click", Clicku71, true);
function Clicku71(e)
{
windowEvent = e;


if (true) {

SetGlobalVariableValue('$SegmentState', 'smbiz');

	self.location.href="#" + GetQuerystring();

}

}

var u100 = document.getElementById('u100');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u102 = document.getElementById('u102');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u104 = document.getElementById('u104');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u104ann'), "<div id='u104Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u104Note').click(function(e) { ToggleWorkflow(e, 'u104', 300, 150, false); return false; });
var u104Ann = 
{
"label":"?",
"Description":"Display &quot;Active&quot; state when user is on a My Account page."};

var u105 = document.getElementById('u105');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u107 = document.getElementById('u107');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u109 = document.getElementById('u109');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u109ann'), "<div id='u109Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u109Note').click(function(e) { ToggleWorkflow(e, 'u109', 300, 150, false); return false; });
var u109Ann = 
{
"label":"?",
"Description":"Display &quot;Inactive&quot; state when user is on a non-My WM Account page."};

var u258 = document.getElementById('u258');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u82 = document.getElementById('u82');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u84 = document.getElementById('u84');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u87 = document.getElementById('u87');

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$SegmentState')) == ('smbiz')) {

SetGlobalVariableValue('$SegmentState', 'smbiz');

	self.location.href="#" + GetQuerystring();

}
else
if (true) {

SetGlobalVariableValue('$SegmentState', 'resi');

	self.location.href="#" + GetQuerystring();

}

}

var u88 = document.getElementById('u88');

var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u183 = document.getElementById('u183');

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{
windowEvent = e;


if (true) {

SetGlobalVariableValue('$LoginPassword', 'none');

	self.location.href="#" + GetQuerystring();

}

}
gv_vAlignTable['u90'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u93 = document.getElementById('u93');

u93.style.cursor = 'pointer';
if (bIE) u93.attachEvent("onclick", Clicku93);
else u93.addEventListener("click", Clicku93, true);
function Clicku93(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u122 = document.getElementById('u122');

var u95 = document.getElementById('u95');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u97 = document.getElementById('u97');

var u98 = document.getElementById('u98');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u129 = document.getElementById('u129');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u279 = document.getElementById('u279');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u194 = document.getElementById('u194');

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u130 = document.getElementById('u130');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u130ann'), "<div id='u130Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u130Note').click(function(e) { ToggleWorkflow(e, 'u130', 300, 150, false); return false; });
var u130Ann = 
{
"label":"Navigation Section",
"Description":"This section contains task-based links to pages within WM Online and on WM.com (Public)."};

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
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
var u288 = document.getElementById('u288');

var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'center';
var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u140 = document.getElementById('u140');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u140ann'), "<div id='u140Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u140Note').click(function(e) { ToggleWorkflow(e, 'u140', 300, 150, false); return false; });
var u140Ann = 
{
"label":"View Bills &amp;amp; Payments Link",
"Description":"If user has one account linked, go to: Bill &amp; Payment History page<BR><BR>If user has multiple accounts linked, go to Bill &amp; Payment History page for the first account added to the user's profile.<BR><BR>If user does not have an account linked, go to: Add Account to Profile page (UC_ACCOUNT_5)",
"UC Reference":"UC_INVOICE_01, UC_ACCOUNT_5"};
gv_vAlignTable['u140'] = 'top';
var u141 = document.getElementById('u141');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u141ann'), "<div id='u141Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u141Note').click(function(e) { ToggleWorkflow(e, 'u141', 300, 150, false); return false; });
var u141Ann = 
{
"label":"Move or Cancel a Service",
"Description":"Link to: Request a Service page (wm.com)",
"UC Reference":"UC_ACCOUNT_08"};
gv_vAlignTable['u141'] = 'top';
var u142 = document.getElementById('u142');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u142ann'), "<div id='u142Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u142Note').click(function(e) { ToggleWorkflow(e, 'u142', 300, 150, false); return false; });
var u142Ann = 
{
"label":"View Holiday Schedule Link",
"Description":"If user has one account linked, go to: My Services page<BR><BR>If user has multiple accounts linked, go to My Services page for the first account added to the user's profile.<BR><BR>If user does not have an account linked, go to: Add Account to Profile page (UC_ACCOUNT_5)",
"UC Reference":"UC_ACCOUNT_02, UC_ACCOUNT_5"};
gv_vAlignTable['u142'] = 'top';
var u143 = document.getElementById('u143');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u143ann'), "<div id='u143Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u143Note').click(function(e) { ToggleWorkflow(e, 'u143', 300, 150, false); return false; });
var u143Ann = 
{
"label":"Request a Service",
"Description":"Link to: Request a Service page (wm.com)",
"UC Reference":"UC_ACCOUNT_08"};
gv_vAlignTable['u143'] = 'top';
var u144 = document.getElementById('u144');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u144ann'), "<div id='u144Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u144Note').click(function(e) { ToggleWorkflow(e, 'u144', 300, 150, false); return false; });
var u144Ann = 
{
"label":"Make a Payment Link",
"Description":"If user has one account linked, go to: Make a Payment (Registered)<BR><BR>If user has more than one account linked, go to: Make a Payment (Registered) w\/ Multiple Accounts<BR><BR>If user does not have an account linked, go to: Add Account to Profile page (UC_ACCOUNT_5)",
"UC Reference":"UC_PAYMENT_01, UC_ACCOUNT_05"};
gv_vAlignTable['u144'] = 'top';
var u145 = document.getElementById('u145');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u145ann'), "<div id='u145Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u145Note').click(function(e) { ToggleWorkflow(e, 'u145', 300, 150, false); return false; });
var u145Ann = 
{
"label":"View My Services Link",
"Description":"If user has one account linked, go to: My Services page<BR><BR>If user has multiple accounts linked, go to My Services page for the first account added to the user's profile.<BR><BR>If user does not have an account linked, go to: Add Account to Profile page (UC_ACCOUNT_5)",
"UC Reference":"UC_ACCOUNT_03, UC_ACCOUNT_5"};
gv_vAlignTable['u145'] = 'top';
var u146 = document.getElementById('u146');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u146ann'), "<div id='u146Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u146Note').click(function(e) { ToggleWorkflow(e, 'u146', 300, 150, false); return false; });
var u146Ann = 
{
"label":"Update Billing Info Link",
"Description":"If user has one or more accounts linked, go to: Manage Account page.<BR><BR>If user does not have an account linked, go to: Add Account to Profile page (UC_ACCOUNT_5)",
"UC Reference":"UC_ACCOUNT_02, UC_ACCOUNT_5"};
gv_vAlignTable['u146'] = 'top';
var u147 = document.getElementById('u147');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u147ann'), "<div id='u147Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u147Note').click(function(e) { ToggleWorkflow(e, 'u147', 300, 150, false); return false; });
var u147Ann = 
{
"label":"View all Products &amp;amp; Services Link",
"Description":"Link to: WM.com Products &amp; Services (exact landing page determined by cookie)",
"UC Reference":"None"};
gv_vAlignTable['u147'] = 'top';
var u148 = document.getElementById('u148');

var u149 = document.getElementById('u149');

var u298 = document.getElementById('u298');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u277 = document.getElementById('u277');

var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'center';
var u150 = document.getElementById('u150');

var u151 = document.getElementById('u151');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u151ann'), "<div id='u151Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u151Note').click(function(e) { ToggleWorkflow(e, 'u151', 300, 150, false); return false; });
var u151Ann = 
{
"label":"Online Activity and Alerts",
"Description":"This flexible section will contain the last 5 activity notices or alerts. For instance, requests and messages sent from the website will be shown here."};

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u153 = document.getElementById('u153');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u153ann'), "<div id='u153Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u153Note').click(function(e) { ToggleWorkflow(e, 'u153', 300, 150, false); return false; });
var u153Ann = 
{
"label":"User Profile Information",
"Description":"This section will contain user profile information including email address and full name (if available)"};

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u155 = document.getElementById('u155');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u157 = document.getElementById('u157');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u234 = document.getElementById('u234');

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u284 = document.getElementById('u284');

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
var u286 = document.getElementById('u286');

u286.style.cursor = 'pointer';
if (bIE) u286.attachEvent("onclick", Clicku286);
else u286.addEventListener("click", Clicku286, true);
function Clicku286(e)
{
windowEvent = e;


if (true) {

}

}

var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u161 = document.getElementById('u161');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u161ann'), "<div id='u161Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u161Note').click(function(e) { ToggleWorkflow(e, 'u161', 300, 150, false); return false; });
var u161Ann = 
{
"label":"Edit Profile Link",
"Description":"Link to: User Profile page",
"UC Reference":"UC_USER_07"};
gv_vAlignTable['u161'] = 'top';
var u162 = document.getElementById('u162');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u162ann'), "<div id='u162Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u162Note').click(function(e) { ToggleWorkflow(e, 'u162', 300, 150, false); return false; });
var u162Ann = 
{
"label":"Manage Saved Payment Methods Link",
"Description":"Link to: Saved Payment Methods page",
"UC Reference":"UC_PAYMENT_07"};
gv_vAlignTable['u162'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u165 = document.getElementById('u165');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u165ann'), "<div id='u165Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u165Note').click(function(e) { ToggleWorkflow(e, 'u165', 300, 150, false); return false; });
var u165Ann = 
{
"label":"Online Activity and Alerts",
"Description":"This flexible section will contain the last 5 activity notices or alerts. For instance, requests and messages sent from the website will be shown here."};

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u167 = document.getElementById('u167');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u167ann'), "<div id='u167Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u167Note').click(function(e) { ToggleWorkflow(e, 'u167', 300, 150, false); return false; });
var u167Ann = 
{
"label":"User Profile Information",
"Description":"This section will contain user profile information including email address and full name (if available)"};

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u169 = document.getElementById('u169');

var u242 = document.getElementById('u242');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u244 = document.getElementById('u244');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u276 = document.getElementById('u276');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u171 = document.getElementById('u171');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u173 = document.getElementById('u173');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u173ann'), "<div id='u173Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u173Note').click(function(e) { ToggleWorkflow(e, 'u173', 300, 150, false); return false; });
var u173Ann = 
{
"label":"User Email Address",
"Description":"User Email Address (display only)"};
gv_vAlignTable['u173'] = 'top';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u176 = document.getElementById('u176');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u176ann'), "<div id='u176Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u176Note').click(function(e) { ToggleWorkflow(e, 'u176', 300, 150, false); return false; });
var u176Ann = 
{
"label":"Activity Line Item",
"Description":"Date and description of Activity (display only)"};
gv_vAlignTable['u176'] = 'top';
var u177 = document.getElementById('u177');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u177ann'), "<div id='u177Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u177Note').click(function(e) { ToggleWorkflow(e, 'u177', 300, 150, false); return false; });
var u177Ann = 
{
"label":"Edit Profile Link",
"Description":"Link to: User Profile page",
"UC Reference":"UC_USER_07"};
gv_vAlignTable['u177'] = 'top';
var u178 = document.getElementById('u178');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u178ann'), "<div id='u178Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u178Note').click(function(e) { ToggleWorkflow(e, 'u178', 300, 150, false); return false; });
var u178Ann = 
{
"label":"Manage Saved Payment Methods Link",
"Description":"Link to: Saved Payment Methods page",
"UC Reference":"UC_PAYMENT_07"};
gv_vAlignTable['u178'] = 'top';
var u179 = document.getElementById('u179');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u179ann'), "<div id='u179Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u179Note').click(function(e) { ToggleWorkflow(e, 'u179', 300, 150, false); return false; });
var u179Ann = 
{
"label":"Edit Profile or Change Pass Link",
"Description":"Link takes user to My Profile - Edit page."};

var u268 = document.getElementById('u268');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u252 = document.getElementById('u252');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u185 = document.getElementById('u185');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u200 = document.getElementById('u200');

var u72 = document.getElementById('u72');

var u73 = document.getElementById('u73');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u75 = document.getElementById('u75');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u77 = document.getElementById('u77');

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u78 = document.getElementById('u78');

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u79 = document.getElementById('u79');

var u180 = document.getElementById('u180');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u180ann'), "<div id='u180Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u180Note').click(function(e) { ToggleWorkflow(e, 'u180', 300, 150, false); return false; });
var u180Ann = 
{
"label":"Manage Saved Payment Methods Link",
"Description":"Link takes user to Saved Payment Methods page."};

var u181 = document.getElementById('u181');

var u182 = document.getElementById('u182');

var u300 = document.getElementById('u300');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u302 = document.getElementById('u302');

var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u304 = document.getElementById('u304');

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u306 = document.getElementById('u306');

u306.style.cursor = 'pointer';
if (bIE) u306.attachEvent("onclick", Clicku306);
else u306.addEventListener("click", Clicku306, true);
function Clicku306(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'center';
var u308 = document.getElementById('u308');

var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'center';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u262 = document.getElementById('u262');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u275 = document.getElementById('u275');

var u210 = document.getElementById('u210');

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

	self.location.href="#" + GetQuerystring();

}

}

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u214 = document.getElementById('u214');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u352 = document.getElementById('u352');

var u353 = document.getElementById('u353');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u353ann'), "<div id='u353Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u353Note').click(function(e) { ToggleWorkflow(e, 'u353', 300, 150, false); return false; });
var u353Ann = 
{
"label":"Group Promos",
"Description":"These three promos should be defined as a segment group (ie, resi, small biz, enterprise) within teamsite and appear on this page according to the segment value in the cookie."};

var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'top';
var u355 = document.getElementById('u355');

var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'center';
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

}

}

var u310 = document.getElementById('u310');

var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'center';
var u312 = document.getElementById('u312');

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'center';
var u314 = document.getElementById('u314');

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'center';
var u316 = document.getElementById('u316');

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u318 = document.getElementById('u318');

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'center';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u272 = document.getElementById('u272');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u220 = document.getElementById('u220');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u222 = document.getElementById('u222');

var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u224 = document.getElementById('u224');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u320 = document.getElementById('u320');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u320ann'), "<div id='u320Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u320Note').click(function(e) { ToggleWorkflow(e, 'u320', 300, 150, false); return false; });
var u320Ann = 
{
"label":"Make Payment - Link",
"Description":"Links User to make a payment - registered user.<BR>"};

u320.style.cursor = 'pointer';
if (bIE) u320.attachEvent("onclick", Clicku320);
else u320.addEventListener("click", Clicku320, true);
function Clicku320(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'center';
var u322 = document.getElementById('u322');

var u323 = document.getElementById('u323');

var u324 = document.getElementById('u324');

var u325 = document.getElementById('u325');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u325ann'), "<div id='u325Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u325Note').click(function(e) { ToggleWorkflow(e, 'u325', 300, 150, false); return false; });
var u325Ann = 
{
"label":"SignUp Link",
"Description":"Takes user to the automatic payments (not enrolled) screen.<BR>"};

u325.style.cursor = 'pointer';
if (bIE) u325.attachEvent("onclick", Clicku325);
else u325.addEventListener("click", Clicku325, true);
function Clicku325(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'center';
var u327 = document.getElementById('u327');

var u328 = document.getElementById('u328');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u328ann'), "<div id='u328Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u328Note').click(function(e) { ToggleWorkflow(e, 'u328', 300, 150, false); return false; });
var u328Ann = 
{
"label":"SignUp Link",
"Description":"Takes user to the automatic payments (not enrolled) screen.<BR>"};

u328.style.cursor = 'pointer';
if (bIE) u328.attachEvent("onclick", Clicku328);
else u328.addEventListener("click", Clicku328, true);
function Clicku328(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
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

var u330 = document.getElementById('u330');

var u331 = document.getElementById('u331');

var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'center';
var u333 = document.getElementById('u333');

var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'center';
var u335 = document.getElementById('u335');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'top';
var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'top';
var u339 = document.getElementById('u339');

var u274 = document.getElementById('u274');

var u240 = document.getElementById('u240');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u294 = document.getElementById('u294');

var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u296 = document.getElementById('u296');

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u19 = document.getElementById('u19');

var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'center';
var u345 = document.getElementById('u345');

var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'center';
var u347 = document.getElementById('u347');

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'center';
var u341 = document.getElementById('u341');

var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'center';
var u343 = document.getElementById('u343');

var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u113 = document.getElementById('u113');

var u114 = document.getElementById('u114');

var u250 = document.getElementById('u250');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u254 = document.getElementById('u254');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u256 = document.getElementById('u256');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u21 = document.getElementById('u21');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
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

var u206 = document.getElementById('u206');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u208 = document.getElementById('u208');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u350 = document.getElementById('u350');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u350ann'), "<div id='u350Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u350Note').click(function(e) { ToggleWorkflow(e, 'u350', 300, 150, false); return false; });
var u350Ann = 
{
"label":"Local Information Module",
"Description":"R1 Component",
"UC Reference":"None"};

var u120 = document.getElementById('u120');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u123 = document.getElementById('u123');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u125 = document.getElementById('u125');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u189 = document.getElementById('u189');

var u264 = document.getElementById('u264');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u31 = document.getElementById('u31');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u35 = document.getElementById('u35');

var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u39 = document.getElementById('u39');

var u216 = document.getElementById('u216');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u218 = document.getElementById('u218');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u202 = document.getElementById('u202');

var u266 = document.getElementById('u266');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u132 = document.getElementById('u132');

var u204 = document.getElementById('u204');

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u270 = document.getElementById('u270');

u270.style.cursor = 'pointer';
if (bIE) u270.attachEvent("onclick", Clicku270);
else u270.addEventListener("click", Clicku270, true);
function Clicku270(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u196 = document.getElementById('u196');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u198 = document.getElementById('u198');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u45 = document.getElementById('u45');

var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u48 = document.getElementById('u48');

u48.style.cursor = 'pointer';
if (bIE) u48.attachEvent("onclick", Clicku48);
else u48.addEventListener("click", Clicku48, true);
function Clicku48(e)
{
windowEvent = e;


if (true) {

SetGlobalVariableValue('$SegmentState', 'resi');

	self.location.href="#" + GetQuerystring();

}

}

var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{
windowEvent = e;


if (true) {

SetGlobalVariableValue('$SegmentState', 'smbiz');

	self.location.href="#" + GetQuerystring();

}

}

var u226 = document.getElementById('u226');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u228 = document.getElementById('u228');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u260 = document.getElementById('u260');

var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u283 = document.getElementById('u283');

var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u52 = document.getElementById('u52');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u59 = document.getElementById('u59');

var u236 = document.getElementById('u236');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u238 = document.getElementById('u238');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u290 = document.getElementById('u290');

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'center';
var u292 = document.getElementById('u292');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{
windowEvent = e;


if (true) {

SetGlobalVariableValue('$SegmentState', 'resi');

	self.location.href="#" + GetQuerystring();

}

}

var u62 = document.getElementById('u62');

u62.style.cursor = 'pointer';
if (bIE) u62.attachEvent("onclick", Clicku62);
else u62.addEventListener("click", Clicku62, true);
function Clicku62(e)
{
windowEvent = e;


if (true) {

SetGlobalVariableValue('$SegmentState', 'smbiz');

	self.location.href="#" + GetQuerystring();

}

}

var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u65 = document.getElementById('u65');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u67 = document.getElementById('u67');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u69 = document.getElementById('u69');

u69.style.cursor = 'pointer';
if (bIE) u69.attachEvent("onclick", Clicku69);
else u69.addEventListener("click", Clicku69, true);
function Clicku69(e)
{
windowEvent = e;


if (true) {

SetGlobalVariableValue('$SegmentState', 'resi');

	self.location.href="#" + GetQuerystring();

}

}

var u246 = document.getElementById('u246');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u248 = document.getElementById('u248');

u248.style.cursor = 'pointer';
if (bIE) u248.attachEvent("onclick", Clicku248);
else u248.addEventListener("click", Clicku248, true);
function Clicku248(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
if (window.OnLoad) OnLoad();
