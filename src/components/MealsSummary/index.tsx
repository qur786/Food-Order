import classes from "./index.module.css";

export function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Delicious food</h2>
      <p>Choose meals from high quality cooked food.</p>
      <p>
        Foods that has been prepared by one of the most famous cooks in the
        world.
      </p>
    </section>
  );
}
