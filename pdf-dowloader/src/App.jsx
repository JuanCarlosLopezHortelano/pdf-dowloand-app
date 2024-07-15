import { useState } from 'react'
import './App.css'
import jsPDF from 'jspdf'; // Import the 'jsPDF' library

function App() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData)=>({
      ...prevData,
      [name]: value
    }))}

  const handleSubmit = (e) => {
    e.preventDefault()
    generarPdf()
  }

  const generarPdf = () => {
    const doc = new jsPDF() // Use the 'jsPDF' library
    doc.text(`Name: ${formData.name}`, 10, 10)
    doc.text(`Email: ${formData.email}`, 10, 20)
    doc.text(`Password: ${formData.password}`, 10, 30)
    doc.save('form-data.pdf')
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Download PDF</button>
      </form>
    </div>
  );
}

export default App
