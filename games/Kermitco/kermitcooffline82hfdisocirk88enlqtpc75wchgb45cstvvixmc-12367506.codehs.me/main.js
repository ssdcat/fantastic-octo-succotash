var pURL = "about:blank";

class Game {
    constructor(_id, _name, _link) {
        this.id = _id;
        this.name = _name;
        this.link = _link;
    }
    open(title, fav) {
        title = title === "0" ? this.name : title;
        fav = fav === "0" ? "" : fav;
        let win = window.open();
        let frame = win.document.createElement("iframe");
        let link = win.document.createElement("link");
        link.type = "icon";
        link.href = fav;
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.src = this.link;
        win.document.body.style.margin = "0px";
        win.document.body.appendChild(frame);
        win.document.head.appendChild(link);
    }
    asHTML() {
        return `<option id="${this.link}">${this.id} - ${this.name}</option>`;
    }
}
/* uhh mosan games arent loading */
// no shit
// nvm i fixed it
// do NOT use window.onload twice.
// worst mistake ever


let featuredgames = [
    new Game("S001", "Eaglercraft 1.8", "https://www.otomads.top/game/minecraft/version/1.8/"),
    new Game("S002", "n-gon", "https://valsamisphysics.com/sidescroller/index.html"),
    new Game("S003", "Nathan Simulator", "https://hked.live/nathansim/"),
];
let toolgames = [
    new Game("T001", "YouTube Unblocker", "yt.html"),
    new Game("T002", "YouTube Search", "YouTube.html"),
    new Game("T003", "IP Address Lookup", "nothing.html"),
    new Game("T004", "Music", "https://playlistsound.com/"),
    new Game("T005", "HTML Test Client", "games/cafe.html"),
    new Game("T006", "Anti-Lightspeed Client", "simpleembedder.html")
];
let chatgames = [
    new Game("C001", "ChatCrypt", "https://client.chatcrypt.com"),
    new Game("C002", "The Lounge", "https://webirc.w3.org")
];
let normalgames = [
    new Game("0001", "example.com", "https://example.com"),
    new Game("0002", "EaglercraftX Server List", "other/servers.html"),
    new Game("0003", "micropolisJS", "https://www.graememcc.co.uk/micropolisJS"),
    new Game("0004", "2048", "https://www2.d125.org/applied_arts/teched/EngDesignCamp/studentfiles/2014/2048/brandona/index.html"),
    new Game("0005", "mari0", "https://tannerrogalsky.com/mari0"),
    new Game("0006", "Cookie Clicker", "https://a6936-19424025.cluster7.canvas-user-content.com/courses/6936~1014013/files/6936~19424025/course%20files/cookie%20clicker/index.html?download=1&inline=1"),
    new Game("0007", "Chrome Dino", "https://thecodepost.org/apps/trex/index.html"),
    new Game("0008", "Big Mac Hero", "https://d2edvleactrkkb.cloudfront.net/"),
    new Game("0009", "Super Mario World", "https://mario5.florian-rappl.de/#game"),
    new Game("0010", "Giraffe Volleyball", "https://sandwichpuissant.net/giraffesvolleyballchampionship"),
    new Game("0011", "McDonald's 2048", "https://www2.d125.org/applied_arts/teched/EngDesignCamp/studentfiles/2014/2048/ryank/index.html"),
    new Game("0012", "Tetris", "https://dionyziz.com/graphics/canvas-tetris"),
    new Game("0013", "Stack Bounce", "https://stackbounce.h5games.usercontent.goog/v/1aqsvv0aegbjg/?origin=https%3A%2F%2Fgamesnacks.com&gameCenterId=yt&userActivityMetrics=true&eids=95340509&features=InterstitialFreqCap__freq_cap_60s%2CInterstitialFreqCap__block_pga_1m_interstitials%2CMonetization__populate_google_global_correlator%2CMonetization__use_ppabg_tag#pc=4279443280740350&preStart=1726705971318&gameData=eyJsb2dsZXZlbCI6IkVSUk9SIiwiY2xldmVsQ3VycmVudCI6IjYiLCJjYmVzdFNjb3JlIjoiMTAxMTUiLCJjc3R5bGVJRCI6IjMiLCJjY2hvc2VuU2tpbklkIjoiMCIsImNwbGF0Zm9ybXNCcm9rZW5Ub3RhbCI6IjczMyIsImNsZXZlbC5yaW5nVHlwZUlEIjoiMyIsImNsZXZlbC5yaW5nc0NvdW50IjoiMjAwIiwiY2xldmVsLnJpbmdTY2FsaW5nIjoiMCJ9"),
    new Game("0014", "Elastic Face", "https://d21u3ic0kp9e91.cloudfront.net/elasticman/0/index.html"),
    new Game("0015", "There is No Game", "https://a6936-20098220.cluster7.canvas-user-content.com/courses/6936~1014013/files/6936~20098220/course%20files/there%20is%20no%20game/index.html?download=1&inline=1"),
    new Game("0016", "Two Player Slope", "https://a6936-20350029.cluster7.canvas-user-content.com/courses/6936~1014013/files/6936~20350029/course%20files/index.html?download=1&inline=1"),
    new Game("0017", "Retro Bowl", "https://a6936-19417927.cluster7.canvas-user-content.com/courses/6936~1010708/files/6936~19417927/course%20files/index.html%20tre?download=1&inline=1"),
    new Game("0018", "Idle Breakout", "https://a6936-19714614.cluster7.canvas-user-content.com/courses/6936~1014013/files/6936~19714614/course%20files/idle/index.html?download=1&inline=1"),
    new Game("0019", "Backrooms", "https://a6936-20249657.cluster7.canvas-user-content.com/courses/6936~1014013/files/6936~20249657/course%20files/backrooms/index.html?download=1&inline=1"),
    new Game("0020", "Super Hot", "https://a6936-20249810.cluster7.canvas-user-content.com/courses/6936~1014013/files/6936~20249810/course%20files/superhot/index.html?download=1&inline=1"),
    new Game("0021", "Baldi's Basics", "https://a6936-20267301.cluster7.canvas-user-content.com/courses/6936~1014013/files/6936~20267301/course%20files/baldi%20basics/index.html?download=1&inline=1"),
    new Game("0022", "Particle Simulation", "https://williamhoza.com/text/?t=wow%20playing%20games?"),
    new Game("0023", "Stack Blocks", "https://www.tbsnews.net/game-stack/v0.18/index.html"),
    new Game("0024", "Super Hot", "https://a6936-20249810.cluster7.canvas-user-content.com/courses/6936~1014013/files/6936~20249810/course%20files/superhot/index.html?download=1&inline=1"),
    new Game("0025", "Stack Blocks", "https://www.tbsnews.net/game-stack/v0.18/index.html"),
    new Game("0026", "Eaglercraft Beta 1.3_01", "games/eaglercraft.html"),
    new Game("0027", "Childline Pong", "https://www.childline.org.uk/content/games/pong/"),
    new Game("0028", "Pico-8", "https://www.lexaloffle.com/pico-8.php"),
    new Game("0029", "Bad Cheerio Soccer", "https://editor.p5js.org/SoccerIsAll/full/WAWgHRCEZ"),
    new Game("0030", "Centrifuge Volleyball", "https://williamhoza.com/volleyball"),
    new Game("0031", "Snowdown Showdown", "https://educate.stemfuse.com/sf-serve/76/snowdown_showdown/index.html?class_id=&amp;course_id=&amp;active="),
    new Game("0032", "Racer Advanced 22", "https://www.stat2games.sites.grinnell.edu/games/raceradvanced22.html"),
    new Game("0033", "Tangrams", "https://www.stat2games.sites.grinnell.edu/games/tangrams.html"),
    new Game("0034", "Tiger Sampling", "https://www.stat2games.sites.grinnell.edu/games/tigersampling.html"),
    new Game("0035", "RaceKart", "https://www.stat2games.sites.grinnell.edu/games/racekart.html"),
    new Game("0036", "Dodgeball", "https://games.ideate.cmu.edu/gdpp/db3/cattle"),
    new Game("0037", "Infrared Escape", "https://atmos.uw.edu/~dargan/EarthGamesUW/InfraredEscape/"),
    new Game("0038", "Web osu!", "https://webosu.online/"),
    new Game("0039", "Astra Client", "https://astraclient.com/play/"),
];
let scratchgames = [
    new Game("1001", "Geometry Dash", "https://scratch.mit.edu/projects/105500895/embed"),
    new Game("1002", "Appel", "https://scratch.mit.edu/projects/60917032/embed"),
    new Game("1003", "Paper Minecraft", "https://scratch.mit.edu/projects/10761768/embed"),
    new Game("1004", "Truck Driving Game", "https://scratch.mit.edu/projects/533265843/embed"),
    new Game("1005", "Terraria", "https://scratch.mit.edu/projects/322341152/embed"),
    new Game("1006", "Bone Battles II", "https://scratch.mit.edu/projects/403819146/embed"),
    new Game("1007", "Turrican II", "https://scratch.mit.edu/projects/174671513/embed"),
    new Game("1008", "Kumite", "https://scratch.mit.edu/projects/357151763/embed"),
    new Game("1009", "Phantom", "https://scratch.mit.edu/projects/355712158/embed"),
    new Game("1010a", "There Is No Game", "https://scratch.mit.edu/projects/508340998/embed"),
    new Game("1010b", "Out Of Order", "https://scratch.mit.edu/projects/637869993/embed"),
    new Game("1011", "Super Scratch Bros", "https://scratch.mit.edu/projects/318927435/embed"),
    new Game("1012", "GTA III", "https://scratch.mit.edu/projects/587100397/embed"),
    new Game("1013", "FNAF", "https://scratch.mit.edu/projects/375757427/embed"),
    new Game("1014", "FortniteZ", "https://scratch.mit.edu/projects/404950182/embed")
];
let othergames = [
    new Game("3001", "[OLD] Calculator to Jelp You", "calculator.html"),
];

