import type { StaticImageData } from "next/image";
import curious from "../app/images/curious.png";
import Thoughtful from "../app/images/Thoughtful.png";
import Building from "../app/images/Building.png";
import StuentLife from "../app/images/studentlife.png";

export { curious,Thoughtful ,Building};
export const highlights = [
  { title: 'Rigorous Academics, Made Simple', text: 'NCERT + Concept-based learning. Daily doubt sessions, weekly tests and personal mentoring. No rote learning, only understanding.', icon: '01' },
  { title: 'Cutting-Edge Labs & Innovation', text: 'Robotics & AI Lab, Physics-Chemistry-Biology Labs, Computer Lab & Digital Library. Children learn by doing.', icon: '02' },
  { title: 'Vibrant Student Life', text: 'Music, Dance, Theatre, Art, Yoga, and 10+ sports - Football, Cricket, Basketball, Skating. School is fun here.', icon: '03' },
  { title: 'Values & Leadership', text: 'Morning assembly, Seva projects, Leadership Council, and life-skills classes create compassionate changemakers, not just toppers.', icon: '04' },
]

export const stages = [
  ['Pre-Primary', 'Nursery – UKG', 'Learning through play, phonics, stories, rhymes and motor skills.'],
  ['Primary', 'Classes I – V', 'A strong foundation in English, Mathematics, Hindi, EVS, computers, art and sports through activity-based learning.'],
  ['Middle School', 'Classes VI – VIII', 'Science, Mathematics, Social Science, a third language, coding, robotics and life skills.'],
  ['Secondary', 'Classes IX – X', 'Deep CBSE board preparation, Olympiads, NTSE and career guidance.'],
  ['Senior Secondary', 'Classes XI – XII', 'Science (PCM/PCB), Commerce and Humanities, with IIT-JEE, NEET, CUET and CA Foundation preparation integrated into school hours.'],
]

export const images: [string, string | StaticImageData][] = [
  ['Learning together', 'photo-1503676260728-1c00da094a0b'],
  ['Curious minds', curious],
  ['A welcoming campus', 'photo-1580582932707-520aed937b7b'],
  ['Creative discovery', Thoughtful],
  ['Student life', StuentLife],
  ['Bright beginnings', Building],
]

export const photo = (id: string | StaticImageData, width = 1200): string =>
  typeof id === 'string'
    ? `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`
    : id.src // local static import