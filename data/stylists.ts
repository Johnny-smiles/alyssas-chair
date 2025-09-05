// /data/stylists.ts
export type Stylist = {
    slug: string
    name: string
    title?: string
    photo: string // public path, e.g. "/img/stylists/jess.jpg"
    shortBio: string
    about: string
    services: Array<{ name: string; duration?: string; price?: string; note?: string }>
    phone?: string
    email?: string
    instagram?: string
    bookingUrl: string // Vagaro link
}

export const stylists: Stylist[] = [
  {
    slug: "alyssa",
    name: "Alyssa",
    title: "Bridal & Formal Styling",
    photo: "/alyssa.jpg", // uses the same image from your old about page
    shortBio: "Bridal hair and elegant, timeless updos.",
    about:
      "Alyssa is a seasoned stylist specializing in wedding-day updos and polished bridal looks. From the first consult to the final veil placement, her calm approach and attention to detail help brides feel like the best version of themselves.",
    services: [
      { name: "Bridal Trial", duration: "60–90 min", price: "$95+" },
      { name: "Wedding Day Updo", duration: "75–120 min", price: "$145+" },
      { name: "Bridesmaid / Event Styling", duration: "60–75 min", price: "$85+" },
      { name: "Blowout & Style", duration: "45–60 min", price: "$55+" }
    ],
    phone: "612-555-1234",
    email: "hello@alyssaschair.com",
    instagram: "https://www.instagram.com/alyssaschair/?hl=en",
    // If you have a dedicated Vagaro link for Alyssa, drop it in here.
    // For now, this will still give a working CTA (tap-to-call).
    bookingUrl: "https://www.vagaro.com/abeille"
  },
  {
    slug: "jess",
    name: "Jess",
    title: "Lead Stylist",
    photo: "/img/stylists/jess.jpg",
    shortBio: "Lived-in color, blonding, and low-maintenance cuts.",
    about:
        "Jess specializes in bright, natural color and effortless cuts. Expect a relaxed experience and results that grow out beautifully.",
    services: [
        { name: "Women’s Cut", duration: "60–75 min", price: "$65+" },
        { name: "Partial Highlight", duration: "120 min", price: "$160+" },
        { name: "Full Blonding", duration: "150–180 min", price: "$225+" },
        { name: "Gloss & Tone", duration: "45 min", price: "$45+" }
    ],
    phone: "763-248-9801",
    email: "beautifuldaybyjess@example.com",
    instagram: "https://instagram.com/beautifuldaybyjess",
    bookingUrl: "https://www.vagaro.com/beautifuldaybyjess/book-now"
  },
  {
    slug: "magnolia",
    name: "Magnolia Studios",
    title: "Stylist",
    photo: "/img/stylists/magnolia.jpg",
    shortBio: "Soft shapes, custom color, and healthy hair care.",
    about:
        "Magnolia Studios focuses on shape, movement, and hair health—each service is tailored to your lifestyle.",
    services: [
        { name: "Cut & Style", duration: "60 min", price: "$55+" },
        { name: "Balayage", duration: "150–180 min", price: "$210+" },
        { name: "Root Retouch", duration: "90 min", price: "$95+" },
        { name: "Deep Treatment", duration: "30 min", price: "$30+" }
    ],
    phone: "763-248-9801",
    email: "hello@magnoliastudios.example",
    instagram: "https://instagram.com/magnoliastudios",
    bookingUrl: "https://www.vagaro.com/magnoliastudios/book-now"
  },
  {
    slug: "lilac",
    name: "McKenzie at Lilac Beauty",
    title: "Esthetician",
    photo: "/img/stylists/lilac.jpg", // add actual image
    shortBio: "Facials, waxing, brows, and skin consultations.",
    about:
        "McKenzie is a licensed esthetician at Lilac Beauty in St. Paul specializing in skincare, facials, body waxing, and brow services.",
    services: [
        { name: "Custom Facial", duration: "60 min", price: "$80+" },
        { name: "Brow Wax & Shape", duration: "30 min", price: "$25+" },
        { name: "Body Waxing (per area)", duration: "45 min", price: "$50+" },
        { name: "Skin Consultation", duration: "45 min", price: "$40+" }
    ],
    phone: "651-xxx-xxxx",
    email: "mckenzie@lilacbeautymn.com",
    instagram: "https://www.instagram.com/lilac_beauty_mn",
    bookingUrl: "https://lilacbeautymn.com/book-now"
  }
]
