import {
  Accessibility,
  Armchair,
  Atom,
  Baby,
  BookOpen,
  Briefcase,
  Building2,
  Calculator,
  ClipboardList,
  Coffee,
  DoorOpen,
  Dna,
  Dumbbell,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  MessageCircle,
  Mic,
  Monitor,
  Music,
  Package,
  Palette,
  Presentation,
  School,
  Server,
  Trophy,
  User,
  Users,
  Utensils,
  type LucideIcon,
} from 'lucide-react'
import { Eyebrow } from '@/components/school-ui'
import styles from './facilities-directory.module.css'

const roomTypes = {
  reception: { label: 'Reception', icon: DoorOpen },
  adminOffice: { label: 'Admin Office', icon: Briefcase },
  pantry: { label: 'Pantry', icon: Coffee },
  principalCabin: { label: 'Principal cabin', icon: User },
  vicePrincipalCabin: { label: 'Vice Principal cabin', icon: User },
  medicalRoom: { label: 'Medical Room/ Sick Room', icon: HeartPulse },
  officeStaffRoom: { label: 'Office Staff room', icon: Users },
  conferenceRoom: { label: 'Conference Room', icon: Presentation },
  managementControlRoom: { label: 'Management Room + Control room', icon: Building2 },
  peStoreRoom: { label: 'Physical Education Store Room', icon: Dumbbell },
  storeRoom: { label: 'Store Room', icon: Package },
  activityRoom: { label: 'Activity room/ Art & Craft Room', icon: Palette },
  serverRoom: { label: 'Server Room', icon: Server },
  staffRoom: { label: 'Staff Room', icon: Armchair },
  avRoom: { label: 'AV room', icon: Monitor },
  teachersRoom: { label: 'Teachers Room', icon: GraduationCap },
  library: { label: 'Library/ Reading Room', icon: BookOpen },
  physicsLab: { label: 'Physics Lab', icon: Atom },
  chemistryLab: { label: 'Chemistry Lab', icon: FlaskConical },
  biologyLab: { label: 'Biology Lab', icon: Dna },
  mathLab: { label: 'Math Lab', icon: Calculator },
  musicDanceRoom: { label: 'Music & Dance Room', icon: Music },
  computerLab: { label: 'Computer Lab', icon: Monitor },
  canteen: { label: 'Refuge area / Canteen', icon: Utensils },
  examRoom: { label: 'Exam Room', icon: ClipboardList },
  counselorRoom: { label: 'Counselor Room', icon: MessageCircle },
  specialEducatorRoom: { label: 'Special Educator Room', icon: Accessibility },
  seminarHall: { label: 'Seminar Hall', icon: Mic },
} satisfies Record<string, { label: string; icon: LucideIcon }>

type RoomType = keyof typeof roomTypes

type FloorPlan = {
  floor: string
  classrooms: number
  rooms: RoomType[]
}

const floorPlan: FloorPlan[] = [
  {
    floor: 'Ground Floor (GF)',
    classrooms: 4,
    rooms: ['reception', 'adminOffice', 'pantry', 'principalCabin', 'vicePrincipalCabin', 'medicalRoom', 'officeStaffRoom', 'conferenceRoom', 'managementControlRoom', 'peStoreRoom'],
  },
  { floor: '1st Floor', classrooms: 8, rooms: ['storeRoom', 'activityRoom', 'serverRoom'] },
  { floor: '2nd Floor', classrooms: 8, rooms: ['storeRoom', 'staffRoom', 'avRoom'] },
  { floor: '3rd Floor', classrooms: 4, rooms: ['storeRoom', 'staffRoom', 'teachersRoom', 'library'] },
  { floor: '4th Floor', classrooms: 4, rooms: ['medicalRoom', 'storeRoom', 'staffRoom', 'physicsLab', 'chemistryLab', 'biologyLab', 'mathLab', 'musicDanceRoom'] },
  { floor: '5th Floor', classrooms: 8, rooms: ['serverRoom', 'staffRoom', 'computerLab'] },
  { floor: '6th Floor', classrooms: 8, rooms: ['storeRoom', 'staffRoom', 'canteen'] },
  { floor: '7th Floor', classrooms: 8, rooms: ['pantry', 'examRoom', 'counselorRoom', 'specialEducatorRoom'] },
  { floor: '8th Floor', classrooms: 8, rooms: ['storeRoom', 'staffRoom', 'seminarHall'] },
]

