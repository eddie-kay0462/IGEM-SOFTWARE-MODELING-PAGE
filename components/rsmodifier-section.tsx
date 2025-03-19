"use client"

import { motion } from "framer-motion"
import CodeFlipbook from "./code-flipbook"

export default function RSModifierSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          RSMODIFIER SOFTWARE
        </h2>
        
        <div className="space-y-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <p className="text-white">
              The Ashesi Igem 2023 team started work on the Recognition Site Modifier. This year, we needed to use the software that there were few areas for improvement, so we decided to build on it. We realised that after modification, one of which part of the sequence has been modified and how many modifications were done. Also, the display was not used in the output space did not allow for a better view. We needed to study the entire code to determine places that were causing the issues before looking for a way to improve it. Most part of the description is similar to that of 2023's own since it was a build-on.
            </p>
          </motion.div>

          {/* Problem Identification */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What Problem Have We Identified?
            </h3>
            <p className="text-white">
              The presence of unwanted restriction enzyme recognition sites poses a significant challenge in genetic engineering and DNA circuiting, where precise control over cleavage sites is important. These unwanted sites interfere with the DNA assembly process by introducing unwanted cleavage in certain regions of the DNA sequence and disrupting the protein-coding regions. For instance, Baal has many restriction sites that it codes for, and if these are all present in the DNA sequence, then it will cut through those regions, even if cleavage is required only at specific points along the DNA sequence. The manual identification and modification of these unwanted sites can be time-consuming and error-prone, especially for longer DNA sequences.
            </p>
          </motion.div>

          {/* General Solution */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              General Solution
            </h3>
            <p className="text-white">
              The presence of unwanted restriction enzyme recognition sites poses a significant challenge in genetic engineering, including where precise control over cleavage sites is important. These unwanted sites interfere with the DNA assembly introducing unwanted cleavage in certain regions of the DNA sequence and disrupting the protein-coding regions. For instance, Bsal has many restriction sites that it codes for, and Generally, different combinations of bases could code for one amino acid. In Applying the concept of amino acids to solve the problem mentioned above, bases of some amino acids in the recognition sites are substituted with other bases that code for the same amino acid. In this way, the recognition site is eliminated while also preserving the behaviour of the part that contained the unwanted recognition site. Changing these bases manually can be quite a hassle, especially if there are multiple of these unwanted recognition sites. There are also certain rules that must be followed, considering that three bases code for an amino acid. These rules make the manual changing of bases a complex task.
            </p>
          </motion.div>

          {/* Our Solution */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Solution
            </h3>
            <p className="text-white">
              Our software, RS Modifier, aims to address this problem by automating the identification and elimination of unwanted restrictions. Because different combinations of bases could code for one amino acid, bases of some amino acids in the recognition sites are substituted with other bases that code for the same amino acid. This way, the unwanted cleavage region is changed to a different combination of bases that the restriction enzyme cannot identify.
            </p>
            <p className="text-white mt-4">
              This approach solves the challenge posed by the unwanted restriction sites while preserving the DNA sequence's functionality, ensuring that the amino acid sequence and protein function remain unchanged. The RS Modifier software eliminates the need for manual identification and modification of DNA sequences, allowing researchers more time to focus on their work's creative and experimental aspects. It also shows the parts that were modified by highlighting them and also giving a nice display.
            </p>
          </motion.div>

          {/* User Menu */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              RSModifier User Menu
            </h3>
            <h4 className="text-xl font-semibold text-white mb-4">HOW TO USE RSMODIFIER</h4>
            <ol className="list-decimal list-inside space-y-2 text-white">
              <li>Select the restriction enzyme that codes for the restriction site you want to modify</li>
              <li>Select the direction of DNA modification, i.e., Forward or Backward</li>
              <li>Paste or type in the full DNA sequence to be modified</li>
              <li>Click on the submit button</li>
              <li>The modified DNA sequence will appear in the 'OUTPUT' textbox</li>
              <li>To find out the number of modifications made and to see the locations of the modifications, click on the 'HIGHLIGHT' button on the right. The areas in capital letters are the areas of modification</li>
              <li>The user can switch between the highlighted DNA sequence and the one in all lower caps by clicking the SUBMIT the highlighted buttons</li>
            </ol>
          </motion.div>

          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Overview
            </h3>
            <p className="text-white mb-8">
              Explore the key components and functionality of our RSModifier software through the interactive code snippets below. Each snippet demonstrates different aspects of the implementation, from core algorithms to user interface components.
            </p>
            <CodeFlipbook />
          </motion.div>

          {/* Python Model Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Python Model Implementation
            </h3>
            <p className="text-white">
              The model for this system was developed in Python. There are three main functions in this python model:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white mt-4">
              <li><span className="font-semibold">CheckSequenceLen</span></li>
              <li><span className="font-semibold">StartEndCodonCheck</span></li>
              <li><span className="font-semibold">RecogSiteModification</span></li>
            </ul>
            <p className="text-white mt-4">
              The model first checks the length of the sequence using the CheckSequenceLen function, then, checks if there are valid start and stop codons using the 'StartEndCodonCheck' function. Finally, it modifies the sequence using the 'recogSiteModification' function.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 