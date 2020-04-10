import ContentPage from '../../components/ContentPage';
import fruits from '../../data/fruits';
import * as React from 'react';
import { Row, Table } from 'reactstrap';

const FruitsView = ({fruits}) => {
  return (
    <Table>
      <thead>
        <th>Name</th>
        <th>Calories</th>
        <th>Protein</th>
        <th></th>
      </thead>
      <tbody>
        {fruits.map(({name, nutrients}) => (
          <tr>
            <th scope="row">{name}</th>
            <td>{nutrients.calories}</td>
            <td>{nutrients.protein}</td>
          </tr>
        ))}
      </tbody>

    </Table>
  )
};

const SortingFruits = () => {

  const sortedFruits = fruits.sort(
    ({nutrients: nutrientsPrev}, {nutrients: nutrientsNext}) => nutrientsPrev.calories - nutrientsNext.calories
  )

  return (
    <ContentPage title="Sorting Fruit">
      <Row>
        <FruitsView fruits={sortedFruits} />
      </Row>
    </ContentPage>
  )
};

export default SortingFruits
