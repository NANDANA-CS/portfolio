import React from 'react'
const skillsData = [
      { name: "MongoDB", icon: "📊", percentage: 85 },
      { name: "Express.js", icon: "📦", percentage: 80 },
      { name: "React", icon: "⚛️", percentage: 90 },
      { name: "Node.js", icon: "🌐", percentage: 85 },
      { name: "Git", icon: "🔗", percentage: 75 },
      { name: "REST APIs", icon: "🛠️", percentage: 80 },
    ];

    const SkillCard = ({ skill }) => {
      return (
        <div className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4">
          <span className="text-2xl">{skill.icon}</span>
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <span className="text-lg">{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      );
    };

const Skill = () => {
    
  return (
    <>
      <div className="min-h-screen">
          {/* Navigation */}
          {/* <nav className="flex justify-between items-center p-6">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Nandana C S
            </h1>
            <ul className="flex space-x-6">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`hover:text-purple-400 ${item === "Skills" ? "text-purple-400" : ""}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button className="text-xl">🌙</button>
          </nav> */}

      
          <div className="flex flex-col items-center mt-10">
            <h2 className="text-4xl font-bold border-b-4 border-gradient-to-r from-purple-500 to-pink-500 pb-2">
              Skills & Technologies
            </h2>
            <p>Here are the technologies and tools I work with to bring ideas to life</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl w-full px-6">
              {skillsData.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      
    </>
  )
}

export default Skill
