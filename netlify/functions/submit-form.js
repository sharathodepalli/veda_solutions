// netlify/functions/submit-form.js

// This is a simple handler to process the POST request from your form.
// It will log the data to your Netlify function logs.
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
    // The form data is available in event.body.
    const formData = new URLSearchParams(event.body);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    // You can now access all your form fields in the 'data' object.
    // For example: data.name, data.email, data.message, etc.

    // Log the data to your function logs for debugging.
    console.log("Form submission received:", data);
    
    // You can add logic here to send an email or save data to a database.
    // Netlify's built-in email notifications for forms are typically used instead.

    // Return a successful response. This tells your fetch() call that the submission worked.
    return {
      statusCode: 204, // 204 No Content is standard for a successful POST that doesn't return data.
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