import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './login.css';

function SignUp() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  // Simulate loading state change after 2 seconds
  setTimeout(() => setLoading(false), 2000);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Handle successful submission and navigate to Products page
      navigate('/products');
    } catch (error) {
      setError('Sign Up failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Sign up</h3>
            <div className="d-flex justify-content-end social_icon">
              <span><i className="fab fa-facebook-square"></i></span>
              <span><i className="fab fa-google-plus-square"></i></span>
              <span><i className="fab fa-twitter-square"></i></span>
            </div>
          </div>
          <div className="card-body">
            {loading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    aria-label="Username"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-label="Email"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    aria-label="Password"
                    disabled={isSubmitting}
                  />
                </div>
                {error && <div className="error-message">{error}</div>}
                <div className="form-group centered-button">
                  <button
                    type="submit"
                    className="SignUp_btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Signing Up...' : 'Sign up'}
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Already have an account? <a href="#">Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
