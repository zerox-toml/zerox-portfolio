import IconTitle from "./IconTitle";
import { FaGraduationCap, FaNetworkWired } from "react-icons/fa";
import ResumeSkeleton from "./ResumeSkeleton";
import { resume } from "../../types";
import { useMemo } from "react";
import { resumeExp } from "../../data";
import { Link } from "@mui/material";

export default function MyResume() {
  

  const filteredData = useMemo<[resume[], resume[]] | undefined>(() => {
    if (resumeExp === undefined) return undefined;
    const experience: resume[] = [];
    const education: resume[] = [];
    resumeExp.forEach((r) => {
      if (r.experience) {
        experience.push(r);
      } else {
        education.push(r);
      }
    });
    return [experience, education];
  }, []);

  return (
    <ul className="grid sm:grid-cols-2 grid-cols-1">
      <li className="py-8 px-12">
        <IconTitle title="experience" Icon={FaNetworkWired} />

        {resumeExp === undefined ? (
          <>
            <ResumeSkeleton border />
            <ResumeSkeleton border />
            <ResumeSkeleton />
          </>
        ) : (
          resumeExp.map((r, idx) => (
           
            <div className="mt-12" key={idx}>
              <div className="text-2xl border-solid border border-gray-400 w-40 justify-center text-center text-gray-400">{r.badge}</div>
              <div className="text-3xl mt-6 text-blue-600">{r.title}</div>
              <Link href={r.link}><div className="text-3xl mt-4 text-orange-400">{r.subtitle}</div></Link>
              <div className="text-2xl mt-2 text-gray-500">{r.desc}</div>
            </div>
          ))
        )}
      </li>

      <li className="py-8 px-12 relative vCustomLine sm:before:block before:hidden before:left-0">
        <IconTitle title="education" Icon={FaGraduationCap} />

        {filteredData === undefined ? (
          <>
            <ResumeSkeleton border />
            <ResumeSkeleton border />
            <ResumeSkeleton />
          </>
        ) : (
         
          <div>
            <div className="text-2xl border-solid mt-12 border border-gray-400 w-40 justify-center text-center text-gray-400">2015-2018</div>
            <p className="text-3xl mt-8 text-gray-300"> Universiti Utara Malaysia</p>
            <p className="text-2xl mt-2 text-gray-400">Bachelor&apos;s Degree of Computer Science</p>
          </div>
        )}
      </li>
    </ul>
  );
}
