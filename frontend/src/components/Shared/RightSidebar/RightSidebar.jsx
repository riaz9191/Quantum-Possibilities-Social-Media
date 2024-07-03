const RightSidebar = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="mb-4">
        <h2 className="font-bold text-lg mb-2">Sponsored</h2>
        {/* Sponsored content */}
      </div>
      <div className="mb-4">
        <h2 className="font-bold text-lg mb-2">Friend Requests</h2>
        {/* Friend request list */}
      </div>
      <div className="mb-4">
        <h2 className="font-bold text-lg mb-2">Birthdays</h2>
        {/* Birthday list */}
      </div>
      <div>
        <h2 className="font-bold text-lg mb-2">Contacts</h2>
        {/* Contact list */}
      </div>
    </div>
  );
};

export default RightSidebar;