function rand(min, max){
    return Math.round(Math.random()*(max-min))+min;
}

function removeS(string, remove) {
    return string.replace(remove, "");
}

function ytembed() {
    var unfin = $("#ytinput").val();
    unfin = removeS(unfin, "https://");
    unfin = removeS(unfin, "https://");
    unfin = removeS(unfin, "www.");
    unfin = removeS(unfin, "youtube.com/");
    unfin = removeS(unfin, "youtu.be");
    unfin = removeS(unfin, "watch?v=");
    unfin = removeS(unfin, "embed/");
    var unfin1 = unfin.split("&");
    unfin = "https://www.youtube-nocookie.com/embed/" + unfin1[0];
    $("#ytiframe").attr("src", unfin);
}

fetch("marq.txt")
  .then((res) => res.text())
  .then((text) => {
    $("#marq").html(text);
   })
  .catch((e) => console.error(e));

function codeSubmit() {
    $("#embed").attr("src", $("#codeTBox").val());
    $("#codeTBox").val("");
}

function setURL() {
    let codeDrop = document.getElementById("codeDrop");
    var selOpt = codeDrop.options[codeDrop.selectedIndex].id;
    $("#embed").attr("src", selOpt);
}

function amogus(str) {
    var dcd = atob(str);
    const HTTP_REDIR_302_ERROR_SYSTEMD = Number(5%4);
    let ERR_302 = HTTP_REDIR_302_ERROR_SYSTEMD-0;
    return dcd;
}

