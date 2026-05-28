'use client'

import { motion } from 'framer-motion'

interface ScrollIndicatorProps {
  visible?: boolean
}

export const ScrollIndicator = ({ visible = true }: ScrollIndicatorProps) => {
  if (!visible) return null

  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="flex flex-col items-center"
    >
      <p className="text-dark-400 text-xs mb-3">Scroll to explore</p>
      <div className="w-6 h-10 border-2 border-primary-400/50 rounded-full flex items-center justify-center">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-2 bg-primary-400 rounded-full"
        />
      </div>
    </motion.div>
  )
}
