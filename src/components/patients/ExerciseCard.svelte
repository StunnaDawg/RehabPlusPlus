<script lang="ts">
    import { slide } from 'svelte/transition';
    import { ChevronDown, ChevronUp, Check, Play } from 'lucide-svelte';
    import * as Card from '$lib/components/ui/card/index';
    import ExercisePlan from '../patients/ExercisePlan.svelte'
  
    export let exercise: {
      id: number;
      name: string;
      number: number;
      estimatedTime: string;
      description: string;
      setsReps: string;
      videoLink: string;
      completed: boolean;
      completionDetails?: {
        sets: number;
        reps: number;
        weight: number;
        pain: number;
      };
    };
  
    let isDropdownOpen = false;
  
    function toggleDropdown() {
      isDropdownOpen = !isDropdownOpen;
    }
  
    function markAsCompleted() {
      exercise.completed = true;
      // In a real application, you would save this state to a database or store
    }
  
    function startWorkout() {
      // Implement start exercise functionality
      console.log('Starting exercise', exercise.number);
    }
  </script>
  
  <Card.Root class="bg-muted/80 shadow-md rounded-lg overflow-hidden mb-4 md:w-[350px] w-64">
    <div class="p-4">
      <div class="flex justify-between flex-col">
        <h2 class="text-xl font-bold">Workout {exercise.number}</h2>
        <h3 class="text-lg font-semibold">{exercise.name}</h3>
        <div class="flex items-center space-x-2">
          <span class="text-sm text-gray-500">{exercise.estimatedTime}</span>
          {#if exercise.completed}
            <span class="text-green-500"><Check size={20} /></span>
          {/if}
        </div>
      </div>
      <button
        on:click={toggleDropdown}
        class="mt-2 text-sm text-blue-600 hover:text-blue-800 flex items-center"
        aria-expanded={isDropdownOpen}
        aria-controls="exercise-details-{exercise.id}"
      >
        {isDropdownOpen ? 'Hide' : 'Show'} details
        {#if isDropdownOpen}
          <ChevronUp size={16} />
        {:else}
          <ChevronDown size={16} />
        {/if}
      </button>
    </div>
  
    {#if isDropdownOpen}
      <div id="exercise-details-{exercise.id}" transition:slide={{ duration: 300 }} class="flex flex-col px-4 pb-4">
        <h3 class="font-semibold mb-2">Description</h3>
        <p class="text-sm mb-2">{exercise.description}</p>
        
        <h3 class="font-semibold mb-2">Sets & Reps</h3>
        <p class="text-sm mb-2">{exercise.setsReps}</p>
        
        <h3 class="font-semibold mb-2">Video Guide</h3>
        <a href={exercise.videoLink} target="_blank" rel="noopener noreferrer" class="text-sm text-blue-600 hover:underline">Watch video</a>
  
        {#if exercise.completed && exercise.completionDetails}
          <div class="mt-4 bg-gray-100 p-3 rounded">
            <h3 class="font-semibold mb-2">Completion Details</h3>
            <p class="text-sm">Sets: {exercise.completionDetails.sets}</p>
            <p class="text-sm">Reps: {exercise.completionDetails.reps}</p>
            <p class="text-sm">Weight: {exercise.completionDetails.weight} kg</p>
            <p class="text-sm">Pain Level: {exercise.completionDetails.pain}/10</p>
          </div>
        {/if}
      </div>
    {/if}
  
    {#if !exercise.completed}
      <div class="px-4 pb-4">
        <button
          on:click={markAsCompleted}
          class="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
        >
          Mark as Completed
        </button>
      </div>
    {/if}
  </Card.Root>