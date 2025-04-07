"use client";
import Image from "next/image";
import { MouseEvent } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { motion } from "framer-motion";

import Loader from "../Loader";
import { BsGithub } from "react-icons/bs";
import { workExperience } from "../../data";

export default function WorkLb(props: any) {
  let selectedProject = workExperience.filter(
    (item) => item.id === props.workId
  )[0];

  function closeLb(e: MouseEvent): void {
    if ((e.target as Element).classList.contains("lb")) {
      props.reactiveVar(null);
    }
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, type: "spring" }}
      onClick={closeLb}
      className={`lb fixed top-0 left-0 w-screen h-screen bg-gray-900/70 z-50 flex justify-center transition-all duration-200`}
    >
      <main className="h-full w-[70rem] max-w-[90%] bg-gray-800 flex justify-center items-center">
        {selectedProject === undefined ? (
          <Loader />
        ) : (
          <div className="w-full h-full max-h-full overflow-y-scroll myScroll">
            <div className="w-full relative h-[45rem]">
              <AiFillCloseCircle
                onClick={() => props.reactiveVar(null)}
                className="absolute z-10 text-5xl cursor-pointer top-6 right-8 text-main-orange"
              />
              <Image
                src={selectedProject.images[0].url}
                alt="project description"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <section className="py-14 px-14">
              <div className="flex flex-wrap items-center justify-between gap-6 mb-4 text-4xl font-semibold tracking-wide text-gray-300 capitalize">
                {selectedProject.title}

                <div className="flex items-center gap-x-4">
                  <a
                    rel="noreferrer"
                    href={selectedProject.workRealLink}
                    target="_blank"
                    className="text-[1.4rem] flex items-center gap-2 rounded-full py-1.5 px-6 tracking-wide font-semibold capitalize hover:bg-sky-600 transition-all duration-300 text-white bg-sky-500"
                  >
                    view
                    <HiOutlineViewGridAdd className="text-3xl" />
                  </a>

                  <a
                    rel="noreferrer"
                    href={selectedProject.workGithub}
                    target="_blank"
                    className="text-[1.4rem] flex items-center gap-2 rounded-full py-1.5 px-6 tracking-wide font-semibold capitalize shadow-lg hover:bg-gray-700 transition-all duration-300 text-white bg-gray-900"
                  >
                    {selectedProject.workGithub ? "Github" : "NDA"}
                    <BsGithub className="text-3xl" />
                  </a>
                </div>
              </div>
              <p className="text-xl tracking-wide text-gray-400 capitalize">
                project
              </p>

              <article className="my-5 prose max-w-none">
                <h1 className="mb-4 text-2xl font-semibold text-gray-200 capitalize">
                  1. Summary
                </h1>
                <p className="mt-0">{selectedProject.description}</p>
              </article>
              <div className="flex justify-between flex-wrap">
                {selectedProject.stack.length && (
                  <div className="grid grid-cols-1 sm:grid-cols-1 mb-2 gap-2 text-gray-300 text-[1.4rem] tech-func">
                    <div className="mb-6 sm:mb-0">
                      <h1 className="mb-4 text-2xl font-semibold text-gray-200 capitalize">
                        2. Tech-Stack
                      </h1>
                      <ul className="flex flex-col gap-y-2">
                        {selectedProject.stack.map((s, idx) => (
                          <li key={idx} className="flex gap-2">
                            {s.stack}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {selectedProject.keya?.length && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 mb-2 gap-2 text-gray-300 text-[1.4rem] tech-func">
                    <div className="mb-6 sm:mb-0">
                      <h1 className="mb-4 text-2xl font-semibold text-gray-200 capitalize">
                        3. Key-Aspects
                      </h1>
                      <ul className="flex flex-col gap-y-2">
                        {selectedProject.keya.map((s, idx) => (
                          <li key={idx} className="flex gap-2">
                            {s.keya}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <article className="my-5 prose max-w-none">
                <h1 className="mb-4 text-2xl font-semibold text-gray-200 capitalize">
                  4. Responsibility
                </h1>
                <p className="mt-0">{selectedProject.responsibility}</p>
              </article>
              <article className="my-5 prose max-w-none">
                <h1 className="mb-4 text-2xl font-semibold text-gray-200 capitalize">
                  5. Technical Overview
                </h1>
                <p className="mt-0">{selectedProject.techview1}</p>
                <p className="mt-0">{selectedProject.techview2}</p>
                <p className="mt-0">{selectedProject.techview3}</p>
              </article>
              <article className="my-5 prose max-w-none">
                <h1 className="mb-4 text-2xl font-semibold text-gray-200 capitalize">
                  6. Challenge
                </h1>
                <p className="mt-0 mb-1">
                  <span className="text-white">- Issues:</span> &nbsp;{" "}
                  {selectedProject.issues}
                </p>
                <p className="mt-0 mb-1">
                  <span className="text-white">- Solutions:</span> &nbsp;{" "}
                  {selectedProject.solutions}
                </p>
              </article>
              {/* {selectedProject.images.slice(1).map((img, idx) => (
                <div
                  key={idx}
                  className={`w-full relative h-[52rem] ${
                    idx !== selectedProject.images.length - 2 && "mb-8"
                  }`}
                >
                  <Image
                    src={img.url}
                    alt="project description"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))
              } */}
            </section>
          </div>
        )}
      </main>
    </motion.section>
  );
}
