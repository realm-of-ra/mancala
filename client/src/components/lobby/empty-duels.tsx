import mancala_duels_logo from '../../assets/mancala_duels.png';

export default function EmptyDuels() {
    return (
        <div className="w-[874px] h-[874px] bg-[url('./assets/lobby-box-long.png')] bg-contain bg-no-repeat p-8">
            <div className='w-full h-[500px] flex flex-col items-center justify-center'>
                <img src={mancala_duels_logo} alt="duels" className="w-24 h-24 mx-auto" />
                <h6 className="text-[#BDC2CC] font-bold text-lg mt-1.5">You have no duels</h6>
                <button className="text-[#4F5666] text-sm">Create a game to play</button>
            </div>
        </div>
    )
}