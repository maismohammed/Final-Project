import { useState } from 'react'


import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BankCard from './pages/BankCard'
// import Loan from './pages/Loan'
import JobBank from './pages/JobsBank'
import Job from './pages/Job'
import Contact from './pages/Contact'
import Accordion from './pages/Accordion'
import RegistrationForm from './pages/RegistrationForm'
import Currency from './pages/Currency'
import Services from './pages/Services'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='bankCard' element={<BankCard />} />
          {/* <Route path='loan' element={<Loan />} /> */}
          <Route path='job' element={<JobBank />} />
          <Route path='job_bank' element={<Job />} />
          <Route path='contact' element={<Contact />} />
          <Route path='faq' element={<Accordion />} />
          <Route path='register' element={<RegistrationForm />} />
          <Route path='currency' element={<Currency />} />
          <Route path='services' element={<Services />} />

          <Route path='*' element={<p>THE Page Not Found</p>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
