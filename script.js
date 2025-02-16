function calculateCost() {
    const totalCost = parseFloat(document.getElementById("total-cost").value);
    const totalWeight = parseFloat(document.getElementById("total-weight").value);
    const usedWeight = parseFloat(document.getElementById("used-weight").value);

    if (isNaN(totalCost) || isNaN(totalWeight) || isNaN(usedWeight)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    const costPerGram = totalCost / totalWeight;
    const usedCost = costPerGram * usedWeight;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>Cost per gram: $${costPerGram.toFixed(

Yes, there are several other free options for hosting simple websites:  

### 1. **GitHub Pages**  
- **Pros**: Free, reliable, supports custom domains, and is great for static sites (HTML, CSS, JS).  
- **Cons**: No backend support (only frontend code).  
- **How to Use**:  
  - Create a GitHub repository named `your-username.github.io`.  
  - Upload your website files (`index.html`, `style.css`, `script.js`).  
  - Go to the repository settings and enable GitHub Pages.  
  - Your site will be live at `https://your-username.github.io`.  

---

### 2. **Netlify**  
- **Pros**: Free custom domains, continuous deployment from GitHub, and supports static sites.  
- **Cons**: More advanced features require a learning curve.  
- **How to Use**:  
  - Sign up at [Netlify](https://www.netlify.com).  
  - Connect your GitHub repository, and it automatically deploys your site.  
  - You can also drag-and-drop your project folder directly to deploy.  

---

### 3. **Vercel**  
- **Pros**: Free hosting with custom domains, fast deployments, and GitHub integration.  
- **Cons**: Designed more for modern web apps (Next.js), but works fine with static sites too.  
- **How to Use**:  
  - Sign up at [Vercel](https://vercel.com).  
  - Link your GitHub repository or drag-and-drop your files.  
  - Automatic deployments on every push to the main branch.  

---

### 4. **Neocities**  
- **Pros**: Simple to use, ideal for static websites, and comes with built-in file editing.  
- **Cons**: Limited customization and no backend support.  
- **How to Use**:  
  - Go to [Neocities](https://neocities.org).  
  - Create an account and upload your HTML, CSS, and JS files.  
  - Your site will be live at `https://your-username.neocities.org`.  

---

**Recommendations:**  
- If you’re comfortable with GitHub, use **GitHub Pages** for simplicity.  
- If you want more control and a custom domain, **Netlify** or **Vercel** are great choices.  
- If you just want something super simple and fast, try **Neocities**.  

Let me know if you need help setting up any of these!
