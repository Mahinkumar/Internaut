<script lang="ts">
    import { Segment } from '@skeletonlabs/skeleton-svelte';
    import { Search } from 'lucide-svelte';

    let Mode = $state('Tech');
    let name = 'Internaut';
</script>




<nav class="h-24 flex items-center justify-center border-b-2 border-white/10">
    <ul class="h-16 flex justify-evenly items-center w-[80%]">
      <ul class="w-1/3 h-[80%] btn-group flex-col mr-2 ml-2 md:flex-row flex justify-start items-center">
        <button type="button" onclick={()=>{Mode="Tech"}} class="btn w-1/4 {Mode == "Tech" ? 'preset-filled' : 'hover:preset-tonal' }">Tech</button>
        <button type="button" onclick={()=>{Mode="Space"}} class="btn w-1/4 {Mode == "Space" ? 'preset-filled' : 'hover:preset-tonal' }">Space</button>
        <button type="button" onclick={()=>{Mode="Dev"}} class="btn w-1/4 {Mode == "Dev" ? 'preset-filled' : 'hover:preset-tonal' }">Dev</button>
        <button type="button" onclick={()=>{Mode="Home"}} class="btn w-1/4 {Mode == "Home" ? 'preset-filled' : 'hover:preset-tonal' }">Home</button>
      </ul>
      <li class="w-1/3 h-full flex items-center justify-center text-2xl">{name}</li>
      <li class="w-1/3 h-full flex items-center justify-evenly space-x-4"
      ><a type="button" href="https://github.com/mahinkumar/Internaut" class="btn">Archives</a>
      <a type="button" href="https://github.com/mahinkumar" class="btn">Bookmarks</a>
      <button type="button" class="btn"><Search/></button>
      
      </li>
    </ul>
</nav>

