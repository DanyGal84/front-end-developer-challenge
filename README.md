# TitanStar Legends Rune Tree Simulator

This React application simulates the rune tree feature within TitanStar Legends, allowing players to replicate and share their in-game loadouts with the community. The app allows players to spend talent points on runes in a specific order, ensuring the correct sequence is followed and providing a visual display of their point allocation.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **Point Allocation:** Left-click to add a point to a rune, right-click to remove a point.
- **Sequence Enforcement:** Points must be allocated in a specific sequence, and users cannot allocate points out of order.
- **Point Limit:** Players are limited to spending a total of 6 points.
- **Visual Feedback:** The application displays the current point total and highlights selected runes.

## Technologies Used

- **React** (v18.x): A JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Node.js** (v20.8.1): JavaScript runtime environment used for server-side scripting and development tools.
- **npm** (v10.1.0): Node package manager used for managing dependencies.

## Installation

### Prerequisites

Ensure you have Node.js and npm installed on your machine:

- **Node.js**: v20.8.1
- **npm**: v10.1.0

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DanyGal84/front-end-developer-challenge.git

2. **Install dependencies:**
   ```bash
   npm install

3. **Start the development server:**
   ```bash
   npm start

This will start the application in development mode and open it in your default web browser. The app will be available at `http://localhost:3000`.

## Usage

Once the app is running:

1. **Add Points:** Left-click on a rune to add a point. Ensure you follow the correct sequence of runes.
2. **Remove Points:** Right-click on a rune to remove a point.
3. **Point Limit:** Keep track of the total points displayed. You cannot exceed 6 points.
