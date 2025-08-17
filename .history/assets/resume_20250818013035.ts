// // In a real application, you would replace this with a link to your hosted PDF file.
// // For this example, we'll use a base64 encoded text file as a placeholder.
// const resumeContent = "This is a placeholder for Dhakshin Kotha's resume. Please replace this with your actual resume file in a real-world deployment.";

// // This function is a browser-safe way to encode to Base64
// const base64Encode = (str: string) => {
//     // The app runs in the browser where `btoa` is standard.
//     // The Node.js fallback using `Buffer` has been removed to fix a compilation error.
//     return btoa(str);
// }

// const base64Resume = base64Encode(resumeContent);
// export const resumeFile = `data:text/plain;base64,${base64Resume}`;

// This path points to the resume file located in the `public` directory.
// Make sure you have a 'public' folder in your project root and your PDF is named correctly.
export const resumeFilePath = '/Dhakshin_Kotha_Resume.pdf';
