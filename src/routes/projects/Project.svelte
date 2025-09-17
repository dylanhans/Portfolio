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
    video?: string; // Add video support
    size?: string; // Add size property
  };

  export let data: Project;
  export let images: Record<string, { default: string }>;
  export let videos: Record<string, { default: string }>;

  // Check if there are additional images or video
  let mediaList = [];
  if (data.video) {
    // If there's a video, put it first in the media list
    mediaList = [{ type: "video", src: data.video }];
    // Add main image
    if (data.image) {
      mediaList.push({ type: "image", src: data.image });
    }
    // Add subimages
    if (data.subimages && data.subimages.length > 0) {
      mediaList.push(
        ...data.subimages.map((img) => ({ type: "image", src: img }))
      );
    }
  } else {
    // No video, use existing image logic
    let imageList =
      data.subimages && data.subimages.length > 0
        ? [data.image, ...data.subimages]
        : [data.image];
    mediaList = imageList.map((img) => ({ type: "image", src: img }));
  }

  let currentMediaIndex = 0;
  let currentMedia = mediaList[currentMediaIndex];
  let transitioning = false;
  let hasMultipleMedia = mediaList.length > 1;
  let videoElement: HTMLVideoElement;

  function nextMedia() {
    if (!hasMultipleMedia) return;
    transitioning = true;
    setTimeout(() => {
      currentMediaIndex = (currentMediaIndex + 1) % mediaList.length;
      currentMedia = mediaList[currentMediaIndex];
      transitioning = false;

      // Auto-play video when it becomes current
      setTimeout(() => {
        if (currentMedia.type === "video" && videoElement) {
          videoElement.play().catch(() => {
            // Handle autoplay failure silently
          });
        }
      }, 100);
    }, 750);
  }

  // Auto-slide only if there are multiple media items
  onMount(() => {
    if (hasMultipleMedia) {
      const interval = setInterval(nextMedia, 12500);
      return () => clearInterval(interval);
    }
  });

  // Helper function to get image source
  function getImageSrc(imagePath: string) {
    return images[`../../projects/${imagePath}`]?.default;
  }

  // Helper function to get video source
  function getVideoSrc(videoPath: string) {
    return (
      videos[`../../projects/${videoPath}`]?.default || `/projects/${videoPath}`
    );
  }

  // Handle video load
  function handleVideoLoad() {
    if (videoElement && currentMedia.type === "video") {
      videoElement.play().catch(() => {
        // Handle autoplay failure silently
      });
    }
  }
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

<!-- Description and media -->
<div class="space-y-4">
  <div class="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">
    <div class="col-span-3 md:col-span-2">
      <p class="text-lg font-light mb-3">{data.lead}</p>
      <Markdown source={data.content} />
    </div>
    <div
      class="col-span-3 md:col-span-1 relative overflow-visible flex justify-center items-start"
    >
      {#if currentMedia.type === "video"}
        <video
          bind:this={videoElement}
          src={getVideoSrc(currentMedia.src)}
          alt="Project Video"
          class="transition-opacity duration-500 ease-in-out"
          class:video-large={data.size === "large"}
          class:video-normal={data.size !== "large"}
          class:fade-out={transitioning}
          muted
          loop
          autoplay
          playsinline
          preload="auto"
          on:loadeddata={handleVideoLoad}
        />
      {:else}
        <div class="relative flex justify-center items-start w-full h-full">
          <img
            src={getImageSrc(currentMedia.src)}
            alt="Project Image"
            class:border={data.image_border}
            class="transition-opacity duration-500 ease-in-out"
            class:image-large={data.size === "large"}
            class:image-normal={data.size !== "large"}
            class:fade-out={transitioning}
          />
        </div>
      {/if}
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

  img,
  video {
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
  }

  .video-large {
    width: 150%;
    height: auto;
    border-radius: 12px;
    overflow: hidden;
  }

  .video-normal {
    width: 100%;
    height: auto;
    border-radius: 12px;
    overflow: hidden;
  }

  .image-large {
    width: 150%;
    height: auto;
  }

  .image-normal {
    width: 100%;
    height: auto;
  }

  .video-large.fade-out,
  .video-normal.fade-out {
    opacity: 0;
  }
</style>
