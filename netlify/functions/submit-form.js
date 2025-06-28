
/**
 * Universal Netlify Serverless Function to handle form submissions from multiple forms.
 * It parses the form data, dynamically sets the email subject,
 * forwards the data to Formspree for email notifications, and
 * includes specific logic for the newsletter form to interact with a mailing list API.
 *
 * This function handles POST requests from forms submitted via client-side JavaScript (fetch).
 *
 * Prerequisites:
 * 1. `node-fetch` installed as a dependency in your project's `package.json`: `npm install node-fetch`
 * 2. Formspree.io account and a form endpoint URL (e.g., https://formspree.io/f/yourFormspreeEndpoint)
 * 3. (Optional, for newsletter) Mailing list service API URL (e.g., Mailchimp, ConvertKit)
 * 4. (Optional, for newsletter) Mailing list API Key set as a Netlify Environment Variable
 * (e.g., `MAILING_LIST_API_KEY`). NEVER hardcode API keys.
 */

// Dynamically import node-fetch. This addresses the "require() of ES Module ... not supported" error.
// node-fetch is needed for older Node.js runtimes or if the global fetch isn.t available consistently.
// In newer Node versions (18+), global fetch is available, but this import ensures compatibility.
const { default: fetch } = await import('node-fetch');

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
    // event.body contains the string representation of the form data.
    const formData = new URLSearchParams(event.body);
    const data = {};
    for (const [key, value] of formData.entries()) {
      // Basic sanitization/trimming can be added here if needed for specific fields.
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
            // This is a placeholder example for Mailchimp, ConvertKit, etc.
            const mailingListApiUrl = "https://api.your-mailing-list-service.com/add-subscriber"; // <<< REPLACE THIS URL
            const mailingListApiKey = process.env.MAILING_LIST_API_KEY; // Fetched from Netlify Environment Variables

            const mailingListResponse = await fetch(mailingListApiUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                // Authentication header as required by your mailing list service API
                "Authorization": `Bearer ${mailingListApiKey}` 
              },
              body: JSON.stringify({
                email_address: newsletterEmail,
                status: 'subscribed', // or 'pending' for double opt-in
                // Add any other required fields for your mailing list service
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
    // Formspree requires a '_subject' field to set the email subject.
    const payloadForFormspree = {
      ...data,
      _subject: emailSubject,
    };

    // Replace 'yourFormspreeEndpoint' with the actual Formspree URL from your Formspree dashboard.
    const formspreeEndpoint = "https://formspree.io/f/yourFormspreeEndpoint"; // <<< REPLACE THIS URL

    const formspreeResponse = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Formspree prefers JSON for this setup
        "Accept": "application/json" // Good practice to include Accept header
      },
      body: JSON.stringify(payloadForFormspree),
    });

    if (formspreeResponse.ok) {
      console.log(`Successfully forwarded submission from '${formName}' to Formspree for email.`);
      return {
        statusCode: 204, // 204 No Content is standard for successful processing without a response body.
        body: "",
      };
    } else {
      const errorBody = await formspreeResponse.text();
      console.error(`Formspree submission failed (Status: ${formspreeResponse.status}):`, errorBody);
      // Return a 500 status to indicate an issue with the email forwarding, but the function processed the form.
      return {
        statusCode: 500, // Or a more specific status code if Formspree provides useful ones.
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
