import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


function InterestForm() {

  const [show, setShow] = useState(false);
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [nof, setNoF] = useState("");
  const [raised_amount, setRm] = useState("");
  const [fund_breakdown, setFb] = useState("");
  const [Egypt_fam, setEf] = useState("");
  const [url, seturl] = useState("");

  const [comments, setcomment] = useState("");
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const API_ENDPOINT = 'https://fund-family-backend-production.up.railway.app/create_form/'

  const onSubmit = (e)=>{
    e.preventDefault();
    console.log(email)
    console.log("email")

    axios({
      method: 'post',
      url:API_ENDPOINT,
      data: {
        name: name,
        email: email,
        no_of_family: nof,
        raised_amount: raised_amount,
        fund_breakdown: fund_breakdown, 
        fund_url: url, 
        comments: comments,
        family_in_egypt:Egypt_fam,
        // approved: approved
      }
    })
    .then((res)=>{
        console.log(res);
        console.log(res.data);
        console.log("success")
      })
      
    .catch(function (response) {
      console.log(response);
    });

  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Submit aid request
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Your Interest</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Row>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder='Enter name' onChange={(e)=>{setname(e.target.value)}}
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
                onChange={(e)=>{setemail(e.target.value)}}
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
               onChange={(e)=>{setNoF(e.target.value)}}
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
               onChange={(e)=>{setRm(e.target.value)}}
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
              onChange={(e)=>{setFb(e.target.value)}}
              />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Do you have family in Egypt?</Form.Label>
              <Form.Control
               type="boolean"
               name="Egypt_fam"
               onChange={(e)=>{setEf(e.target.value)}}
              />
             </Form.Group>
             </Col>
             </Row>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>GoFundMe or GiverButters Link (if you have) </Form.Label>
              <Form.Control
               type="url"
               name= "url"
               placeholder='must be functioning url'
               onChange={(e)=>{seturl(e.target.value)}}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Questions, comments or additional information</Form.Label>
              <Form.Control name="comments" as="textarea" rows={3}  onChange={(e)=>{setcomment(e.target.value)}}/>
            </Form.Group>
            {/* <Form.Group hidden
               type="boolean"
               name="approved"
            >
              <Form.Label>Approved</Form.Label>
            </Form.Group> */}
            <Button variant="primary" type="submit">
            Submit
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* {!!formState.status && <div className="py-2">Current form status is: {formState.status}</div>} */}

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InterestForm;