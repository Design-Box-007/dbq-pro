"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import {FAQSectionProps} from '@/types/index'


const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  faqs = [],
  className = "",
  titleClassName = "",
  itemClassName = "",
  activeItemClassName = ""
}) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={`w-full py-16 px-4 sm:px-6 lg:px-9 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-5xl font-bold text-white mb-8 ${titleClassName}`}>
          {title}
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={false}
              className={`bg-white rounded-2xl overflow-hidden ${itemClassName} ${
                openId === faq.id ? activeItemClassName : ''
              }`}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <span className="text-lg sm:text-xl md:text-xl font-medium text-gray-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-6 w-6 md:w-8 md:h-8 text-[var(--green)]" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-5 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FAQSection;