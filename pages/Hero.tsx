'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { EventCard } from '../components/card';
import { Button } from '../components/ui/button';
import { allEvents } from '../utils/events';

export default function Home() {
  

  const eventsPerPage = 3;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(allEvents.length / eventsPerPage);

  const currentEvents = allEvents.slice(page * eventsPerPage, (page + 1) * eventsPerPage);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl font-extrabold mb-4">
          <span className="text-blue-400">The Move</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">Events</p>
      </motion.div>

      {/* Event Cards Section */}
      <div className="space-y-6 w-full max-w-xl mt-8">
        {currentEvents.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            date={event.date}
            location={event.location}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex gap-4 mt-8">
        <Button
          onClick={() => setPage((p) => 0)}
          disabled={page === 0}
        >
          newer
        </Button>
        <Button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
        >
          Older
        </Button>
      </div>

      {/* Beans Page Link */}
      <Link href="/beans">
        <Button className="px-6 py-3 mt-20 text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg">
          Hi
        </Button>
      </Link>
    </div>
  );
}
