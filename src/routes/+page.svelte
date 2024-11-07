<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";

  const featuredProjects = [
    {
      name: "Split Financial",
      desc: "venture to finance payments for in-store purchases",
      aside: "currently in development",
    },
    {
      name: "IBM Compiler & Framework Integration",
      desc: "compiler creation & language processor",
      aside: "97% evaluation score",
    },
    {
      name: "AI Financial Analytics Platform for Stocks",
      desc: "interactive finance interface for technical analysis",
      aside: "scan financial reports, risk, and plotting capabilities",
    },
    {
      name: "Autonomous Arm System for Human-Robot Interaction",
      desc: "human-robot interaction with enhanced control and vision",
      aside: "0.8s contraction, 3kg payload, top 5",
    },
    {
      name: "Pricing Models",
      desc: "streamlit app with monte carlo, black-schols, and more",
      aside: "analyze data to make informed decisions",
    },
    {
      name: "Muscle Bead Insertion Software Training",
      desc: "vr software training and real-time feedback for residency ",
      aside: "hackathon 2nd place",
    },
    {
      name: "Trading Orderbook",
      desc: "manage stock orders in command line interface",
      aside: "low latency system for firms, hedge funds, in dev.",
    },
  ];
</script>

<Seo
  title="Dylan Hans"
  description=""
/>

<p
  class="layout-md text-black text-xl leading-tight font-light mb-10"
  id="dylan-text"
>
  <span class="g"></span>Software engineer<span class="g">,</span><br />
  <span class="g">interested in</span> building applications, <span class="g">and</span> fintech .<span class="g"></span>
</p>

<div class="layout-md text-lg space-y-14">
  <div class="space-y-5">
    <p>
      I've worked at Queen's University assisting in teaching and researching throughout my Computer Engineering degree, specializing in software engineering. 
    </p>

    <p>
      My passion lies within <em>software</em> and <em>innovation</em>.  
      Seeking opportunities to advance technologies that benefit businesses and society, 
      I aim to collaborate with individuals and organizations that share my interest for innovation and are committed to making a positive impact in the world. 
    </p>

    <p>
      Towards that goal, I am commited to financial technology and investment management development, which form the building blocks for modern technology and applications.
    </p>
  </div>

  <div class="leading-snug space-y-4">
    <p class="pb-2">Notable project experience:</p>

    {#each featuredProjects as project}
      <a class="project-pair" href={project.href}>
        <div class="text-black font-medium">
          {project.name}
          <ArrowUpRight size={18} class="inline text-neutral-400" />
        </div>
        <div>
          <p>{project.desc}</p>
          {#if project.aside}
            <aside>{project.aside}</aside>
          {/if}
        </div>
      </a>
    {/each}
  </div>

  <div class="space-y-5">
    <p style="font-size: smaller; "><b style="font-weight: 450;">Programming Stack:</b> Python, C/C++, Java, JavaScript, TypeScript, HTML/CSS, SQL</p>   
    <p style="font-size: smaller; margin: 0;"><b style="font-weight: 450;">Technologies:</b> ReactJS, NodeJS, Express, Rest, AWS, GCP, Docker, Kubernetes, Pandas, PyTorch, TensorFlow</p>
    <p style="font-size: smaller; margin: 0;"><b style="font-weight: 450;">Tools & Practices:</b> Git, Jira, Agile, TDD, CI/CD</p>
    <p style="font-size: smaller; margin: 0;"><b style="font-weight: 450;">Other Interests:</b> building personal projects, investments, reading and fitness.</p>
    <p style="font-size: smaller; margin: 0;">
      <b style="font-weight: 450;">
          <a href="https://github.com/dylanhans/portfolio_main" style="text-decoration: underline;">Website Code</a>
      </b>
  </p>
  </div>

</div>

<style lang="postcss">
  
  .g {
    @apply text-neutral-400;
  }

  em {
    @apply font-serif text-[110%] leading-[100%];
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #dylan-text{
      @apply -mt-10;
    }
  }
</style>
