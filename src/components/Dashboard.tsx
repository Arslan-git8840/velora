'use client';
import { useState } from 'react';
import FeatureCard from '@/components/FeatureCard';
import ContentCard from '@/components/ContentCard';
import ChatInput from '@/components/ChatInput';
import {
  FileText,
  Settings,
  CheckCircle,
  MessageSquare,
  Edit3,
  Code2,
  MapPin
} from 'lucide-react';

const DashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const features = [
    {
      title: "Examples",
      icon: <FileText size={28} />,
      bgColor: "bg-yellow-400",
      textColor: "text-black"
    },
    {
      title: "Capabilities",
      icon: <Settings size={28} />,
      bgColor: "bg-green-500",
      textColor: "text-white"
    },
    {
      title: "Limitations",
      icon: <CheckCircle size={28} />,
      bgColor: "bg-gradient-to-r from-pink-500 to-purple-500",
      textColor: "text-white"
    }
  ];

  const contentCards = [
    {
      text: "What would happen if all the world's clocks suddenly stopped?",
      icon: <MessageSquare size={20} />
    },
    {
      text: "Create a plot twist for a story. Say that the villain blew people's minds.",
      icon: <Edit3 size={20} />
    },
    {
      text: "Make a bot based on React or Laravel that writes incredibly bad poetry.",
      icon: <Code2 size={20} />
    },
    {
      text: "Find hotels for a New Year trip to San Francisco, also check availability.",
      icon: <MapPin size={20} />
    }
  ];

  return (
    <div className="bg-white w-full flex flex-col">
      <main className="flex-1 flex flex-col overflow-y-auto">
        <div className="flex-1 px-4 py-6 sm:px-6 md:px-10">
          <div className="max-w-7xl mx-auto space-y-10">

            {/* Welcome Section */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Welcome to AI Assistant
              </h1>
              <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
                Start your conversation by typing a question or choosing a suggested prompt below. The more detailed your input, the better the results!
              </p>
            </div>

            {/* Feature Cards */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  icon={feature.icon}
                  bgColor={feature.bgColor}
                  textColor={feature.textColor}
                />
              ))}
            </div> */}

            {/* Instructional Section */}
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                Want to get the most out of your AI assistant?
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                Start with a clear and specific prompt. Be as detailed as possible about your desired outcome.
                <a href="/instruction" className="text-blue-500 hover:underline">Instructions</a>
              </p>
            </div>

            {/* Prompt Cards */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Try these prompts:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {contentCards.map((card, index) => (
                  <ContentCard
                    key={index}
                    text={card.text}
                    icon={card.icon}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Chat Input */}
        <ChatInput />
      </main>
    </div>
  );
};

export default DashBoard;
