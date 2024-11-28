'use client'

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
            type: "easeInOut",
            duration: 1.75
        }}
        className="w-full h-full"
    >
      {children}

      <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        style: {
          backgroundColor: '#39312D',
          color: '#FFFFFF'
        }
      }}
      />
    </motion.div>
  )
}