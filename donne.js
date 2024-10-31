document.querySelector('#search').addEventListener('click', function(e){
    e.preventDefault();
    let boucle = document.getElementById('inputval').value.toLowerCase();
    let saisi = document.getElementById('saisi')
    switch(boucle){
        case 'for':
            saisi.innerText = 'la boucle for est une structure de contrôle de programmation qui permet de répéter l\'exécution d\'une séquence d\'instructions.';
        break
        case 'while':
            saisi.innerText = 'L\'instruction while permet de créer une boucle qui s\'exécute tant qu\'une condition de test est vérifiée. La condition est évaluée avant d\'exécuter l\'instruction contenue dans la boucle.';
        break
        case 'do while':
            saisi.innerText = 'L\'instruction do...while crée une boucle qui exécute une instruction jusqu\'à ce qu\'une condition de test ne soit plus vérifiée.';
        break
        default:
            saisi.innerText = 'Ce que vous avez saisi n\'est pas prise en compte les boucles que vous pouvez saisir sont : \n for - while - do while';
    }
})







//     let saisi = document.querySelector('#inputval').value;

//     if(saisi == 'for'){
//         document.querySelector('#pros').classList.add('none');
//         document.querySelector('#pros').classList.remove('active');
//         document.querySelector('#pras').classList.add('none');
//         document.querySelector('#pras').classList.remove('active');
//         document.querySelector('#pris').classList.remove('none');
//         document.querySelector('#pris').classList.add('active');
//     }else if( saisi == 'while'){
//         document.querySelector('#pris').classList.add('none');
//         document.querySelector('#pris').classList.remove('active');
//         document.querySelector('#pras').classList.add('none');
//         document.querySelector('#pras').classList.remove('active');
//         document.querySelector('#pros').classList.remove('none');
//         document.querySelector('#pros').classList.add('active');
//     } else if( saisi == 'do while'){
//         document.querySelector('#pris').classList.add('none');
//         document.querySelector('#pris').classList.remove('active');
//         document.querySelector('#pros').classList.add('none');
//         document.querySelector('#pros').classList.remove('active');
//         document.querySelector('#pras').classList.add('none');
//         document.querySelector('#pras').classList.add('active');
//     }