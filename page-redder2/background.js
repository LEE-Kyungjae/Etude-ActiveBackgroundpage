function reddenPage() {
  document.body.style.backgroundColor = 'red';
}
function whitePage() {
  document.body.style.backgroundColor = 'white';
}

var a=0;
chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {

    if(a==0){
      console.log('a');
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
    a=1;
  }
  else if(a==1){
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: whitePage
    });
    a=0;
  }

  }

});
