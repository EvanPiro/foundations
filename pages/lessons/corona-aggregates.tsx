import ContentPage from '../../components/ContentPage';
import * as React from 'react';
import { useEffect } from 'react';


const getData = async () => {
  const response = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/random_masks_usage_instructions.php", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "ca83977371msh5bbbfb24d1ad15dp13dc5djsn20b8f4e62297"
    }
  })

  console.log(response);

}

const CoronaAggregates = () => {
  useEffect(() => {
    const res = async () => {
      await getData()
    };

    res()
  });
  return (
    <ContentPage title="Corona Aggregates">
      Corona Aggregates
    </ContentPage>
  )
};

export default CoronaAggregates


