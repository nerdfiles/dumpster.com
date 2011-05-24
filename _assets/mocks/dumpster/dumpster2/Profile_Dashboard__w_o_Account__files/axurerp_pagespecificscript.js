
var PageName = 'Profile Dashboard (w/o Account)';
var PageId = '271aede24ca341c895b05c2879057131'
var PageUrl = 'Profile_Dashboard__w_o_Account_.html'
document.title = 'Profile Dashboard (w/o Account)';
var PageNotes = 
{
"pageName":"Profile Dashboard (w\/o Account)",
"showNotesNames":"False",
"Page Descriptions":"<p style=\"text-align:left;\"><span style=\"\">This Profile Dashboard page is displayed to the customer when they have created an online profile, but have no linked account. Their are 4 bottom promo pods on this page which pull from R1 www.wm.com\/index.jsp before the site cookie has been set.<\/span><\/p>",
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

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u129 = document.getElementById('u129');

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
"label":"WM.com Links",
"Description":"R1 Module",
"UC Reference":"None"};

var u134 = document.getElementById('u134');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u134ann'), "<div id='u134Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u134Note').click(function(e) { ToggleWorkflow(e, 'u134', 300, 150, false); return false; });
var u134Ann = 
{
"label":"WM.com Links",
"Description":"R1 Module",
"UC Reference":"None"};

var u135 = document.getElementById('u135');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u135ann'), "<div id='u135Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u135Note').click(function(e) { ToggleWorkflow(e, 'u135', 300, 150, false); return false; });
var u135Ann = 
{
"label":"Navigation Section",
"Description":"This section contains task-based links to pages within WM Online and on WM.com (Public)."};

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u137 = document.getElementById('u137');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u139 = document.getElementById('u139');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
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
"label":"View Bills &amp;amp; Payments Link",
"Description":"If user has one account linked, go to: Bill &amp; Payment History page<BR><BR>If user has multiple accounts linked, go to Bill &amp; Payment History page for the first account added to the user's profile.<BR><BR>If user does not have an account linked, go to: Add Account to Profile page (UC_ACCOUNT_5)",
"UC Reference":"UC_INVOICE_01, UC_ACCOUNT_5"};
gv_vAlignTable['u145'] = 'top';
var u146 = document.getElementById('u146');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u146ann'), "<div id='u146Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u146Note').click(function(e) { ToggleWorkflow(e, 'u146', 300, 150, false); return false; });
var u146Ann = 
{
"label":"Move or Cancel a Service",
"Description":"Link to: Request a Service page (wm.com)",
"UC Reference":"UC_ACCOUNT_08"};
gv_vAlignTable['u146'] = 'top';
var u147 = document.getElementById('u147');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u147ann'), "<div id='u147Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u147Note').click(function(e) { ToggleWorkflow(e, 'u147', 300, 150, false); return false; });
var u147Ann = 
{
"label":"View Holiday Schedule Link",
"Description":"If user has one account linked, go to: My Services page<BR><BR>If user has multiple accounts linked, go to My Services page for the first account added to the user's profile.<BR><BR>If user does not have an account linked, go to: Add Account to Profile page (UC_ACCOUNT_5)",
"UC Reference":"UC_ACCOUNT_02, UC_ACCOUNT_5"};
gv_vAlignTable['u147'] = 'top';
var u148 = document.getElementById('u148');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u148ann'), "<div id='u148Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u148Note').click(function(e) { ToggleWorkflow(e, 'u148', 300, 150, false); return false; });
var u148Ann = 
{
"label":"Request a Service",
"Description":"Link to: Request a Service page (wm.com)",
"UC Reference":"UC_ACCOUNT_08"};
gv_vAlignTable['u148'] = 'top';
var u149 = document.getElementById('u149');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u149ann'), "<div id='u149Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u149Note').click(function(e) { ToggleWorkflow(e, 'u149', 300, 150, false); return false; });
var u149Ann = 
{
"label":"Make a Payment Link",
"Description":"If user has one account linked, go to: Make a Payment (Registered)<BR><BR>If user has more than one account linked, go to: Make a Payment (Registered) w\/ Multiple Accounts<BR><BR>If user does not have an account linked, go to: Add Account to Profile page (UC_ACCOUNT_5)",
"UC Reference":"UC_PAYMENT_01, UC_ACCOUNT_05"};
gv_vAlignTable['u149'] = 'top';
var u150 = document.getElementById('u150');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u150ann'), "<div id='u150Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u150Note').click(function(e) { ToggleWorkflow(e, 'u150', 300, 150, false); return false; });
var u150Ann = 
{
"label":"View My Services Link",
"Description":"If user has one account linked, go to: My Services page<BR><BR>If user has multiple accounts linked, go to My Services page for the first account added to the user's profile.<BR><BR>If user does not have an account linked, go to: Add Account to Profile page (UC_ACCOUNT_5)",
"UC Reference":"UC_ACCOUNT_03, UC_ACCOUNT_5"};
gv_vAlignTable['u150'] = 'top';
var u151 = document.getElementById('u151');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u151ann'), "<div id='u151Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u151Note').click(function(e) { ToggleWorkflow(e, 'u151', 300, 150, false); return false; });
var u151Ann = 
{
"label":"Update Billing Info Link",
"Description":"If user has one or more accounts linked, go to: Manage Account page.<BR><BR>If user does not have an account linked, go to: Add Account to Profile page (UC_ACCOUNT_5)",
"UC Reference":"UC_ACCOUNT_02, UC_ACCOUNT_5"};
gv_vAlignTable['u151'] = 'top';
var u152 = document.getElementById('u152');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u152ann'), "<div id='u152Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u152Note').click(function(e) { ToggleWorkflow(e, 'u152', 300, 150, false); return false; });
var u152Ann = 
{
"label":"View all Products &amp;amp; Services Link",
"Description":"Link to: WM.com Products &amp; Services (exact landing page determined by cookie)",
"UC Reference":"None"};
gv_vAlignTable['u152'] = 'top';
var u153 = document.getElementById('u153');

