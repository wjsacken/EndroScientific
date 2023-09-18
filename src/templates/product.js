import React, { useState } from "react";
import productDetails from 'data/App/product-details.json';
import productDetailsRTL from 'data/App/product-details-rtl.json';

const ProductDetails = ({ style = "4", rtl }) => {
  const data = rtl ? productDetailsRTL : productDetails;
  const [tabs, setTabs] = useState(data.nav_tabs);

  const openTab = (tabId) => {
    // Remove class 'current' from all tab-links
    document.querySelectorAll(`.product-details .nav-link`).forEach(el => el.classList.remove('active'));
    // Add class 'current' to clicked tab-link
    document.querySelector(`.product-details .nav-link[id="${tabId}-tab"]`).classList.add('active');

    // Close all tabs and open tab with id == tabId
    setTabs(prev_tabs => {
      let newTabs = structuredClone(prev_tabs);

      let newContents = newTabs.map(tab => {
        tab.show = false;
        return tab;
      });

      let idx = newContents.findIndex(tab => tab.id === tabId);

      newContents[idx].show = true;

      newTabs = newContents;

      return newTabs;
    });
  }

  return (
    <section className="product-details pt-100">
      <div className="container">
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          {
            data.nav_pills.map((nav, i) => (
              <li className="nav-item" role="presentation" key={i}>
                <button className={`nav-link ${i === 0 ? 'active':''}`} id={`${nav.id}-tab`} data-bs-toggle="pill" data-bs-target={`#${nav.id}`} type="button" role="tab" aria-controls={nav.id} aria-selected="true" onClick={() => openTab(nav.id)}>{ nav.title }</button>
              </li>
            ))
          }
        </ul>
        <div className="tab-content" id="pills-tabContent">
            {tabs.map((tab, index) => (
              <div key={index}>
                {/* Render your tab here */}
                {tab.id} - {tab.show ? 'Visible' : 'Hidden'}
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default ProductDetails