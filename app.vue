<script  setup>

</script>

<template>
  <div>

    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
      <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar bg-neutral">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div> 
        <div class="flex-1 px-2 mx-2 text-2xl font-bold text-white">Portfolio</div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li class="text-white"><NuxtLink to="/">Home</NuxtLink></li>
            <li class="text-white"><NuxtLink to="/projects">Projects</NuxtLink></li>
          </ul>
        </div>
      </div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      </div> 
      <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label> 
      <ul class="menu p-4 w-80 bg-base-100">
        <!-- Sidebar content here -->
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/projects">Projects</NuxtLink></li>
        
      </ul>

      </div>
    </div>
  </div>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 10rem;
}
</style>

