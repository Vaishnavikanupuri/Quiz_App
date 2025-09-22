<script>
  // Map your category names to OpenTDB IDs
  const categoryMap = {
    general: 9,
    science: 17,
    history: 23,
    geography: 22,
    sports: 21,
    technology: 18,
    religion: 20,
    english: 10 
  };

  // Select all category links
  const categories = document.querySelectorAll('.category');

  categories.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // stop page from going to quiz.html for now

      // Get the category from href query parameter
      const urlParams = new URLSearchParams(new URL(btn.href).search);
      const categoryName = urlParams.get("category");

      // Find category ID
      const categoryId = categoryMap[categoryName];

      // Build API URL
      const apiURL = `https://opentdb.com/api.php?amount=5&category=${categoryId}&type=multiple`;

      // Fetch questions
      fetch(apiURL)
        .then(res => res.json())
        .then(data => {
          console.log(data); // See all questions in browser console
          const question = data.results[0];
          alert("Question: " + question.question);
        })
        .catch(err => console.error(err));
    });
  });
</script>
