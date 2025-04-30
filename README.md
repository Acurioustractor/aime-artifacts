# AIME Dashboards & Visualizations

This project is a React application designed to showcase various metrics, concepts, and visualizations related to the AIME organization and its initiatives, including the IMAGI-NATION ecosystem.

## Purpose

The goal of this application is to provide interactive dashboards and calculators that illustrate:

*   AIME's overall impact and reach (IMAGI-NATION Dashboard).
*   Economic models like the "Hoodie Economy".
*   The concept and calculation of Gross Relational Potential (GRP).
*   Information about different facets of the IMAGI-NATION structure (Joy Corps, Citizens, IMAGI-Labs, Presidents, IKSL, Residents, Toolshed, Custodians).

## Pages / Features

The application currently includes the following pages:

*   **Dashboard (`/`)**: Displays key metrics and visualizations for the IMAGI-NATION initiative.
*   **Hoodie Economy (`/hoodie-economy`)**: Visualizes concepts related to the Hoodie Economy model.
*   **Joy Corps (`/joy-corps`)**: Information about the Joy Corps program.
*   **Citizens (`/citizens`)**: Information about the Citizens involved.
*   **IMAGI-Labs (`/imagi-labs`)**: Information about the IMAGI-Labs.
*   **Presidents (`/presidents`)**: Information about the Presidents.
*   **IKSL (`/iksl`)**: Information about Indigenous Knowledge Systems Labs.
*   **Residents (`/residents`)**: Information about the Systems Change Residents.
*   **Toolshed (`/toolshed`)**: Information about the Toolshed resources.
*   **Custodians (`/custodians`)**: Information about the Custodians.
*   **GRP Calculator (`/grp-calculator`)**: An interactive calculator demonstrating the concept of Gross Relational Potential based on network size and relation value.

## Technologies Used

*   **React**: JavaScript library for building user interfaces.
*   **React Router**: For declarative routing.
*   **Tailwind CSS**: Utility-first CSS framework for styling.
*   **Recharts**: Composable charting library for data visualization.
*   **Lucide React**: Icon library.
*   **Create React App**: Project setup and tooling.
*   **gh-pages**: For deploying to GitHub Pages.

## Setup and Running

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm start
    ```
    This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) (or the specified port) to view it in your browser.

## Deployment

This application is deployed using GitHub Pages.

*   **Live URL**: [https://Acurioustractor.github.io/AIMEdashboards](https://Acurioustractor.github.io/AIMEdashboards)
*   **To deploy changes**: Run `npm run deploy`. This will build the app and push the `build` folder to the `gh-pages` branch. 