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
    <p class="byline">B.Sc in Computer Engineering — Specialization in Artificial Intelligence</p>
  </div>

  <h4 class="font-medium mt-4 mb-1">Academic Involvement:</h4>
  <ul>
    
    <li><b>TA</b> for ELEC377 (Operating Systems)</li>
    <li>
      <b>TA</b> for APSC 141 (Programming I)
    </li>
    <li>
      <b>TA</b> for APSC 143 (Programming II)
    </li>
    <li>
      <b>RA</b> for APSC 497 (Research)
    </li>
  </ul>

  <h4 class="font-medium mt-4 mb-1">Extracurricular:</h4>
  <ul>
  
    <li><b>Quantitative Machine Learning Engineer</b> at QUANTT</li>
    <li><b>Financial Director</b> at QBMET</li>
    <li>
      <b> FD | Coordinator</b> at QSAA
    </li>
    <li>
      <b>  Coordinator</b> at CIRQUE
    </li>
    <li>
      <b> ML Engineer</b> at QMIND
    </li>
  </ul>

  <h4 class="font-medium mt-4 mb-1">Completed Technical Courses:</h4>
  <ul>
    <li>Machine Learning & Deep Learning (CS 221)</li>
    <li>Data Structures and Algorithms (CS 223)</li>
    <li>Apple Discrete Math (CS 228)</li>
    <li>Algorithms (CS 243)</li>
    <li>Operating Systems (CS 252r)</li>
    <li>Software Development (CS 252r)</li>
    <li>Software Quality Assurance (CS 263)</li>
    <li>Software Design & Development (MIT 6.824)</li>
    <li>Neural & Genetic Networks (MIT 6.838)</li>
    <li>Programming Language Processor (MIT 6.843)</li>
    <li>Engineering Design and Practice (Stat 210)</li>
    <li>Probability (Stat 211)</li>
    <li>Database Management (Stat 211)</li>
    <li>System Architecture (Stat 211)</li>
    <li>Performance Analysis (Stat 211)</li>
    <li>Calculus I (Stat 211)</li>
    <li>Calculus II (Stat 211)</li>

  </ul>

</section>

<section class="layout-md py-0">
  <h2 class="heading2">Professional Experience</h2>

  <Workplace
    title="Teaching Asssistant"
    company="Queen's University"
    dates="Sept 2023 – May 2023"
    location="Kingston, ON"
  >
    <li>
      Assessed midterms and labs for ELEC377: Operating Systems, alongside APSC141: Programming I and APSC143: Programming II, in Python.
    </li>
    <li>
      Led weekly labs and problem-solving sessions in Linux and C, emphasizing Kernel and OS principles for real-time and distributed systems. 
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
    <li>
      Supervised by the Software and Security Professor at Queens and integrated into the department repository, available for ongoing faculty use. 
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
      Created weekly plans in collaboration with students to address academic challenges, elevated grades by <b>16%</b> on average and enhanced confidence.
    </li>
  </Workplace>

  <Workplace
    title="Operations Engineer Intern"
    company="Peel Region"
    dates="June 2022 – Sept 2022"
    location="Caledon, ON"
  >
    <li>
      Managed two engineers in collecting and presenting high-quality, condition-based GIS data to diverse stakeholders, apart of a pilot <b>research</b> team. 
    </li>
    <li>
      Engineered geospatial models to <b>optimize </b>project efficiency and <b>consulted developers </b>on design and database software strategies via testing.
    </li>
    <li>
      Assisted in improvement of the team’s data application performance through <b>testing and analysis</b>, automating collection processes and efficiency, 
      and introduced data processing functions to refine and aggregate data, reducing recurrent daily tasks from several hours to <b>less than 35 minutes</b>. 
    </li>
  </Workplace>

  <Workplace
    title="Solutions Specialist"
    company="Rogers & Bell"
    dates="June 2020 – August 2020"
    location="Remote | Caledon, ON"
  >
    <li>
      Negotiated client contracts and <b> problem-solved complex challenges </b> by leveraging technical expertise and <b>built 50+</b> client relationships daily.
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
        <b>2<sup>nd</sup
        ></b> place in Medical Hackathon at Queen's University
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
        Stanford Machine Learning Specialization
      </li>
    </ul>
    <h3 class="font-medium mb-1">Finance:</h3> 
    <ul>
    <li>
      <b>CFA</b> Candidate 2024
    </li>
    <li><b>FRM</b> Candidate 2025</li>
  </ul>
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
