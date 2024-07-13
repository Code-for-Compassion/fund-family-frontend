import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useTranslation } from "react-i18next";


function InterestForm() {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  const [email, setemail] = useState("");
  const [name, setname] = useState("");7 
  const [nof, setNoF] = useState("");
  const [raised_amount, setRm] = useState("");
  const [fund_breakdown, setFb] = useState("");
  const [Egypt_fam, setEf] = useState(false);
  const [url, seturl] = useState("");
  const [approval] = useState("");


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
        approval: approval
      }
    })
    .then((response)=>{
        console.log("THEN", response);
        console.log("THEN + DATA", response.data);
        console.log("success")
        
      })
      
    .catch(function (response) {
      console.log("Catch", response.data)
    });
  

  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      {t("submitMain")}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {t("register")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Row>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{t("name")}</Form.Label>
              <Form.Control type="text" name="name" placeholder={t("enterName")} onChange={(e)=>{setname(e.target.value)}}
              />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>{t("email")}</Form.Label>
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
              <Form.Label>{t("family")}</Form.Label>
              <Form.Control
               type="number"
               name="no_of_family"
               placeholder={t("exampleFam")}
               onChange={(e)=>{setNoF(e.target.value)}}
              />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>{t("goal")}</Form.Label>
              <Form.Control
               type="number"
               name="raised_amount"
               placeholder={t("example$")}
               onChange={(e)=>{setRm(e.target.value)}}
              />
            </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>{t("expenses")}</Form.Label>
              <Form.Control
              type="text"
              placeholder={t("distribution")}
              name= "fund_breakdown"
              onChange={(e)=>{setFb(e.target.value)}}
              />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>{t("egyptFam")}</Form.Label>
              <Form.Check
               type="checkbox"
               name="Egypt_fam"
               label={t("yes")}
               onChange={(e)=>{(e.target.checked)? setEf(true): setEf(false)}}
              />
             </Form.Group>
             </Col>
             </Row>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>GoFundMe or GiverButters {t("link")} </Form.Label>
              <Form.Control
               type="url"
               name= "url"
               placeholder={t("url")}
               onChange={(e)=>{seturl(e.target.value)}}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>{t("additional")}</Form.Label>
              <Form.Control name="comments" as="textarea" rows={3}  onChange={(e)=>{setcomment(e.target.value)}}/>
            </Form.Group>
            <Form.Group
            >
              <Form.Control hidden              
               type="boolean"
               name="approval"
               >
                
               </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" type="submit">
        {t("submit")}
          </Button>
          <Button variant="secondary" onClick={handleClose}>
          {t("close")}
          </Button>
          {/* later validation */}
          {/* {!!formState.status && <div className="py-2">Current form status is: {formState.status}</div>} */}

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InterestForm;