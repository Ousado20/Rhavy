'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { siteConfig, navItems } from '@/config/site'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Security', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Tutorials', href: '#' },
    { label: 'Community', href: '#' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'Disclaimer', href: '#' },
  ],
}

export const Footer = () => {
  return (
    <footer className="bg-dark-900/50 border-t border-dark-700/20 backdrop-blur-lg">
      <div className="section-container section">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center shadow-glow">
                <span className="text-white font-sora font-bold text-lg">R</span>
              </div>
              <span className="font-sora font-bold text-lg bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-dark-400 text-sm mb-6">
              Experience the future of AI-powered digital platforms.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-400 hover:text-primary-300 hover:shadow-glow transition-all duration-300"
                  aria-label={social}
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-sora font-bold text-dark-100 mb-6 text-sm uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-dark-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-dark-700/50 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-dark-400"
        >
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Status
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Updates
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              System Status
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
