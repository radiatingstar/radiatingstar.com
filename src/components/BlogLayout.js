import React from 'react'
import Navigation from '../components/Navigation'
import Header from './Header'

// TODO

// - main div
//    background-color: silver;
//    background-image: linear-gradient(
//      0deg,
//      rgba(255, 255, 255, 0.2) 50%,
//      transparent 50%,
//      transparent
//    );
//    background-size: 50px 50px;

// - footer's styles
//   background: #f9f9f9;
//   border-top: 1px solid #ddd;
//   color: #666;

export default function BlogLayout({ children }) {
  return (
    <div className="overflow-hidden">
      <Header />
      <Navigation />
      <main className="mx-auto my-0 pt-1.5 px-1 pb-0.5 max-w-lg">
        {children}
      </main>
      <footer className="mt-0 mx-auto mb-1.5 p-1.5 max-w-lg text-center">
        ★
      </footer>
    </div>
  )
}
