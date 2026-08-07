import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import ProgressArc from "@/components/ProgressArc";
import { createClient } from "@/lib/supabase/server";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Tech Enable Solution — Learn the skills that get you hired",
  description:
    "Free foundational courses and premium, mentor-built programs in web development, data, design, and IT. Track real progress, earn certificates, and learn on your schedule.",
};

type Stat = {
  value: string;
  label: string;
};

type Feature = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
};

/* Small inline icon set — keeps the homepage dependency-free (no icon
   library) while still giving the "Why choose us" cards a polished mark. */
function IconFree(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M5 8.5c0-1.93 2.5-3.5 7-3.5s7 1.57 7 3.5-2.5 3.5-7 3.5-7 1.57-7 3.5 2.5 3.5 7 3.5 7-1.57 7-3.5" />
    </svg>
  );
}
function IconMentor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a4 4 0 100-8 4 4 0 000 8zM4 21c1.2-3.2 4.2-5 8-5s6.8 1.8 8 5" />
    </svg>
  );
}
function IconDashboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" {...props}>
      <rect x="3.5" y="3.5" width="7" height="9" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="5" rx="1.5" />
      <rect x="13.5" y="11.5" width="7" height="9" rx="1.5" />
      <rect x="3.5" y="15.5" width="7" height="5" rx="1.5" />
    </svg>
  );
}
function IconCertificate(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" {...props}>
      <circle cx="12" cy="8.5" r="5.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 13 7 21l5-2.5L17 21l-1.5-8" />
    </svg>
  );
}
function IconStar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 6.24 6.85.72-5.14 4.72 1.42 6.79L12 17.77l-6.03 3.2 1.42-6.79L2.25 9.46l6.85-.72L12 2.5z" />
    </svg>
  );
}