var u154 = document.getElementById('u154');

var u155 = document.getElementById('u155');

var u156 = document.getElementById('u156');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u158 = document.getElementById('u158');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u160 = document.getElementById('u160');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u164 = document.getElementById('u164');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u166 = document.getElementById('u166');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u168 = document.getElementById('u168');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u170 = document.getElementById('u170');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u172 = document.getElementById('u172');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u175 = document.getElementById('u175');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u175ann'), "<div id='u175Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u175Note').click(function(e) { ToggleWorkflow(e, 'u175', 300, 150, false); return false; });
var u175Ann = 
{
"label":"Local Information Module",
"Description":"R1 Component",
"UC Reference":"None"};

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u177 = document.getElementById('u177');

var u178 = document.getElementById('u178');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
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

var u181 = document.getElementById('u181');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u181ann'), "<div id='u181Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u181Note').click(function(e) { ToggleWorkflow(e, 'u181', 300, 150, false); return false; });
var u181Ann = 
{
"label":"Online Activity and Alerts",
"Description":"This flexible section will contain the last 5 activity notices or alerts. For instance, requests and messages sent from the website will be shown here."};

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u183 = document.getElementById('u183');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u183ann'), "<div id='u183Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u183Note').click(function(e) { ToggleWorkflow(e, 'u183', 300, 150, false); return false; });
var u183Ann = 
{
"label":"User Profile Information",
"Description":"This section will contain user profile information including email address and full name (if available)"};

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u185 = document.getElementById('u185');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u187 = document.getElementById('u187');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u210 = document.getElementById('u210');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u210ann'), "<div id='u210Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u210Note').click(function(e) { ToggleWorkflow(e, 'u210', 300, 150, false); return false; });
var u210Ann = 
{
"label":"Manage Saved Payment Methods Link",
"Description":"Link takes user to Saved Payment Methods page."};

