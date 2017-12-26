
var items = ["selection", "link", "image", "page"];
for (i=0;i<items.length; i++) {
    var item = items[i];
    var buttonName = "Tweet this "+item;
    chrome.contextMenus.create({
    title: buttonName,
    contexts: [item],
    onclick: tweetFunc,
    id: item
    });
}


function tweetFunc(media, tabName) {
    switch(media.menuItemId) {
        case 'selection' :
        chrome.windows.create({url: "https://twitter.com/share?text="+encodeURIComponent(media.selectionText), type: "panel", height: 275, width: 450});
        break;
        case 'image' :
        chrome.windows.create({url: "https://twitter.com/share?url="+encodeURIComponent(media.srcUrl), type: "panel", height: 275, width: 450})
        break;
        case 'link' :
        chrome.windows.create({url: "https://twitter.com/share?url="+encodeURIComponent(media.linkUrl), type: "panel", height: 275, width: 450});
        break;
        case 'page':
        chrome.windows.create({url: "https://twitter.com/share?text="+encodeURIComponent(tabName.title)+"&url="+media.pageUrl, type: "panel", height: 275, width: 450});
        break;
    }
}