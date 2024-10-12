"use client"

import store from "@/store";
import { Provider } from "react-redux";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Importing Google Fonts (Poppins) */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "Poppins" }}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
