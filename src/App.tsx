import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
const queryClient = new QueryClient();

const router = createBrowserRouter(Routes);

export const App = () => {
  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <div className="mx-auto px-3 lg:px-12">
          <Navbar />
          <RouterProvider router={router} />
          <Footer />
        </div>
      </QueryClientProvider>
    </JotaiProvider>
  );
};