export default async function HomePage() {
  const supabase = createClient();
  const { data: courses } = await supabase
    .from("courses")
    .select("*")
    .order("student_count", { ascending: false })
    .limit(6);

  const heroStats: Stat[] = [
    { value: "40+", label: "Courses" },
    { value: "68k+", label: "Students enabled" },
    { value: "4.8", label: "Average rating" },
  ];

  const statistics: Stat[] = [
    { value: "40+", label: "Courses" },
    { value: "68,000+", label: "Students" },
    { value: "4.8 / 5", label: "Average rating" },
    { value: "12,400+", label: "Certificates issued" },
  ];

  const features: Feature[] = [
    {
      title: "Free, forever courses",
      body: "Foundational tracks in web, data, and IT stay free indefinitely — enroll in one tap, no card required.",
      icon: <IconFree className="h-6 w-6" />,
    },
    {
      title: "Premium, mentor-built programs",
      body: "Go deeper with paid programs built by working engineers and designers, paid securely with Paystack.",
      icon: <IconMentor className="h-6 w-6" />,
    },
    {
      title: "One dashboard, real progress",
      body: "Every enrollment — free or paid — lands in My Courses with a live progress ring, not a forgotten tab.",
      icon: <IconDashboard className="h-6 w-6" />,
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Amara O.",
      role: "Frontend Developer, enrolled in Web Development",
      quote:
        "The free track alone got me interview-ready. When I upgraded to the premium program, the mentor feedback on my portfolio projects is what actually landed me the job.",
      initials: "AO",
    },
    {
      name: "Chidi E.",
      role: "Data Analyst, enrolled in Data",
      quote:
        "I loved that I could see my progress ring fill up after every lesson. It kept me consistent in a way bookmarking random YouTube tutorials never did.",
      initials: "CE",
    },
    {
      name: "Fatima B.",
      role: "IT Support Specialist, enrolled in IT & Security",
      quote:
        "Verifying my certificate for a job application took seconds. The whole platform feels built by people who actually thought about what happens after you finish a course.",
      initials: "FB",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,theme(colors.teal.light)_0%,transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div className="animate-fade-up">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Now enrolling for July
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Learn the skills that get you{" "}
              <span className="bg-gradient-to-r from-teal-dark to-teal bg-clip-text text-transparent">
                hired
              </span>
              .
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate">
              Tech Enable Solution pairs free foundational courses with
              premium, mentor-built programs in web development, data,
              design, and IT — so progress is never gated behind a paywall,
              only accelerated by one.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/signup" className="btn-primary">
                Start learning free
              </Link>
              <Link href="/courses?type=premium" className="btn-outline">
                Browse premium courses
              </Link>
<Link
  href="#contact"
  className="btn-outline"
>
  Contact Us
</Link>

            </div>

            <div className="mt-12 flex flex-wrap gap-10">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-ink">{s.value}</p>
                  <p className="text-xs text-slate-light">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center md:flex">
            <ProgressArc size={340} strokeWidth={10} progress={72} className="drop-shadow-lift">
              <div className="flex flex-col items-center gap-1 rounded-full bg-white p-10 text-center shadow-card">
                <span className="font-display text-4xl font-bold text-ink">72%</span>
                <span className="text-xs text-slate-light">Avg. course completion</span>
              </div>
            </ProgressArc>

            <div className="absolute -left-4 bottom-8 card-surface flex items-center gap-3 px-4 py-3">
              <ProgressArc size={36} progress={100}>
                <span className="text-[10px] font-bold text-teal-dark">✓</span>
              </ProgressArc>
              <div>
                <p className="text-xs font-semibold">Payment secured</p>
                <p className="text-[11px] text-slate-light">via Paystack</p>
              </div>
            </div>

            <div className="absolute -right-2 top-4 card-surface flex items-center gap-2 px-4 py-3">
              <IconCertificate className="h-5 w-5 text-[#D4AF37]" />
              <div>
                <p className="text-xs font-semibold">12,400+ issued</p>
                <p className="text-[11px] text-slate-light">Verified certificates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="border-b border-line bg-ink">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 sm:grid-cols-4">
          {statistics.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Tech Enable Solution */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Why choose us
        </span>
        <h2 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
          Built for how people actually learn
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-surface p-6 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-light text-teal-dark">
                {f.icon}
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular courses */}
      <section className="border-t border-line bg-white/60 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Featured courses
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
                Popular right now
              </h2>
            </div>
            <Link href="/courses" className="text-sm font-semibold text-teal-dark hover:underline">
              View all courses →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses?.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Certificate verification */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="card-surface flex flex-col items-center gap-6 overflow-hidden p-10 text-center sm:p-14">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10">
            <IconCertificate className="h-7 w-7 text-[#D4AF37]" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Already earned a certificate?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate">
              Every certificate issued by Tech Enable Solution carries a unique
              reference. Employers and institutions can confirm it&apos;s genuine
              in seconds.
            </p>
          </div>
          <Link
            href="/verify-certificate"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3 text-sm font-semibold text-ink shadow-card transition hover:-translate-y-0.5 hover:bg-[#BF9A2E]"
          >
            🔍 Verify Certificate
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-line bg-white/60 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Student stories
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
            Loved by learners across Nigeria
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card-surface flex h-full flex-col p-6">
                <div className="flex items-center gap-0.5 text-[#D4AF37]" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-light font-display text-sm font-bold text-teal-dark">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{t.name}</span>
                    <span className="block text-xs text-slate-light">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>


{/* Contact Form */}
<section id="contact" className="mx-auto max-w-7xl px-6 py-20">
  <div className="rounded-3xl bg-white p-10 shadow-xl border border-gray-200">

    <div className="text-center">
      <span className="inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-semibold text-teal-700">
        Contact Us
      </span>

      <h2 className="mt-4 text-4xl font-bold text-gray-900">
        We'd Love to Hear From You
      </h2>

      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        Have questions about our courses, certificates, payments,
        or anything else? Fill out the form below and our team
        will get back to you as soon as possible.
      </p>
    </div>

    <div className="mt-10">

<form className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-semibold text-gray-700">
      Full Name
    </label>
    <input
      type="text"
      placeholder="Enter your full name"
      className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-teal-600"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-semibold text-gray-700">
      Email Address
    </label>
    <input
      type="email"
      placeholder="example@email.com"
      className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-teal-600"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-semibold text-gray-700">
      Phone Number
    </label>
    <input
      type="tel"
      placeholder="+234..."
      className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-teal-600"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-semibold text-gray-700">
      Subject
    </label>
    <input
      type="text"
      placeholder="Subject"
      className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-teal-600"
    />
  </div>

  <div className="md:col-span-2">
    <label className="mb-2 block text-sm font-semibold text-gray-700">
      Message
    </label>

    <textarea
      rows={6}
      placeholder="Write your message here..."
      className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-teal-600"
    />
  </div>

  <div className="md:col-span-2 flex justify-center">
    <button
      type="submit"
      className="rounded-xl bg-teal-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-teal-700"
    >
      Send Message
    </button>
  </div>

</form>

    </div>

  </div>
</section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-xl2 bg-ink px-6 py-16 text-center sm:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-[#D4AF37]/20 blur-3xl"
          />
          <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
            Your progress ring is waiting to fill up.
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-white/70">
            Create a free account in under a minute and enroll in your first course today.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/signup" className="btn-primary">
              Create your free account
            </Link>
            <Link
              href="/courses"
              className="btn inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40"
            >
              Explore courses
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
