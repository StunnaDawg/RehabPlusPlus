<script> 
  let stats = [
    {
      data: "100+",
      title: "Clinics Partnered"
    },
    {
      data: "10K+",
      title: "Patients Supported"
    },
    {
      data: "1000+",
      title: "Protocols Tracked"
    },
  ];
</script>

<section class="pt-24 pb-16 bg-background">
<div class="max-w-screen-xl mx-auto px-4 md:px-8">
  <div class="max-w-2xl mx-auto text-center">
    <h3 class="text-3xl font-semibold sm:text-4xl">
      Transforming Rehab Experiences for Clinics & Patients
    </h3>
    <p class="mt-3 text-foreground">
      Our platform is trusted by healthcare professionals to centralize and manage patient recovery protocols, 
      delivering better outcomes and streamlined processes.
    </p>
  </div>
  <div class="mt-12">
    <ul class="flex flex-col gap-4 items-center justify-center sm:flex-row">
      {#each stats as item (item.title)}
        <li class="w-full text-center border-primary border-2 px-12 py-4 rounded-lg sm:w-auto">
          <h4 class="text-4xl text-primary font-semibold">{item.data}</h4>
          <p class="mt-3 text-gray-400 font-medium">{item.title}</p>
        </li>
      {/each}
    </ul>
  </div>
</div>
</section>

  