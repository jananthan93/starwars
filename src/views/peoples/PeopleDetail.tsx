import { useEffect } from 'react';
import Button from '../../components/ui/Button';
import { getPeopleDetail, likePeople, PeopleState } from './store';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { useParams } from 'react-router';

function PeopleDetail() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    id != undefined && dispatch(getPeopleDetail(id));
  }, [id]);
  const { peopleDetail, favPeoples } = useAppSelector(
    (state) => state.people
  ) as PeopleState;
  return (
    <main className="flex-grow grid grid-cols-2 overflow-y-auto my-4">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-around">
          <section aria-live="polite">
            <div className="flex  justify-between items-center mb-4 space-y-2">
              <h1 className="text-2xl font-bold text-blue-700">
                {peopleDetail?.name}
              </h1>
              {peopleDetail && !favPeoples.includes(peopleDetail?.id) ? (
                <Button onClick={() => dispatch(likePeople(peopleDetail?.id))}>
                  {' '}
                  Add to Favourite
                </Button>
              ) : (
                <Button onClick={() => dispatch(likePeople(peopleDetail?.id))}>
                  {' '}
                  Remove From Favourites
                </Button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2">
              <div className="text-lg space-y-3">
                <p className="font-semibold">
                  Gender:{' '}
                  <span className="font-normal">{peopleDetail?.gender}</span>
                </p>
                <p className="font-semibold">
                  Hair Color:{' '}
                  <span className="font-normal">{peopleDetail?.hairColor}</span>
                </p>
                {/* <p className="font-semibold">
                Eye Color:{' '}
                <span className="font-normal">{peopleDetail?.eyeColor}</span>
              </p> */}
                <p className="font-semibold">
                  Height:{' '}
                  <span className="font-normal">{peopleDetail?.height}</span>
                </p>
                <p className="font-semibold">
                  Birth Year:{' '}
                  <span className="font-normal">{peopleDetail?.birthYear}</span>
                </p>
              </div>
              <div className="text-lg space-y-3">
                <p className="font-semibold">
                  Home World:{' '}
                  <span className="font-normal">{peopleDetail?.homeworld}</span>
                </p>
                {/* <p className="font-semibold">
                Skin Color: <span className="font-normal">{peopleDetail?.skinColor}</span>
              </p> */}
                <p className="font-semibold">
                  Mass:{' '}
                  <span className="font-normal">{peopleDetail?.mass}</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default PeopleDetail;
