const images = [
    "https://wallpapers.com/images/hd/hd-splatoon-inklings-digital-art-65tymbzkax6c5ujm.jpg",
    "https://images.steamusercontent.com/ugc/1756937788135679884/99B4BD108F0CFB6F8078B0C77452B54ED2EE956A/",
    "https://wallpapers.com/images/featured/cyberpunk-background-a8kv41xiuue1pkw3.jpg",
];




function chooseBackground() {
    let date = new Date(); 
    let hh = date.getDate();
    let bckgrnd = images[hh % images.length];
    $("body").css("background-image", "url('" + bckgrnd + "')");
    
}

window.onload = function() {
    if (window.location.pathname == "/0aDV71GtSpyy91KtZE6P7qeL56mVU5nSvCKNk5fdoGV6N1xy1qsbFa548gBQcARY.htm") $("#codeDrop").html(assembleGamesAsHTML());
    chooseBackground();
    $.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
        console.log(JSON.stringify(data, null, 2));
    });

}