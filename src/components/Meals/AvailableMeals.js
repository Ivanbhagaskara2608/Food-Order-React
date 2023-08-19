import classes from "../Meals/AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Mie Ayam Bakso",
    description: "Chicken noodle soup/fried + Meatball",
    price: 15000,
  },
  {
    id: "m2",
    name: "Bakso Jumbo",
    description: "Meatball extra size",
    price: 13000,
  },
  {
    id: "m3",
    name: "Bakso Biasa",
    description: "Meatball normal size",
    price: 10000,
  },
  {
    id: "m4",
    name: "Mie Ayam",
    description: "Chicken noodle soup/fried",
    price: 11000,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
