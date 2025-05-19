/*Choose correct img source based on media ID*/
export function getImage(mediaID){
    const img = document.createElement('img'); //<img></img>

    switch (mediaID) {
        case '001':
            img.src = '/Assets/Sula.jpg'
            break;
        case '002':
            img.src = '/Assets/theFourWinds.jpg'
            break;
        case '003':
            img.src = '/Assets/percyJackson.jpg'
            break;

        case '004':
            img.src = '/Assets/Dune.jpg'
            break;

        case '005':
            img.src = '/Assets/theBluestEye.jpg'
            break;

        case '006':
            img.src = '/Assets/EETAAO.jpg'
            break;

        case '007':
            img.src = '/Assets/Bargie.jpeg'
            break;
        case '008':
            img.src = '/Assets/mickey17.jpg'
            break;

        case '009':
            img.src = '/Assets/Wicked.png'
            break;
        case '010':
            img.src = '/Assets/Tangled.jpg'
            break;
    }
}