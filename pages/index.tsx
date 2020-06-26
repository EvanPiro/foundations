import * as React from 'react';
import { Button, Col, Container } from 'reactstrap'
import Row from 'reactstrap/lib/Row';
import ContentPage from '../components/ContentPage';
import { DevsMovingBox } from '../components/icons';


const Home = () => {
  return (
    <ContentPage title="Two Devs">
      <DevsMovingBox />
      <p className="mt-4">
        Our philosophy is simple: An innovator and two devs can grow a product from seed to stead (this is not it lol).
      </p>
      <p>

      </p>
    </ContentPage>
  )
};


export default Home;
