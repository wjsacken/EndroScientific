import React, { useEffect, useRef } from 'react';
import contactInfo from 'data/Contact/form.json';

const Form = ({ style = "4" }) => {
  const formRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.defer = true;
    script.onload = () => {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "7387985",
        formId: "b277dcc8-62ca-4016-ba32-d6232fd6898d",
        target: '#hubspotForm'
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const contactInfoData = contactInfo;

  return (
    <section className={`contact section-padding pt-${style === '4' ? '0':'50'} style-6`}>
      {
        style === '5' && (
          <>
            <div className="section-head text-center mb-100 style-5">
              <h2 className="mb-20">Get In <span>Touch</span></h2>
            </div>
            <div className="text-center mb-100">
              <h2 className="ltspc-20 text-uppercase fs-1 lh-1 mb-50 mt-30 color-blue5"><a href="tel:704-797-1469">{ contactInfoData.phone }</a></h2>
              <h4 className="fw-normal mb-20 color-000"><a href="mailto:brannon@endrosci.com">{ contactInfoData.email }</a></h4>
              <h4 className="fw-normal mb-10 color-000">{ contactInfoData.address }</h4>
            </div>
          </>
        )
      }
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="form" ref={formRef}>
                <div id="hubspotForm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form;
