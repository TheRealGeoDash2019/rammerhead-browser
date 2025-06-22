# Current version

## v1.1.5

- removed deprecated Alienhub
- added speed ticket panel
- added general adblock, youtube adblock, and vpn locations for speed ticket users
- fixed and removed ads and the anti-adblocker message for now.gg (no speed ticket needed)
- fixed Geforce Now login
- fixed slightly updated cloudflare challenge for speed ticket users

&nbsp;

# Previous versions #

## v1.1.4

- migrating to new domain system
- add Alienhub Basic residential proxy support
- allocate dedicated speed to Alienhub Basic users
- optimized initial page load ("Connecting to server..." is much faster now)
- added `javascript:` support
- added bash.gg ad

## v1.1.31

- fix "Enable URL Shuffling" in rh://settings not working the first time you click
- fix random 502 errors

## v1.1.3

- added load balancing!! things are much faster now (thank you Alienhub for providing the server. please go check them out, they are very cool)
- fix Alienhub signup page

## v1.1.2

- add support for mac users for command-click key opening full url
- faster real-time streaming

## v1.1.1

- add sponsor link

## v1.1.0

- change rammerhead protocol from `rammerhead://` to `rh://`
- add long overdue new tab button
- add long overdue feature of importing and exporting browser profiles
- add long overdue message when initial connection fails
- add globe image for sites without a favicon
- add reset button in `rh://settings`
- add option to change tab title and favicon
- design changes here and there
- update `rh://welcome` for new import/export feature
- fix bug of localStorage saving not working (logins like discord should stick now)
- reshuffle urls with every new session
- reorganize changelog format

## v1.0.4

- add file cache support from rammerhead update
- temporarily switch back to nodejs cluster system as load times should be much much faster

## v1.0.3

- switch scaling method from nodejs cluster to kubernetes system
- remove Arc.io

## v1.0.23

- update localStorage key references to new rammerhead custom localStorage implementation

## v1.0.22

- fix Arc.io service worker

## v1.0.21

- prevent URL from lowercasing when entered in browser (urls entered with caps works now)
- add browser-bar URL recognition support for IPv4 addresses
- experimentally add Arc.io as a test for a possible source of server funding

## v1.0.2

- add server multithreading support

## v1.0.12

- fix localStorage `rhdatabase` cleanup

## v1.0.11

- switch to use `localStorage` instead of `sessionStorage` for keeping track of cleanups

## v1.0.1

- add version number to new tab page
- add `rammerhead://changelog`
- add url suggestions for rammerhead:// urls
- add similar UI of old rammerhead to new tab page

## v1.0.0

- Rammerhead browser release