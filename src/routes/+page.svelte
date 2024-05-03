<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";

  const featuredProjects = [
    {
      name: "Split",
      href: "/projects#split",
      desc: "venture to finance payments for in-store purchases",
      aside: "currently in development",
    },
    {
      name: "Trading Orderbook",
      href: "/projects#trade",
      desc: "manage stock orders in command line interface",
      aside: "low latency system for hedge funds",
    },
    {
      name: "ECommerce CLI Platform",
      href: "/projects#cli",
      desc: "ebay clone with user function, orders, and marketplace",
      aside: "responsive platform with edge cases",
    },
    {
      name: "Muscle Bead Insertion Software Training",
      href: "/projects#mbi",
      desc: "vr software training and real-time feedback for residency ",
      aside: "hackathon 2nd place",
    },
    {
      name: "Investment Analytics Platform for Stocks",
      href: "/projects#stocks",
      desc: "interactive finance interface for technical analysis",
      aside: "scan financial reports, risk, and plotting capabilities",
    },
    {
      name: "Artificial Robotic Manipulation System",
      href: "/projects#robotics",
      desc: "human-robot interaction with enhanced control and vision",
      aside: "0.8s contraction, 3kg payload, top 5",
    },
    {
      name: "IBM Compiler Integration",
      href: "/projects#ibm",
      desc: "compiler creation & language processor",
      aside: "97% evaluation score",
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
  <span class="g"></span> quantitative software engineer<span class="g">,</span><br />
  <span class="g">interested in</span> capital markets <span class="g">and</span> finance.<span class="g"></span>
</p>

<div class="layout-md text-lg space-y-14">
  <div class="space-y-5">
    <p>
      I've worked at Queen's University assisting in teaching and researching throughout my Computer Engineering degree, specializing in artificial intelligence. 
    </p>

    <p>
      My passion lies within <em>software</em> and <em>innovation</em>.  
      Seeking opportunities to advance technologies that benefit businesses and society, 
      I aim to collaborate with individuals and organizations that share my interest for innovation and are committed to making a positive impact in the world. 
    </p>

    <p>
      Towards that goal, I am invested in financial technology and investment management development, which form the essential foundation for modern technology and applications.
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
   

    <p>
      Prevously, I've graduated from <a class="link" href=""
      >Queen's University</a
    > in April 2024, where I was a Teaching Assistant for
    <a class="link" href=""
    >Programming</a>  and an upper-level computer engineering classes <a class="link" href=""
      >Operating Systems,</a
    > Research Assistant, and apart of <a class="link" href="">QMIND</a>, <a class="link" href="">QUANTT</a>,  <a class="link" href="">CIRQUE</a>,  <a class="link" href="">QBMET</a>, and <a class="link" href="">QES</a>.

    <p style="font-size: smaller; "><b style="font-weight: 450;">Programming Stack:</b> Python, C/C++, Java, HTML, CSS, JavaScript, MATLAB, R, SQL, Bash/Unix</p>   
    <p style="font-size: smaller; margin: 0;"><b style="font-weight: 450;">Libraries / Frameworks:</b> Pandas, PyTorch, TensorFlow, Matplotlib, NumPy, REST, Node, React, Redux</p>
    <p style="font-size: smaller; margin: 0;"><b style="font-weight: 450;">Tools & Practices:</b> Git, Jira, Agile, CI/CD, Tableau, Docker, Microsoft Office</p>
    <p style="font-size: smaller; margin: 0;"><b style="font-weight: 450;">Other interests:</b> building personal projects, investments, reading and fitness.</p>

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
