const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('li').length;
    console.log(
    `Categories: ${categoryName}\nElements: ${categoryItems}`
    );
});
