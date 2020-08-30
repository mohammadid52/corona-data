import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  const arr = [
    {
      title: "Infected",
      value: confirmed.value,
      text: "Number of infected patients of COVID-19",
      border_color: `${styles.infected}`,
    },
    {
      title: "Recovered",
      value: recovered.value,
      text: "Number of recovered patients of COVID-19",
      border_color: `${styles.recovered}`,
    },
    {
      title: "Deaths",
      value: deaths.value,
      text: "Number of Deaths caused by COVID-19",
      border_color: `${styles.deaths}`,
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          {arr.map((data) => (
            <Grid
              item
              component={Card}
              className={`${styles.card} ${data.border_color}`}
            >
              <CardContent>
                <div>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    className={styles.cardTitle}
                  >
                    {data.title}
                  </Typography>
                  <CountUp
                    className={styles.countUp}
                    start={0}
                    end={data.value}
                    duration={1}
                    seperator=","
                  />
                  <Typography className={styles.lastUpdate}>
                    {new Date(lastUpdate).toDateString()}
                  </Typography>
                  <Typography className={styles.cardText}>
                    {data.text}
                  </Typography>
                </div>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
export default Cards;
