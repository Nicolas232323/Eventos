export default function EventDetail({ params }) {
    // Esta es una versión estática, luego se agregará la lógica para obtener el evento
    const event = {
      id: params.id,
      title: "Conferencia de Tecnología 2024",
      date: "2024-11-15",
      location: "Buenos Aires",
      description: "Una conferencia imperdible sobre las últimas tendencias en tecnología...",
      image: "/api/placeholder/800/400"
    }
  
    return (
      <div className="max-w-4xl mx-auto">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
        <div className="mb-6">
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Fecha:</span> {event.date}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Ubicación:</span> {event.location}
          </p>
          <p className="text-gray-700">{event.description}</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">
          Registrarse al evento
        </button>
      </div>
    )
  }