function setFavicon(link1) {
    $("link[rel='icon']").attr("href",link1);
};

function disguisePage(number) {
    var favLinks = [ "drive.google.com", "mcpsmd.instructure.com", "classroom.google.com", "duolingo.com", "ixl.com", "codehs.com", "google.com", "docs.google.com/document/u/0", "docs.google.com/presentation/u/0", "docs.google.com/spreadsheets/u/o", "noredink.com"];
    var pageTitles = [ "My Drive - Google Drive", "Dashboard", "Home", "Duolingo", "IXL | Dashboard", "Sections | CodeHS", "Google", "Google Docs", "Google Slides", "Google Sheets", "NoRedInk"];
    var var11 = "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://";
    $("link[rel='icon']").attr("href", var11.concat(favLinks[number]));
    document.title = pageTitles[number];
}

function namePage() {
    document.title = prompt("Enter the title of the page:");
}

function panic() {
    window.location.href = pURL;
}

function panicURL() {
    pURL = prompt("Set the URL for the Panic button:");
}

function openCloak() {
    var embd = document.getElementById("embed").src;
    var win = window.open();
    var url = embd;
    var iframe = win.document.createElement('iframe');
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = prompt("enter url");
    win.document.body.appendChild(iframe);
}
function openKco() {
    var url = "0aDV71GtSpyy91KtZE6P7qeL56mVU5nSvCKNk5fdoGV6N1xy1qsbFa548gBQcARY.htm";
    var win = window.open();
    var iframe = win.document.createElement('iframe');
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url;
    win.document.body.style.margin = "0px";
    win.document.body.appendChild(iframe);
}

function deamogus(str) {
    var enc = btoa(str);
    return enc;
}

function openGame() {
    var url = document.getElementById("embed").src;
    var win = window.open();
    var iframe = win.document.createElement('iframe');
    var link = win.document.createElement("link");
    link.type = "icon";
    link.href = document.getElementsByTagName("link").href;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url;
    win.document.body.style.margin = "0px";
    win.document.body.appendChild(iframe);
    win.document.head.appendChild(link);
}

function currentTime() {
    // get date
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    // figuring out stuff
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    // assemble string
    let time = hh + ":" + mm + ":" + ss + " ";
    // apply it to element with the id "clock"
    document.getElementById("clock").innerText = time; 
    // run this again after 1000 miliseconds
    let t = setTimeout(function(){currentTime()}, 1000);
}
// first run
currentTime();

/* styling config on-site */
function setIframeHeight() {
    $("#embed").css("height", prompt("Enter height here in px:").concat("px"));
}

function assembleGamesAsHTML() {
    let featured = "";
    for (let element of featuredgames) featured = featured.concat(element.asHTML());
    let tool = "";
    for (let element of toolgames) tool = tool.concat(element.asHTML());
    let chat = "";
    for (let element of chatgames) chat = chat.concat(element.asHTML());
    let normal = "";
    for (let element of normalgames) normal = normal.concat(element.asHTML());
    let scratch = "";
    for (let element of scratchgames) scratch = scratch.concat(element.asHTML());
    let other = "";
    for (let element of othergames) other = other.concat(element.asHTML());
    let optgroups = [
        '<option id="hi.html">Select an option</option><optgroup label="Featured">',
        '</optgroup><optgroup label="Tools">',
        '</optgroup><optgroup label="Chats">',
        '</optgroup><optgroup label="Normal Games">',
        '</optgroup><optgroup label="Scratch Games">',
        '</optgroup><optgroup label="Other Sites">',
        '</optgroup>'
    ];
    return optgroups[0] + featured + optgroups[1] + tool + optgroups[2] + chat + optgroups[3] + normal + optgroups[4] + scratch + optgroups[5] + other + optgroups[7];
}