/* eslint-disable react/no-unescaped-entities */
import MyInfo from "../MyInfo";

export default function AboutMe() {
  return (
    <div className="px-12 py-10 mb-16">
      <article className="prose max-w-none prose-h2:mb-2.5 prose-h2:text-[2rem] prose-p:text-3xl prose-p:leading-[1.65]">
        <p className="text-gray-300">
          Hi friends,
          I use Python to build fast, and Rust to build safe — so my code runs smooth and I sleep better at night. <br/>
          Been working on Ethereum, Solana, Aptos, SUI, Stellar, and other blockchains - Network & Blockchain Engineer.
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
