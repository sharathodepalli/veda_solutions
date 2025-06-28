// netlify/functions/submit-form.js

// This is a simple handler to process the POST request from your form.
// It now also forwards the data to a Formspree endpoint to send an email.
const fetch = require('node-fetch'); // You need to require fetch if it's not a global

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    // Netlify automatically parses the body of URL-encoded form submissions.
    const formData = new URLSearchParams(event.body);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    // You can now access all your form fields in the 'data' object.
    console.log("Form submission received:", data);
    
    // --- NEW CODE TO FORWARD DATA TO EMAIL SERVICE ---
    // Make sure to replace 'yourFormspreeEndpoint' with your actual Formspree URL.
    const formspreeResponse = await fetch("https://formspree.io/f/xgvyrdod", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // We're sending the parsed data as JSON
    });

    if (formspreeResponse.ok) {
        console.log("Email sent successfully!");
    } else {
        console.error("Formspree submission failed:", formspreeResponse.statusText);
    }
    // --- END NEW CODE ---

    // Return a successful response.
    return {
      statusCode: 204, // 204 No Content is standard for a successful POST.
      body: "",
    };

  } catch (error) {
    console.error("Error processing form submission:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};