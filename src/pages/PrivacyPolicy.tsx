import React from "react";

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-soft-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-500 mb-8 text-center">
          Effective Date: June 28, 2025
        </p>

        <p className="mb-4">
          This Privacy Policy describes how Vedha Solutions ("we", "us", or
          "our") collects, uses, protects, and shares your information when you
          use our website and services ("Services"). We are deeply committed to
          protecting your privacy and complying with all applicable federal and
          state laws in the United States, including but not limited to the
          Health Insurance Portability and Accountability Act (HIPAA) and its
          implementing regulations, the California Consumer Privacy Act (CCPA),
          and other relevant data privacy regulations.
        </p>

        <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
          1. Definitions
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong className="font-semibold">
              Personal Information (PI):
            </strong>{" "}
            Any information that identifies, relates to, describes, is
            reasonably capable of being associated with, or could reasonably be
            linked, directly or indirectly, with a particular consumer or
            household.
          </li>
          <li>
            <strong className="font-semibold">
              Protected Health Information (PHI):
            </strong>{" "}
            Individually identifiable health information as defined by HIPAA,
            including demographic data, medical histories, test results,
            insurance information, and other information used to identify a
            patient or provide healthcare services.
          </li>
          <li>
            <strong className="font-semibold">Covered Entity:</strong> A health
            plan, healthcare clearinghouse, or a healthcare provider who
            transmits any health information in electronic form in connection
            with a transaction for which HHS has adopted a standard.
          </li>
          <li>
            <strong className="font-semibold">Business Associate (BA):</strong>{" "}
            A person or entity that performs functions or activities on behalf
            of, or provides services to, a Covered Entity that involves access
            to, use, or disclosure of PHI. Vedha Solutions acts as a Business
            Associate for many of its clients.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
          2. Information We Collect
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong className="font-semibold">Contact Information:</strong>{" "}
            Name, email address, phone number, job title, company/practice name,
            and physical address provided when you use our contact forms,
            consultation requests, or service inquiries.
          </li>
          <li>
            <strong className="font-semibold">Practice Information:</strong>{" "}
            Details about your healthcare practice, including type, size,
            current EHR system, and specific challenges, collected via our
            consultation and service request forms.
          </li>
          <li>
            <strong className="font-semibold">
              Protected Health Information (PHI):
            </strong>{" "}
            When you engage our services that involve the handling of patient
            data (e.g., medical scribing, RCM), we may receive, create,
            maintain, or transmit PHI on behalf of our Covered Entity clients.
            Our handling of PHI is strictly governed by HIPAA and a Business
            Associate Agreement (BAA). We do not directly collect PHI from
            patients through our website.
          </li>
          <li>
            <strong className="font-semibold">Usage Data:</strong> Information
            about how you access and use our website, including your IP address,
            browser type, device identifiers, operating system, pages viewed,
            time spent on pages, and referring URLs.
          </li>
          <li>
            <strong className="font-semibold">
              Cookies and Tracking Technologies:
            </strong>{" "}
            We use cookies and similar tracking technologies (e.g., pixels, web
            beacons) to understand website usage, remember user preferences, and
            improve your experience. You can manage cookie preferences through
            your browser settings.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
          3. How We Use Your Information
        </h2>
        <p className="mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            To provide, operate, and maintain our Services, including fulfilling
            service requests and consultations.
          </li>
          <li>
            To respond to your inquiries, requests, and provide customer
            support.
          </li>
          <li>
            To send you administrative information, technical notices, updates,
            security alerts, and support messages.
          </li>
          <li>
            To send you marketing and promotional communications about our
            Services that may be of interest to you (you may opt-out at any
            time).
          </li>
          <li>
            To analyze and improve the effectiveness of our website, services,
            and marketing efforts.
          </li>
          <li>
            To monitor and analyze trends, usage, and activities in connection
            with our Services.
          </li>
          <li>
            To detect, prevent, and address technical issues, fraud, or other
            illegal activities.
          </li>
          <li>
            To comply with legal obligations and enforce our Terms of Service.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
          4. How We Handle Protected Health Information (PHI) - HIPAA Compliance
        </h2>
        <p className="mb-4">
          <strong className="font-semibold">
            If and to the extent Vedha Solutions receives, uses, or discloses
            Protected Health Information (PHI) in connection with the Services
            provided to our Covered Entity clients, we do so solely as a
            Business Associate under the Health Insurance Portability and
            Accountability Act (HIPAA) and its implementing regulations.
          </strong>
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            We enter into a{" "}
            <strong className="font-semibold">
              Business Associate Agreement (BAA)
            </strong>{" "}
            with each Covered Entity client, outlining our respective
            responsibilities for protecting PHI.
          </li>
          <li>
            We will only Use or Disclose PHI as permitted by the BAA and as
            required or permitted by law (e.g., for treatment, payment,
            healthcare operations).
          </li>
          <li>
            We implement appropriate{" "}
            <strong className="font-semibold">
              administrative, physical, and technical safeguards
            </strong>{" "}
            to protect the confidentiality, integrity, and availability of PHI,
            as required by the HIPAA Security Rule.
          </li>
          <li>
            We will report any security incidents or breaches of unsecured PHI
            to our Covered Entity clients as required by HIPAA's Breach
            Notification Rule.
          </li>
        </ul>
        <p className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
          <strong className="font-semibold">Disclaimer:</strong> This Privacy
          Policy is a general statement. Specific obligations regarding PHI are
          governed by the Business Associate Agreements we establish with our
          clients. Patients seeking to exercise their rights regarding PHI
          should contact their healthcare provider (the Covered Entity)
          directly.
        </p>

        <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
          5. Sharing Your Information
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong className="font-semibold">Service Providers:</strong> We may
            share your Personal Information with third-party service providers
            who perform services on our behalf (e.g., hosting, analytics,
            customer support, email delivery). These providers are contractually
            obligated to protect your information and use it only for the
            purposes for which we disclose it to them.
          </li>
          <li>
            <strong className="font-semibold">
              Legal Compliance and Protection:
            </strong>{" "}
            We may disclose your information if required to do so by law or in
            the good faith belief that such action is necessary to (a) comply
            with a legal obligation, (b) protect and defend the rights or
            property of Vedha Solutions, (c) act in urgent circumstances to
            protect the personal safety of users of the Services or the public,
            or (d) protect against legal liability.
          </li>
          <li>
            <strong className="font-semibold">Business Transfers:</strong> In
            the event of a merger, acquisition, or sale of all or a portion of
            our assets, your information may be transferred as part of that
            transaction.
          </li>
          <li>
            <strong className="font-semibold">
              No Sale of Personal Information:
            </strong>{" "}
            We do not sell your Personal Information to third-parties for
            monetary or other valuable consideration.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
          6. Data Security
        </h2>
        <p className="mb-4">
          We implement robust and commercially reasonable security measures
          designed to protect your Personal Information and PHI from
          unauthorized access, use, alteration, or destruction. This includes
          encryption, access controls, regular security assessments, and
          employee training. However, no method of transmission over the
          Internet or method of electronic storage is 100% secure. Therefore,
          while we strive to use commercially acceptable means to protect your
          information, we cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
          7. Data Retention
        </h2>
        <p className="mb-4">
          We retain your Personal Information only for as long as necessary to
          fulfill the purposes for which it was collected, including for the
          purposes of satisfying any legal, accounting, or reporting
          requirements. The retention periods for PHI are governed by our
          Business Associate Agreements and applicable healthcare regulations.
        </p>

        <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
          8. Your Data Protection Rights
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong className="font-semibold">Right to Access:</strong> You have
            the right to request copies of your Personal Information we hold.
          </li>
          <li>
            <strong className="font-semibold">Right to Rectification:</strong>{" "}
            You have the right to request that we correct any information you
            believe is inaccurate or complete information you believe is
            incomplete.
          </li>
          <li>
            <strong className="font-semibold">Right to Erasure:</strong> You
            have the right to request that we erase your Personal Information,
            under certain conditions.
          </li>
          <li>
            <strong className="font-semibold">
              Right to Restrict Processing:
            </strong>{" "}
            You have the right to request that we restrict the processing of
            your Personal Information, under certain conditions.
          </li>
          <li>
            <strong className="font-semibold">
              Right to Object to Processing:
            </strong>{" "}
            You have the right to object to our processing of your Personal
            Information, under certain conditions.
          </li>
          <li>
            <strong className="font-semibold">
              Right to Data Portability:
            </strong>{" "}
            You have the right to request that we transfer the data that we have
            collected to another organization, or directly to you, under certain
            conditions.
          </li>
          <li>
            <strong className="font-semibold">
              California Privacy Rights (CCPA):
            </strong>{" "}
            California residents have specific rights, including the right to
            know what personal information is collected, used, disclosed, or
            sold; the right to request deletion of personal information; and the
            right to opt-out of the sale of personal information (though we do
            not sell PI).
          </li>
        </ul>
        <p className="mt-4">
          To exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:privacy@vedhasolutions.com"
            className="text-primary-500 hover:text-primary-600 underline"
          >
            privacy@vedhasolutions.com
          </a>
          . We will respond to your request within the timeframe required by
          applicable law.
        </p>

        <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
          9. Children's Privacy
        </h2>
        <p className="mb-4">
          Our Services are not intended for use by children under the age of 13.
          We do not knowingly collect personally identifiable information from
          anyone under the age of 13. If you are a parent or guardian and you
          are aware that your child has provided us with Personal Information,
          please contact us. If we become aware that we have collected Personal
          Information from children without verification of parental consent, we
          take steps to remove that information from our servers.
        </p>

        <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
          10. Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page with an
          updated "Effective Date" at the top. We encourage you to review this
          Privacy Policy periodically for any changes.
        </p>

        <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
          Contact Us
        </h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            By email:{" "}
            <a
              href="mailto:privacy@vedhasolutions.com"
              className="text-primary-500 hover:text-primary-600 underline"
            >
              privacy@vedhasolutions.com
            </a>
          </li>
          <li>By mail: [Your Company Full Address Here]</li>
        </ul>
      </div>
    </div>
  );
};
export default Privacy;
