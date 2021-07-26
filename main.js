var contextMenuItem = {
    "id": "searchby",
    "title": "search made easy",
    "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.create({
    title: "google",
    parentId: "searchby",
    id: "google",
    contexts:["selection"]
});

chrome.contextMenus.create({
    title: "amazon",
    parentId: "searchby",
    id: "amazon",
    contexts:["selection"]
});

chrome.contextMenus.create({
    title: "youtube",
    parentId: "searchby",
    id: "youtube",
    contexts:["selection"]
});

chrome.contextMenus.create({
    title: "dictionary",
    parentId: "searchby",
    id: "dictionary",
    contexts:["selection"]
});

chrome.contextMenus.create({
    title: "netflix",
    parentId: "searchby",
    id: "netflix",
    contexts:["selection"]
});
chrome.contextMenus.create({
    title: "spotify",
    parentId: "searchby",
    id: "spotify",
    contexts:["selection"]
});
chrome.contextMenus.create({
    title: "stackoverflow",
    parentId: "searchby",
    id: "stackoverflow",
    contexts:["selection"]
});

chrome.contextMenus.onClicked.addListener(function(data){
    if(data.menuItemId == "google" && data.selectionText){
        window.open('https://google.com/search?q='+data.selectionText);
    }
    if(data.menuItemId == "amazon" && data.selectionText){
        window.open('https://amazon.in/s?k='+data.selectionText);
    }
    if(data.menuItemId == "youtube" && data.selectionText){
        window.open('https://youtube.com/results?search_query='+data.selectionText);
    }
    if(data.menuItemId == "dictionary" && data.selectionText){
        window.open('https://dictionary.com/browse/'+data.selectionText);
    }
    if(data.menuItemId == "netflix" && data.selectionText){
        window.open('https://www.netflix.com/search?q='+data.selectionText);
    }
    if(data.menuItemId == "spotify" && data.selectionText){
        window.open('https://open.spotify.com/search/'+data.selectionText);
    }
    if(data.menuItemId == "stackoverflow" && data.selectionText){
        window.open('https://stackoverflow.com/search?q='+data.selectionText);
    }
    
});
