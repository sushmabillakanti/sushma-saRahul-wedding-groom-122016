import { WeddingEvent, Blessing, StoryMilestone } from '../types';

export const WEDDING_DETAILS = {
  groomName: 'Sai Rahul',
  brideName: 'Sushma',
  weddingDate: '2026-11-12T21:27:00+05:30', // 12 Nov 2026 at 9:27 PM IST
  displayDate: 'Thursday, 12th November 2026',
  muhurthamTime: '9:27 PM',
  muhurthamDetails: 'Vrishabha Lagnam Auspicious Sumuhurtham (Jeelakarra Bellam)',
  venueName: 'M.M.R Convention Hall',
  venueLocation: 'Kothuru, Khammam, Telangana 500032',
  googleMapsUrl: 'https://maps.app.goo.gl/P6ZgR4wLbW2rwksw7',
  contactPhone: '+919848194759',
  contactPhone2: '+91 98481 94759',
  parents: {
    groom: 'Smt. DhanaLakshmi & Sri Madhusudhan Rao',
    bride: 'Smt. Madhavi & Sri Venkateswarlu'
  }
};

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'haldi',
    title: 'Haldi',
    teluguTitle: 'హల్దీ వేడుక',
    date: '2026-11-11',
    displayDate: 'Wednesday, 11th November 2026',
    time: '11:00 AM onwards',
    venue: 'At our Home',
    address: 'Rudrammakota, Khammam',
    description: 'The auspicious ceremony where fragrant turmeric paste and sandalwood are lovingly applied with blessings, floral petals, and divine prayers.',
    attire: 'Sunny Yellows, Mustard, Floral Prints & Festive Cottons',
    attireColorHint: '#F59E0B',
    iconName: 'Sparkles',
    isMuhurtham: false
  },
  {
    id: 'kalyanam',
    title: 'Sumuhurtham & Kalyana Mahotsavam',
    teluguTitle: 'శుభముహూర్తం & కల్యాణ మహోత్సవం',
    date: '2026-11-12',
    displayDate: 'Thursday, 12th November 2026',
    time: '7:30 PM onwards',
    muhurthamTime: '9:27 PM (Auspicious Jeelakarra-Bellam)',
    venue: 'M.M.R Convention Hall',
    address: 'Kothuru, Khammam, Telangana 500032',
    description: 'The sacred moment of eternal union: Jeelakarra Bellam placement at the auspicious 9:27 PM Muhurtham, Mangalasutra Dharana, Talambralu, and Saptapadi around the holy fire.',
    attire: 'Regal Kanjeevaram Pattu Sarees, Silk Dhotis & Traditional Kurta Sets',
    attireColorHint: '#162E5B',
    iconName: 'HeartHandshake',
    isMuhurtham: true
  }
];

export const STORY_MILESTONES: StoryMilestone[] = [
  {
    yearOrPhase: 'The Serendipity',
    title: 'When Worlds Aligned',
    description: 'Introduced by dear family, our first conversation started as a brief hello and effortlessly turned into hours of shared laughter, values, and common dreams.',
    quote: '"From that very first conversation, every little detail just felt right."'
  },
  {
    yearOrPhase: 'The Connection',
    title: 'Conversations & Growing Closer',
    description: 'From endless phone calls and sharing our daily lives to discovering our dreams, lifestyles, and compatibility. Somewhere between the laughter, late-night talks, and little moments, we found ourselves falling for each other. ❤️'
  },
  {
    yearOrPhase: 'The Blessing',
    title: 'Two Families, One Heart',
    description: 'With the warm blessings of our parents and elders, the families came together in jubilation, officially sealing the engagement with joy and sweet mithai.',
    quote: '"Blessed by our roots, nurtured by love, ready for our lifetime."'
  },
  {
    yearOrPhase: 'The Sumuhurtham',
    title: 'Beginning of Forever',
    description: 'On 12 November 2026 at 9:27 PM, surrounded by our beloved family and friends, we take the seven sacred steps into eternity.',
    quote: '"We cannot wait to celebrate this divine milestone with you!"'
  }
];

export const INITIAL_BLESSINGS: Blessing[] = [
  {
    id: '1',
    name: 'Ramesh & Sunitha V.',
    relationOrCity: 'Family Friends, Hyderabad',
    message: 'Wishing Sai Rahul & Sushma a lifetime filled with deep companionship, radiant joy, and enduring prosperity. May Lord Venkateshwara bless this wonderful pair!',
    tag: '🪷 Mangalashasanam',
    timestamp: '2 hours ago',
    likes: 18
  },
  {
    id: '2',
    name: 'Kavitha Rao & Family',
    relationOrCity: 'Cousins, Bengaluru',
    message: 'So incredibly thrilled for you both! Sai Rahul and Sushma, looking forward to the celebrations! Counting down to 12th Nov!',
    tag: '💐 Best Wishes',
    timestamp: '5 hours ago',
    likes: 24
  },
  {
    id: '3',
    name: 'Arjun & Neha',
    relationOrCity: 'Close Friends, Dallas',
    message: 'From college days to this auspicious Muhurtham! Heartiest congratulations Sai Rahul & Sushma. Looking forward to dancing our hearts out at the celebrations!',
    tag: '✨ Eternal Love',
    timestamp: 'Yesterday',
    likes: 31
  },
  {
    id: '4',
    name: 'Venkata Sastry Garu',
    relationOrCity: 'Elder Blessing, Vijayawada',
    message: 'శుభమస్తు! మేమిద్దరికీ ఆయురారోగ్య ఐశ్వర్యాలు ప్రసాదించాలని కోరుకుంటున్నాము. సుముహూర్తాన జీలకర్ర-బెల్లం సమర్పించి సుఖసంతోషాలతో వర్ధిల్లాలి.',
    tag: '🪔 Shubh Vivah',
    timestamp: '2 days ago',
    likes: 42
  }
];
