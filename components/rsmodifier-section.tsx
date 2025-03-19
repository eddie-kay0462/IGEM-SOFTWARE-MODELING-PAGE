"use client"

import { motion } from "framer-motion"

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
        <h2 className="text-4xl font-bold text-amber-300 mb-12 text-center">RSMODIFIER SOFTWARE</h2>
        
        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6">
            <p className="text-violet-100">
              The Ashesi Igem 2023 team started work on the Recognition Site Modifier. This year, we needed to use the software that there were few areas for improvement, so we decided to build on it. We realised that after modification, one of which part of the sequence has been modified and how many modifications were done. Also, the display was not used in the output space did not allow for a better view. We needed to study the entire code to determine places that were causing the issues before looking for a way to improve it. Most part of the description is similar to that of 2023's own since it was a build-on.
            </p>
          </div>

          {/* Problem Identification */}
          <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold text-amber-300 mb-4">What Problem Have We Identified?</h3>
            <p className="text-violet-100">
              The presence of unwanted restriction enzyme recognition sites poses a significant challenge in genetic engineering and DNA circuiting, where precise control over cleavage sites is important. These unwanted sites interfere with the DNA assembly process by introducing unwanted cleavage in certain regions of the DNA sequence and disrupting the protein-coding regions. For instance, Baal has many restriction sites that it codes for, and if these are all present in the DNA sequence, then it will cut through those regions, even if cleavage is required only at specific points along the DNA sequence. The manual identification and modification of these unwanted sites can be time-consuming and error-prone, especially for longer DNA sequences.
            </p>
          </div>

          {/* General Solution */}
          <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold text-amber-300 mb-4">General Solution</h3>
            <p className="text-violet-100">
              The presence of unwanted restriction enzyme recognition sites poses a significant challenge in genetic engineering, including where precise control over cleavage sites is important. These unwanted sites interfere with the DNA assembly introducing unwanted cleavage in certain regions of the DNA sequence and disrupting the protein-coding regions. For instance, Bsal has many restriction sites that it codes for, and Generally, different combinations of bases could code for one amino acid. In Applying the concept of amino acids to solve the problem mentioned above, bases of some amino acids in the recognition sites are substituted with other bases that code for the same amino acid. In this way, the recognition site is eliminated while also preserving the behaviour of the part that contained the unwanted recognition site. Changing these bases manually can be quite a hassle, especially if there are multiple of these unwanted recognition sites. There are also certain rules that must be followed, considering that three bases code for an amino acid. These rules make the manual changing of bases a complex task.
            </p>
          </div>

          {/* Our Solution */}
          <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold text-amber-300 mb-4">Our Solution</h3>
            <p className="text-violet-100">
              Our software, RS Modifier, aims to address this problem by automating the identification and elimination of unwanted restrictions. Because different combinations of bases could code for one amino acid, bases of some amino acids in the recognition sites are substituted with other bases that code for the same amino acid. This way, the unwanted cleavage region is changed to a different combination of bases that the restriction enzyme cannot identify.
            </p>
            <p className="text-violet-100 mt-4">
              This approach solves the challenge posed by the unwanted restriction sites while preserving the DNA sequence's functionality, ensuring that the amino acid sequence and protein function remain unchanged. The RS Modifier software eliminates the need for manual identification and modification of DNA sequences, allowing researchers more time to focus on their work's creative and experimental aspects. It also shows the parts that were modified by highlighting them and also giving a nice display.
            </p>
          </div>

          {/* User Menu */}
          <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold text-amber-300 mb-4">RSModifier User Menu</h3>
            <h4 className="text-xl font-semibold text-amber-300 mb-4">HOW TO USE RSMODIFIER</h4>
            <ol className="list-decimal list-inside space-y-2 text-violet-100">
              <li>Select the restriction enzyme that codes for the restriction site you want to modify</li>
              <li>Select the direction of DNA modification, i.e., Forward or Backward</li>
              <li>Paste or type in the full DNA sequence to be modified</li>
              <li>Click on the submit button</li>
              <li>The modified DNA sequence will appear in the 'OUTPUT' textbox</li>
              <li>To find out the number of modifications made and to see the locations of the modifications, click on the 'HIGHLIGHT' button on the right. The areas in capital letters are the areas of modification</li>
              <li>The user can switch between the highlighted DNA sequence and the one in all lower caps by clicking the SUBMIT the highlighted buttons</li>
            </ol>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 