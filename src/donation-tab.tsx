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
    console.log(data)

  }, []);
// function fetchData() {
//     axios.get(ENDPOINT).then(
//             data => {
//             let approved = 
//             let val = formatter.format(dolla);
//             let str = converter.toWords(dolla);
//             let cents = converter.toWords(dolla.split('.')[1].substring(0, 2));
//             if(dolla.split('.') === '01')
//                 currentStatus = { num: val, word: `${str} dollars and ${cents} cent` };
//             else
//                 currentStatus = { num: val, word: `${str} dollars and ${cents} cents` };
//         });
//     });
// }

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
                            {`Seeking funds for ${elem.approval}`}
                        </CardText>
                    </Card.Body>
                </Card.Body>
             </Card>
        ))}
    </Card>
    </Row>
    
    )}

export default DonationTab;


