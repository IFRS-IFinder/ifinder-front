import { cardService } from "@/services";
import { ControllerCards } from "./sections";


export default async function CardsPage({ searchParams }) {
  const page = searchParams.page ?? 1;
  const cardsData = await cardService.getHome(page);

  return (
    <div>
      <h1>Cards</h1>

      <ControllerCards cards={cardsData} page={page} />
      
    </div>
  );
}
