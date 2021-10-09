document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    // save entry
    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);

    // delete all
    const deleteAll = document.querySelector('#delete-all-entries');
    deleteAll.addEventListener('click', handleDelete)


});

const handleFormSubmit = function (event) {
    event.preventDefault();
    const list = document.querySelector('#forms');


    // film or tv show
    const newFilmOrTVItem = document.createElement('li');
    if (document.getElementById('film').checked) {
        rate_value = document.getElementById('film').value;
    }
    if (document.getElementById('tv-show').checked) {
        rate_value = document.getElementById('tv-show').value;
    }
    newFilmOrTVItem.textContent = `${rate_value}`
    list.appendChild(newFilmOrTVItem)
    

    // title
    const newTitleItem = document.createElement('li');
    newTitleItem.textContent = `'${event.target.title.value}'`
    list.appendChild(newTitleItem)


    // streaming platform
    const selectItem = document.createElement('li');
    selectItem.textContent = `${event.target.streamingplatform.value}`
    list.appendChild(selectItem)


    // ratings
    const newRatingsItem = document.createElement('li');
    if (document.getElementById('1').checked) {
        ratings_value = document.getElementById('1').value;
    }
    else if (document.getElementById('2').checked) {
        ratings_value = document.getElementById('2').value;
    }
    else if (document.getElementById('2').checked) {
        ratings_value = document.getElementById('3').value;
    }
    else if (document.getElementById('4').checked) {
        ratings_value = document.getElementById('4').value;
    }
    else if (document.getElementById('5').checked) {
        ratings_value = document.getElementById('5').value;
    }
    newRatingsItem.textContent = `${ratings_value}`
    list.appendChild(newRatingsItem)

    // space between entries
    const spaceBetween = document.createElement('li')
    spaceBetween.textContent = '  '
    list.appendChild(spaceBetween)

    const spaceBetween1 = document.createElement('li')
    spaceBetween1.textContent = '  '
    list.appendChild(spaceBetween1)
    
    // reset form
    document.getElementById('form').reset();
}

// delete all entries
const handleDelete = function (event) {
    deleteRadioInputs = document.querySelector('#forms');
    deleteRadioInputs.remove()
    location.reload()
  }
  













    