import React from 'react'
import { FaDatabase, FaCodeBranch, FaServer, FaGlobe, FaJs, FaMobileAlt } from 'react-icons/fa'
import { SiReact, SiNodedotjs } from 'react-icons/si'
import { BsCodeSlash } from 'react-icons/bs'

const skills = [
  { name: 'MongoDB', icon: <FaDatabase />, level: 85 },
  { name: 'Express.js', icon: <FaServer />, level: 80 },
  { name: 'React', icon: <SiReact />, level: 90 },
  { name: 'Node.js', icon: <SiNodedotjs />, level: 85 },
  { name: 'Git', icon: <FaCodeBranch />, level: 75 },
  { name: 'REST APIs', icon: <BsCodeSlash />, level: 80 },
  { name: 'JavaScript', icon: <FaJs />, level: 90 },
  { name: 'Responsive Design', icon: <FaMobileAlt />, level: 97 }
]

const Skill = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] to-[#2b0a3d] text-white px-6 py-20 pt-35" id="skill">
      <h2 className="text-4xl font-bold text-center mb-12">
        My Skills
        <div className="w-24 h-1 bg-pink-500 mx-auto mt-2 rounded-full"></div>
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#141414] p-6 rounded-xl shadow-md flex flex-col gap-4 border border-neutral-800"
          >
            <div className="flex items-center gap-4 text-lg font-semibold">
              <div className="text-pink-400 text-2xl bg-[#1f1f1f] p-2 rounded-md">
                {skill.icon}
              </div>
              {skill.name}
            </div>
            <div className="w-full bg-neutral-800 h-2 rounded-full">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className="text-right text-sm text-gray-300">{skill.level}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill
