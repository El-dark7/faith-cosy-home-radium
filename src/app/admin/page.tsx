export default function AdminPage() {

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="p-6 border rounded-xl">
          Total Bookings
        </div>

        <div className="p-6 border rounded-xl">
          Guests
        </div>

        <div className="p-6 border rounded-xl">
          Messages
        </div>

        <div className="p-6 border rounded-xl">
          Occupancy
        </div>

      </div>

    </div>
  );
}
