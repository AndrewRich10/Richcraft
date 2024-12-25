# **Richcraft Woodworking Website**

Built using modern web technologies, the site attempts to provide a landing page for all things Richcraft.

---

## **Features**
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Custom Animations**: Includes a rotating sawblade and dynamic interactions.
- **Wood Texture Styling**: Uses an SVG filter to simulate wood grain textures for the boxes.
- **Modular Components**: Built with reusable React components and Material-UI for styling.
- **LAN Hosting**: Can be served locally for easy sharing on a local network.

---

## **Technologies Used**
- **Frontend**:
  - [React](https://reactjs.org/) (with TypeScript)
  - [Material-UI](https://mui.com/) (MUI)
  - [Vite](https://vitejs.dev/) (Development server and build tool)
- **Styling**:
  - CSS3
  - Custom SVG filters for background textures

---

## **Setup and Installation**
Follow these steps to get the project running on your local machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/richcraft.git
   cd richcraft

    Install Dependencies: Ensure you have Node.js installed, then run:

npm install

Run the Development Server: Start the server:

npm run dev

Open your browser and navigate to http://localhost:5173.

LAN Hosting (Optional): To host the site on your local network:

    Edit vite.config.ts:

    server: {
      host: '0.0.0.0',
      port: 5173,
    },

    Restart the server and access it from another device using your computer's IP address.

Build for Production: Generate optimized static files:

    npm run build

File Structure

richcraft/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Sawblade.tsx     # Animated sawblade component
│   ├── styles/              # CSS files
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── package.json             # Project dependencies

Key Features
Animated Sawblade

The sawblade dynamically spins and moves along the border of the boxes, creating an engaging visual effect for users.
Wood Textured Background

The boxes feature a realistic wood grain texture created using SVG filters, giving the site a handcrafted aesthetic.
Contributing

Contributions are welcome! Please follow these steps:

    Fork the repository.
    Create a new branch for your feature:

git checkout -b feature-name

Commit your changes and push the branch:

    git push origin feature-name

    Open a pull request.

License

This project is licensed under the MIT License.
Contact

For any inquiries or feedback, feel free to reach out:

    Email: your-email@example.com
    GitHub: your-username