import React from 'react'
import { FaRegNewspaper, FaArrowRight } from "react-icons/fa"
import Image from 'next/image'
import Title from '../Title'

interface BlogPost {
  title: string;
  url: string;
  date: string;
  image: string;
}

export default function DevBlogs() {
  const blogPosts: BlogPost[] = [
    {
      title: "Integrating XXX/USD Pair into GMX Using Chainlink Data Feeds (1)",
      url: "https://www.linkedin.com/posts/aldinosaputra_how-to-fetch-data-from-chainlink-activity-7270867388869365760-AsQT",
      date: "October 2024",
      image: "/images/blogs/chainlink.png"
    },
    {
      title: "Building the Future of Decentralized Trading: A DEX on Ethereum-Compatible SVM Layer 2",
      url: "https://www.linkedin.com/posts/aldinosaputra_this-is-an-article-about-dex-platform-ive-activity-7268595131350450178-rN3F",
      date: "October 2024",
      image: "/images/blogs/dex.png"
    },
    {
      title: "Where are the HR manager’s worries?",
      url: "https://www.linkedin.com/posts/aldinosaputra_this-is-an-article-about-multi-platform-chatbots-activity-7266024728388157440-QPbz",
      date: "November 2024",
      image: "/images/blogs/chatbots.png"
    },
    {
      title: "Integrating AI and Blockchain to Revolutionize Intellectual Property Management on the Decentralized Web",
      url: "https://www.linkedin.com/posts/aldinosaputra_integrating-ai-and-blockchain-to-revolutionize-activity-7253408876958511104-n6uz",
      date: "November 2024",
      image: "/images/blogs/ai-blockchain.png"
    },
    {
      title: "Refining My Experience: Deploying the Soroban Atomic Swap Smart Contract",
      url: "https://www.linkedin.com/posts/aldinosaputra_refining-my-experience-deploying-the-soroban-activity-7247484888801505280-0zwa",
      date: "December 2024",
      image: "/images/blogs/soroban.png"
    }
  ];

  return (    
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="Blogs" />
      <div className="max-w-6xl mx-auto p-6 overflow-y-scroll myScroll" id="scrollableDiv lg:h-full h-[95rem]">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
          <FaRegNewspaper className="text-3xl text-blue-600" />
          <h2 className="text-2xl font-bold text-[#ee9d00]">Recent Articles</h2>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block aspect-[4/5] border rounded-xl hover:border-blue-500 transition-all duration-300 hover:shadow-lg bg-white overflow-hidden"
          >
            <div className="relative h-1/2 w-full">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="object-cover position-static"
              />
            </div>
            <div className="px-4 pb-6 pt-4 flex flex-col h-1/2 justify-between">
              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-gray-500">{post.date}</p>
                <FaArrowRight className="text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </a>
        ))}
      </div>
      </div>
    </section>
  )
}
