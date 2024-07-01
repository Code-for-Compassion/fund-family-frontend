import { useState } from 'react'
import './App.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import './App.css'
import InterestForm from './Interest-form';
import DonationTab from './Donation-tab';
import "./i18n";
import LanguageToggle from './Language-toggle';
import { useTranslation } from "react-i18next";


function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0)

  return (
    <>
  <h1>{t("slice of hope")}</h1>
    <LanguageToggle/>
     <div className="card"> 
        <InterestForm/>
            <p>fundraising url 
              <code>required</code>
              </p>
     </div>
      <h1></h1>
      <img src="https://media.discordapp.net/attachments/1237848613325901868/1244318779534610452/family-removebg-preview.png?ex=666133eb&is=665fe26b&hm=3853716c79075cdc300573a28452e44d35072d5aa279655de53446a8c65d01e7&=&format=webp&quality=lossless&width=200&height=200" alt="arms hug heart"/>
          <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="donations" title="Donations">
          <Form.Control type="text" placeholder="Search"/>
            Tab content for donations
            <DonationTab/>
          </Tab>
          <Tab eventKey="senators" title="Senators">
            Tab content for Profile
          </Tab>
          <Tab eventKey="about" title="How we work">
            Tab content for Contact
          </Tab>
        </Tabs>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
