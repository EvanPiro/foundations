import Row from 'reactstrap/lib/Row';
import { Col } from 'reactstrap';
import * as React from 'react';

const ContentPage = ({title, children}) => {
  return (
    <Row>
      <Col>
        <Row>
          <h1>
            {title}
          </h1>
        </Row>
        <Row className="p-3">
          <Col md={8}>
            {children}
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ContentPage;
