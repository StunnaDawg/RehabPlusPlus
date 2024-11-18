<script>
    let currentTestimonial = 0;
    const testimonials = [
        {
            avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
            name: 'Nick Bagnell',
            title: 'Physiotherapist, Proactive Health & Peformance',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.'
        },
        {
            avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
            name: 'Dr. Nikole MacLellan',
            title: 'Naturopathic Doctor',
            quote: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, that the point of using Lorem Ipsum.'
        },
        {
            avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
            name: 'Dr. Chad Anderson',
            title: 'Chiropractor',
            quote: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.'
        }
    ];
</script>

<section class="py-14">
    <div class="max-w-screen-xl mx-auto px-4 md:px-8">
        <div class="max-w-3xl mx-auto text-center">
            <h3 class="font-bold pb-6 capitalize tracking-wide">What healthcare professionals are saying</h3>
            {#each testimonials as testimonial, index}
                {#if currentTestimonial === index}
                    <figure>
                        <blockquote>
                            <p class="text-foreground/60 text-xl font-semibold sm:text-2xl">{testimonial.quote}</p>
                        </blockquote>
                        <div class="mt-6">
                            <img src={testimonial.avatar} alt=""class="w-16 h-16 mx-auto rounded-full" />
                            <div class="mt-3">
                                <span class="block font-semibold">{testimonial.name}</span>
                                <span class="block text-foreground/80 text-sm mt-0.5">{testimonial.title}</span>
                            </div>
                        </div>
                    </figure>
                {/if}
            {/each}
        </div>
        <div class="mt-6">
            <ul class="flex gap-x-3 justify-center">
                {#each testimonials as testimonial, index}
                    <li>
                        <button 
                            class="w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-primary/50 focus:ring"
                            class:bg-primary={currentTestimonial === index}
                            class:bg-gray-300={currentTestimonial !== index}
                            on:click={() => currentTestimonial = index}
                            aria-label={`Testimonial ${index + 1}`}
                        ></button>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</section>