<script lang="ts">
  import { page } from "$app/stores";

  import { onMount } from "svelte";
  import { FileBarChartIcon, BookOpenIcon } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";
  import Project from "./Project.svelte";

  const projects = import.meta.glob("../../projects/*.md", {
    eager: true,
  }) as any;
  const images = import.meta.glob("../../projects/*.{png,jpg,svg}", {
    eager: true,
  }) as any;
  // Add support for video files
  const videos = import.meta.glob("../../projects/*.{mp4,webm,mov}", {
    eager: true,
  }) as any;

  function trimName(id: string) {
    return id.match(/\.\.\/projects\/(.*)\.md$/)?.[1];
  }

  $: projectsByDate = Object.keys(projects)
    .filter((id) => !projects[id].category || projects[id].category === "ai")
    .sort((a, b) => projects[b].date - projects[a].date);
  $: projectsByTitle = Object.keys(projects).sort((a, b) => {
    const titleA = projects[a].title.toLowerCase();
    const titleB = projects[b].title.toLowerCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
  });

  // Filter projects by category
  $: projectsByAI = Object.keys(projects)
    .filter((id) => projects[id].category === "ai")
    .sort((a, b) => projects[b].date - projects[a].date);

  $: projectsByBlog = Object.keys(projects)
    .filter((id) => projects[id].category === "blog")
    .sort((a, b) => projects[b].date - projects[a].date);

  onMount(() => {
    const selected = $page.url.hash.slice(1);
    if (selected) {
      setTimeout(() => {
        if ($page.url.hash.slice(1) === selected) {
          document.getElementById(selected)?.scrollIntoView();
        }
      }, 500);
    }
  });

  let sortOrder: "date" | "ai" | "blog" = "date";
  let isTransitioning = false;

  // Function to get current projects based on sort order
  $: currentProjects = (() => {
    switch (sortOrder) {
      case "ai":
        return projectsByAI;
      case "blog":
        return projectsByBlog;
      default:
        return projectsByDate; // "All" shows all projects sorted by date
    }
  })();

  // Function to handle category changes with fade transition
  function changeSortOrder(newOrder: "date" | "ai" | "blog") {
    if (newOrder === sortOrder) return;

    isTransitioning = true;
    setTimeout(() => {
      sortOrder = newOrder;
      isTransitioning = false;
    }, 300); // Half of transition duration for smooth crossfade
  }
</script>

<Seo title="Dylan Hans" description="" />

<section class="layout-md py-12">
  <h2 class="heading2">Academic and Personal</h2>

  <p class="text-lg mb-4">
    This is my avenue for creative exploration, embracing talent and passion to
    transform inspiration into valuable projects, study new topics, and develop
    solutions that foster growth and innovation.
  </p>

  <p class="text-lg mb-4">
    I focus my efforts on financial applications and concepts, integrating
    programming, distributed systems, machine learning, and algorithms.
  </p>
</section>

<div class="bg-gray-900 text-neutral-200 dark">
  <section class="layout-md py-12">
    <h2 class="heading2 text-white">Table of Contents</h2>
    <ul class="sm:columns-2">
      {#each projectsByTitle as id (id)}
        <li>
          <a class="link" href="#{trimName(id)}">{projects[id].title}</a>
        </li>
      {/each}
    </ul>
  </section>
</div>

<div class="bg-neutral-50 border-b border-neutral-200 py-4">
  <div class="flex justify-center space-x-6">
    <button
      class:active={sortOrder === "date"}
      on:click={() => changeSortOrder("date")}
    >
      All
    </button>
    <button
      class:active={sortOrder === "ai"}
      on:click={() => changeSortOrder("ai")}
    >
      <FileBarChartIcon size={18} strokeWidth={1.8} class="mr-1.5" /> AI
    </button>
    <button
      class:active={sortOrder === "blog"}
      on:click={() => changeSortOrder("blog")}
    >
      <BookOpenIcon size={18} strokeWidth={1.8} class="mr-1.5" /> Updates (Coming
      Soon)
    </button>
  </div>
</div>

<div class="projects-container" class:fade-out={isTransitioning}>
  {#each currentProjects as id (id)}
    <section class="py-10" id={trimName(id)}>
      <div class="mx-auto max-w-[1152px] px-4 sm:px-6">
        <Project data={projects[id]} {images} {videos} />
      </div>
    </section>
  {/each}
</div>

<style lang="postcss">
  button {
    @apply flex items-center text-neutral-400 transition-colors hover:text-black;
  }

  button.active {
    @apply text-black;
  }

  .projects-container {
    transition: opacity 0.6s ease-in-out;
    opacity: 1;
  }

  .projects-container.fade-out {
    opacity: 0;
  }
</style>
