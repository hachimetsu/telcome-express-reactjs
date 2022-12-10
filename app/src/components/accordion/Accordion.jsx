import * as React from 'react';
import Accordion from 'react-bootstrap/Accordion';

export default function _Accordion(props) {
    const $items = props.setJSON;
    return <>
        <Accordion style={{maxWidth:"50rem"}} className="py-3 mx-auto" defaultActiveKey={['0']} alwaysOpen>
            {$items.map((item, i) => {
            return <Accordion.Item eventKey={`${i}`}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>{item.detail}</Accordion.Body>
            </Accordion.Item>
            })}
        </Accordion>
    </>
}

