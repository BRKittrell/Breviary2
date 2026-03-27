import React, { useEffect } from 'react';

function ProjectPortfolio() {
  useEffect(() => {
    // Tableau logic
    const divElement = document.getElementById('viz1774641875281');
    const vizElement = divElement ? divElement.getElementsByTagName('object')[0] : null;
    
    if (divElement && vizElement) {
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = '100%';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '100%';
        vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
      } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '1377px';
      }

      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      vizElement.parentNode.insertBefore(scriptElement, vizElement);
    }
  }, []);

  return (
    /* This wrapper centers your content and stops it from hitting the screen edges */
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
      
      <h1>Marketing Internship Tableau Analytics</h1>
      
      <div 
        className='tableauPlaceholder' 
        id='viz1774641875281' 
        style={{ position: 'relative', marginBottom: '80px' }} // Added bottom margin to separate from Excel
      >
        <noscript>
          <a href='#'>
            <img 
              alt='Campaign &amp; Revenue Analysis' 
              src='https://public.tableau.com/static/images/Ma/MarketingInternshipRevenueAnalysis/CampaignRevenueAnalysis/1_rss.png' 
              style={{ border: 'none' }} 
            />
          </a>
        </noscript>
        <object className='tableauViz' style={{ display: 'none' }}>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='site_root' value='' />
          <param name='name' value='MarketingInternshipRevenueAnalysis/CampaignRevenueAnalysis' />
          <param name='tabs' value='no' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https://public.tableau.com/static/images/Ma/MarketingInternshipRevenueAnalysis/CampaignRevenueAnalysis/1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
        </object>
      </div>

      <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '40px 0' }} />

      <h1>Supply Chain Management Project</h1>
      
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
        <iframe 
          /* Updated URL to /preview so it actually displays */
          src="https://docs.google.com/spreadsheets/d/1c7GrPkmBhiuaCEIPJgTFtEA5H7aj3zmE/edit?usp=sharing&ouid=109943883740572144728&rtpof=true&sd=true" 
          width="100%" 
          height="700px" 
          allow="autoplay"
          title="Supply Chain Excel Project"
        ></iframe>
      </div>

    </div>
  );
}

export default ProjectPortfolio;
