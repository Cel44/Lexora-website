# Lexora Website

A responsive mockup of the Lexora website built as part of a web development internship test case. The project includes multiple website sections, responsive layouts, and a news carousel populated with real articles from The Guardian Open Platform API.

## Features

- Responsive website layout for desktop, tablet, and mobile screens.
- Hero section and informational sections about Lexora.
- Career and legal support sections.
- News carousel displaying real articles from The Guardian API.
- Article thumbnails, publication dates, and links to the original articles.
- Horizontal carousel navigation with arrow controls and mouse dragging.

## Tech Stack

- **React** — UI components.
- **TypeScript** — Type safety.
- **Vite** — Development server and build tool.
- **Tailwind CSS** — Styling and responsive layouts.
- **React Icons** — Icons used throughout the website.
- **The Guardian Open Platform API** — News article data.

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm, which is included with Node.js
- Git (optional, for cloning the repository)

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_FOLDER>
```

Replace the placeholders with your GitHub repository URL and project folder name.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the API key

Create a `.env` file in the project root directory, at the same level as `package.json`.

Add your Guardian API key:

```env
VITE_GUARDIAN_API_KEY=your_guardian_api_key
```

Replace `your_guardian_api_key` with your own API key.

**Important:** Do not commit your `.env` file or publish your API key to GitHub.

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

### 5. Build for production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## API Used

### The Guardian Open Platform API

This project uses [The Guardian Open Platform](https://open-platform.theguardian.com/) to retrieve news articles for the homepage news carousel.

The API provides article information, including titles, publication dates, article URLs, and thumbnail images when available.

The project requests recent articles and uses available fields to populate the carousel.

**API documentation:** https://open-platform.theguardian.com/documentation/

## How to Get an API Key

1. Visit [The Guardian Open Platform](https://open-platform.theguardian.com/).
2. Register for an account or sign in.
3. Request a developer API key by following the website's registration instructions.
4. Copy your API key from the developer account.
5. Add it to your local `.env` file:

   ```env
   VITE_GUARDIAN_API_KEY=your_guardian_api_key
   ```

6. Restart the Vite development server if it was already running.

The API key must use the exact environment variable name expected by the application.

## Known Issues and Limitations

- **Styling and responsive layout:** Some sections may need further visual refinement to achieve consistent spacing, alignment, proportions, and responsiveness across different screen sizes.
- **Image positioning:** Decorative images and overlapping elements may require additional adjustments at certain viewport widths.
- **News availability:** The news carousel depends on The Guardian API being accessible and returning usable article data. Network issues or API errors may prevent articles from loading.
- **API key configuration:** The news carousel will not work correctly if the API key is missing, invalid, or incorrectly configured.
- **Article images:** Some articles may not include thumbnail images, depending on the data returned by the API.

## Future Improvements

- Refine responsive styling and spacing across all sections.
- Improve image positioning and consistency across screen sizes.
- Add a more polished loading state and error message for the news carousel.
- Improve accessibility, including image alternative text and keyboard navigation.
- Review API key handling before deploying the application publicly.

## Disclaimer

This project is a website mockup created for educational and assessment purposes. It is not an official Lexora website.
