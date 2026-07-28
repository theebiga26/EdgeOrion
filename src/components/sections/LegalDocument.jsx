import { motion } from 'framer-motion';

const policies = {
  terms: `
    <h1>Terms and Conditions</h1>
    <p class="updated">Last updated: July 28, 2026</p>
    <p>Please read these terms and conditions carefully before using Our Service.</p>
    
    <h2>Interpretation and Definitions</h2>
    <h3>Interpretation</h3>
    <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
    
    <h3>Definitions</h3>
    <p>For the purposes of these Terms and Conditions:</p>
    <ul>
      <li><p><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p></li>
      <li><p><strong>Country/State</strong> refers to: California, United States</p></li>
      <li><p><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in these Terms and Conditions) refers to edgeorion, USA.</p></li>
      <li><p><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</p></li>
      <li><p><strong>Service</strong> refers to the Website.</p></li>
      <li><p><strong>Terms and Conditions</strong> (also referred to as "Terms") means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service.</p></li>
      <li><p><strong>Third-Party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third party that is displayed, included, made available, or linked to through the Service.</p></li>
      <li><p><strong>Website</strong> refers to edgeorion, accessible from <a href="https://edgeorion.net" target="_blank">edgeorion.net</a></p></li>
      <li><p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p></li>
    </ul>

    <h2>Acknowledgment</h2>
    <p>These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
    <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
    <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
    <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
    <p>Your access to and use of the Service is also subject to Our Privacy Policy, which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.</p>

    <h2>Links to Other Websites</h2>
    <p>Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.</p>
    <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.</p>
    <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.</p>

    <h2>Termination</h2>
    <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
    <p>Upon termination, Your right to use the Service will cease immediately.</p>

    <h2>Limitation of Liability</h2>
    <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
    <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of these Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>

    <h2>"AS IS" and "AS AVAILABLE" Disclaimer</h2>
    <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>

    <h2>Governing Law</h2>
    <p>The laws of the Country/State, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>

    <h2>Disputes Resolution</h2>
    <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>

    <h2>For European Union (EU) Users</h2>
    <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.</p>

    <h2>United States Legal Compliance</h2>
    <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>

    <h2>Severability and Waiver</h2>
    <h3>Severability</h3>
    <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
    <h3>Waiver</h3>
    <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>

    <h2>Changes to These Terms and Conditions</h2>
    <p>We reserve the right, at Our sole discretion, to modify or replace These Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
    <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the Service.</p>

    <h2>Contact Us</h2>
    <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
    <ul>
      <li>By email: <a href="mailto:support@edgeorion.net">support@edgeorion.net</a></li>
      <li>By phone: +1 (213) 555-0106</li>
    </ul>
  `,
  privacy: `
    <h1>Privacy Policy</h1>
    <p class="updated">Last updated: July 28, 2026</p>
    <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
    <p>We use Your Personal Data to provide and improve the Service. We collect, use, and disclose Your information as described in this Privacy Policy and, where required by applicable law, only where We have a valid legal basis to do so, including Your consent.</p>
    
    <h2>Interpretation and Definitions</h2>
    <h3>Interpretation</h3>
    <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
    
    <h3>Definitions</h3>
    <p>For the purposes of this Privacy Policy:</p>
    <ul>
      <li><p><strong>Account</strong> means a unique account created for You to access Our Service or parts of Our Service.</p></li>
      <li><p><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p></li>
      <li><p><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Privacy Policy) refers to edgeorion, USA.</p></li>
      <li><p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website, among its many uses.</p></li>
      <li><p><strong>Country/State</strong> refers to: California, United States.</p></li>
      <li><p><strong>Device</strong> means any device that can access the Service, such as a computer, a cell phone or a digital tablet.</p></li>
      <li><p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p></li>
      <li><p><strong>Service</strong> refers to the Website.</p></li>
      <li><p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p></li>
      <li><p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p></li>
      <li><p><strong>User</strong> means any individual who accesses or uses the Service.</p></li>
      <li><p><strong>Website</strong> refers to edgeorion, accessible from <a href="https://edgeorion.net" target="_blank">edgeorion.net</a>.</p></li>
      <li><p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p></li>
    </ul>

    <h2>Collecting and Using Your Personal Information</h2>
    <h3>Types of Data Collected</h3>
    <h4>Personal Data</h4>
    <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
    <ul>
      <li>Email address</li>
      <li>First name and last name</li>
      <li>Phone number</li>
    </ul>

    <h4>Usage Data</h4>
    <p>Usage Data is collected automatically when using the Service.</p>
    <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of Our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
    <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device's unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>

    <h4>Tracking Technologies and Cookies</h4>
    <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies We use include beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.</p>
    <p>Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.</p>
    <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
    <ul>
      <li><p><strong>Necessary / Essential Cookies</strong> (Session Cookies): These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features.</p></li>
      <li><p><strong>Cookies Policy / Notice Acceptance Cookies</strong> (Persistent Cookies): These Cookies identify whether users have accepted the use of cookies on the Website.</p></li>
      <li><p><strong>Functionality Cookies</strong> (Persistent Cookies): These Cookies allow Us to remember choices You make when You use the Website, such as remembering Your Account login details or language preference.</p></li>
    </ul>

    <h3>Use of Your Personal Data</h3>
    <p>The Company may use Personal Data for the following purposes:</p>
    <ul>
      <li><p><strong>To provide and maintain Our Service</strong>, including to monitor the usage of Our Service.</p></li>
      <li><p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service.</p></li>
      <li><p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased.</p></li>
      <li><p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</p></li>
      <li><p><strong>To provide You</strong> with news, special offers, and general information about other goods, services and events which We offer.</p></li>
      <li><p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p></li>
    </ul>

    <h3>Retention of Your Personal Data</h3>
    <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with Our legal obligations, resolve disputes, and enforce Our legal agreements and policies.</p>

    <h3>Transfer of Your Personal Data</h3>
    <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of Your jurisdiction.</p>

    <h3>Delete Your Personal Data</h3>
    <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. You may update, amend, or delete Your information at any time by signing in to Your Account or by contacting us.</p>

    <h3>Disclosure of Your Personal Data</h3>
    <h4>Business Transactions</h4>
    <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
    <h4>Law Enforcement</h4>
    <p>Under certain circumstances, the Company may disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities.</p>

    <h3>Security of Your Personal Data</h3>
    <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>

    <h2>Children's and Minors' Privacy</h2>
    <p>The Service is not directed to, and We do not knowingly collect Personal Information from, anyone under the age of 16. If We become aware that We have collected Personal Information from anyone under the age of 16, We will take steps to remove that information from Our servers as soon as reasonably possible.</p>

    <h2>Changes to this Privacy Policy</h2>
    <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>

    <h2>Contact Us</h2>
    <p>If You have any questions about this Privacy Policy, You can contact Us:</p>
    <ul>
      <li>By email: <a href="mailto:support@edgeorion.net">support@edgeorion.net</a></li>
      <li>By phone: +1 (213) 555-0106</li>
    </ul>
  `,
  cookies: `
    <h1>Cookies Policy</h1>
    <p class="updated">Last updated: July 28, 2026</p>
    <p>This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.</p>
    
    <h2>Interpretation and Definitions</h2>
    <h3>Interpretation</h3>
    <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
    
    <h3>Definitions</h3>
    <p>For the purposes of this Cookies Policy:</p>
    <ul>
      <li><p><strong>Company</strong> refers to edgeorion, 600 Wilshire Blvd, Los Angeles, CA 90013, USA.</p></li>
      <li><p><strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</p></li>
      <li><p><strong>Website</strong> refers to edgeorion, accessible from <a href="https://edgeorion.net" target="_blank">edgeorion.net</a>.</p></li>
      <li><p><strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</p></li>
    </ul>

    <h2>The use of the Cookies</h2>
    <h3>Type of Cookies We Use</h3>
    <p>Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.</p>
    <p>We use both session and persistent Cookies for the purposes set out below:</p>
    <ul>
      <li><p><strong>Necessary / Essential Cookies</strong> (Session Cookies): These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features.</p></li>
      <li><p><strong>Functionality Cookies</strong> (Persistent Cookies): These Cookies allow Us to remember choices You make when You use the Website, such as remembering your login details or language preference.</p></li>
    </ul>

    <h3>Your Choices Regarding Cookies</h3>
    <p>If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with the Website. You may use this option for preventing the use of Cookies at any time.</p>
    <p>If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.</p>

    <h2>Changes to this Cookies Policy</h2>
    <p>We may update this Cookies Policy from time to time. The "Last updated" date at the top indicates when it was last revised.</p>

    <h2>Contact Us</h2>
    <p>If you have any questions about this Cookies Policy, You can contact us:</p>
    <ul>
      <li>By email: <a href="mailto:support@edgeorion.net">support@edgeorion.net</a></li>
      <li>By phone: +1 (213) 555-0106</li>
    </ul>
  `
};

