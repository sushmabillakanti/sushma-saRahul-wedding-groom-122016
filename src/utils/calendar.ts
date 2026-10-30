import { WEDDING_DETAILS } from '../data/weddingData';

export const createGoogleCalendarUrl = (title: string, description: string, location: string, startDate: string, endDate: string) => {
  // Format dates: YYYYMMDDTHHMMSSZ
  const formatDateForGoogle = (isoString: string) => {
    const d = new Date(isoString);
    return d.toISOString().replace(/-|:|\.\d\d\d/g, '');
  };

  const start = formatDateForGoogle(startDate);
  const end = formatDateForGoogle(endDate);

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${start}/${end}`,
    details: description,
    location: location
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export const downloadIcsFile = (title: string, description: string, location: string, startDate: string, endDate: string) => {
  const formatDate = (isoString: string) => {
    return new Date(isoString).toISOString().replace(/-|:|\.\d\d\d/g, '');
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Sai Rahul & Sushma Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:wedding-${Date.now()}@sairahul-sushma-wedding.com`,
    `DTSTAMP:${formatDate(new Date().toISOString())}`,
    `DTSTART:${formatDate(startDate)}`,
    `DTEND:${formatDate(endDate)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'SaiRahul_Sushma_Wedding.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const getWhatsAppShareUrl = () => {
  const message = encodeURIComponent(
    `🪷 *Sai Rahul & Sushma Wedding Invitation* 🪷\n\n` +
    `Together with our families, we cordially invite you and your family to celebrate our holy matrimony and bless us!\n\n` +
    `🗓 *Date:* Thursday, 12th November 2026\n` +
    `✨ *Sumuhurtham:* 9:27 PM (Vrishabha Lagnam)\n` +
    `📍 *Venue:* ${WEDDING_DETAILS.venueName}, ${WEDDING_DETAILS.venueLocation}\n` +
    `🗺 *Maps:* ${WEDDING_DETAILS.googleMapsUrl}\n\n` +
    `💌 *View digital invitation, photos & ceremonies schedule:* \n${window.location.href}`
  );
  return `https://api.whatsapp.com/send?text=${message}`;
};
