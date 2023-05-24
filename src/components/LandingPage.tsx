import { useContext, useEffect } from "react";
import { MyThemeContext } from "~/context/themeContext";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const LandingPage = () => {
  const { theme, toggleTheme } = useContext(MyThemeContext);
  const isDarkMode = theme === "dark";

  const backgroundClass = isDarkMode ? "bg-[#333]" : "bg-white";

  const backgroundColor = isDarkMode ? "#333" : "white";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const buttonBackgroundColor = isDarkMode ? "bg-white" : "bg-gray-600";
  const buttonTextColor = isDarkMode ? "text-black" : "text-white";
  const buttonHoverColor = isDarkMode
    ? "hover:bg-gray-200"
    : "hover:bg-gray-800";

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className={`flex h-full flex-col ${backgroundClass} ${textColor}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <button
        onClick={toggleTheme}
        className={`absolute right-0 top-0 m-4 rounded ${buttonBackgroundColor} ${buttonHoverColor} ${buttonTextColor} px-3 py-2`}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>

      <div className={`flex-grow pb-20 text-center ${textColor}`}>
        <motion.h2
          className="text-4xl font-bold sm:text-6xl lg:text-8xl"
          variants={itemVariants}
        >
          Welcome to SSG
        </motion.h2>
        <motion.p
          className="mt-4 flex h-auto justify-center text-xl sm:text-2xl lg:text-3xl"
          variants={itemVariants}
        >
          Replace + Rename With Rebranding
        </motion.p>
      </div>

      <motion.div
        className={`flex-grow p-6 ${textColor}`}
        variants={containerVariants}
      >
        <motion.h2
          className="mb-6 w-40 rounded-3xl bg-sky-800 text-center text-2xl font-bold text-white"
          variants={itemVariants}
        >
          Who We Are
        </motion.h2>

        <motion.p className="mb-4 text-xl" variants={itemVariants}>
          We are an ambitious collective of coders from Colgate University,
          united by a shared passion for the vast and evolving realm of web
          development and machine learning. As we immerse ourselves in the
          dynamic landscape of coding, we continuously seek opportunities that
          allow us to grow, innovate, and push the boundaries of our
          understanding.
        </motion.p>

        <motion.p className="mb-4 text-xl" variants={itemVariants}>
          We believe in the power of collaboration and diverse perspectives.
          Each of us brings a unique approach to problem-solving and, together,
          we can navigate the most complex challenges and projects. Our mission
          is to evolve with the pace of technology, maintaining a keen focus on
          honing our skills, embracing emerging trends, and constantly raising
          the bar in web development. As we move forward, we are committed to
          fostering an environment of intellectual curiosity, mutual respect,
          and relentless pursuit of knowledge.
        </motion.p>

        <motion.h2
          className="mb-6 mt-6 w-40 rounded-full bg-emerald-800 text-center text-2xl font-bold text-white"
          variants={itemVariants}
        >
          Our Projects
        </motion.h2>
        <motion.p className="mb-4 text-xl" variants={itemVariants}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </motion.p>

        <motion.h2
          className="mb-6 w-28 rounded-full bg-sky-800 text-center text-2xl font-bold text-white"
          variants={itemVariants}
        >
          Join Us
        </motion.h2>
        <motion.p className="mb-4 text-xl" variants={itemVariants}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </motion.p>
        <Link href="/contact" passHref>
          <motion.button
            className="mt-6 rounded-2xl bg-emerald-800 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            variants={itemVariants}
          >
            Contact Us
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
