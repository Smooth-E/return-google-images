chrome.webRequest.onBeforeRequest.addListener(
    (details) => { return { redirectUrl: details.url.replace("yt3.ggpht.com", "yt3.googleusercontent.com") } },
    { urls: ["*://yt3.ggpht.com/*"] },
    [ "blocking" ]
)
