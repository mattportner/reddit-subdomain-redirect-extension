browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Extract the subdomain from the URL
    const url = new URL(details.url);
    const subdomain = url.hostname.split('.')[0];
    
    // Don't redirect if it's already old.reddit.com or www.reddit.com
    if (subdomain === 'old' || subdomain === 'www') {
      return;
    }
    
    // Create the new URL with old.reddit.com
    const newUrl = `https://old.reddit.com/r/${subdomain}${url.pathname}${url.search}${url.hash}`;
    
    return {
      redirectUrl: newUrl
    };
  },
  {
    urls: ["*://*.reddit.com/*"],
    types: ["main_frame"]
  },
  ["blocking"]
); 