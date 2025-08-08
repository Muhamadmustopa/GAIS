import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .eq('password_hash', password);
    if (error || data.length === 0) {
      alert("Login gagal!");
    } else {
      localStorage.setItem('user', JSON.stringify(data[0]));
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800">
      <form onSubmit={handleLogin} className="p-6 bg-gray-100 dark:bg-gray-700 rounded shadow-md space-y-4">
        <h2 className="text-xl font-bold">Login Admin GAIS</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Masuk</button>
      </form>
    </div>
  );
}