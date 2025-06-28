// netlify/functions/submit-form.js

// FIXED: Using a wrapper function for dynamic import to avoid top-level await issue.
// This ensures compatibility with CommonJS bundling in Netlify Functions.

// This is a wrapper function to enable dynamic import of node-fetch in a CJS context.
// It allows us to use 'fetch' directly within the handler.
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


exports.handler = async (event, context) => {
  // Ensure the function only processes POST requests for security and correctness.
  if (event.httpMethod !== "POST") {
    console.warn(`Method Not Allowed: Received a ${event.httpMethod} request.`);
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    // Parse the URL-encoded form data from the request body.
    const formData = new URLSearchParams(event.body);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    // Extract the form name from the submitted data. This is crucial for differentiation.
    const formName = data['form-name'] || 'unknown-form';
    console.log(`Received submission from form: '${formName}'`, data);

    // --- Customize Email Subject based on formName ---
    let emailSubject = `New Submission from ${formName} - Vedha Solutions`; // Default subject

    switch (formName) {
      case 'consultation':
        emailSubject = "New Consultation Request - Vedha Solutions";
        break;
      case 'subscription':
        emailSubject = "New Subscription Request - Vedha Solutions";
        break;
      case 'service-request':
        emailSubject = "New Service Request - Vedha Solutions";
        break;
      case 'contact':
        emailSubject = "New Contact Form Submission - Vedha Solutions";
        break;
      case 'quote-request':
        emailSubject = "New Quote Request - Vedha Solutions";
        break;
      case 'newsletter':
        emailSubject = "New Newsletter Subscription - Vedha Solutions";
        
        // --- Specific Logic for Newsletter Form: Add to Mailing List ---
        const newsletterEmail = data.email;
        if (newsletterEmail && process.env.MAILING_LIST_API_KEY) {
          try {
            // Replace with your actual Mailing List Service API URL and payload structure.
            const mailingListApiUrl = "https://api.your-mailing-list-service.com/add-subscriber"; // <<< REPLACE THIS URL
            const mailingListApiKey = process.env.MAILING_LIST_API_KEY; // Fetched from Netlify Environment Variables

            const mailingListResponse = await fetch(mailingListApiUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${mailingListApiKey}` 
              },
              body: JSON.stringify({
                email_address: newsletterEmail,
                status: 'subscribed', // or 'pending' for double opt-in
              }),
            });

            if (mailingListResponse.ok) {
              console.log(`Successfully added ${newsletterEmail} to mailing list.`);
            } else {
              const errorBody = await mailingListResponse.text();
              console.error(`Mailing list API call failed (Status: ${mailingListResponse.status}):`, errorBody);
            }
          } catch (mailingListError) {
            console.error("Error adding to mailing list:", mailingListError);
          }
        } else if (newsletterEmail && !process.env.MAILING_LIST_API_KEY) {
          console.warn("Newsletter email received, but MAILING_LIST_API_KEY is not set.");
        }
        break;
      default:
        console.warn(`Unhandled form name: ${formName}. Using default subject.`);
    }

    // --- Forward data to Formspree for email notifications ---
    const payloadForFormspree = {
      ...data,
      _subject: emailSubject,
    };

    // Replace 'yourFormspreeEndpoint' with the actual Formspree URL from your Formspree dashboard.
    const formspreeEndpoint = "https://formspree.io/f/xgvyrdod"; // <<< REPLACE THIS URL

    const formspreeResponse = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payloadForFormspree),
    });

    if (formspreeResponse.ok) {
      console.log(`Successfully forwarded submission from '${formName}' to Formspree for email.`);
      return {
        statusCode: 204,
        body: "",
      };
    } else {
      const errorBody = await formspreeResponse.text();
      console.error(`Formspree submission failed (Status: ${formspreeResponse.status}):`, errorBody);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: `Failed to send email via Formspree: ${formspreeResponse.statusText}` }),
      };
    }

  } catch (error) {
    console.error("An unexpected error occurred in submit-form function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error during form processing." }),
    };
  }
};