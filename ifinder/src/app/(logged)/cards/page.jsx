import { ControllerCards } from "./sections";


export default async function CardsPage({ searchParams }) {
  const page = searchParams.page ?? 1;
  //const cardsData = await cardService.getHome(page, 10);
  const cardsData = [
    {
      profileImage: "/node_modulesasd",
      id: 1,
      name: "asd",
      age: "asd",
      description: "asd",
      hoobies: "asd",
      cardContent: "asd",
      sex: "asd",
    },
    {
      profileImage: "/node_modulesasd",
      id: 1,
      name: "AAAAA",
      age: "AAAAA",
      description: "AAAAA",
      hoobies: "AAAAA",
      cardContent: "AAAAA",
      sex: "AAAAA",
    },
    {
      profileImage: "/node_modulesasd",
      id: 1,
      name: "1123123",
      age: "1123123",
      description: "1123123",
      hoobies: "1123123",
      cardContent: "1123123",
      sex: "ASD",
    },
    {
      profileImage: "/node_modulesasd",
      id: 1,
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
