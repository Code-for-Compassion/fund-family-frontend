import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
// import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
// import { useRef } from 'react';
//
//

function InterestForm() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const InterestModal = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    no_of_family: 0,
    raised_amount: 0,
    fund_breakdown: "", 
    fund_url: "", 
    comments: "",
    family_in_egypt: false,
   });
  const handleSubmit = (e) => {
  const API_ENDPOINT = 'https://fund-family-backend-production.up.railway.app/?format=openapi'
    e.preventDefault()
      axios({
      method: 'post',
      data: formData,
      axios.post(API_ENDPOINT),
    })
    .then(res=>{
        console.log(res);
        console.log(res.data);
        window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
      })
      
    .catch(function (response) {
      //handle error
      console.log(response);
    });;
    console.log(formData)

}


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Your Interest</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder='Enter name' onChange={(e) => setFormData({...formData, name: e.target.value})} value={formData.name}
              />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="fund_url"
                name="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email}
              />
            </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Number of family members</Form.Label>
              <Form.Control
               type="number"
               name="no_of_family"
               placeholder='example: 3'
               onChange={(e) => setFormData({...formData, no_of_family: e.target.value})} value={formData.no_of_family}
              />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Goal amount</Form.Label>
              <Form.Control
               type="number"
               name="raised_amount"
               placeholder='example: $5000'
               onChange={(e) => setFormData({...formData, raised_amount: e.target.value})} value={formData.raised_amount}
              />
            </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>General expense breakdown of these funds</Form.Label>
              <Form.Control
              type="text"
              placeholder='Estimated distribution of funds here'
              name= "fund_breakdown"
              onChange={(e) => setFormData({...formData, fund_breakdown: e.target.value})} value={formData.fund_breakdown}
              />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Do you have family in Egypt?</Form.Label>
              <Form.Control
               type="boolean"
               name="family_in_egypt"
               onChange={(e) => setFormData({...formData, family_in_egypt: e.target.value})} value={formData.family_in_egypt}
              />
             </Form.Group>
             </Col>
             </Row>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>GoFundMe or GiverButters Link (if you have) </Form.Label>
              <Form.Control
               type="text"
               name= "fund_url"
               placeholder='must be functioning url'
               onChange={(e) => setFormData({...formData, fund_url: e.target.value})} value={formData.fund_url}

              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Questions, comments or additional information</Form.Label>
              <Form.Control name="comments" as="textarea" rows={3} 
              onChange={(e) => setFormData({...formData, comments: e.target.value})} value={formData.comments}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* {!!formState.status && <div className="py-2">Current form status is: {formState.status}</div>} */}
          <Button variant="primary" onSubmit={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
}
export default InterestForm;