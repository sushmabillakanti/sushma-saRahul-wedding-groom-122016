export interface WeddingEvent {
  id: string;
  title: string;
  teluguTitle: string;
  date: string;
  displayDate: string;
  time: string;
  muhurthamTime?: string;
  venue: string;
  address: string;
  description: string;
  attire: string;
  attireColorHint: string;
  iconName: string;
  isMuhurtham?: boolean;
}

export interface Blessing {
  id: string;
  name: string;
  relationOrCity: string;
  message: string;
  tag: string;
  timestamp: string;
  likes: number;
}

export interface RSVPFormData {
  fullName: string;
  emailOrPhone: string;
  guestCount: number;
  attendingEvents: string[];
  dietaryPreference: string;
  specialNote: string;
}

export interface StoryMilestone {
  yearOrPhase: string;
  title: string;
  description: string;
  quote?: string;
}
