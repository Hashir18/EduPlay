import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const ActivitiesPage: React.FC = () => {
  const games = [
    { title: 'Fun with Fractions', src: '//www.tinytap.com/activities/g5uzx/player/embed/' },
    { title: 'Math Mastery Adventure', src: '//www.tinytap.com/activities/g5uzy/player/embed/' },
    { title: 'Cars for Kids', src: '//www.tinytap.com/activities/g5uzz/player/embed/' },
    { title: "Let's Learn Colors!", src: '//www.tinytap.com/activities/g5v00/player/embed/' },
    { title: 'Welcome to the World of Islam!', src: '//www.tinytap.com/activities/g5v01/player/embed/' },
    { title: 'Welcome to the Astronaut Game!', src: '//www.tinytap.com/activities/g5uzw/player/embed/' },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-green-50">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <motion.h1 
          className="text-4xl font-bold text-center mb-4 text-green-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Educational Activities
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Explore our collection of interactive activities designed to make learning fun!
        </motion.p>

        {/* Featured TinyTap Games Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={game.src}
                    allowFullScreen
                    style={{ border: 0 }}
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-700 text-center">{game.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Learning Tip Section */}
        <motion.div 
          className="mt-16 bg-white p-8 rounded-xl shadow-md border-l-4 border-green-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="bg-green-100 p-4 rounded-full mb-4 md:mb-0 md:mr-6 flex-shrink-0">
              <BookOpen size={32} className="text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Educational Tip</h3>
              <p className="text-gray-600">
                Activities that engage multiple senses help children learn more effectively. Try combining 
                interactive games for a comprehensive learning experience. Remember to make learning fun by 
                celebrating progress and encouraging curiosity!
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ActivitiesPage;
