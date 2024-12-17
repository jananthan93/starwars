import { useAppSelector } from '../../store/hook';
import CharacterCard from './components/CharacterCard';
import FavPeoplesNotFound from './FavPeoplesNotFound';
import { PeopleState } from './store';

const FavouritePeoples = () => {
  const { allPeoples, favPeoples } = useAppSelector(
    (state) => state.people
  ) as PeopleState;
  const favourites = allPeoples.filter((people) =>
    favPeoples.includes(people.id)
  );
  return (
    <main className="flex-grow overflow-y-auto my-4">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">
          My Favorite Characters
        </h1>
        {favPeoples.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {favourites.map((fav) => (
              <CharacterCard data={fav} />
            ))}
          </div>
        ) : (
          <FavPeoplesNotFound />
        )}
      </div>
    </main>
  );
};

export default FavouritePeoples;
