"use server"

interface ContactFormData {
  name: string
  email: string
  message: string
}

interface ContactFormResult {
  success: boolean
  message: string
}

export async function submitContactForm(data: ContactFormData): Promise<ContactFormResult> {
  try {
    // Validate the form data
    if (!data.name || !data.email || !data.message) {
      return {
        success: false,
        message: "All fields are required",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Please enter a valid email address",
      }
    }

    // Here you would typically:
    // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 2. Store the message in a database
    // 3. Send a notification to your preferred communication channel

    // For demonstration, we'll simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Log the form submission (in production, you'd want proper logging)
    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      message: data.message,
      timestamp: new Date().toISOString(),
    })

    // Example of sending an email (you would implement this with your preferred service)
    // await sendEmail({
    //   to: 'contact@eneashaqiri.com',
    //   subject: `New contact form submission from ${data.name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${data.message}</p>
    //   `
    // })

    return {
      success: true,
      message: "Message sent successfully!",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "Failed to send message. Please try again.",
    }
  }
}
