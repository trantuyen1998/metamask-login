import { ReactNode } from "react";
import classes from "./card.module.css";

type CardProps = {
  cardContainer: any;
  children: ReactNode;
};
const Card = ({ cardContainer, children }: CardProps) => {
  return <div className={`${classes.card} ${cardContainer}`}>{children}</div>;
};

export default Card;