export default function LegalDocument({ type, onBack }) {
  const content = policies[type] || '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full border border-primary/20 rounded-3xl p-6 sm:p-10 md:p-16 backdrop-blur-md bg-[#0a0514]/85 shadow-[0_0_60px_rgba(0,0,0,0.95)] overflow-hidden moving-border"
    >
      <style>{`
        .legal-content h1 {
          font-size: 2.25rem;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 0.5rem;
          letter-spacing: -0.025em;
          text-shadow: 0 0 15px rgba(212,20,255,0.3);
        }
        .legal-content .updated {
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
        }
        .legal-content h2 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 0.5rem;
        }
        .legal-content h3 {
          font-size: 1.125rem;
          font-weight: 700;
          color: #D414FF;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
        }
        .legal-content p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          margin-bottom: 1.25rem;
          font-size: 0.95rem;
        }
        .legal-content ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
        }
        .legal-content li {
          margin-bottom: 0.75rem;
          line-height: 1.6;
        }
        .legal-content li p {
          margin-bottom: 0 !important;
          display: inline !important;
        }
        .legal-content strong {
          color: #ffffff;
          font-weight: 600;
        }
        .legal-content a {
          color: #D414FF;
          text-decoration: underline;
          transition: color 0.2s ease;
          font-weight: 600;
        }
        .legal-content a:hover {
          color: #4A00E0;
        }
      `}</style>

      {/* Background cyber ambient flows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* Header Controls */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10 shrink-0 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(212,20,255,0.8)]" />
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Legal Document</span>
        </div>
        <button
          onClick={onBack}
          className="bg-white/5 border border-white/10 hover:border-primary/50 text-white font-bold py-2 px-5 rounded-full transition-all text-xs hover:scale-105 hover:bg-white/10"
        >
          ← Back to Overview
        </button>
      </div>

      {/* Structured Policy Content */}
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="legal-content relative z-10 text-white font-sans text-left"
      />
    </motion.div>
  );
}
