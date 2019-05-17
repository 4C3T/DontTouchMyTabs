## Don't touch my tabs! (rel=noopener)

A WebExtension that prevents tabs opened by a hyperlink from hijacking the previous tab by adding the `rel=noopener` attribute to all hyperlinks that have the `target="_blank"` attribute (excluding same-domain hyperlinks).

### Summary
- It searches for any hyperlink that points to a page not hosted on the same domain as the viewed page and checks if it has the `target="_blank"` attribute.
  - If a hyperlink has no `rel=` attribute, it adds `rel=noopener` to the hyperlink.
  - If a hyperlink already has a `rel=` attribute the `noopener` value is added to the other values.

### Official browser extension pages
| Browser | Location |
| ------- | -------- |
| Firefox | https://addons.mozilla.org/en-US/firefox/addon/dont-touch-my-tabs/ |
| Chrome | Not available yet. |
