
async function fetchMedia() {
    const apiURL = "https://karensbuggin.github.io/CS601-HW2/media.json"

    try {
        const res = await fetch(apiURL);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    
}}
   
//Submit Button populates images of movies and books with respective JSON data attached
const btn = document.getElementById('loadCanvasButton')
.addEventListener('click', async () => {

    const data = await fetchMedia();
    
    data.forEach(media => {
        //Get appropriate img source based on ID 
        const img = getImage(media["id"]);

        // set custom dataset for use in restricted drop 
        img.dataset.mediaType = media.category;

        // make images draggable
        img.draggable = true;

        //set random ID number for each media item
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        img.id = `${media.category}-${randomNumber}`;  

        //Dragstart event to transfer data for each element
        img.addEventListener('dragstart', e =>{
            e.dataTransfer.setData('text/plain', img.id);
        })
        
        //add image to the DOM
        document.getElementById('canvas-container').appendChild(img);
    })
})
    

/*Choose correct img source based on media ID*/
export function getImage(mediaID){
    const img = document.createElement('img'); //<img></img>
    img.id = mediaID;

    switch (mediaID) {
        case '001':
            img.src = './Assets/Sula.jpg'
            break;
        case '002':
            img.src = './Assets/theFourWinds.jpg'
            break;
        case '003':
            img.src = './Assets/percyJackson.jpg'
            break;

        case '004':
            img.src = './Assets/Dune.jpg'
            break;

        case '005':
            img.src = './Assets/theBluestEye.jpg'
            break;

        case '006':
            img.src = './Assets/EETAAO.jpg'
            break;

        case '007':
            img.src = './Assets/Barbie.jpeg'
            break;
        case '008':
            img.src = './Assets/mickey17.jpg'
            break;

        case '009':
            img.src = './Assets/Wicked.png'
            break;
        case '010':
            img.src = './Assets/Tangled.jpg'
            break;
    }

    return img;
}



//Drop Zones 
const zones = ["bookDropZone", "movieDropZone"];

zones.forEach( id => {
    const dropZone = document.getElementById(id);

    //dragover event
    dropZone.addEventListener('dragover', e =>{
        e.preventDefault();
    })


    //drop event 
    dropZone.addEventListener('drop', e => {
        e.preventDefault();
        const imgID = e.dataTransfer.getData('text/plain');
        const img = document.getElementById(imgID);
        
	

	// restricted drop
	const mediaType = img.dataset.mediaType;
        
        if((id == "bookDropZone" && mediaType == "book")
        || (id == "movieDropZone" && mediaType =="movie")){
            e.target.appendChild(img);
            console.log(mediaType);
        } else{
            console.log(mediaType);
            console.log("Incorrect media type! Please try again.");
        }

    })

})


