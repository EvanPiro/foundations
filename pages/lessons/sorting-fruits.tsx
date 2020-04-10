import ContentPage from '../../components/ContentPage';
import fruits from '../../data/fruits';
import * as React from 'react';
import { ListGroup, ListGroupItem, Row, Table } from 'reactstrap';

const FruitsView = ({fruits}) => {
  return (
    <Table>
      <thead>
        <th>Name</th>
        <th>Calories</th>
        <th></th>
      </thead>
      <tbody>
        {fruits.map(({name, nutrients}) => (
          <tr>
            <th scope="row">{name}</th>
            <td>{nutrients.calories}</td>
          </tr>
        ))}
      </tbody>

    </Table>
  )
};

const SortingFruits = () => {
  return (
    <ContentPage title="Sorting Fruit">
      <Row>
        <FruitsView fruits={fruits} />
      </Row>
    </ContentPage>
  )
};

export default SortingFruits
