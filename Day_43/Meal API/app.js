const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealsEl = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const single_mealEl = document.getElementById('single-meal');


// Function
function seachMeal(e) {
    e.preventDefault();

    // Clear single_meal
    single_mealEl.inner = '';

    // Get search value
    const term = search.value;

    // Check for empty
    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                resultHeading.innerHTML = `<h3>Search results for '${term}':</h3>`;

                if (data.meals === null) {
                    resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
                } else {
                    mealsEl.innerHTML = data.meals
                        .map(
                            meal => `
            <div class="meal">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
              </div>
            </div>
          `
                        )
                        .join('');
                }
            });
        // Clear search text
        search.value = '';
    } else {
        console.log(term);
    }

}



// Event Listeners
submit.addEventListener('click', seachMeal)