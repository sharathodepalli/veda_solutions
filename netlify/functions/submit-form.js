// netlify/functions/submit-form.js

// This universal handler processes submissions from all your forms.
const fetch = require('node-fetch'); // Re-added require for Node 18+ compatibility

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const formData = new URLSearchParams(event.body);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    console.log("Universal form submission received:", data);

    // Determine the email subject based on the form name
    let emailSubject = "New Form Submission - Vedha Solutions"; // Default subject

    switch (data['form-name']) {
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
            break;
    }
    
    // Add Formspree's '_subject' field to the data for a custom email subject
    const payloadForEmail = {
        ...data,
        _subject: emailSubject,
    };
    
    // Forward the data to your Formspree endpoint
    const formspreeResponse = await fetch("https://formspree.io/f/xgvyrdod", { // REPLACE WITH YOUR URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadForEmail),
    });

    if (formspreeResponse.ok) {
        console.log(`Successfully forwarded submission from '${data['form-name']}' to Formspree.`);
        return { statusCode: 204, body: "" };
    } else {
        console.error("Formspree submission failed:", formspreeResponse.statusText);
        return { statusCode: formspreeResponse.status, body: formspreeResponse.statusText };
    }

  } catch (error) {
    console.error("Error processing universal form submission:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};