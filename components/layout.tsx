import { Col, Container, Fade, Row } from 'reactstrap';
import ClassicNav from './ClassicNav';

const Layout = ({children}) => {
  return (
    <div className="bg-lily-green">
      <Container className="bg-lily-green">
        <Row>
          <Col>
            <ClassicNav />
          </Col>
        </Row>
        <Row className="p-3">
          <Col>
            <Fade>
              {children}
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Layout;
