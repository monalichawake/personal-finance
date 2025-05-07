import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice'; 
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../features/auth/AuthService'; 

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const user = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      dispatch(login(user)); 
      navigate('/'); 
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      
      {error && <div className="text-red-500 mb-4">{error}</div>} 
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full mb-2"  />
     
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full mb-2" />
      
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 w-full mb-2"  />
       
        
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="border p-2 w-full mb-4" />
        
        
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 w-full" >
        
          Register
        </button>
      </form>
      
      <div className="mt-4">
        <span>Already have an account? </span>
        <a href="/login" className="text-blue-500">Login here</a>
      </div>
    </div>
  );
}
