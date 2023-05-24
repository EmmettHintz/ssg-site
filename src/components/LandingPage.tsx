import Link from "next/link";
import { motion } from "framer-motion";

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="mx-4 my-4 flex h-full flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex-grow bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-20 text-center text-white">
        <motion.h2
          className="text-4xl font-bold sm:text-6xl lg:text-8xl"
          variants={itemVariants}
        >
          Welcome to SSG
        </motion.h2>
        <motion.p
          className="mt-4 text-xl sm:text-2xl lg:text-3xl"
          variants={itemVariants}
        >
          Replace + Rename With Rebranding
        </motion.p>
      </div>

      <motion.div
        className="flex-grow bg-transparent p-6 text-white"
        variants={containerVariants}
      >
        <motion.h2 className="mb-6 text-2xl font-bold" variants={itemVariants}>
          Who We Are
        </motion.h2>

        <motion.p className="mb-4" variants={itemVariants}>
          We are an ambitious collective of coders from Colgate University,
          united by a shared passion for the vast and evolving realm of web
          development and machine learning. As we immerse ourselves in the
          dynamic landscape of coding, we continuously seek opportunities that
          allow us to grow, innovate, and push the boundaries of our
          understanding.
        </motion.p>

        <motion.p className="mb-4" variants={itemVariants}>
          We believe in the power of collaboration and diverse perspectives.
          Each of us brings a unique approach to problem-solving and, together,
          we can navigate the most complex challenges and projects. Our mission
          is to evolve with the pace of technology, maintaining a keen focus on
          honing our skills, embracing emerging trends, and constantly raising
          the bar in web development. As we move forward, we are committed to
          fostering an environment of intellectual curiosity, mutual respect,
          and relentless pursuit of knowledge.
        </motion.p>

        <motion.h2 className="mb-6 text-2xl font-bold" variants={itemVariants}>
          Our Projects
        </motion.h2>
        <motion.p className="mb-4" variants={itemVariants}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </motion.p>

        <motion.h2 className="mb-6 text-2xl font-bold" variants={itemVariants}>
          Join Us
        </motion.h2>
        <motion.p className="mb-4" variants={itemVariants}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </motion.p>
        <Link href="/contact" passHref>
          <motion.button
            className="mt-6 rounded-2xl bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
