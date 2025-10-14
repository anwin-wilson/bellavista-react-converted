import React, { useState, useEffect } from 'react';
import { bookTour, testConnection, API_ENDPOINTS } from '../../utils/api';

const ApiTest = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiConfig, setApiConfig] = useState('');

  useEffect(() => {
    // Show current API configuration
    const config = {
      'Environment Variable': process.env.REACT_APP_API_BASE_URL,
      'Test Connection URL': API_ENDPOINTS.TEST_CONNECTION,
      'Book Tour URL': API_ENDPOINTS.BOOK_TOUR,
      'All Environment Variables': Object.keys(process.env)
        .filter(key => key.startsWith('REACT_APP_'))
        .reduce((obj, key) => {
          obj[key] = process.env[key];
          return obj;
        }, {})
    };
    setApiConfig(JSON.stringify(config, null, 2));
  }, []);

  const testApi = async () => {
    setLoading(true);
    try {
      const response = await testConnection();
      setResult(JSON.stringify(response, null, 2));
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
    setLoading(false);
  };

  const testBooking = async () => {
    setLoading(true);
    try {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dateStr = tomorrow.toISOString().split('T')[0];

      const bookingData = {
        first_name: 'Test',
        last_name: 'User',
        email: 'test@example.com',
        phone_number: '+1234567890',
        preferred_home: 'cardiff',
        preferred_date: dateStr,
        preferred_time: '10:00',
        notes: 'Test booking'
      };

      const response = await bookTour(bookingData);
      setResult(JSON.stringify(response, null, 2));
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>API Test Page</h2>
      
      <h3>Current API Configuration:</h3>
      <pre style={{ 
        background: '#e8f4fd', 
        padding: '15px', 
        borderRadius: '5px', 
        overflow: 'auto',
        fontSize: '12px',
        marginBottom: '20px',
        border: '1px solid #007bff'
      }}>
        {apiConfig}
      </pre>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={testApi} disabled={loading} style={{ marginRight: '10px', padding: '10px 20px' }}>
          Test Connection
        </button>
        <button onClick={testBooking} disabled={loading} style={{ padding: '10px 20px' }}>
          Test Booking
        </button>
      </div>

      {loading && <div>Loading...</div>}
      
      <h3>API Response:</h3>
      <pre style={{ 
        background: '#f5f5f5', 
        padding: '20px', 
        borderRadius: '5px', 
        overflow: 'auto',
        fontSize: '12px'
      }}>
        {result || 'Click a button to test the API'}
      </pre>
    </div>
  );
};

export default ApiTest;