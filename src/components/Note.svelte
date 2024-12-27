<script>
  export let features = [
    {
      title: "Always ready\nto capture\neverything",
      description:
        "The best ideas can come when you're least expecting them. NotePen is always with you to ensure none of them slip away.",
      modalContent: {
        sampleTime: "7:30am",
        sampleTitle: "Moving commits into todos",
        sampleNote:
          "This is a sample note content for feature 1. Capture your development tasks and ideas instantly with NotePen's quick-access interface.",
      },
    },
    {
      title: "Press, record,\nrecall",
      description:
        "Simply press and capture every important detail, effortlessly.",
      modalContent: {
        sampleTime: "2:15pm",
        sampleTitle: "Quick meeting notes",
        sampleNote:
          "This is a sample note content for feature 2. One-touch recording makes it simple to save your thoughts and review them later.",
      },
    },
  ]

  export let deviceImage = "/notepin.png"

  let showModal = false
  let activeFeature = null

  function toggleModal(featureIndex) {
    activeFeature = featureIndex
    showModal = !showModal
  }
</script>

<div
  class="min-h-screen bg-black text-white px-4 py-8 md:py-24 rounded-[5rem] md:rounded-[12.5rem]"
>
  <div class="max-w-6xl mx-auto text-center">
    <h1
      class="text-4xl md:text-[7.5rem] font-light mb-8 md:mb-16 whitespace-pre-line leading-[1]"
    >
      Nothing that matters is missed
    </h1>

    <div
      class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center mb-8 md:mb-16"
    >
      <!-- First feature -->
      <div class="text-left p-4 md:p-8">
        <h2 class="text-2xl md:text-4xl font-light mb-4 whitespace-pre-line">
          {features[0].title}
        </h2>
        <p class="mb-4 text-white/80">{features[0].description}</p>
        <button
          class="text-white px-4 py-2 rounded-full border-white border-2"
          on:click={() => toggleModal(0)}
        >
          +
        </button>
      </div>

      <!-- Device image -->
      <div class="device flex justify-center items-center">
        <img
          src={deviceImage}
          alt="NotePen Device"
          class="max-w-[200px] md:max-w-[300px]"
        />
      </div>

      <!-- Second feature -->
      <div class="text-left p-4 md:p-8">
        <h2 class="text-2xl md:text-4xl font-light mb-4 whitespace-pre-line">
          {features[1].title}
        </h2>
        <p class="mb-4 text-white/80">{features[1].description}</p>
        <button
          class="text-white px-4 py-2 rounded-full border-white border-2"
          on:click={() => toggleModal(1)}
        >
          +
        </button>
      </div>
    </div>

    <h3 class="text-3xl md:text-5xl font-light">Always by your side</h3>
  </div>

  {#if showModal}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="fixed top-0 left-0 right-0 bottom-0 bg-black flex items-center justify-center z-50"
      on:click={() => toggleModal(activeFeature)}
    >
      <div
        class="bg-[#f5f5f5] w-[90%] max-w-[800px] h-[80vh] rounded-[20px] p-[2rem] text-black relative"
        on:click|stopPropagation
      >
        <button
          class="absolute top-[2rem] left-[2rem] bg-[none] border-none text-[1.5rem] cursor-pointer"
          on:click={() => toggleModal(activeFeature)}
        >
          ←
        </button>
        <div class="p-[1rem] md:p-[3rem]">
          <h2 class="text-2xl md:text-4xl font-light mb-4 whitespace-pre-line">
            {features[activeFeature].title}
          </h2>
          <p class="text-gray-600 mb-8">
            {features[activeFeature].description}
          </p>
          <div class="mt-[2rem]">
            <div class="bg-white p-[1rem] rounded-[10px] mb-[1rem] shadow-sm">
              <span class="text-[#666] text-[0.9rem]">
                {features[activeFeature].modalContent.sampleTime}
              </span>
              <h4 class="mx-[0.5rem] my-2 text-[1.2rem] font-medium">
                {features[activeFeature].modalContent.sampleTitle}
              </h4>
              <p class="text-gray-700">
                {features[activeFeature].modalContent.sampleNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
