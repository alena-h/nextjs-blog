const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <button className="absolute right-4 top-4 text-gray-600 hover:text-gray-800">
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
