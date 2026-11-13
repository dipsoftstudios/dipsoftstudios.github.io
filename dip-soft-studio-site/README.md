# Dip Soft Studios website

A responsive static website made with plain HTML, CSS, and JavaScript. It has no build step, framework, remote font, analytics, or cookie dependency.

## Pages

- index.html — studio home
- about.html — publisher and studio information
- apps.html — app directory; PataHive 1.42 and its official GitHub release link
- support.html — Ko-fi and a planned (inactive) Razorpay option
- patahive-privacy.html — dedicated PataHive Android privacy policy for the Google Play listing
- privacy.html — website privacy policy
- terms.html — terms of use
- refunds.html — refund and cancellation policy
- delivery.html — digital delivery policy
- contact.html — public contact and support information
- 404.html — not-found page

## Preview

Open index.html in a browser, or serve this folder with any static file server. No compilation is required.

## Host on GitHub Pages

1. Create a repository for the website and put the contents of this folder at its root.
2. Open Settings → Pages and select the branch and root folder as the publishing source.
3. Wait for the deployment, then check the policy links and email links at the public URL.

Relative links are used, so it also works on a GitHub Pages project subpath.

## Host on Vercel

1. Import the repository into Vercel.
2. Set the project root to the folder containing this README (or the repository root if these files are at the root).
3. Select framework preset Other, leave the build command blank, and set the output directory to the current folder.
4. Deploy and check the policy pages and external links.

## Add apps and download links

Add a new app card to apps.html. Each app can have its own official links for GitHub Releases, Google Play, or other stores. PataHive currently has only this GitHub release link:

https://github.com/dipsoftstudios/PataHive/releases/tag/v1.42

Update the featured app on index.html if you want a different app highlighted. Use only official download destinations.

## Before public launch

- The site identifies Dip Soft Studios as the publisher name used by Sudip Bhattacharjya in India.
- Public support/privacy email: dipsoftstudios@gmail.com.
- Ko-fi: https://ko-fi.com/dipsoftstudios.
- Razorpay is not enabled. The current pages describe free app downloads and voluntary Ko-fi support; no Razorpay checkout is represented as active.
- Before applying for live Razorpay payments, add the accurate business/operating address and public phone number, then review pricing, cancellation, refund, and delivery terms against the products actually offered. Razorpay may inspect a merchant website and expects clear terms, refund/cancellation information, and contact details; these pages alone do not guarantee approval.
- For Google Play, link the listing to the public patahive-privacy.html URL and complete the separate Play Console Data safety and app-content declarations. Keep the policy aligned with the exact app release, permissions, and all SDK/network behavior.
- Recheck patahive-privacy.html whenever app code, dependencies, or data practices change. It was drafted after inspecting the PataHive 1.42 source available in the workspace.
- If the public website URL changes, update store listings or app links pointing to it.

## Publisher

Dip Soft Studios is the software publisher name used by Sudip Bhattacharjya in India. Contact: dipsoftstudios@gmail.com.
