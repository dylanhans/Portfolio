<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
</script>

<Seo
  title="Dylan Hans"
  description=""
/>

<section class="layout-md py-12">
  <h2 class="heading2">Education</h2>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Queen's University</h3>
      <div class="text-neutral-500 mb-0.5">2019 — 2024</div>
    </div>
    <p class="byline"><b>B.Sc in Computer Engineering — Specialization in Software Engineering</b></p>
  </div>

  <h4 class="font-medium mt-4 mb-1">Academic Involvement:</h4>
  <ul>
    <li><b>RA</b> for Research Project (<a class="link" href="https://smithengineering.queensu.ca/ece/undergraduate/courses/elec-497">APSC 497</a>)</li>
    <li><b>TA</b> for Operating Systems (<a class="link" href="https://smithengineering.queensu.ca/ece/undergraduate/courses/elec-377">ELEC 377</a>)</li>
    <li>
      <b>TA</b> for Programming I (<a class="link" href="https://smithengineering.queensu.ca/first-year/first-year-courses">APSC 141</a>)
    </li>
    <li>
      <b>TA</b> for Programming II (<a class="link" href="https://smithengineering.queensu.ca/first-year/first-year-courses">APSC 143</a>)
    </li>
  </ul>

  <h4 class="font-medium mt-4 mb-1">Extracurricular:</h4>
  <ul>
  
    <li><b>Quantitative Machine Learning Engineer</b> at  <a class="link" href="http://quantt.ca/">QUANTT</a></li>
    <li>
      <b> Machine Learning Engineer</b> at <a class="link" href="https://qmind.ca/">QMIND</a>
    </li>
    <li><b>Financial Director</b> at <a class="link" href="https://qbmet.ca/">QBMET</a></li>
    <li>
      <b> FD | Coordinator</b> at  <a class="link" href="https://www.instagram.com/queens.saa/?hl=en">QSAA</a>
    </li>
    <li>
      <b> Coordinator</b> at <a class="link" href="https://queenscirque.ca/">CIRQUE</a>
    </li>
  </ul>

  <h4 class="font-medium mt-4 mb-1">Core Technical Courses:</h4>
  <ul>
    <li>Machine Learning & Deep Learning (<a class="link" href="https://smithengineering.queensu.ca/ece/undergraduate/courses/elec-425">ELEC 425</a>)</li>
    <li>A.I. & Interactive Systems (<a class="link" href="https://smithengineering.queensu.ca/ece/undergraduate/courses/elec-472">ELEC 472</a>)</li>
    <li>Data Structures and Algorithms (<a class="link" href="https://smithengineering.queensu.ca/ece/undergraduate/courses/elec-379">ELEC 379</a>)</li>
    <li>Apple Discrete Math (<a class="link" href="https://smithengineering.queensu.ca/ece/undergraduate/courses/elec-270">ELEC 270</a>)</li>
    <li>Algorithms (<a class="link" href="https://ciscwww.cs.queensu.ca/courses/cisc365/">CMPE 365</a>)</li>
    <li>Probability & Random Processes(<a class="link" href="https://smithengineering.queensu.ca/ece/undergraduate/courses/elec-326">ELEC 326</a>)</li>
    <li>Operating Systems (<a class="link" href="https://smithengineering.queensu.ca/ece/undergraduate/courses/elec-377">ELEC 377</a>)</li>
    <li>Software Development (<a class="link" href="https://www.cs.queensu.ca/undergraduate/courses/CISC-320">CMPE 320</a>)</li>
    <li>Calculus II (<a class="link" href="https://mast.queensu.ca/~ableson/Teaching.shtml">APSC 172</a>)</li>
    <li>Software Quality Assurance (<a class="link" href="https://www.cs.queensu.ca/undergraduate/courses/CISC-327">CMPE 327</a>)</li>
    <li>Differential Equations (<a class="link" href="https://www.queensu.ca/artsci_online/courses/ordinary-differential-equations-1">MTHE 235</a>)</li>
    <li>Principles of Design & Development (<a class="link" href="https://smithengineering.queensu.ca/ece/undergraduate/courses/elec-390">ELEC 390</a>)</li>
    <li>Programming Language Processor (<a class="link" href="https://www.cs.queensu.ca/undergraduate/courses/CISC-458">CMPE 458</a>)</li>
    <li>Database Management Systems (<a class="link" href="https://www.cs.queensu.ca/undergraduate/courses/CISC-332">CMPE 332</a>)</li>
    <li>System Architecture (<a class="link" href="https://smithengineering.queensu.ca/ece/undergraduate/courses/elec-470">ELEC 470</a>)</li>
    <li>Information Structures (<a class="link" href="https://smithengineering.queensu.ca/ece/undergraduate/courses/elec-278">ELEC 278</a>)</li>
    <li>Performance Analysis (<a class="link" href="https://smithengineering.queensu.ca/ece/undergraduate/courses/soft-437">SOFT 437</a>)</li>
    <li>Calculus I (<a class="link" href="https://mast.queensu.ca/~ableson/Teaching.shtml">APSC 171</a>)</li>
    <li>Digital Systems Engineering (<a class="link" href="https://smithengineering.queensu.ca/ece/undergraduate/courses/elec-374">ELEC 374</a>)</li>

  </ul>

