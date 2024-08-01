import { useState, useEffect } from 'react';
import { Card, CardHeader, CardImg, CardText, Col, Container, Row } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import CardBody from 'react-bootstrap';
import axios from 'axios';
import "../App.css"
import '../index.css'

function DonationLink() {

 const ENDPOINT =  "https://fund-family-backend-production.up.railway.app/get_only_approved/"

const [data, setData] = useState([]);
const fetchData = async () => {
    try {
      const response = await axios.get(ENDPOINT);
        setData(response.data);


    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
    console.log(data)

  }, []);


  console.log("hiii", data)


  return (

    <Row>
    <Col>
 
<Container>
        {data.map((elem) => (
            <Card className="donationCards" key={data.indexOf(elem)}>
                <Card.Body>
                    <CardHeader
                        title={`Name: ${elem.name}`}
                    />
                    <Card.Body>
                        <CardText>
                            {`URL: ${elem.fund_url}`}
                        </CardText>
                        <CardText>
                            {`Family of ${elem.no_of_family}`}
                        </CardText>
                        <CardText>
                            {`Seeking funds for ${elem.fund_breakdown}`}
                        </CardText>
                    </Card.Body>
                </Card.Body>
             </Card>
        ))}
</Container>
    </Col>    
    </Row>
   
    )}

export default DonationLink;


