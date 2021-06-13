import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Смачні веганські страви з доставкою</h2>
      <p>
        Обирай улюблену страву з нашого асортименту
        та насолоджуйся корисною їжею. не виходячи з дому!
      </p>
      <p>* * * * *</p>
      <p>
        Усі наші страви, приготовані професіоналами, шеф - 
        кухарями в галузі веганського здорового та корисного
        харчування!
      </p>
    </section>
  )
}

export default MealsSummary