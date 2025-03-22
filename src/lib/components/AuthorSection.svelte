<script>
	import authorPic from '$assets/profile_pic.jpg';
</script>

<section class="landing-page-section">
	<h2 class="mb-l">About the Author</h2>
	<div class="author-container">
		<div class="author-text">
			<p class="mb-xs">
				Niklas Fischer is a seasoned expatriate with over seven years of experience living in Spain.
				Originally from New York, John left behind the hustle of corporate America to embrace a more
				fulfilling life on the sun-soaked coasts of Spain. Through his own journey, he has navigated
				the challenges of securing visas, finding the perfect home, and adapting to a new culture,
				making him an expert in the field of relocation.
			</p>
			<p>
				Niklas’ practical advice is rooted in real-life experience, having learned firsthand the
				intricacies of moving to a new country. His goal is to help others avoid common pitfalls and
				make their transition to life in Spain as smooth as possible. When not sharing his
				expertise, John enjoys exploring Spain’s rich culture and history, fully embracing the
				lifestyle he once dreamed of.
			</p>
		</div>
		<img src={authorPic} alt="Author" />
	</div>
</section>

<style>
	.author-container {
		display: flex;
		justify-content: space-between;
	}

	.author-text {
		width: 55%;
	}

	.author-container img {
		width: 40%;
		border: 6px solid black;
		box-shadow:
			0 2px 4px rgba(0, 0, 0, 0.1),
			0 4px 8px rgba(0, 0, 0, 0.1),
			0 8px 16px rgba(0, 0, 0, 0.1);
	}
</style>
