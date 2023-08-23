import underConstructionImage from "/src/assets/underconstruction.jpg";

export default function Error() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="mb-6">
          <img src={underConstructionImage} alt="Under Construction" className="mx-auto w-264" />
        </div>

      </div>
    </div>
  );
}
