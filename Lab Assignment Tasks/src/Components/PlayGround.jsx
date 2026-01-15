function PlayGround({ name, rollNo, batch, favLang }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-xs text-center">
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <p className="text-gray-600 mb-1">Roll No: {rollNo}</p>
      <p className="text-gray-600 mb-1">Batch: {batch}</p>
      <p className="text-gray-600">Favorite Language: {favLang}</p>
    </div>
  );
}

export default PlayGround;

