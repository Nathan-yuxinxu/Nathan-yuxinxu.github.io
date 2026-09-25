# Yuxin Xu Academic Site

Deploy-ready static academic website for **Nathan-yuxinxu.github.io**.

## Included pages
- `index.html` — About / homepage
- `research.html` — research projects with project images
- `publications.html` — manuscripts and publications
- `cv.html` — web CV
- `assets/Yuxin_Xu_CV.pdf` — downloadable CV

## Deploy to GitHub Pages
1. Open the repository `Nathan-yuxinxu/Nathan-yuxinxu.github.io`.
2. Upload **all files and folders** from this package to the root of the repository.
3. Commit the files to the `main` branch.
4. In GitHub, go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Set **Branch = main** and **Folder = /(root)**.
7. Save and wait 1–3 minutes.
8. Your site should appear at `https://Nathan-yuxinxu.github.io/`.

## Notes
- `.nojekyll` is included so GitHub Pages serves the static files directly.
- Phone number is intentionally omitted from the public site.
- You can later add Google Scholar / ORCID / LinkedIn links.
- If you later generate figures for the silver-coating project, place them under `assets/images/projects/` and update `research.html`.

## Research image behavior
- Research figures use standardized thumbnail frames without cropping (`object-fit: contain`).
- Click any project image to open the full-resolution figure in a lightbox.
- Press `Esc`, click the close button, or click outside the image to exit.

## Bilingual support
- A compact Chinese / English switch is automatically shown at the top-right of the navigation.
- The selected language is remembered across pages using browser local storage.
- Formal publication titles, author names, journal names, software names, and email addresses remain in their official form.

## V5 update
- Added four silver-coating research figures to the first Research project.
- Figures preserve full content in thumbnails and remain clickable for full-resolution viewing.
- Added English/Chinese captions and alt text for the new figures.
