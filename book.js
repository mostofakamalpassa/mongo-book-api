
const loadBook = async ()=>{

    try{

        const url = await fetch('https://api.itbook.store/1.0/search/mongodb')
        // 	https://api.itbook.store/1.0/
        const data = await url.json();

         console.log(data);
       await displayData(data.books);


    }catch(error){
        console.log(error)
    }
}


loadBook();

const displayData = async data => {
   // console.log(data);

    const showData = document.getElementById('show-displayData');
    data.forEach(da => {
        const div = document.createElement('div');
        div.setAttribute('class', 'grid-child')
        div.innerHTML = `
            <h2> Title :  ${da.title} </h2>
            <h3> Sub Title :  ${da.subtitle} </h3>
            <h3> ISBN :  ${da.isbn13} </h3>
            <h3> Price :  ${da.price} </h3>
            <img src='${da.image}' alt='image not found'/>
        `;

        showData.appendChild(div);
       // console.log(da)
    });
}