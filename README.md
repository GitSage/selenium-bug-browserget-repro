# Selenium-webdriver crashes when running against Internet Explorer

Webdriver (or Internet Explorer?) crashes when repeatedly loading and interacting with pages with Internet Explorer. This is NOT the only condition under which this bug occurs. It seems that issuing too many Webdriver commands with at least some driver.get() commands mixed in will reliably cause the crash.

The following does NOT seem to cause the crash:

* Never changing pages or reloading the page (never clicking links, calling driver.get(), or otherwise changing pages)
* Only calling driver.get() without interacting with the page

Versions:

    Windows 10
    Internet Explorer 11.909.15063.0
    IEDriverServer 3.9.0 (32 bit)
    Node 8.10.0
    
### Reproduction Instructions

In keeping with the SSCCE, I made this reproduction as simple as possible. The same effect can be reproduced in many other ways (by clicking many links that navigate to other pages, etc). I consider this to be a HIGH PRIORITY bug because appears that it will crash ANY long test that goes across several pages.

Set up IEDriverServer.exe and Internet Explorer as detailed [here](https://www.npmjs.com/package/selenium-webdriver). This involves putting the exe file on your PATH, setting IE's zoom level to 100%, and changing IE's Protected Mode settings.

Install selenium-webdriver:

    npm install
    
Start the automation: 

    node index.js

Allow it to run for approximately 10-20 minutes until the process crashes. For me it typically slows down dramatically after about 6 minutes and crashes completely around 12 minutes.