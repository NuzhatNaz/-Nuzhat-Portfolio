# Nuzhat Naz — Portfolio

A clean, professional portfolio for **Nuzhat Naz (Aspiring AI Specialist)**, built for online viewing and PDF export.

## Contents

- **Online portfolio**: Single-page site with sections for About, Skills, Projects, Education, Experience, Beyond Tech, and Contact.
- **PDF version**: Use the same page with **Download PDF** (or your browser’s Print) and choose **Save as PDF** to get a print-optimized document.

## How to view online

1. Open the folder `portfolio` in your computer.
2. Double-click **index.html** to open it in your default browser,  
   **or**
3. Use a local server (recommended for best behavior):
   - **Python 3**: From the `portfolio` folder run  
     `python -m http.server 8080`  
     Then visit: **http://localhost:8080**
   - **Node.js**: If you have `npx`, run  
     `npx serve .`  
     from the `portfolio` folder and open the URL shown.

## How to get a PDF

1. Open **index.html** in your browser (as above).
2. Click **Download PDF** in the top-right, or press **Ctrl+P** (Windows) / **Cmd+P** (Mac).
3. In the print dialog, set **Destination** (or “Printer”) to **Save as PDF** / **Microsoft Print to PDF**.
4. Click **Save** and choose where to store the file.

The page uses print-friendly styles so the PDF is clean and readable.

## Features

- **Sections**: About (summary & objective), Skills (Python, Data Analysis, ML, AI, Deep Learning, Computer Vision, NLP, ANN, tools), Projects (academic & personal), Education (timeline), Experience & leadership, Beyond Tech (co-curricular, hobbies, languages), Contact.
- **Interactivity**: Smooth scrolling, clickable skill tags, sticky navigation, “Download PDF” button.
- **Accessibility**: Skip link, semantic HTML, ARIA where helpful, keyboard support for skill tags.
- **Responsive**: Layout adapts to different screen sizes.
- **Print/PDF**: Optimized print styles so the exported PDF looks professional.

## File structure

```
portfolio/
  index.html   # Main portfolio page
  styles.css   # Styles (including print)
  script.js    # Interactivity and PDF trigger
  README.md    # This file
```

## Hosting online

To publish as an online portfolio:

- Upload the contents of the `portfolio` folder to any static host (e.g. GitHub Pages, Netlify, Vercel, or your university/web host).
- Ensure **index.html** is set as the default document.
- No build step or server is required; plain HTML, CSS, and JS are used.

---

*Portfolio content is based on the provided CV. Update `index.html` to change text, add links, or new projects.*
