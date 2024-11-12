import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 md:px-16 lg:px-32 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: October 30, 2024</p>
        <p className="mb-6">Please read these terms and conditions carefully before using Our Service.</p>

        <h2 className="text-2xl font-semibold mb-4">Interpretation and Definitions</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">Interpretation</h3>
        <p className="mb-6">
          The words of which the initial letter is capitalized have meanings defined under the following conditions.
          The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Definitions</h3>
        <p className="mb-4">For the purposes of these Terms and Conditions:</p>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
          </li>
          <li>
            <p><strong>Country</strong> refers to: Jharkhand, India</p>
          </li>
          <li>
            <p><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Winsum Planet.</p>
          </li>
          <li>
            <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
          </li>
          <li>
            <p><strong>Service</strong> refers to the Website.</p>
          </li>
          <li>
            <p><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the <Link to="https://www.termsfeed.com/terms-conditions-generator/" className="text-blue-500" target="_blank" rel="noopener noreferrer">Terms and Conditions Generator</Link>.</p>
          </li>
          <li>
            <p><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
          </li>
          <li>
            <p><strong>Website</strong> refers to Winsum Planet, accessible from <Link to="https://www.winsumplanet.com" className="text-blue-500" target="_blank" rel="noopener noreferrer">https://www.winsumplanet.com</Link></p>
          </li>
          <li>
            <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Acknowledgment</h2>
        <p className="mb-6">
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company.
          These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Links to Other Websites</h2>
        <p className="mb-6">
          Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Termination</h2>
        <p className="mb-6">
          We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Limitation of Liability</h2>
        <p className="mb-6">
          Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
        <p className="mb-6">
          The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Governing Law</h2>
        <p className="mb-6">
          The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact Us</h2>
        <p className="mb-6">
          If you have any questions about these Terms and Conditions, You can contact us:
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <p>By visiting this page on our website: <Link to="https://www.winsumplanet.com/contact-us" className="text-blue-500" target="_blank" rel="noopener noreferrer">https://www.winsumplanet.com/contact-us</Link></p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
