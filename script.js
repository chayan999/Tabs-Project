const tab = document.querySelector('.tabs');
const btn = document.querySelectorAll(".btn");
const articals = document.querySelectorAll('.content');


tab.addEventListener('click', (event) => {
    const id = event.target.dataset.id;

    if (id) {
        btn.forEach((bt) => {
            bt.classList.remove('live')
        });
        event.target.classList.add('live');


        articals.forEach((artical) => {
            artical.classList.remove('live')
        });

        const element = document.getElementById(id);

        element.classList.add('live')
    }
})