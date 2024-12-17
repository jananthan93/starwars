import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import {
  MdCake,
  MdFace2,
  MdHeight,
  MdPublic,
  MdScale,
  MdTransgender,
} from 'react-icons/md';
import Button from '../../../components/ui/Button';
import { People } from '../store';

function CharacterCard(props: { data: People }) {
  const { data } = props;
  return (
    <div
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
          <button
            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium size-14 css-18q7h3i"
            tabIndex={0}
            type="button"
            aria-label="Add to favorites"
          >
            <IoMdHeartEmpty />
          </button>
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

      <Button className="mt-4" title="View Details">
        View Details
      </Button>
    </div>
  );
}

export default CharacterCard;
