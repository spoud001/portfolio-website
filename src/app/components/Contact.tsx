// src/app/components/Contact.tsx
'use client'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark-surface px-4 text-center">
      <motion.h2
        className="text-4xl font-bold text-neon-purple mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Open to Opportunities
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Looking for new roles or projects — feel free to reach out!
      </motion.p>

      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <a
          href="mailto:poudelsandesh2001@gmail.com"
          className="bg-neon-purple text-black px-6 py-3 rounded-lg shadow-neon hover:bg-neon-pink hover:text-white transition-all duration-300"
        >
          Contact Me
        </a>
        <p className="text-sm text-gray-500 mt-2">
  or reach out via{' '}
  <a
    href="https://www.linkedin.com/in/sandesh-poudel-dev/"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-purple-400 hover:text-purple-300 transition"
  >
    LinkedIn
  </a>{' '}
  /{' '}
  <a
    href="https://github.com/spoud001"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-purple-400 hover:text-purple-300 transition"
  >
    GitHub
  </a>{' '}

</p>
<p className='text-sm text-gray-500 mt-2'>
  Email: poudelsandesh2001@gmail.com
</p>
      </motion.div>
    </section>
  )
}
