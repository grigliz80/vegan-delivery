import React from "react"
import cls from "./AvailableMeals.module.css"
import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Морква по корейськи",
    description: "Салат для кращого кровообігу",
    price: 12.99
  },
  {
    id: "m2",
    name: "Ход-дог «Спаніель»",
    description: "Смачнючий сніданок",
    price: 16.5
  },
  {
    id: "m3",
    name: "Окрошка до бабиного літа",
    description: "Легкий прохолодний суп",
    price: 14.99
  },
  {
    id: "m4",
    name: "Панна котта",
    description: "Солодкий мусс з малини",
    price: 18.99
  },
  {
    id: "m5",
    name: "Фалафель",
    description: "Ідеальна страва для любителів веганської кухні",
    price: 20.5
  },
  {
    id: "m6",
    name: "Гречка з квасолею",
    description: "Додасть багато сил протягом дня",
    price: 16.5
  },
  {
    id: "m7",
    name: "Шашлички з грибів",
    description: "Особливий смак дикої природи..",
    price: 14.99
  }
]

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <section className={cls.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
