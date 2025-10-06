import React from "react";
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Github, Linkedin, Globe, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function PersonalPage() {
    const profile = {
        fullName: "Терешкович Юрій",
        title: "Учень/ Інтузіаст",
        phone: "+380 00 000 00 00",
        email: "tereshkovych_yurii@gymnasia21.lutsk.ua",
        city: "Луцьк, Україна",
        photoUrl: "src/imgs/IMG_8190 2.HEIC",
        summary:
            "Шикарний учень інтузіаст, вчуся в ШАГу. Свого не цураюсь і ідей в Вовчика набираюсь.",
        skills: [
            "React",
            "JavaScript (ES202x)",
            "HTML5",
            "CSS3 / TailwindCSS",
            "Git / GitHub",
            "REST API",
            "Vite / CRA",
            "Figma"
        ],
        links: {
            github: "https://github.com/utereskovigmail",
            linkedin: "https://www.linkedin.com/",
            site: "https://example.com"
        },
        experience: [
            {
                company: "Microsoft",
                role: "Головний розробник",
                period: "2027 — 2030",
                details: [
                    "Створення шикарних додатків",
                    "Заробіток значних сум",
                    "Розробка сайтів (React, Vite)"
                ]
            },
            {
                company: "Freelance",
                role: "Front‑end розробник (part‑time)",
                period: "2030 — 2034",
                details: [
                    "Лендінги та невеликі SPA на React",
                    "Налаштування збірки, деплой на Vercel/Netlify",
                    "Оптимізація продуктивності та доступності"
                ]
            }
        ],
        education: [
            {
                org: "ШАГ",
                program: "Інформатика / Компʼютерні науки",
                period: "2020-тепер"
            }
        ]
    };

    const Section = ({ title, children }) => (
        <section className="mb-6">
            <h2 className="text-xl font-semibold tracking-tight mb-3">{title}</h2>
            {children}
        </section>
    );

    const Pill = ({ children }) => (
        <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm leading-5 bg-white/60 backdrop-blur-sm">
      {children}
    </span>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50 text-slate-800">
            <div className="mx-auto max-w-5xl px-4 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-2xl shadow-sm ring-1 ring-slate-200 bg-white/80 backdrop-blur p-6 md:p-8"
                >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <img
                            src="/imgs/IMG_8190%202.HEIC"
                            alt={`Фото: ${profile.fullName}`}
                            className="h-28 w-28 md:h-36 md:w-36 rounded-2xl object-cover ring-1 ring-slate-200 shadow"
                        />

                        <div className="flex-1">
                            <h1 className="text-2xl md:text-3xl font-bold leading-tight">{profile.fullName}</h1>
                            <p className="text-slate-600 mt-1">{profile.title}</p>

                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                                <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:underline">
                                    <Phone size={16} /> {profile.phone}
                                </a>
                                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:underline">
                                    <Mail size={16} /> {profile.email}
                                </a>
                                <span className="inline-flex items-center gap-2 mx-8">
                  <MapPin size={16} /> {profile.city}
                </span>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-3 text-sm">
                                {profile.links.github && (
                                    <a
                                        href={profile.links.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border px-3 py-1 hover:bg-slate-50"
                                    >
                                        <Github size={16} /> GitHub
                                    </a>
                                )}
                                {profile.links.linkedin && (
                                    <a
                                        href={profile.links.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border px-3 py-1 hover:bg-slate-50"
                                    >
                                        <Linkedin size={16} /> LinkedIn
                                    </a>
                                )}
                                {profile.links.site && (
                                    <a
                                        href={profile.links.site}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border px-3 py-1 hover:bg-slate-50"
                                    >
                                        <Globe size={16} /> Портфоліо
                                    </a>
                                )}
                                <button
                                    onClick={() => window.print()}
                                    className="inline-flex items-center gap-2 rounded-lg border px-3 py-1 hover:bg-slate-50"
                                >
                                    <Download size={16} /> Зберегти як PDF
                                </button>
                            </div>
                        </div>
                    </div>


                    <p className="mt-6 text-slate-700 leading-relaxed">{profile.summary}</p>
                </motion.div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.05 }}
                        className="rounded-2xl shadow-sm ring-1 ring-slate-200 bg-white/80 backdrop-blur p-6"
                    >
                        <Section title="Навички">
                            <div className="flex flex-wrap gap-2">
                                {profile.skills.map((s) => (
                                    <Pill key={s}>{s}</Pill>
                                ))}
                            </div>
                        </Section>

                        <Section title="Освіта">
                            <ul className="space-y-3">
                                {profile.education.map((e) => (
                                    <li key={e.org} className="flex gap-3">
                                        <GraduationCap className="mt-0.5" size={18} />
                                        <div>
                                            <p className="font-medium">{e.org}</p>
                                            <p className="text-sm text-slate-600">{e.program}</p>
                                            <p className="text-xs text-slate-500">{e.period}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Section>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.1 }}
                        className="rounded-2xl shadow-sm ring-1 ring-slate-200 bg-white/80 backdrop-blur p-6 lg:col-span-2"
                    >
                        <Section title="Майбутній досвід роботи">
                            <ul className="space-y-6">
                                {profile.experience.map((job) => (
                                    <li key={job.company} className="">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex items-center gap-2">
                                                <Briefcase size={18} />
                                                <h3 className="font-semibold">{job.role}</h3>
                                                <span className="text-slate-500">@ {job.company}</span>
                                            </div>
                                            <span className="text-sm text-slate-500 whitespace-nowrap">{job.period}</span>
                                        </div>
                                        <ul className="mt-2 list-disc pl-6 text-slate-700 space-y-1">
                                            {job.details.map((d, i) => (
                                                <li key={i}>{d}</li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </Section>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
