<script>
	import chevronIcon from '$assets/chevron-down.svg';

	const { faq, isExpanded, onclick } = $props();

	const containerClass = $derived(isExpanded ? 'container container-expanded' : 'container');
</script>

<button class={containerClass} {onclick}>
	<div class="question-and-answer">
		<p class="question mb-s">{faq.question}</p>
		<p class="answer">
			{faq.answer}
		</p>
	</div>
	<img
		src={chevronIcon}
		alt="A chevron icon to visually indicate that this section can be opened and closed"
	/>
</button>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 12px 0;
		border-bottom: 1px solid grey;
		text-align: left;
	}

	.question-and-answer {
		padding-right: 150px;
		flex-grow: 1;
	}

	.answer {
		max-height: 0;
		overflow: hidden;
		opacity: 0;
		transition:
			max-height 0.3s ease-out,
			opacity 0.3s ease-out;
	}

	button img {
		width: 24px;
		height: 24px;
		transition: transform 0.3s linear;
	}

	.question {
		font-weight: bold;
	}

	.container-expanded img {
		transform: rotate(180deg);
	}

	.container-expanded .answer {
		max-height: unset;
		opacity: 1;
	}
</style>