</section>

<section class="layout-md py-0">
  <h2 class="heading2">Professional Experience</h2>

  <Workplace
    title="Teaching Asssistant"
    company="Queen's University"
    dates="Sept 2023 – January 2024"
    location="Kingston, ON"
  >
    <li>
      Assessed midterms and labs for ELEC377: Operating Systems in Linux and C, alongside APSC141/143: Programming I/II, in Python.
    </li>
    <li>
      Facilitated weekly labs and problem-solving sessions in mastering algorithms, kernel, and OS principles for real-time and distributed systems. 
    </li>
  </Workplace>

  <Workplace
    title="Research Assistant"
    company="Queen's University "
    dates="Sept 2022 - May 2023"
    location="Kingston, ON"
  >
    <li>
      Advanced the development of a software language parser and interpreter by leveraging <b>TXL</b> to define transformational properties and <b>XML</b> for configurable mappings between <b>Python</b> and <b>C</b> programming constructs, streamlined analysis and communication between intermediates.
    </li>

  </Workplace>

  <Workplace
    title="Undergraduate Consultant"
    company="Queen's University"
    dates="May 2021 – August 2021"
    location="Kingston, ON"
  >
    <li>
      Mentored students 1 to 1 on tangible social, academic, and healthy lifestyle skills to achieve <b>success</b> based on academics and personal experience.
    </li>
    <li>
      Created weekly plans in collaboration with students to address academic challenges, elevated grades and enhanced confidence.
    </li>
  </Workplace>

  <Workplace
    title="Operations and Automation Engineer Intern"
    company="Peel Region"
    dates="June 2022 – Sept 2022"
    location="Caledon, ON"
  >
    <li>
      Led a small team to compile precise GIS data for a pilot research initiative, fostering stakeholder collaboration and ensuring project transparency. 
    </li>
    <li>
      Constructed geospatial models to boost collection efficiency, partnered with app. developers to implement efficient design/DB strategies and testing.    </li>
    <li>
      Assisted in improvement of the team’s data application performance through <b>testing and analysis</b>, automating collection processes and efficiency, 
      and introduced data processing strategies to refine and aggregate data.
    </li>
  </Workplace>

  <Workplace
    title="Solutions Specialist"
    company="Rogers & Bell"
    dates="June 2020 – August 2020"
    location="Remote | Caledon, ON"
  >
    <li>
      Negotiated client contracts and <b> problem-solved complex challenges </b> by leveraging technical expertise and client relationships daily.
    </li>
    <li>
      Proficiently utilized <b>Salesforce</b> to track and execute <b>CRM strategies</b>, elevating client engagement, and supervised employee training rotations.
    </li>
    <li>
      Prepared proposals and documentation, collaborating with cross-functional teams to identify <b>client requirements</b> and develop <b>tailored solutions</b>.
    </li>
  </Workplace>

</section>

<section class="layout-md py-0">
  <h2 class="heading2">Awards</h2>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Academic:</h3>
    <ul>
      <li>
        <b>Top 5 </b> QEC, <b>Top 3 </b> QSAC
      </li>
      <li>
        <b>Finalist <sup></sup
        ></b> in Hackathon at Queen's University
      </li>
      <li>Marketing Excellence Award</li>
    </ul>
  </div>

</section>
<section class="layout-md">
  <h2 class="heading2">Certifications</h2>

  <div class="mb-0">
    <h3 class="font-medium mb-1">Software:</h3>
    <ul>
      <li>
        AWS Certified AI Practitioner
      </li>
      <li>
        Stanford Machine Learning Specialization
      </li>
    </ul>
    <!-- <h3 class="font-medium mb-1">Finance:</h3> 
    <ul> -->
    <!-- <li>
      <b>CFA</b> Candidate 2025
    </li> -->
    <!-- <li><b>FRM</b> Candidate 2025</li> -->
  <!-- </ul> -->
  </div>

</section>

<style lang="postcss">
  b {
    @apply font-medium;
  }

  ul {
    @apply list-disc pl-7 marker:text-neutral-400;
  }

  .byline {
    @apply font-serif italic;
  }
</style>
