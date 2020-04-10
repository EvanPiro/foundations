export interface Fruit {
  genus: string,
  name: string,
  id: number,
  family: string,
  order: string,
  nutrients: Nutrient
}

export interface Nutrient {
  carbohydrates: number,
  protein: number,
  fat: number,
  calories: number,
  sugar: number
}


const fruits: Fruit[] = [{
  "genus": "Malus",
  "name": "Apple",
  "id": 6,
  "family": "Rosaceae",
  "order": "Rosales",
  "nutrients": {
    "carbohydrates": 11.4,
    "protein": 0.3,
    "fat": 0.4,
    "calories": 52,
    "sugar": 10.3
  }
}, {
  "genus": "Musa",
  "name": "Banana",
  "id": 1,
  "family": "Musaceae",
  "order": "Zingiberales",
  "nutrients": {
    "carbohydrates": 22,
    "protein": 1,
    "fat": 0.2,
    "calories": 96,
    "sugar": 17.2
  }
}, {
  "genus": "Prunus",
  "name": "Cherry",
  "id": 9,
  "family": "Rosaceae",
  "order": "None",
  "nutrients": {
    "carbohydrates": 12,
    "protein": 1,
    "fat": 0.3,
    "calories": 50,
    "sugar": 8
  }
}, {
  "genus": "Citrus",
  "name": "Lemon",
  "id": 26,
  "family": "Rutaceae",
  "order": "Sapindales",
  "nutrients": {
    "carbohydrates": 9,
    "protein": 1.1,
    "fat": 0.3,
    "calories": 29,
    "sugar": 2.5
  }
}, {
  "genus": "Mangifera",
  "name": "Mango",
  "id": 27,
  "family": "Anacardiaceae",
  "order": "Sapindales",
  "nutrients": {
    "carbohydrates": 15,
    "protein": 0.82,
    "fat": 0.38,
    "calories": 60,
    "sugar": 13.7
  }
}, {
  "genus": "Citrus",
  "name": "Orange",
  "id": 2,
  "family": "Rutaceae",
  "order": "Sapindales",
  "nutrients": {
    "carbohydrates": 8.3,
    "protein": 1,
    "fat": 0.2,
    "calories": 43,
    "sugar": 8.2
  }
}, {
  "genus": "Pyrus",
  "name": "Pear",
  "id": 4,
  "family": "Rosaceae",
  "order": "Rosales",
  "nutrients": {
    "carbohydrates": 15,
    "protein": 0.4,
    "fat": 0.1,
    "calories": 57,
    "sugar": 10
  }
}, {
  "genus": "Ananas",
  "name": "Pineapple",
  "id": 10,
  "family": "Bromeliaceae",
  "order": "Poales",
  "nutrients": {
    "carbohydrates": 13.12,
    "protein": 0.54,
    "fat": 0.12,
    "calories": 50,
    "sugar": 9.85
  }
}, {
  "genus": "Rubus",
  "name": "Raspberry",
  "id": 23,
  "family": "Rosaceae",
  "order": "Rosales",
  "nutrients": {
    "carbohydrates": 12,
    "protein": 1.2,
    "fat": 0.7,
    "calories": 53,
    "sugar": 4.4
  }
}, {
  "genus": "Fragaria",
  "name": "Strawberry",
  "id": 3,
  "family": "Rosaceae",
  "order": "Rosales",
  "nutrients": {
    "carbohydrates": 5.5,
    "protein": 0.8,
    "fat": 0.4,
    "calories": 29,
    "sugar": 5.4
  }
}, {
  "genus": "Solanum",
  "name": "Tomato",
  "id": 5,
  "family": "Solanaceae",
  "order": "Solanales",
  "nutrients": {
    "carbohydrates": 3.9,
    "protein": 0.9,
    "fat": 0.2,
    "calories": 74,
    "sugar": 2.6
  }
}, {
  "genus": "Citrullus",
  "name": "Watermelon",
  "id": 25,
  "family": "Cucurbitaceae",
  "order": "Cucurbitales",
  "nutrients": {
    "carbohydrates": 8,
    "protein": 0.6,
    "fat": 0.2,
    "calories": 30,
    "sugar": 6
  }
}];

export default fruits;
