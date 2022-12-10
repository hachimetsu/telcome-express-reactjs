import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


function LeftTabsExample() {
    const phones = [
        {
            name: 'realmi',
            src: 'https://rukminim1.flixcart.com/fk-p-flap/240/240/image/907c0aa66a4343e9.jpg?q=90'
        },
        {
            name: 'poco',
            src: 'https://rukminim1.flixcart.com/fk-p-flap/240/240/image/1d3fa4dfd3d855f6.jpg?q=90'
        },
        {
            name: 'gpixel',
            src: 'https://rukminim1.flixcart.com/fk-p-flap/240/240/image/3738381ad5b01e6a.jpg?q=90'
        },
        {
            name: 'oppo',
            src: 'https://rukminim1.flixcart.com/fk-p-flap/240/240/image/3ac5499f6d57842f.jpg?q=90'
        },
        {
            name: 'vivo',
            src: 'https://rukminim1.flixcart.com/fk-p-flap/240/240/image/78e19d9f245aa588.jpg?q=90'
        },
        {
            name: 'xiaomi',
            src: 'https://rukminim1.flixcart.com/flap/240/240/image/d3d04a6c6ca21475.jpg?q=90'
        },
        {
            name: 'iphone',
            src: 'https://rukminim1.flixcart.com/fk-p-flap/240/240/image/af53134b9945523e.jpg?q=90'
        },
        {
            name: 'infinix',
            src: 'https://rukminim1.flixcart.com/fk-p-flap/240/240/image/0f5ade4858e4f100.jpg?q=90'
        }
    ];
    const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis magni eum similique! Voluptates, molestias architecto iure ullam illo voluptatum hic aliquam, odio delectus ut nam possimus adipisci ab, aperiam doloribus.";
    return (
        <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
            <Row style={{ maxWidth: "50rem" }} className="mx-auto py-3">
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first" >
                            <div className="p-3 bg-light" style={{ height: "11rem" , width:"130rem"}} >
                                {phones.map((b,i) => {
                                    return <a href={"/" + b.name}><img style={{ display: "inline-block" }} src={b.src} alt={`Brand ${i}`}></img></a>
                                    })}
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second" className='overflow-scroll'>
                            <div className="p-3 bg-light">
                                {text}
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default LeftTabsExample;