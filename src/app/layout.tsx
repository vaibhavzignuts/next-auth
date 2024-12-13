"use client";

// import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
// import { Providers } from './providers'
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Providers } from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

// Define public routes that don't require authentication
const PUBLIC_ROUTES = ["/login", "/register", "/"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check if the current route is public
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  // Wrap children with ProtectedRoute if not a public route
  const WrappedChildren = isPublicRoute ? (
    children
  ) : (
    <ProtectedRoute>{children}</ProtectedRoute>
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{WrappedChildren}</Providers>
      </body>
    </html>
  );
}
