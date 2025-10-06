import {useMemo, useState} from "react";
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Github, Linkedin, Globe, Download, PawPrintIcon } from "lucide-react";
import { motion } from "framer-motion";

function Contacts() {

    const pet = {
        name: "Барбі",
        species: "Песик",
        breed: "Кавалер Кінг Чарльз Спаніель",
        age: "3 роки",
        city: "Луцьк, Україна",
        photoUrl: "/imgs/IMG_9071.heic",
        general: {
            about:
                "Лагідний і грайливий песик. Любить спати на подушечці, ганятись за котами та відпочивати",
            likes: ["резиновий мʼячик", "Картонні коробки", "Сушені копита"],
            dislikes: ["Гучні пилососи", "Закриті двері"]
        },
        family: {
            father: "Чарльз Кінг Спаніель - Мопсик",
            mother: "Чарльз Кінг Спаніель - Муська"
        }
    };

    const Image = ({src}) => (
        <img className="h-28 w-28 md:h-36 md:w-36 rounded-2xl object-cover ring-1 ring-slate-200 shadow"
             src={`${src}`} alt=""/>
    );

    const MotionDiv = ({ className = "", children, ...rest }) => {
        const initialY = useMemo(() => Math.floor(Math.random() * 25) + 18, []);
        return (
            <motion.div
                initial={{opacity: 0, y: initialY}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.35}}
                className={`rounded-2xl shadow-sm ring-1 ring-slate-200 bg-white/80 backdrop-blur p-4 ${className}`}
                {...rest}
            >
                {children}
            </motion.div>
        );

    }

        return(
            <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-indigo-50 text-slate-800">

                <div className="mx-auto max-w-5xl my-4">
                    <MotionDiv className="flex items-center justify-between">

                        <div className="">
                            <h1 className="text-2xl font-bold leading-tight inline-flex items-center gap-2">
                                <PawPrintIcon size={20} /> {pet.name}
                            </h1>
                            <p className="text-slate-600 mt-1">{pet.species} • {pet.breed} • {pet.age}</p>

                            <div className="mt-3 inline-flex items-center gap-2 text-sm text-slate-600">
                                <MapPin size={16} /> {pet.city}
                            </div>
                        </div>
                        <div className="">
                            <Image src={pet.photoUrl}></Image>
                        </div>
                    </MotionDiv>
                </div>
                <div className="mx-auto h-auto max-w-5xl flex flex-row gap-4">
                    <MotionDiv className="w-2/3 flex flex-row justify-between gap-4">
                        <div className="p-4 rounded-lg border text-md leading-relaxed">
                            <p><span className="font-medium">Про улюбленця:</span> {pet.general.about}</p>
                            <p className="mt-2"><span className="font-medium">Любить:</span> {pet.general.likes.join(", ")}</p>
                            <p className="mt-1"><span className="font-medium">Не любить:</span> {pet.general.dislikes.join(", ")}</p>
                        </div>
                        <div>
                            <Image src={"/imgs/IMG_5195.HEIC"}></Image>
                        </div>
                    </MotionDiv>

                    <MotionDiv className="w-auto">
                        <div className="p-4 rounded-lg border text-md leading-relaxed">
                            <p><span className="font-medium">Батько:</span> {pet.family.father}</p>
                            <p className="mt-1"><span className="font-medium">Мати:</span> {pet.family.mother}</p>
                        </div>
                    </MotionDiv>
                </div>
            </div>
        );
}

export default Contacts;
