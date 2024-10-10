import EventCard from '@/components/EventCard'

export default function Home() {
  const events = [
    {
      id: 1,
      title: "Conferencia de Tecnología 2024",
      date: "2024-11-15",
      location: "Buenos Aires",
      image: "/api/placeholder/400/200"
    },
    {
      id: 2,
      title: "Festival de Música Urbana",
      date: "2024-12-01",
      location: "Córdoba",
      image: "/api/placeholder/400/200"
    },
    {
      id: 3,
      title: "Maratón Ciudad de Rosario",
      date: "2024-10-20",
      location: "Rosario",
      image: "/api/placeholder/400/200"
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Eventos Destacados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}