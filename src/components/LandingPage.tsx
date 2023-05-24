import Link from 'next/link';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      className="mx-4 my-4 flex flex-col h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex-grow bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-20 text-white text-center">
        <motion.h2
          className="text-4xl sm:text-6xl lg:text-8xl font-bold"
          variants={itemVariants}
        >
          Welcome to SSG
        </motion.h2>
        <motion.p
          className="mt-4 text-xl sm:text-2xl lg:text-3xl"
          variants={itemVariants}
        >
          Building the future, one project at a time.
        </motion.p>
      </div>

      <motion.div
        className="flex-grow bg-white p-6"
        variants={containerVariants}
      >
        <motion.h2 className="text-2xl font-bold mb-6" variants={itemVariants}>
          Our Mission
        </motion.h2>
        <motion.p className="mb-4" variants={itemVariants}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mb-6" variants={itemVariants}>
          Our Projects
        </motion.h2>
        <motion.p className="mb-4" variants={itemVariants}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </motion.p>

        <motion.h2 className="text-2xl font-bold mb-6" variants={itemVariants}>
          Join Us
        </motion.h2>
        <motion.p className="mb-4" variants={itemVariants}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </motion.p>
        <Link href="/contact" passHref>
          <motion.button
            className="py-2 px-4 mt-6 rounded-2xl bg-blue-600 text-white transition-colors duration-300 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
