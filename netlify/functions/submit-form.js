// netlify/functions/submit-form.js

// FIXED: Removed the require() statement.
// The fetch() function is now a global in modern Node.js versions
// and can be used directly without a library.

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
    // In this context, fetch is available globally. If not, you can require 'node-fetch'
    // but the issue you were having is a CommonJS/ESM module issue.
    // If you need to use node-fetch, use a dynamic import: const { default: fetch } = await import('node-fetch');
    // But let's try the global fetch first.

    // Make sure to replace 'yourFormspreeEndpoint' with your actual Formspree URL.
    const formspreeResponse = await fetch("https://formspree.io/f/yourFormspreeEndpoint", {
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