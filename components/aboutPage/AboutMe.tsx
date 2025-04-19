/* eslint-disable react/no-unescaped-entities */
import MyInfo from "../MyInfo";

export default function AboutMe() {
  return (
    <div className="px-12 py-10 mb-16">
      <article className="prose max-w-none prose-h2:mb-2.5 prose-h2:text-[2rem] prose-p:text-3xl prose-p:leading-[1.65]">
        <p className="text-gray-300">
          Hi friends,
          I build with intention—combining the power of AI and blockchain to design solutions that are as smart as they are meaningful. <br/>
          I believe in writing code that not only works, but speaks to clarity, creativity, and future potential.
        </p>
      </article> 

      <ul className="grid grid-cols-1 mt-16 location sm:grid-cols-2 gap-y-2 ">
        <MyInfo field="Time Zone" value="Any timezone" />
        <MyInfo field="Working State" value="Available" />
        <MyInfo field="Country" value="Indonesia" />
      </ul>
    </div>
  );
}
