<footer class="layout-md mt-10 text-lg flex flex-row relative">
  <div class = "icon-container" >
    <a class="link" href="https://www.linkedin.com/in/dylanhans/">
      <img src="/dylan.jpeg" alt="Dylan Profile Pic" class="icon">
    </a>
  </div>
  <div class="footer-content">
    <div class="row">
      <span>LinkedIn</span>
      <hr />
      <a class="link" href="https://www.linkedin.com/in/dylanhans/">@dylanhans</a>
    </div>
    <div class="row">
      <span>GitHub</span>
      <hr />
      <a class="link" href="https://github.com/dylanhans">@dylanhans</a>
    </div>
    <div class="row">
      <span>Email</span>
      <hr />
      <a class="link" href="mailto:dylan-hans@outlook.com">dylanhans19@outlook.com</a>
    </div>
  </div>
</footer>


<style lang="postcss">
  .row {
    @apply flex relative items-baseline justify-between;
  }

  .row span {
    @apply text-neutral-500;
  }

  .row hr {
    @apply w-full mt-0.5 border-neutral-300 border-dotted;
  }

  .icon-container {
    @apply relative; /* Use relative positioning */
    margin-right: 1rem; /* Adjust spacing between icon and text */
  }

  .icon {
    width: 95px;
    height: 80px;
    border-radius: 10%;
    margin-top: 2px
  }

  .link {
    @apply inline-block; /* Display links as inline-block */
  }

  .footer-content {
    @apply ml-3; /* Adjust spacing between icon and content */
    width: 100%
  }
</style>