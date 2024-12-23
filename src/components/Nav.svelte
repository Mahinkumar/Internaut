<script lang="ts">
    import { Segment } from '@skeletonlabs/skeleton-svelte';

    let Mode = $state('Tech');
    let name = 'Internaut';
</script>




<nav class="h-24 w-screen flex items-center justify-center border-b-2 border-white/10">
    <ul class="h-16 w-screen flex justify-evenly items-center">
      <ul class="w-1/3 h-full btn-group preset-outlined-surface-200-800 flex-col mr-2 ml-2 md:flex-row flex justify-center items-center">
        <button type="button" onclick={()=>{Mode="Tech"}} class="btn w-1/3 {Mode == "Tech" ? 'preset-filled' : 'hover:preset-tonal' }">Tech</button>
        <button type="button" onclick={()=>{Mode="Space"}} class="btn w-1/3 {Mode == "Space" ? 'preset-filled' : 'hover:preset-tonal' }">Space</button>
        <button type="button" onclick={()=>{Mode="Dev"}} class="btn w-1/3 {Mode == "Dev" ? 'preset-filled' : 'hover:preset-tonal' }">Dev</button>
      </ul>
      <li class="w-1/3 h-full flex items-center justify-center text-2xl">{name}</li>
      <li class="w-1/3 h-full flex items-center justify-center space-x-4"
      ><a type="button" href="https://github.com/mahinkumar/Internaut" class="btn preset-filled">Star Github for updates</a>
      <a type="button" href="https://github.com/mahinkumar" class="btn preset-filled">Visit Github Profile</a>
      </li>
    </ul>
</nav>

