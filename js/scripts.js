$(document).ready(function() {

    $('.form-contact__input').on('change', function() {
        if ($(this).val().length > 0) {
            $(this).addClass('filled');
        }
    });

    // let inputs = document.querySelectorAll('.form-contact__input');
    // inputs.forEach(function(input) {
    //     input.addEventListener('change', function() {
    //         // console.log(this.value);
    //         if (this.value.length >0) {
    //             this.classList.add('filled');
    //         }
    //     })
    // }); альтернативный вариант без jQuery

    $('.slider').slick({
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 2000,
        fade: true
    });

    let xhr = new XMLHttpRequest();

    xhr.open('GET','https://gorest.co.in/public-api/users?_format=json&access-token=_L6uwfFy2K4HlTxssxMSnfxaMcBJ5moirkWF');

    xhr.responseType = 'json';

    xhr.onreadystatechange = function() { // (3)
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            let people = xhr.response.result; 
            let target = document.getElementById('juryUsers');

            for (let i = 0; i < 3; i++) {
                let person = people[i];

                let html = document.createElement('div');
                html.classList.add('user');
                html.classList.add('user--round');

                html.innerHTML =`
                    <div class="user__wrap-jury"><img class="user__img" src="https://loremflickr.com/320/240/girl/all" alt="${person.first_name} ${person.last_name}"></div>
                    <div class="user__name">${person.first_name} ${person.first_name}</div>
                    <div class="user__position">${person.address}</div>
                    `;

                    target.append(html);
               
            };
        }
    }

    xhr.send();

});

