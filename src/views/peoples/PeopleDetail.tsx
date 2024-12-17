import Button from '../../components/ui/Button';

function PeopleDetail() {
  return (
    <main className="flex-grow overflow-y-auto my-4">
      <div className="container mx-auto px-4 py-2">
        <section aria-live="polite">
          <div className="flex justify-between items-center mb-4 space-y-2">
            <h1 className="text-2xl font-bold text-blue-700">R5-D4</h1>
            <Button>Add to Favourite</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2">
            <div className="text-lg space-y-3">
              <p className="font-semibold">
                Gender: <span className="font-normal">N/A</span>
              </p>
              <p className="font-semibold">
                Hair Color: <span className="font-normal">n/a</span>
              </p>
              <p className="font-semibold">
                Eye Color: <span className="font-normal">red</span>
              </p>
              <p className="font-semibold">
                Height: <span className="font-normal">97</span>
              </p>
              <p className="font-semibold">
                Birth Year: <span className="font-normal">unknown</span>
              </p>
            </div>
            <div className="text-lg space-y-3">
              <p className="font-semibold">
                Home World: <span className="font-normal">Tatooine</span>
              </p>
              <p className="font-semibold">
                Skin Color: <span className="font-normal">white, red</span>
              </p>
              <p className="font-semibold">
                Mass: <span className="font-normal">32</span>
              </p>
            </div>
          </div>
          <section className="mt-4">
            <section
              aria-labelledby="character-films-and-starships"
              className="mt-4"
            >
              <h2
                id="character-films-and-starships"
                className="text-2xl font-bold text-blue-700 mb-2"
              >
                Character Films and Starships
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Films:
                  </h3>
                  <ul
                    className="list-disc pl-4"
                    aria-label="List of films the character appeared in"
                  >
                    <li
                      className="font-normal"
                      aria-label="Film title: A New Hope"
                    >
                      A New Hope
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Starships:
                  </h3>
                  <ul
                    aria-label="List of starships piloted by the character"
                    className="list-disc pl-4"
                  >
                    <li>No starships found</li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
        </section>
      </div>
    </main>
  );
}

export default PeopleDetail;
