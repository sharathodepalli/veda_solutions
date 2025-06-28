// netlify/functions/submit-form.mjs

// FIXED: This file is now explicitly an ES Module (.mjs extension).
// It uses export async function handler instead of exports.handler.
// This fully supports top-level await and modern import syntax.

// No need for a dynamic import wrapper for fetch as it's now a global in ESM context.
// Node-fetch is also an ESM by default now, so direct import works.
// We are importing default as fetch since node-fetch exports a default.
import fetch from 'node-fetch'; // Standard ES Module import

/**
 * Universal Netlify Serverless Function to handle form submissions from multiple forms.
 * It parses the form data, dynamically sets the email subject,
 * forwards the data to Formspree for email notifications, and
 * includes specific logic for the newsletter form to interact with a mailing list API.
 *
 * This function handles POST requests from forms submitted via client-side JavaScript (fetch).
 */
export async function handler(event, context) { // Changed to ESM export syntax
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
      // Basic sanitization/trimming can be added here if needed for specific fields.
      data[key] = value;
    }

    // Extract the form name from the submitted data.
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
                status: 'subscribed',
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

    // Replace 'yourFormspreeEndpoint' with the actual Formspree URL.
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
}