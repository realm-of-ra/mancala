import BoardBlock from "@/components/boards/board-block";
import Header from "@/components/header";
import { Helmet } from "react-helmet-async";
import default_board_image from "@/assets/default_board_sample.png";
import starknet_board_image from "@/assets/starknet_board_sample.png";

export default function Boards() {
  const boards = [
    {
      id: 1,
      image: default_board_image,
      name: "Default Board",
      description:
        "Story about it that you can make mention of to have like a description",
      owned: true,
    },
    {
      id: 2,
      image: starknet_board_image,
      name: "Starknet Board",
      description:
        "Story about it that you can make mention of to have like a description",
      owned: false,
    },
  ];
  return (
    <div className="w-full h-screen bg-[#0F1116] bg-[url('./assets/bg.png')] bg-cover bg-center space-y-8 fixed">
      <Helmet>
        <title>Buy Mancala Boards | Purchase High-Quality Mancala Sets</title>
        <meta
          name="description"
          content="Explore and purchase a variety of high-quality Mancala boards. Find the perfect set for your game collection."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Buy Mancala Boards | High-Quality Sets Available"
        />
        <meta
          property="og:description"
          content="Discover a wide range of Mancala boards available for purchase. Perfect for enthusiasts and collectors."
        />
        <meta property="og:url" content="https://mancala.xyz/boards" />
        <meta property="og:image" content="https://mancala.xyz/og-boards.jpg" />

        {/* Twitter */}
        <meta name="twitter:title" content="Purchase Mancala Boards" />
        <meta
          name="twitter:description"
          content="Shop for high-quality Mancala boards and sets. Ideal for game lovers and collectors."
        />
      </Helmet>
      <Header />
      <div className="w-full flex-1 flex flex-row justify-center">
        <div className="max-w-7xl w-full space-y-5">
          <div className="w-full h-20 bg-[#0F1116] rounded-full flex flex-row items-center justify-center">
            <p className="text-[#BDC2CC] text-2xl">Mancala Boards</p>
          </div>
          <div className="grid grid-cols-2 gap-5 overflow-y-scroll h-[calc(100vh-250px)] scrollbar-hidden">
            {boards.map((board) => (
              <BoardBlock
                key={board.id}
                image={board.image}
                name={board.name}
                description={board.description}
                owned={board.owned}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
