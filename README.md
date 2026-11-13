# Dip Soft Studios website

A responsive studio website built with HTML, CSS, and JavaScript. Jekyll builds the blog from Markdown posts; the existing pages remain ordinary HTML.

## Pages

- `index.html` — studio home and featured app
- `about.html` and `story.html` — studio information and the reason behind the studio
- `apps.html` — app directory with the PataHive app listing and expandable details
- `support.html` — international support and the planned India option
- `contact.html` — contact form and public support contact
- `blog/index.html` — generated article list
- `patahive-privacy.html`, `privacy.html`, `terms.html`, `refunds.html`, and `delivery.html` — app and website policies
- `404.html` — not-found page

## Add a blog post

1. In the GitHub repository, choose **Add file → Create new file**.
2. Name it `_posts/YYYY-MM-DD-short-title.md`, using the publication date and lowercase words separated by hyphens. For example: `_posts/2026-12-01-patahive-update.md`.
3. Start the file with this front matter, changing the title, date, and description:

   ```yaml
   ---
   layout: post
   title: "Your article title"
   date: 2026-12-01 10:00:00 +0530
   description: "A short summary for the article list and search engines."
   ---
   ```

4. Write the article below the second `---` using normal text and Markdown. Headings use `##`, links use `[words](https://example.com)`, and paragraphs are separated by a blank line.
5. Commit the file to `main`. GitHub Actions builds the site, and the new post appears in the Blog section after Pages finishes deploying.

The Blog page and navigation are already set up. You do not need to edit `index.html` or the navigation when publishing another post.

## What Jekyll does here

Jekyll leaves the existing hand-written HTML pages in place and processes the Markdown posts in `_posts/`. It uses `_layouts/` to give the Blog list and articles the same navigation, footer, and styles as the rest of the site. `_config.yml` sets the site details and blog URLs; `Gemfile` supplies the GitHub Pages build dependencies.

## Contact form

The contact form uses FormSubmit to forward messages to the studio inbox. Before the form can deliver messages, submit it once from the deployed website and confirm the activation email sent to the studio. After activation, new submissions are forwarded by the service. The contact page also provides the public email fallback needed for support and merchant contact checks. FormSubmit processes submitted names, reply addresses, topics, and messages; see `privacy.html` before changing the form provider or fields.

## Host on GitHub Pages

1. Keep the contents of this folder at the root of the website repository—not inside an extra `dip-soft-studio-site` directory.
2. Upload the changed and new files while preserving paths, including `_config.yml`, `_layouts/`, `_posts/`, `blog/`, `assets/`, and `Gemfile`.
3. Keep the working GitHub Pages workflow in `.github/workflows/`.
4. Commit to `main` and check the latest run under the repository’s **Actions** tab.

The published site uses root-relative navigation and is configured for `https://dipsoftstudios.github.io`.

## Add another app

Add another app article/card to `apps.html`, provide its real app icon in `assets/`, and link only to its official download destinations. Keep the short summary visible and put the longer explanation in a `<details class="app-description">` disclosure so the directory remains compact.

## Before public launch

- Check all page text, contact routes, policy statements, and the live contact form.
- The India support option is labelled as planned until its payment setup is active.
- The current international contribution link opens an external provider; confirm its destination before publishing changes.
- For Google Play, set the required support email in Play Console and link the public PataHive privacy policy. Keep the privacy policy and Data safety declarations aligned with the current app.
- Before enabling India-based payments, verify the merchant contact, business, cancellation, refund, and privacy details against the payment provider’s current requirements.

## Publisher

Dip Soft Studios is the software publisher name used by Sudip Bhattacharjya in India. Contact options are on the website’s Contact page.
