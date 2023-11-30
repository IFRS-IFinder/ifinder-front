import { cardService } from "@/services";
import { ControllerCards } from "./sections";


export default async function CardsPage({ searchParams }) {
  const page = searchParams.page ?? 1;
  const cardsDataApi = await cardService.getHome();
  console.log(cardsDataApi)
  
  const cardsData = [
    {
      profileImage: "/node_modulesasd",
      id: 1,
      userId: 3,
      name: "asd",
      age: "asd",
      description: "asd",
      hoobies: "asd",
      cardContent: "asd",
      sex: "asd",
    },
  ];

  return (
    <div>
      <h1>Cards</h1>

      <ControllerCards cards={cardsData} page={page} />
      
    </div>
  );
}
