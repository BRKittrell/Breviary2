import React, { useEffect } from 'react';

function ProjectPortfolio() {
  useEffect(() => {
    const divElement = document.getElementById('viz1774641875281');
    const vizElement = divElement?.getElementsByTagName('object')[0];
    
    if (divElement && vizElement) {
      const width = divElement.offsetWidth;
      vizElement.style.width = '100%';
      vizElement.style.height = width > 500 ? (width * 0.75) + 'px' : '1377px';

      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      vizElement.parentNode.insertBefore(scriptElement, vizElement);
    }
  }, []);

  const containerStyle = { 
    border: '1px solid #ccc', 
    borderRadius: '8px', 
    overflow: 'hidden', 
    marginBottom: '40px' 
  };

  const closeSection = (e) => {
    const details = e.currentTarget.closest("details");
    if (details) details.removeAttribute("open");
  };

  const btnClass = "mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl shadow hover:bg-blue-700 transition";

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      
      {/* SECTION: SUPPLY CHAIN */}
      <details>
        <summary style={{ cursor: 'pointer' }}>
          <h1 style={{ display: 'inline', marginLeft: '10px' }}>Supply Chain Management Project</h1>
        </summary>
        <div style={{ ...containerStyle, margin: '20px' }}>
          <iframe 
            src="https://docs.google.com/spreadsheets/d/1c7GrPkmBhiuaCEIPJgTFtEA5H7aj3zmE/edit?usp=sharing&ouid=109943883740572144728&rtpof=true&sd=true" 
            width="100%" 
            height="700px" 
            title="Supply Chain Excel Project"
          ></iframe>
        </div>
        <button onClick={closeSection} className={btnClass}>Close Section</button>
      </details>



      {/* SECTION 2: MARKETING ANALYTICS */}
      <details>
        <summary style={{ cursor: 'pointer' }}>
          <h1 style={{ display: 'inline', marginLeft: '10px' }}>Marketing Analytics Dashboard</h1>
        </summary>
        <div className='tableauPlaceholder' id='viz1774641875281' style={{ position: 'relative', margin: '20px' }}>
          <noscript>
            <a href='#'><img alt='Campaign & Revenue' src='https://public.tableau.com/static/images/Ma/MarketingInternshipRevenueAnalysis/CampaignRevenueAnalysis/1_rss.png' style={{ border: 'none' }} /></a>
          </noscript>
          <object className='tableauViz' style={{ display: 'none' }}>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
            <param name='name' value='MarketingInternshipRevenueAnalysis/CampaignRevenueAnalysis' />
            <param name='static_image' value='https://public.tableau.com/static/images/Ma/MarketingInternshipRevenueAnalysis/CampaignRevenueAnalysis/1.png' />
            <param name='language' value='en-US' />
            <param name='display_count' value='yes' />
          </object>
        </div>
        <button onClick={closeSection} className={btnClass} style={{ marginTop: '60px' }}>Close Section</button>
      </details>


      {/* SECTION: SOCIAL MEDIA */}
      <details>
        <summary style={{ cursor: 'pointer' }}>
          <h1 style={{ display: 'inline', marginLeft: '10px' }}>Social Media Content</h1>
        </summary>
        <div style={{ ...containerStyle, margin: '20px' }}>
          <iframe 
            src="https://drive.google.com/file/d/14NVIb9v44j_P90ianiD6F2dF-PrV8zXe/preview" 
            width="100%" 
            height="700px" 
            title="Social Media Portfolio"
          ></iframe>
        </div>
        <button onClick={closeSection} className={btnClass}>Close Section</button>
      </details>
    </div>
  );
}

export default ProjectPortfolio;
