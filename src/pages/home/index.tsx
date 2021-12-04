import Card from "../../components/common/card";
import classes from "./home.module.css";

type HomeProps = {
  currentAccount: string;
  balance: string | number;
};
const Home = ({ currentAccount, balance }: HomeProps) => {
  return (
    <Card cardContainer={classes.home}>
      <h1>Welcome</h1>
      <p>{currentAccount}</p>
      <p>{balance} ETH</p>
    </Card>
  );
};
export default Home;
