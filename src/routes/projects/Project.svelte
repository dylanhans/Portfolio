<script lang="ts">
  import Markdown from "$lib/components/Markdown.svelte";
  import { formatTime } from "$lib/utils";
  import { onMount } from "svelte";

  type Project = {
    title: string;
    date: string;
    content: string;
    repo: string;
    topics: string[];
    lead: string;
    image: string;
    image_border?: boolean;
    subimages?: string[];
  };

  export let data: Project;
  export let images: Record<string, { default: string }>;

  // Check if there are additional images
  let imageList = data.subimages && data.subimages.length > 0 
    ? [data.image, ...data.subimages] 
    : [data.image]; // Keep it static if no subimages

  let currentImageIndex = 0;
  let currentImage = images[`../../projects/${imageList[currentImageIndex]}`]?.default;
  let transitioning = false; // Track transition state
  let hasMultipleImages = imageList.length > 1; // Check if slideshow is needed

  function nextImage() {
    if (!hasMultipleImages) return; // Only slide if there are multiple images
    transitioning = true; // Start fade-out
    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % imageList.length;
      currentImage = images[`../../projects/${imageList[currentImageIndex]}`]?.default;
      transitioning = false; // Reset transition after image switch
    }, 750); // Duration of fade-out before switching
  }

  // Auto-slide only if there are multiple images
  onMount(() => {
    if (hasMultipleImages) {
      const interval = setInterval(nextImage, 12500);
      return () => clearInterval(interval); // Cleanup on unmount
    }
  });
</script>

<!-- Title -->
<h3 class="text-black text-xl font-semibold mb-2">
  <span class="mr-1">{data.title}</span>
  <small class="whitespace-nowrap text-neutral-500 text-base font-normal">
    {formatTime("%B %Y", data.date)}
  </small>
</h3>

<!-- Stars and tags (pill bar) -->
<div class="flex flex-wrap mb-1">
  {#each data.topics as tag}
    <div class="pill">{tag}</div>
  {/each}
</div>

<!-- Description and image -->
<div class="space-y-4">
  <div class="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">
    <div class="col-span-3 md:col-span-2">
      <p class="text-lg font-light mb-3">{data.lead}</p>
      <Markdown source={data.content} />
    </div>
    <div class="col-span-3 md:col-span-1 relative overflow-hidden">
      <a rel="external" href={currentImage} class="relative block w-full h-full">
        <img
          src={currentImage}
          alt="Project Image"
          class:border={data.image_border}
          class="transition-opacity transform duration-500 ease-in-out absolute w-full"
          class:fade-out={transitioning}
          class:slide-left={transitioning}
        />
      </a>
    </div>
  </div>
</div>

<style lang="postcss">
  .pill {
    @apply flex items-center text-sm font-medium;
    @apply px-1.5 py-[1px] mr-1.5 mb-2 bg-neutral-100 rounded-full;
  }

  /* Fade effect */
  .fade-out {
    opacity: 0;
  }

  /* Slide effect */
  .slide-left {
    transform: translateX(-100%);
  }

  img {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    opacity: 1;
    transform: translateX(0);
  }
</style>
