# Create React Library Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A template for creating reusable React libraries using Vite and Storybook.
This "create react library" template is built with `vite` and has a `storybook` for component documentation.

## Features

- Built with Vite, a fast and modern frontend build tool.
- Includes Storybook for component documentation and showcasing.
- Integrated Tailwind CSS for easy styling and customization.

## Useful Information

- `src/main.txs` is the entry point to `npm run dev`.
- `src/index.ts` is the entry point to the package published with `npm publish`. So only export components you wish to include in your npm package when it's published.
- Ensure to create stories to serve as documentation for your users.

## Scripts

- `dev`: Start the development server with Vite.
- `build`: Build the library using Vite and generate CSS using Tailwind CSS.
- `storybook`: Start the Storybook development server with live CSS reloading.
- `build-storybook`: Build a static version of the Storybook documentation.
- `prepublishOnly`: Build the library before publishing.

## Getting Started

To get started with this template, follow these steps:

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Use the available scripts mentioned above to start the development server, build the library, or run Storybook.

Feel free to customize the template according to your library's requirements.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
