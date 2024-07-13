import { useState, useEffect } from 'react';
import { Card, CardHeader, CardImg, CardText, Col, Container, Row } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import CardBody from 'react-bootstrap';
import axios from 'axios';


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
    <Container>
    <Row>
    <Col>
    <Card
    >
        {data.map((elem) => (
            <Card style={{ alignItems: 'center', alignSelf:'center' }} key={data.indexOf(elem)}>
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
    </Card>
    </Col>    
    </Row>
    </Container>
    )}

export default DonationLink;


