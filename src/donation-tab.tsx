import { useState, useEffect } from 'react';
import { Card, CardHeader, CardImg, CardText, Col, Row } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import CardBody from 'react-bootstrap';
import axios from 'axios';


function DonationTab() {

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

  }, []);

  console.log("hiii", data)


  return (
    
    <Row>
    <Card
    >
        {data.map((elem) => (
            <Card style={{ width: '18rem' }} key={data.indexOf(elem)}>
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
    </Row>
    
    )}

export default DonationTab;

