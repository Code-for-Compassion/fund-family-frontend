import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

//
function InterestForm() {
// const { formState, getFormSubmitHandler } = useFormData('https://fund-family-backend-production.up.railway.app/?format=openapi');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const submitForm = () => sub

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
              <Form.Control
              />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
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
              />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Goal amount</Form.Label>
              <Form.Control
               type="number"
              />
            </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>General expense breakdown of these funds</Form.Label>
              <Form.Control
              />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Do you have family in Egypt?</Form.Label>
              <Form.Control
               type="boolean"
              />
             </Form.Group>
             </Col>
             </Row>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>GoFundMe or GiverButters Link (if you have) </Form.Label>
              <Form.Control
               type="url"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Questions, comments or additional information</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* {!!formState.status && <div className="py-2">Current form status is: {formState.status}</div>} */}
          <Button variant="primary" onClick={getFormSubmitHandler()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InterestForm;