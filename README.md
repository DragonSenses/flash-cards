# flash-cards
 A simple flash card app that displays, adds & removes cards with questions and answers for verification. This promotes active recall in the brain, helping the user study effectively.

I am strongly committed to the philosophy of life-long learning so I use this app to stay on top of latest changes in programming languages, tools, trends and frameworks. 

I also try to hone my understanding of vocabulary words and its subtleties to improve my rhetoric. 

# Description 

Flash cards are an application of the [Testing Effect (a.k.a active recall)](https://en.wikipedia.org/wiki/Testing_effect) which suggests **long-term memory is increased when some of the learning period is devoted to retrieving information from memory.** 

During the process of retrieving a memory, seeing the question or term and then actively attempting to remember the answer or meaning helps to move it from short-term to long-term memory. 

The user can use this application in the browser to study with efficacy, honing their brain to understand the matieral and boost self-confidence. 

This app uses [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to save *flash cards* right in the browser! 
  - More details about [Local Storage](#local-storage) 

# Technologies:

HTML5, CSS3, JavaScript

## Specifications

- [ ] Create flip cards with CSS animations
- [ ] Display question cards and flip for answer
- [ ] View previous and subsequent cards
- [ ] Create "Add new card" overlay with form
- [ ] Add new cards to local storage
- [ ] Clear all cards from local storage

### Extra features to add later

- [ ] Update and change content of a flash card after it has been made
- [ ] User can save set of flash cards before clearing
- [ ] User can load set of flash cards later

# How to use

1. **Create** a Flash Card 
2. **Read** and Study the flash card(s)
3. **Update** more flash card(s)
4. **Delete** set of flash cards

# Instructions to run a local copy

1. Clone this repository and save to a folder on a laptop (or on GitHub click `Code` > `Download Zip`)

2. Go to the directory (folder) where code is stored 

3. Open up `index.html` in any browser
    * bookmark the page to use later

---

## Local Storage

- Shared between all tabs and windows from the same origin 
  - If data is set in one window, the change becomes visible in another one.
- The data does not expire. It remains after the browser restart and even after OS reboot
- Only have to be on the same origin (domain/port/protocol), the URL path can be different
- Limit is around ~5mb, depending on the browser

So closing/opening the browser or opening the same page in a different window will not remove
the data. 

To see the data being saved in ***Local Storage*** 
- press `[F12]` to open Developer Tools in the browser, while app (or `index.html`) is open
- Click `Application` tab
- On the left panel go to `Storage` > `Local Storage`

*Note*: If you do not want data to be saved on your browser, try opening the app in "incognito" or "private browsing" so data will be cleared when the last "private" tab is closed

* To assuage any privacy concerns, data is not saved in any other place other than your own personal machine's web browser

---

# Attribution

This app uses [heroicons](https://heroicons.com/) from the makers of Tailwind CSS! 

Check them out at [GitHub](https://github.com/tailwindlabs/heroicons)

# Notes while making this

Issues I came across:

- [x] An `svg` and text inside a button, but the text was not vertically centered. 
 
Solution:

1. To style the text within a button: wrapped the text in a `span` so I can target the child element independently for styling
2. To move up character displayed inline: added this to styling `position: relative` and `top: -0.3em`
which moved up the text vertically so it can be centered with the `svg`
3. Applied these style rules to another button on the `h1` and used CSS selectors to target both elements
