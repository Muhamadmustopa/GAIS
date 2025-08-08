import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import FeedbackForm from './pages/FeedbackForm';
import PermintaanForm from './pages/PermintaanForm';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/permintaan" element={<PermintaanForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}