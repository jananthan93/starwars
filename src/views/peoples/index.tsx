import { useEffect } from 'react';
import Button from '../../components/ui/Button';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import CharacterCard from './components/CharacterCard';
import { getAllPeoples, PeopleState } from './store';

function HomePage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllPeoples());
  }, []);
  const { allPeoples, next, previous } = useAppSelector(
    (state) => state.people
  ) as PeopleState;
  return (
    <>
      <main className="flex-grow overflow-y-auto my-4">
        <div className="container mx-auto p-4">
          <h1 className="text-xl font-bold mb-4">Star Wars peoples</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allPeoples.map((people) => (
              <CharacterCard data={people} />
            ))}
          </div>
        </div>
      </main>
      <nav className="flex justify-between px-4 py-4">
        <Button
          key="prev"
          disabled={previous != null ? false : true}
          onClick={() => dispatch(getAllPeoples(previous))}
        >
          Previous
        </Button>
        <Button
          key="next"
          disabled={next != null ? false : true}
          onClick={() => dispatch(getAllPeoples(next))}
        >
          Next
        </Button>
      </nav>
    </>
  );
}

export default HomePage;
