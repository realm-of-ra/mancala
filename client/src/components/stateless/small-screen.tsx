const SmallScreenWarning = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-white bg-black bg-opacity-75 backdrop-blur-sm">
        <div className="p-4 text-center">
            <h1 className="text-2xl font-bold">
                This game is not optimized for this device screen!
            </h1>
        </div>
    </div>
);

export default SmallScreenWarning;
