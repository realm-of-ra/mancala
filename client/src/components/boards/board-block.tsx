import { Button } from "../ui/button";

export default function BoardBlock({
    image,
   name,
   description,
   owned
}: {
    image: string;
    name: string;
    description: string;
    owned: boolean;
}) {
    return(
        <div className="w-[630px] h-[400px] bg-[#0F111680] rounded-xl">
            <div className="w-full h-full p-4 space-y-1">
                <img src={image} className="w-full h-64" draggable={false} />
                <h3 className="text-white text-2xl font-semibold">{name}</h3>
                <p className="text-[#C7CAD4] text-lg">{description}</p>
                {
                    owned ? <Button className="p-5 rounded-3xl bg-[#171922]">Owned</Button> : 
                    <Button className="p-5 rounded-3xl bg-[#F58229]">Buy Board</Button>
                }
            </div>
        </div>
    )
}