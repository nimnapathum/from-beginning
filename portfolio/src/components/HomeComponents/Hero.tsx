import heroImage from "../../assets/heroImage.webp";
import { motion } from "framer-motion";
import { SocialLinks } from "../../data/StaticContents";
import { FaArrowDown, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Button from "../common/Button";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-blue-500">
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 flex justify-center w-full pointer-events-none bg-transparent z-20" 
      >
        <img src={heroImage} alt="heroImage" className="w-[800px] h-auto" />
      </motion.div>

      <div className="absolute top-[100px] left-0 w-full flex flex-col items-center gap-0 pointer-events-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          className="text-lg text-background relative top-12"
        >
          <span className="font-semibold">A FullStack Developer | Computer Science Undergraduate</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="relative inline-block"
        >
          <motion.p
            initial={{ opacity: 0 , x: -10 }}
            animate={{ opacity: 1 , x: 0 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.7 }}
            className="text-[180px] font-bold m-0 tracking-widest cursor-none font-mid text-background uppercase">
              Nimna <span className="text-accent">Pathum</span>
          </motion.p>
          <p className="absolute -top-1 -left-1 m-0 select-none tracking-widest pointer-events-none cursor-none font-mid text-[180px] font-bold text-accent uppercase">Nimna <span className="text-background">Pathum</span></p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          className="flex flex-row justify-between items-start w-full px-60 mt-0"
        >
            <div className="flex flex-row gap-2">
                {SocialLinks.map((link) => (
                    <motion.a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2 text-white hover:text-accent bg-background p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {link.icon === "FaGithub" ? <FaGithub size={20} /> : <FaLinkedinIn size={20} />}
                    </motion.a>
                ))}
            </div>
            <div className="flex flex-col justify-end items-end">
              <div className="bg-background px-4 py-2 rounded-full text-accent">
                <span>Introducing</span>
              </div>
              <div className="w-[460px] text-end mt-3 inline-flex flex-col gap-2">
                <motion.span
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
                >
                  I`m a <span className="text-xl font-semibold uppercase">passionate developer</span> with a strong foundation in software engineering and hands-on experience across PHP, MERN, and Java Spring Boot. I enjoy solving problems, building real-world applications, and exploring cloud, AI agents, and DevOps.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
                >
                  I`m always <span className="text-xl font-semibold uppercase">eager to learn</span>, collaborate, and grow—currently preparing for research in Agentic AI while continuing to refine my technical skills.
                </motion.span>
              </div>
              {/* <ul className="flex flex-col justify-end items-end mt-2 gap-1">
                <motion.li 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
                  className="font-mono text-lg mt-2"
                >
                  A passionate developer -
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 1.7 }}
                  className="font-mono text-lg"
                >
                  Always eager to learn -
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 1.9 }}
                  className="font-mono text-lg"
                >
                  Open to collaboration -
                </motion.li>
              </ul> */}
              <Button
                variant="primary"
                className="mt-4"
                icon={<FaArrowDown />}
              >
                More About Me
              </Button>
            </div>
        </motion.div>
      </div>

    </div>
  )
}

export default Hero
