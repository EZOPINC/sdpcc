readme_content = """# Saskatoon Durga Puja Celebration Committee (SDPCC) Website

This is the official website for the **Saskatoon Durga Puja Celebration Committee (SDPCC)**, a Bengali cultural community in Saskatoon, Saskatchewan, Canada.  
The site is built as a static website using **HTML, CSS, Bootstrap 5, and Jekyll includes** (for SEO tags). It is designed to be hosted on **GitHub Pages**.

---

## 📂 Project Structure

sdpcc-site/
│
├── _includes/
│ └── seo.html # SEO + social tags (included in all pages)
│
├── assets/
│ ├── css/styles.css # Custom CSS
│ ├── js/scripts.js # Custom JavaScript
│ └── img/ # Images (hero, gallery, etc.)
│
├── index.html # Home page
├── gallery.html # Year-wise gallery
├── events.html # Upcoming events + calendar
├── announcements.html # Committee announcements
└── contact.html # Email / call connect page



---

## 🚀 Deployment on GitHub Pages

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new public repository.  
   - Example name: `sdpcc-site`.

2. **Upload Files**
   - Upload all the files from the `sdpcc-site` folder to your new repository.

3. **Enable GitHub Pages**
   - Go to your repo → **Settings** → **Pages**.  
   - Under *Branch*, select `main` (or `master`) and `/root`.  
   - Click **Save**.

4. **Access Your Site**
   - Your website will be live at:  
     `https://yourgithubusername.github.io/sdpcc-site/`

5. **Custom Domain (Optional)**
   - If you have a custom domain (e.g. `sdpcc.ca`), add a `CNAME` file in the repo with the domain name, and update DNS records.

---

## 🛠 Editing Pages

- To edit SEO tags, update `_includes/seo.html` (applies across all pages).  
- To update events → edit `events.html`.  
- To add gallery images → place them under `assets/img/gallery/` and update `gallery.html`.  
- To update announcements → edit `announcements.html`.  
- To change contact info → update `contact.html`.

---

## 🌐 Social Links

- Update Facebook & Instagram links inside the **footer** section of each page.  

---

## 👥 Credits

- Community: **Saskatoon Durga Puja Celebration Committee (SDPCC)**  
- Location: Saskatoon, Saskatchewan, Canada  
"""

# Save README.md
readme_path = "/mnt/data/README.md"
with open(readme_path, "w") as f:
    f.write(readme_content)

readme_path
