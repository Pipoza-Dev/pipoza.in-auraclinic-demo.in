/**
 * AuraCare Health & Wellness Clinic - Mock Data Store
 * Prepared for Pipiza Dev Studio Demonstration
 */

const CLINIC_DATA = {
  clinicName: "AuraCare Health Clinic",
  studioName: "Pipiza Dev Studio",
  studioUrl: "https://pipoza.s.gy/pipoza.in",
  emergencyPhone: "+1 (800) 555-AURA",
  address: "742 Evergreen Medical Parkway, Suite 400, Metro City",
  
  doctors: [
    {
      id: "doc-1",
      name: "Dr. Elena Rostova",
      specialty: "Cardiology",
      degrees: "MD, FACC, Harvard Medical School",
      experience: "14+ Years",
      rating: 4.95,
      reviewCount: 312,
      fee: "$85 (Demo)",
      available: "Mon - Thu, 09:00 AM - 04:00 PM",
      status: "Available Today",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
      bio: "Specializing in preventive cardiology, echocardiography, and non-invasive cardiovascular interventions. Dedicated to heart wellness and comprehensive risk assessment.",
      languages: ["English", "Spanish", "Russian"]
    },
    {
      id: "doc-2",
      name: "Dr. Marcus Chen",
      specialty: "Neurology",
      degrees: "MD, PhD, Johns Hopkins University",
      experience: "16+ Years",
      rating: 4.98,
      reviewCount: 428,
      fee: "$95 (Demo)",
      available: "Tue - Sat, 10:00 AM - 05:00 PM",
      status: "In Clinic",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
      bio: "Renowned specialist in neuromuscular disorders, migraine therapies, and cognitive health. Employs cutting-edge neuro-imaging diagnostics.",
      languages: ["English", "Mandarin"]
    },
    {
      id: "doc-3",
      name: "Dr. Sarah Al-Mansoor",
      specialty: "Pediatrics",
      degrees: "MD, FAAP, Stanford Health",
      experience: "11+ Years",
      rating: 4.92,
      reviewCount: 290,
      fee: "$70 (Demo)",
      available: "Mon - Fri, 08:30 AM - 03:30 PM",
      status: "Available Today",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=600",
      bio: "Compassionate pediatrician committed to newborn care, adolescent health, developmental milestones, and preventive childhood immunizations.",
      languages: ["English", "Arabic", "French"]
    },
    {
      id: "doc-4",
      name: "Dr. Julian Vance",
      specialty: "Orthopedics & Sports",
      degrees: "MD, FRCS, Mayo Clinic Fellow",
      experience: "18+ Years",
      rating: 4.97,
      reviewCount: 510,
      fee: "$90 (Demo)",
      available: "Mon - Thu, 09:00 AM - 04:30 PM",
      status: "In Surgery Today",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600",
      bio: "Leader in joint reconstruction, arthroscopy, and modern sports medicine rehabilitation. Focused on rapid mobility recovery and minimally invasive care.",
      languages: ["English", "German"]
    },
    {
      id: "doc-5",
      name: "Dr. Amara Okafor",
      specialty: "Dermatology",
      degrees: "MD, FAAD, Oxford University",
      experience: "12+ Years",
      rating: 4.89,
      reviewCount: 384,
      fee: "$75 (Demo)",
      available: "Wed - Sun, 10:00 AM - 06:00 PM",
      status: "Available Today",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
      bio: "Expert in clinical and aesthetic dermatology, acne protocols, phototherapy, skin cancer screenings, and advanced laser treatments.",
      languages: ["English", "Igbo"]
    },
    {
      id: "doc-6",
      name: "Dr. Liam Gallagher",
      specialty: "Dentistry & Oral Surgery",
      degrees: "DDS, Board Certified Oral Surgeon",
      experience: "13+ Years",
      rating: 4.91,
      reviewCount: 265,
      fee: "$65 (Demo)",
      available: "Mon - Fri, 09:00 AM - 05:00 PM",
      status: "Available Today",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600",
      bio: "Painless aesthetic dentistry, dental implantology, root canal therapies, and complete smile makeovers in a relaxing, anxiety-free setting.",
      languages: ["English"]
    },
    {
      id: "doc-7",
      name: "Dr. Priya Sengupta",
      specialty: "General Medicine",
      degrees: "MBBS, MD, Internal Medicine",
      experience: "15+ Years",
      rating: 4.96,
      reviewCount: 620,
      fee: "$60 (Demo)",
      available: "Mon - Sat, 08:00 AM - 02:00 PM",
      status: "Available Today",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=600",
      bio: "Holistic primary health management, chronic illness prevention (diabetes, hypertension), lifestyle optimization, and executive medical checkups.",
      languages: ["English", "Hindi", "Bengali"]
    },
    {
      id: "doc-8",
      name: "Dr. Carlos Delgado",
      specialty: "Ophthalmology",
      degrees: "MD, Board Certified Eye Surgeon",
      experience: "10+ Years",
      rating: 4.88,
      reviewCount: 215,
      fee: "$80 (Demo)",
      available: "Tue - Sat, 09:30 AM - 04:30 PM",
      status: "Available Today",
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&q=80&w=600",
      bio: "Comprehensive refractive surgery, dry eye therapies, diabetic retinopathy screenings, and customized cataract management.",
      languages: ["English", "Spanish"]
    }
  ],

  reviews: [
    {
      id: "rev-1",
      name: "Claire Vance",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      date: "September 14, 2026",
      specialty: "Cardiology Care",
      doctor: "Dr. Elena Rostova",
      text: "The clinic atmosphere is remarkably tranquil and bright. Dr. Rostova took the time to explain my cardiac scan results with crystal clarity and genuine empathy. I felt truly heard.",
      verified: true
    },
    {
      id: "rev-2",
      name: "David K. Miller",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      date: "September 08, 2026",
      specialty: "Orthopedics",
      doctor: "Dr. Julian Vance",
      text: "After torn meniscus surgery, Dr. Julian's rehabilitation guidance brought me back to jogging in under 8 weeks. Unmatched expertise and caring support staff!",
      verified: true
    },
    {
      id: "rev-3",
      name: "Sophia Martinez",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      date: "August 29, 2026",
      specialty: "Pediatric Wellness",
      doctor: "Dr. Sarah Al-Mansoor",
      text: "My 4-year-old son used to be terrified of doctors. Dr. Sarah made his checkup feel like an adventure game! Clean, modern rooms and zero wait time.",
      verified: true
    },
    {
      id: "rev-4",
      name: "Arthur Pendelton",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      date: "August 21, 2026",
      specialty: "Neurology Exam",
      doctor: "Dr. Marcus Chen",
      text: "Suffered from debilitating migraine episodes for years. The personalized therapy plan mapped out by Dr. Chen cut my episodes down by 80% in the first month.",
      verified: true
    },
    {
      id: "rev-5",
      name: "Hannah Lindqvist",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      date: "August 15, 2026",
      specialty: "Dermatology Protocol",
      doctor: "Dr. Amara Okafor",
      text: "Dr. Okafor's diagnostic approach is top tier. She prescribed an effective, gentle routine for my skin condition that yielded results within two weeks.",
      verified: true
    },
    {
      id: "rev-6",
      name: "Tariq Jameel",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200",
      rating: 4,
      date: "August 02, 2026",
      specialty: "Dental Surgery",
      doctor: "Dr. Liam Gallagher",
      text: "Gentle and completely painless wisdom tooth extraction. The clinic's interior design and light color palette make you feel like you're at a spa rather than a dental ward.",
      verified: true
    },
    {
      id: "rev-7",
      name: "Grace Montgomery",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      date: "July 27, 2026",
      specialty: "Executive Health Checkup",
      doctor: "Dr. Priya Sengupta",
      text: "Dr. Sengupta is exceptionally thorough. She caught a borderline vitamin deficiency early and adjusted my lifestyle regimen. AuraCare has set a new benchmark for private healthcare.",
      verified: true
    },
    {
      id: "rev-8",
      name: "Leon Schmidt",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      rating: 5,
      date: "July 19, 2026",
      specialty: "Ophthalmology Assessment",
      doctor: "Dr. Carlos Delgado",
      text: "Quick, painless eye pressure and vision diagnostics. Modern equipment and spotless rooms. Highly recommended!",
      verified: true
    }
  ],

  services: [
    {
      id: "srv-cardio",
      title: "Cardiovascular Medicine",
      category: "Cardiology",
      icon: "fa-heart-pulse",
      shortDesc: "Complete cardiovascular evaluations, ECG, color Doppler echocardiogram, and preventive hypertension programs.",
      price: "From $85",
      features: ["Advanced 12-Lead ECG", "Stress Echocardiography", "24hr Holter Monitoring", "Preventive Heart Diet Plan"]
    },
    {
      id: "srv-neuro",
      title: "Neurology & Brain Health",
      category: "Neurology",
      icon: "fa-brain",
      shortDesc: "Diagnostic EEG screenings, migraine specialized clinics, peripheral neuropathy treatments, and cognitive assessments.",
      price: "From $95",
      features: ["Digital Video EEG", "Nerve Conduction Studies", "Migraine Trigger Protocol", "Memory & Cognitive Checks"]
    },
    {
      id: "srv-pediatric",
      title: "Pediatric & Child Health",
      category: "Pediatrics",
      icon: "fa-baby",
      shortDesc: "Gentle developmental tracking, pediatric emergency triage, childhood vaccinations, and nutrition guidance.",
      price: "From $70",
      features: ["Child Milestone Reviews", "Painless Immunizations", "Allergy Screening", "Growth Assessment"]
    },
    {
      id: "srv-ortho",
      title: "Orthopedic & Sports Medicine",
      category: "Orthopedics",
      icon: "fa-bone",
      shortDesc: "Advanced bone density scans, sports injury rehabilitation, joint therapy, and post-surgical recovery care.",
      price: "From $90",
      features: ["Digital Bone Imaging", "Arthritis Management", "Custom Sports Bracing", "Physiotherapy Alignment"]
    },
    {
      id: "srv-derma",
      title: "Dermatology & Skin Center",
      category: "Dermatology",
      icon: "fa-hand-dots",
      shortDesc: "Medical and cosmetic skin treatments, full-body mole screenings, acne scar therapy, and medical facials.",
      price: "From $75",
      features: ["Digital Dermoscopy", "Cryotherapy", "Customized Skin Care", "Photodynamic Therapy"]
    },
    {
      id: "srv-dental",
      title: "Aesthetic & Surgical Dentistry",
      category: "Dentistry",
      icon: "fa-tooth",
      shortDesc: "Laser teeth whitening, precision digital dental crowns, root canals, and invisible aligners consultation.",
      price: "From $65",
      features: ["Digital 3D Dental Scans", "Painless Ultrasonic Cleaning", "Laser Whitening", "Crowns & Veneers"]
    }
  ],

  faqs: [
    {
      question: "Is AuraCare an operating medical clinic or a demo?",
      answer: "AuraCare is an interactive demo website created by **Pipiza Dev Studio** to showcase modern, light-themed web design, responsiveness, and web applications. No real bookings or medical consultations are conducted."
    },
    {
      question: "How do I test the appointment booking feature?",
      answer: "Navigate to the 'Book Appointment' page, select any doctor, date, and time slot, enter sample information, and hit Submit. You will be redirected to the animated Success confirmation page with a demo reference number!"
    },
    {
      question: "Can I customize the color palette of this website?",
      answer: "Yes! Click the theme switcher icon in the top navigation bar or the floating theme widget to choose between 5 light themes: Aqua Breeze, Emerald Healing, Rose Blush, Lavender Serenity, and Warm Amber."
    },
    {
      question: "Is this website mobile friendly?",
      answer: "Absolutely. AuraCare is built mobile-first with zero horizontal overflow, fluid touch controls, a smooth slide-out drawer, and responsive elements optimized for screens of all sizes."
    },
    {
      question: "Who developed this website template?",
      answer: "This website was developed by **Pipiza Dev Studio**, specialists in crafting ultra-responsive, animated, high-performance web applications and custom business portals."
    }
  ]
};

// Global helper for random demo code generation
function generateDemoCode(prefix = "AUR") {
  const randNum = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${randNum}-DEMO`;
}
