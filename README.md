# Reddit Subdomain Redirect

A Firefox extension that restores the functionality of redirecting reddit subdomains to their corresponding subreddits on old.reddit.com.

## Features

- Automatically redirects subdomains like `movies.reddit.com` to `old.reddit.com/r/movies`
- Preserves the original path, query parameters, and hash fragments
- Works with any subreddit subdomain

## Installation

1. Download or clone this repository
2. Open Firefox and navigate to `about:debugging`
3. Click "This Firefox" in the left sidebar
4. Click "Load Temporary Add-on"
5. Select the `manifest.json` file from this extension

## Usage

Simply type any subreddit as a subdomain of reddit.com, for example:
- `movies.reddit.com` → `old.reddit.com/r/movies`
- `programming.reddit.com` → `old.reddit.com/r/programming`
- `news.reddit.com` → `old.reddit.com/r/news`

## Notes

- The extension only redirects main frame requests to avoid interfering with other content
- It won't redirect if you're already on old.reddit.com or www.reddit.com
- This is a temporary extension and will need to be reloaded when Firefox restarts
