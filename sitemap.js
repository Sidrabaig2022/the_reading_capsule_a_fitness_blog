app.get('/sitemap.xml', (req, res) => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/national-championship.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/index.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/trending.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/fitgirls.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/knowledge.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/subscribe.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/contact.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/about.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/privacy.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/terms.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/disclaimer.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/dcvsrcb.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/pakvsireland.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/lakers-vs-thunder.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/march-madness.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/mens-march-madness.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/bitcoin.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/Arsenal-Real-Madrid.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/Melone.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/fitness.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/science-nature.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      v
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/history-politics.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/technology-innovation.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/human-body-health.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>

      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/geography-earth.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url><url>
        <loc>https://the-reading-capsule-backend.onrender.com/arts-culture.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/space-astronomy.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/psychology.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/languages-and-linguistics.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/miscellaneous-wonders.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/football-blogs.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://the-reading-capsule-backend.onrender.com/fitness.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>


      <!-- Add more URLs here -->
    </urlset>`;
  
    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  });
  