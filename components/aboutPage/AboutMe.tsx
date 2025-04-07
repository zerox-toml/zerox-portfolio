/* eslint-disable react/no-unescaped-entities */
import MyInfo from "../MyInfo";

export default function AboutMe() {
  return (
    <div className="px-12 py-10 mb-16">
      <article className="prose max-w-none prose-h2:mb-2.5 prose-h2:text-[2rem] prose-p:text-3xl prose-p:leading-[1.65]">
        <p className="text-gray-300">
          Hi friends,
          <br />I am <span className="text-[#ee9d00]">Spectrecoder</span> <br />
          Hi, Blockchain & Software Ninja is here! <br/>
          I've mainly worked on Ethereum, Solana, but you can see my commits on Polkadot, Aptos, or
          other L1/L2 chains. I've worked as a software engineer since 2018.<br/>
          2020 as the year that institutional investors finally warmed to
          Bitcoin, and DeFi started to blossom, I decided to jump into the web3
          worlds as a blockchain Ninja. <br/>
          Passing through Ethereum forest, crossing Solana ocean, navigating countless rivers, islands, and typhoons with the magic of Rust and Solidity, I felt the true flavor
          of the profound world of blockchain. Where will my challenges lie now?
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
