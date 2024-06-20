import { useState } from 'react'
import './App.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css'
import InterestForm from './Interest-form';
import DonationTab from './donation-tab';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fund Family</h1>
      <img src="https://media.discordapp.net/attachments/1237848613325901868/1244318779534610452/family-removebg-preview.png?ex=666133eb&is=665fe26b&hm=3853716c79075cdc300573a28452e44d35072d5aa279655de53446a8c65d01e7&=&format=webp&quality=lossless&width=200&height=200" alt="arms hug heart"/>
          <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="donations" title="Donations">
          <Form.Control type="text" placeholder="Search"/>
            Tab content for donations
            <DonationTab/>
            <div className="card">
          <Button onClick={() => setCount((count) => count + 1)}>
            Donate {count}
          </Button>
            <p>
              Donations are <code>nonrefundable</code> 
            </p>

            <InterestForm
            />
          </div>
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
