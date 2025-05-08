# Software Resale Startup - Marketing Website

This is a responsive, single-page marketing website for a fictional software resale startup. The website includes clean, simple design and all necessary features for showcasing the business. The project also integrates a chat widget that utilizes a chatbot to assist users with their queries.

## Features Implemented

- **Responsive Design**: The website is fully responsive and adjusts to various screen sizes using Tailwind CSS.
- **Chat Widget**: 
  - A chatbot widget is implemented to assist visitors with their queries in real-time.
  - The widget appears as a chat icon (💬) at the bottom right of the screen.
  - When clicked, the chat widget opens up for users to interact with the bot.
  - The user can type their query, and the bot responds with relevant answers fetched from the OpenRouter AI API.
  - The widget supports basic features like loading states, showing the user's and bot's messages, and smooth transition for opening/closing.
- **Content Sections**: 
  - **Header**: Features a catchy headline and call-to-action (CTA).
  - **About Us**: Brief information about the company.
  - **Services**: Showcase of the software resale services.
  - **Contact Us**: A simple contact form for inquiries.
- **Styling**: The website is styled using Tailwind CSS, ensuring a clean, modern, and mobile-friendly layout.

## Design Choices

- **Color Palette**: The colors are chosen to reflect professionalism, with a mix of blue and neutral tones for a modern and approachable look.
- **Chat Widget**: The chat widget uses a minimalistic design with a floating button (💬) that turns into a chat window upon user interaction. The chat window uses Tailwind's utilities for smooth styling, including rounded corners, shadow effects, and spacing for a polished appearance.
- **Typography**: Simple, legible fonts are used to maintain readability. Headlines and content are styled for easy navigation.

## Time Spent

- **Initial Setup & Design**: ~5 hours
- **Chat Widget Integration**: ~4 hours
- **Styling & Responsiveness**: ~3 hours
- **Testing and Debugging**: ~2 hours

## Chat Widget Implementation

### Functionality

- **User Interaction**: Users can send messages through a chat input field. The chatbot responds after processing the user’s message via the OpenRouter AI API.
- **API Handling**: The bot uses the `POST` endpoint to send the user’s message and fetch the response from the AI model (Meta LLaMA).
- **State Management**: The component uses React state to manage messages, loading states, and widget visibility.
- **Responsive Layout**: The chat widget is fixed to the bottom-right corner of the screen and is fully responsive.

### Chat Widget Features
- **Floating Button**: A chat icon (💬) appears when the widget is minimized, located at the bottom-right of the screen.
- **Smooth Transitions**: The widget opens and closes with a smooth transition effect.
- **Loading State**: While waiting for the bot's response, a "Typing..." indicator is shown.
- **User & Bot Messages**: Messages from both the user and the bot are styled distinctly for easy readability.
- **Close Button**: The chat window can be closed by clicking the "✖" button at the top-right corner.

## Conclusion

This project demonstrates how to build a responsive marketing website with a live chatbot integration using React, Tailwind CSS, and OpenRouter AI. It showcases a simple and effective way to engage users with real-time assistance while maintaining clean and functional design.


