# Things for my Discord

## Plugins

Some of these plugins I've modified to better integrate into my theme.


## Themes

In order to use my theme to the fullest you'll need to patch Discord to allow full transparency and patch the BetterDiscord main.css and main.min.css to remove all "!important" tags. You can either do so from my provided desktop_core folder or manually do so yourself if you know how. For transparency you can use the plugin `TransparencyPatcher.plugin.js`.

The only theme file you need is `Advent.theme.css` unless you're using my patched BetterDiscord, or done so yourself, in which case you'll also need the `BetterDiscord-Removed_Important.theme.css` or the modified main.css with the added META tag for BetterDiscord to read it as a theme and renamed to `*something*.theme.css`.


### You'll need to enable the `BetterDiscord-Removed_Important.theme.css` (or your own) version of the theme within Discord in order for things not to be broken!