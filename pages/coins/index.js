import Axios from "axios";
import Image from "next/image";

const CoinList = ({ coinData }) => {
  return (
    <div className="flex flex-wrap gap-5">
      {coinData.coins.map((coin) => {
        return (
          <div
            key={coin.rank}
            className="rounded-full bg-slate-200 w-40 h-40 flex items-center justify-center"
          >
            <div className="flex flex-col">
              <Image src={coin.icon} alt="coin" width={50} height={50} />
              <h1>{coin.name}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CoinList;

export const getServerSideProps = async () => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );
  return {
    props: {
      coinData: data.data,
    },
  };
};
