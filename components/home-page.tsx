import Image from "next/image";
// import Image from "next/image";
import cms01 from "../app/images/CMS01.jpg";
import cms02 from "../app/images/CM202.jpg";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  FlaskConical,
  Heart,
  Music2,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import { highlights, images, photo } from "@/lib/school-data";
import { Eyebrow, SectionTitle } from "@/components/school-ui";

const homeStages = [
  [
    "Pre-Primary",
    "Nursery - UKG",
    "Learning through play, phonics, stories, rhymes and motor skills.",
  ],
  [
    "Primary",
    "I - V",
    "Strong foundation in English, Maths, Hindi, EVS + Computer, Art & Sports. Activity-based learning.",
  ],
  [
    "Middle",
    "VI - VIII",
    "Science, Maths, Social Science + 3rd Language, Coding, Robotics & Life Skills.",
  ],
  [
    "Secondary",
    "IX - X",
    "Deep CBSE board preparation with Olympiads, NTSE, and Career Guidance.",
  ],
  [
    "Senior Secondary",
    "XI - XII",
    "Science (PCM/PCB), Commerce & Humanities. IIT-JEE / NEET / CUET / CA Foundation coaching integrated in school hours.",
  ],
];

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <Image
          className="hero-image"
       src={cms01}
          alt=""
          fill
          preload
          sizes="100vw"
          quality={75}
          style={{ objectFit: "cover", objectPosition: "center 47%" }}
        />
        <div className="hero-shade" />
        <div className="hero-orb" />
        <div className="hero-content">
          <span className="hero-label">
            <Award size={15} /> CBSE AFFILIATED · EST. 1992
          </span>
          <h1>
            A Premier CBSE Institution
            <br />
            <em>Where Holistic Learning Meets Modern Innovation.</em>
          </h1>
          <p>
            Fostering future scientists, creative leaders, and compassionate
            changemakers through rigorous academics, cutting-edge labs, and
            vibrant student life.
          </p>
          <div className="hero-actions">
            <Link href="/admissions/process" className="button-gold">
              Admissions Open 2027-28 - Apply Now <ArrowRight size={16} />
            </Link>
            <Link href="/admissions/process" className="button-glass">
              Download Prospectus <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <div className="hero-image-caption">
          <span>LEARNING WITH PURPOSE</span>
          <strong>A place to belong, explore and become.</strong>
        </div>
        <div className="hero-stats">
          <div>
            <strong>1:40</strong>
            <small>TEACHER-STUDENT RATIO</small>
          </div>
          <div>
            <strong>
              32<span>+</span>
            </strong>
            <small>YEARS IN EDUCATION SECTOR</small>
          </div>
          <div>
            <strong>
              10<span>+</span>
            </strong>
            <small>SPORTS & ACTIVITIES</small>
          </div>
        </div>
      </section>
      <section className="welcome section-pad">
        <div className="welcome-photo">
           <Image
    src={cms01}
    alt="Students gathered in a bright school courtyard"
    fill
    sizes="(max-width: 800px) 100vw, 50vw"
    style={{ objectFit: "cover" }}
    priority
  />
          <div className="photo-seal">
            <span>32</span>
            <small>
              YEARS OF
              <br />
              EXCELLENCE
            </small>
          </div>
        </div>
        <div className="welcome-copy">
          <Eyebrow>ABOUT US</Eyebrow>
          <h2>
            At CMS we believe education is not just about marks - it is about
            character, curiosity and confidence.
          </h2>
          <p>
            Affiliated to the Central Board of Secondary Education (CBSE), New
            Delhi, our school follows NEP 2020 with a perfect balance of Indian
            values and global learning. From Foundation to Senior Secondary,
            every child gets personal attention, modern labs, and a happy, safe
            campus to grow in.
          </p>
          <p>
            <strong>Our Promise:</strong> Every child will be known, nurtured
            and prepared for IIT, NEET, UPSC and life beyond.
          </p>
          <Link className="text-link" href="/our-school/about">
            Discover our story <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="pillars section-pad">
        <SectionTitle label="WHY PARENTS CHOOSE US" title="4 Pillars" />
        <div className="pillar-grid">
          {highlights.map((highlight, index) => (
            <article className="pillar-card" key={highlight.title}>
              <span className="pillar-number">{highlight.icon}</span>
              <div className="pillar-icon">
                {
                  [
                    <BookOpen key="a" />,
                    <FlaskConical key="b" />,
                    <Music2 key="c" />,
                    <Heart key="d" />,
                  ][index]
                }
              </div>
              <h3>{highlight.title}</h3>
              <p>{highlight.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="academics-home section-pad">
        <div className="academic-intro">
          <Eyebrow>ACADEMICS</Eyebrow>
          <h2>Academics</h2>
          <Link className="text-link" href="/academics">
            Explore academics <ArrowRight size={16} />
          </Link>
        </div>
        <div className="stage-list">
          {homeStages.map(([title, grade, copy], index) => (
            <div className="stage-row" key={title}>
              <span className="stage-index">0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <small>{grade}</small>
              </div>
              <p>{copy}</p>
              <ArrowUpRight className="stage-arrow" size={17} />
            </div>
          ))}
        </div>
      </section>
      <section className="facilities-home section-pad">
        <div className="facility-photo">
          <Image
            src={photo("photo-1580582932707-520aed937b7b", 1100)}
            alt="CMS School's sunlit campus and learning spaces"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
        <div className="facility-copy">
          <Eyebrow>FACILITIES</Eyebrow>
          <h2>Facilities</h2>
          <div className="facility-list">
            <span>
              <Check /> Smart Classrooms with Digital Boards
            </span>
            <span>
              <Check /> Science &amp; Computer Labs
            </span>
            <span>
              <Check /> Library with 10,000+ Books
            </span>
            <span>
              <Check /> Sports Ground &amp; Indoor Arena
            </span>
            <span>
              <Check /> Turf playground for football, cricket, volleyball,
              basketball courts etc
            </span>
            <span>
              <Check /> Separate dedicated kids play area with all modern play
              equipments
            </span>
            <span>
              <Check /> GPS-Enabled Safe Transport
            </span>
            <span>
              <ShieldCheck /> CCTV + Trained Security
            </span>
            <span>
              <ShieldCheck /> CCTV in all Classrooms
            </span>
          </div>
          <Link className="text-link" href="/campus/facilities">
            Explore our campus <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="messages section-pad">
        <SectionTitle
          label="A MESSAGE FROM OUR LEADERS"
          title="A shared belief in every child’s potential"
        />
        <div className="message-grid">
          {[
            {
              slug: "principals-message",
              title: "Principal",
              copy: "Our aim is simple - When your child leaves CMS School, they should leave with knowledge in mind, kindness in heart and courage to lead the world.",
              href: "/our-school/principal-message",
            },
            {
              slug: "chairmans-message",
              title: "Chairman",
              copy: "Education opens possibilities that reach far beyond the classroom. Together, we can help every student find the confidence to shape what comes next.",
              href: "/our-school/chairman-message",
            },
          ].map((message) => (
            <article className="message-card" key={message.slug}>
              <span className="quote-mark">“</span>
              <p>{message.copy}</p>
              <div className="message-author">
                <div className="author-avatar">{message.title[0]}</div>
                <div>
                  <strong>{message.title}</strong>
                  <small>CMS SCHOOL</small>
                </div>
                <Link
                  href={message.href}
                  aria-label={`Read ${message.title.toLowerCase()}’s message`}
                >
                  <ArrowUpRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="news-home section-pad">
        <div className="news-heading">
          <div>
            <Eyebrow>FROM OUR COMMUNITY</Eyebrow>
            <h2>News, moments & milestones.</h2>
          </div>
          <Link className="text-link" href="/information/news">
            All updates <ArrowRight size={16} />
          </Link>
        </div>
        <div className="news-grid">
          <article className="news-feature">
            <div className="news-image">
             <Image
    src={cms02}
    alt="Students gathered in a bright school courtyard"
    fill
    sizes="(max-width: 800px) 100vw, 50vw"
    style={{ objectFit: "cover" }}
    priority
  />
            </div>
            <span className="news-tag">ADMISSIONS · 2027–28</span>
            <h3>Applications are open for the new academic session.</h3>
            <Link href="/admissions/process">
              Plan your next step <ArrowRight size={15} />
            </Link>
          </article>
          <div className="upcoming">
            <span className="card-eyebrow">SAVE THE DATE</span>
            <h3>Coming up at CMS</h3>
            {[
              ["12", "AUG", "Annual Science Showcase"],
              ["24", "AUG", "Inter-house Sports Meet"],
              ["06", "SEP", "Grandparents’ Day"],
            ].map(([day, month, name]) => (
              <div className="event-row" key={name}>
                <span className="event-date">
                  <b>{day}</b>
                  <small>{month}</small>
                </span>
                <div>
                  <strong>{name}</strong>
                  <small>CMS School campus</small>
                </div>
                <ArrowUpRight size={15} />
              </div>
            ))}
            <Link className="text-link" href="/campus/events">
              Explore school life <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <section className="gallery-home section-pad">
        <div className="gallery-heading">
          <div>
            <Eyebrow>THE CMS EXPERIENCE</Eyebrow>
            <h2>Small moments. Big discoveries.</h2>
          </div>
          <Link className="text-link" href="/campus/gallery">
            Visit the gallery <ArrowRight size={16} />
          </Link>
        </div>
        <div className="gallery-strip">
          {images.slice(0, 4).map(([label, id], index) => (
            <Link
              href="/campus/gallery"
              className={`gallery-tile tile-${index + 1}`}
              key={id}
            >
              <Image
                src={photo(id, 700)}
                alt={label}
                fill
                sizes="(max-width: 700px) 50vw, 25vw"
              />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="achievement-band">
        <div>
          <Trophy />
          <span>
            <small>CELEBRATING EVERY STEP</small>
            <strong>Effort, growth and achievement—every day.</strong>
          </span>
        </div>
        <Link href="/campus/achievements">
          Meet our achievers <ArrowRight size={16} />
        </Link>
      </section>
      <section className="cbse-strip">
        <span>
          <ShieldCheck size={25} />
        </span>
        <div>
          <small>OUR AFFILIATION</small>
          <strong>Central Board of Secondary Education</strong>
          <p>
            Affiliation No. 1930248 <i /> School Code 45129
          </p>
        </div>
        <Link href="/information/cbse-public-disclosure">
          Public disclosure <ArrowUpRight size={16} />
        </Link>
      </section>
      <section className="home-cta">
        <div className="cta-orb" />
        <Eyebrow>YOUR NEXT CHAPTER STARTS HERE</Eyebrow>
        <h2>
          Admissions Open
          <br />
          <em>for Nursery to Grade II - Session 2027-28</em>
        </h2>
        <p>Limited seats. Book a campus visit today and see the difference.</p>
        <div>
          <Link className="button-gold" href="/admissions/process">
            Book Campus Tour <ArrowRight size={16} />
          </Link>
          <a className="button-outline" href="tel:+911128945600">
            Call Now
          </a>
          <a
            className="button-outline"
            href="https://wa.me/911128945600"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </main>
  );
}
