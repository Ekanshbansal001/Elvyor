This demo uses hosted placeholder images (picsum.photos) and a placeholder
UPI QR code (api.qrserver.com), referenced directly in index.html and
script.js, so no local image files are required to run the site.

Before going live:
- Drop real product photos in this folder and update the `seed` field /
  imgUrl() function in script.js to point to them instead of placeholders.
- Replace the placeholder UPI ID ("elvyora@upi") in index.html with your
  real UPI ID, and regenerate the QR code image URL to match.
