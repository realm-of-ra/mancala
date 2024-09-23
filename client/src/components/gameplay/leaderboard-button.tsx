import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function LeaderboardButton() {
    return(
            <Link to="/leaderboard">
                <Button className="p-4 rounded-full bg-green-500 bg-[url('./assets/leaderboard_bg.png')] bg-cover bg-center bg-no-repeat w-16 h-16">
                    <div className="bg-[url('./assets/leaderboard.png')] bg-no-repeat bg-contain bg-center w-8 h-8" />
                </Button>
            </Link>
    )
}