var u211 = document.getElementById('u211');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u213 = document.getElementById('u213');

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u191 = document.getElementById('u191');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u191ann'), "<div id='u191Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u191Note').click(function(e) { ToggleWorkflow(e, 'u191', 300, 150, false); return false; });
var u191Ann = 
{
"label":"Edit Profile Link",
"Description":"Link to: User Profile page",
"UC Reference":"UC_USER_07"};
gv_vAlignTable['u191'] = 'top';
var u192 = document.getElementById('u192');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u192ann'), "<div id='u192Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u192Note').click(function(e) { ToggleWorkflow(e, 'u192', 300, 150, false); return false; });
var u192Ann = 
{
"label":"Manage Saved Payment Methods Link",
"Description":"Link to: Saved Payment Methods page",
"UC Reference":"UC_PAYMENT_07"};
gv_vAlignTable['u192'] = 'top';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u195 = document.getElementById('u195');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u195ann'), "<div id='u195Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u195Note').click(function(e) { ToggleWorkflow(e, 'u195', 300, 150, false); return false; });
var u195Ann = 
{
"label":"Online Activity and Alerts",
"Description":"This flexible section will contain the last 5 activity notices or alerts. For instance, requests and messages sent from the website will be shown here."};

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u197 = document.getElementById('u197');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u197ann'), "<div id='u197Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u197Note').click(function(e) { ToggleWorkflow(e, 'u197', 300, 150, false); return false; });
var u197Ann = 
{
"label":"User Profile Information",
"Description":"This section will contain user profile information including email address and full name (if available)"};

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u199 = document.getElementById('u199');

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

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
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

var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u113 = document.getElementById('u113');

var u114 = document.getElementById('u114');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
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

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u206ann'), "<div id='u206Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u206Note').click(function(e) { ToggleWorkflow(e, 'u206', 300, 150, false); return false; });
var u206Ann = 
{
"label":"Activity Line Item",
"Description":"Date and description of Activity (display only)"};
gv_vAlignTable['u206'] = 'top';
var u207 = document.getElementById('u207');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u207ann'), "<div id='u207Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u207Note').click(function(e) { ToggleWorkflow(e, 'u207', 300, 150, false); return false; });
var u207Ann = 
{
"label":"Edit Profile Link",
"Description":"Link to: User Profile page",
"UC Reference":"UC_USER_07"};
gv_vAlignTable['u207'] = 'top';
var u208 = document.getElementById('u208');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u208ann'), "<div id='u208Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u208Note').click(function(e) { ToggleWorkflow(e, 'u208', 300, 150, false); return false; });
var u208Ann = 
{
"label":"Manage Saved Payment Methods Link",
"Description":"Link to: Saved Payment Methods page",
"UC Reference":"UC_PAYMENT_07"};
gv_vAlignTable['u208'] = 'top';
var u209 = document.getElementById('u209');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u209ann'), "<div id='u209Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u209Note').click(function(e) { ToggleWorkflow(e, 'u209', 300, 150, false); return false; });
var u209Ann = 
{
"label":"Edit Profile or Change Pass Link",
"Description":"Link takes user to My Profile - Edit page."};

var u120 = document.getElementById('u120');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u125 = document.getElementById('u125');

var u126 = document.getElementById('u126');

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

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u216ann'), "<div id='u216Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u216Note').click(function(e) { ToggleWorkflow(e, 'u216', 300, 150, false); return false; });
var u216Ann = 
{
"label":"Add Account - CTA",
"Description":"Takes user to &quot;Manage Accounts - Add Account&quot; page."};

u216.style.cursor = 'pointer';
if (bIE) u216.attachEvent("onclick", Clicku216);
else u216.addEventListener("click", Clicku216, true);
function Clicku216(e)
{
windowEvent = e;


if (true) {

	self.location.href="Manage_Accounts_-_Add_Account.html" + GetQuerystring();

}

}

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u201 = document.getElementById('u201');

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u203 = document.getElementById('u203');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u203ann'), "<div id='u203Note' class='annnoteimage' style='left:" + x + ";top:" + y + "'></div>");
$('#u203Note').click(function(e) { ToggleWorkflow(e, 'u203', 300, 150, false); return false; });
var u203Ann = 
{
"label":"User Email Address",
"Description":"User Email Address (display only)"};
gv_vAlignTable['u203'] = 'top';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
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

if (window.OnLoad) OnLoad();
