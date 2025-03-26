'use client';

import { CalendarDays, MapPin } from 'lucide-react';
import React from 'react';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
}

export const EventCard: React.FC<EventCardProps> = ({ title, description, date, location }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-xl p-6 hover:scale-[1.02] transition-transform duration-200 w-full max-w-md border border-gray-700">
      <h3 className="text-2xl font-semibold text-blue-400 mb-2">{title}</h3>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm text-gray-400 mb-4">
        <div className="flex items-center gap-1">
          <CalendarDays className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default EventCard;
