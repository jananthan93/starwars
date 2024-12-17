import React from 'react';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import {
  MdCake,
  MdFace2,
  MdHeight,
  MdPublic,
  MdScale,
  MdTransgender,
} from 'react-icons/md';
import Button from '../../../components/ui/Button';
import { likePeople, People, PeopleState, unLikePeople } from '../store';
import { Link } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../store/hook';

function CharacterCard(props: { data: People }) {
  const dispatch = useAppDispatch();
  const { data } = props;
  const { favPeoples } = useAppSelector((state) => state.people) as PeopleState;
  return (
    <div
      key={`card-${data.name}`}
      aria-live="polite"
      aria-labelledby="character-name-R5-D4"
      aria-describedby="character-details-R5-D4"
      className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col gap-2"
    >
      <div className="flex justify-between items-center">
        <h2
          id="character-name-R5-D4"
          className="text-2xl font-bold text-blue-600"
        >
          {data.name}
        </h2>
        <div className="flex justify-between space-x-4">
          {favPeoples.includes(data.id) ? (
            <IoMdHeart onClick={() => dispatch(unLikePeople(data.id))} />
          ) : (
            <IoMdHeartEmpty onClick={() => dispatch(likePeople(data.id))} />
          )}
        </div>
      </div>
      <div
        id="character-details-R5-D4"
        className="grid grid-cols-2 gap-y-1 text-sm text-gray-700"
      >
        <div className="flex items-center gap-x-2">
          <MdPublic />
          <p className="font-bold text-gray-900">Home World:</p>
        </div>
        <p className="font-semibold text-gray-800">{data.homeworld}</p>
        <div className="flex items-center gap-x-2">
          <MdCake />
          <p className="font-bold text-gray-900">Birth Year:</p>
        </div>
        <p className="font-semibold text-gray-800">{data.birthYear}</p>
        <div className="flex items-center gap-x-2">
          <MdTransgender />
          <p className="font-bold text-gray-900">Gender:</p>
        </div>
        <p className="font-semibold text-gray-800">{data.gender}</p>
        <div className="flex items-center gap-x-2">
          <MdFace2 />
          <p className="font-bold text-gray-900">Hair Color:</p>
        </div>
        <p className="font-semibold text-gray-800">{data.hairColor}</p>
        <div className="flex items-center gap-x-2">
          <MdHeight />
          <p className="font-bold text-gray-900">Height:</p>
        </div>
        <p className="font-semibold text-gray-800">{data.height}</p>
        <div className="flex items-center gap-x-2">
          <MdScale />
          <p className="font-bold text-gray-900">Mass:</p>
        </div>
        <p className="font-semibold text-gray-800">{data.mass}</p>
      </div>

      <Link to={`/peoples/${data.id}`}>
        <Button className="mt-4">View Details</Button>
      </Link>
    </div>
  );
}

export default CharacterCard;
