import { manWK } from "../assets/mockdata";

function ManWK() {
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {manWK.map((item) => (
          <div
            key={item.id}
            className="group relative w-full h-full rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full rounded-lg duration-300 group-hover:-rotate-3 group-hover:scale-110"
            />
            <div className="absolute top-5 left-5 w-full h-full ">
              <h3 className="mt-4 text-xl lg:text-2xl font-semibold">
                {item.type}
              </h3>
              <p className="mt-2 text-gray-600">{item.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManWK;