const classroomTotal = floorPlan.reduce((sum, floor) => sum + floor.classrooms, 0)
const spaceTotal = floorPlan.reduce((sum, floor) => sum + floor.classrooms + floor.rooms.length, 0)

export function FacilitiesDirectory() {
  return (
    <section className={styles.directory} aria-labelledby="floorwise-heading">
      <div className={styles.heading}>
        <div>
          <Eyebrow>THE NEW SCHOOL</Eyebrow>
          <h3 id="floorwise-heading">Floorwise rooms &amp; facilities</h3>
        </div>
        <p>Room distribution from the supplied floorwise plan.</p>
      </div>

      <div className={styles.stats} aria-label="Campus overview">
        <div className={styles.statCard}>
          <span className={styles.statIcon}><Building2 aria-hidden="true" /></span>
          <span className={styles.statCopy}><strong>9</strong><small>Floors</small></span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statIcon}><School aria-hidden="true" /></span>
          <span className={styles.statCopy}><strong>{classroomTotal}</strong><small>Classrooms</small></span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statIcon}><DoorOpen aria-hidden="true" /></span>
          <span className={styles.statCopy}><strong>{spaceTotal}</strong><small>Total spaces</small></span>
        </div>
      </div>

      <p className={styles.scrollHint}>Scroll the table sideways to view every column.</p>
      <div className={styles.tableScroller} role="region" aria-label="Floorwise room distribution" tabIndex={0}>
        <table className={styles.table}>
          <caption className={styles.visuallyHidden}>Classroom and amenity distribution from the ground floor through the eighth floor.</caption>
          <thead>
            <tr>
              <th scope="col" className={styles.floorColumn}>Floor</th>
              <th scope="col" className={styles.roomsColumn}>Rooms &amp; facilities</th>
              <th scope="col" className={styles.countColumn}>Classrooms</th>
              <th scope="col" className={styles.totalColumn}>Total spaces</th>
            </tr>
          </thead>
          <tbody>
            {floorPlan.map((floor) => (
              <tr key={floor.floor}>
                <th scope="row" className={styles.floorCell}>
                  <span className={styles.floorLabel}><Building2 aria-hidden="true" />{floor.floor}</span>
                </th>
                <td>
                  <div className={styles.roomList}>
                    {floor.rooms.map((roomType, index) => {
                      const room = roomTypes[roomType]
                      const Icon = room.icon
                      return (
                        <span className={styles.roomChip} key={`${roomType}-${index}`}>
                          <Icon aria-hidden="true" />
                          {room.label}
                        </span>
                      )
                    })}
                  </div>
                </td>
                <td className={styles.numberCell}>
                  <span className={styles.classroomCount}>{floor.classrooms}</span>
                </td>
                <td className={styles.numberCell}>
                  <span className={styles.totalCount}>{floor.classrooms + floor.rooms.length}</span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colSpan={2}>Total across all floors</th>
              <td className={styles.numberCell}>{classroomTotal}</td>
              <td className={styles.numberCell}>{spaceTotal}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <section className={styles.playAreas} aria-label="Sports and play areas">
        <article className={styles.playCard}>
          <span className={styles.playIcon}><Trophy aria-hidden="true" /></span>
          <div>
            <h4>Turf playground</h4>
            <p>Football, cricket, volleyball, basketball courts etc.</p>
          </div>
        </article>
        <article className={styles.playCard}>
          <span className={styles.playIcon}><Baby aria-hidden="true" /></span>
          <div>
            <h4>Dedicated kids play area</h4>
            <p>Separate dedicated kids play area with all modern play equipments.</p>
          </div>
        </article>
      </section>
    </section>
  )
}
