import { motion } from "framer-motion"
import { StaticContents } from "../../data/StaticContents"
import { Link } from "react-router-dom"
import logo from "../../assets/NP.png"
import { useState } from "react"
 
const Navbar = () => {
    const [activeTab, setActiveTab] = useState("/");
  
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1
        }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    }

    const isActive = (path: string) => activeTab === path

  return (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-auto absolute top-8 z-20"
    >
        <div className="w-full flex justify-between items-center px-40">
            <div>
                <img src={logo} alt="Logo" className="w-12 h-12 object-contain"/>
            </div>
            <div className="flex gap-2 justify-center items-center">
                {StaticContents.navbar.map((item) => (
                    <motion.div
                        variants={itemVariants}
                        key={item.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to={item.path}
                            onClick={() => setActiveTab(item.path)}
                            className={`
                            relative px-4 py-2 rounded-full font-medium transition-all duration-300
                            ${isActive(item.path)
                                ? "text-background"
                                : "text-white hover:text-accent/80"
                            }
                            `}
                        >
                            {item.name}
                            
                            {/* Active indicator */}
                            {isActive(item.path) && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute -bottom-1 left-0 right-0 h-10 bg-accent rounded-full -z-10"
                                initial={false}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                            )}
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.div>
  )
}

export default Navbar;
