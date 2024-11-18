<script lang="ts">
  import ExerciseCard from '../patients/ExerciseCard.svelte';

  export let numberOfWeeks: number;
  
  // This would typically come from an API or database
  // Instead of number of weeks it would be the protocol assigned i think
  const workouts = Array.from({ length: numberOfWeeks * 3 }, (_, i) => ({
    id: i + 1,
    number: i + 1,
    name: "Exercise",
    estimatedTime: '30 minutes',
    description: `Exercise description for protocol${i + 1}`,
    setsReps: '3 sets of 12 reps',
    videoLink: '',
    completed: false
  }));
</script>

<div class="">
  <h1 class="text-3xl font-bold mb-6">Week 1</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!--For loop to go display each excercise from the excercises in the protocol-->
    {#each workouts as exercise (exercise.id)}
      <ExerciseCard {exercise} />
    {/each}
  </div>
</div>