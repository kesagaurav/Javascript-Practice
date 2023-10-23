const modalMovie=document.getElementById('add-modal');

const startMovieButton=document.querySelector(' header button');

const backdrop=document.getElementById('backdrop');

const cancelMovieButton=modalMovie.querySelector('.btn--passive');

const addMovieButton=cancelMovieButton.nextElementSibling;


const userInputs=modalMovie.querySelectorAll('input');

const entryText=document.getElementById('entry-text');

const deleteModalMovie=document.getElementById('delete-modal');



const movies=[];


const updateUi=()=>{
    if(movies.length===0){
        entryText.style.display='block';

    }else{
        entryText.style.display='none';
    }
}

const cancelMovieDeletion=()=>{
    toggleBackDrop();
    deleteModalMovie.classList.remove('visible');
}

const deleteMovie=movieId=>{
    let movieIndex=0;
        for(const movie of movies){
            if(movie.id===movieId){
                break;
            }
            movieIndex++;
        }

        movies.splice(movieIndex,1);
        const list=document.getElementById('movie-list');
        list.children[movieIndex].remove();
        //list.removeChild[list.children[movieIndex]];
        cancelMovieDeletion();
        updateUi();
}



const deleteMovieHandler=(movieId)=>{
    deleteModalMovie.classList.add('visible');
    toggleBackDrop();
   const cancelDeletionButton= deleteModalMovie.querySelector('.btn--passive');
   let dangerButton= deleteModalMovie.querySelector('.btn--danger');
    dangerButton.replaceWith(dangerButton.cloneNode(true));
    dangerButton= deleteModalMovie.querySelector('.btn--danger');
   cancelDeletionButton.addEventListener('click',cancelMovieDeletion);
   dangerButton.addEventListener('click',deleteMovie.bind(null,movieId));

   // deleteMovie(movieId);
}


const closeMovieModal=()=>{
        modalMovie.classList.remove('visible');
}


const renderMovieEle=(id,title,imageUrl,rating)=>{
const newMovieEle=document.createElement('li');
newMovieEle.className='movie-element';
newMovieEle.innerHTML=`
<div class="movie-element___image">
<img src="${imageUrl}",alt="${title}">
</div>

<div class="movie-element___info">
<h2>${title}</h2>
<p>${rating}/5 stars</p>
</div>
`;

newMovieEle.addEventListener('click',deleteMovieHandler.bind(null,id));
const list=document.getElementById('movie-list');
list.appendChild(newMovieEle);

}


const clearMovieInpus=()=>{
    for(const  usrInputs of userInputs){
            usrInputs.value='';
    }
}


const toggleMoviemodal=()=>{
    modalMovie.classList.toggle('visible');
    toggleBackDrop();
}

const toggleBackDrop=()=>{
    backdrop.classList.toggle('visible');
}

const backdropToggleHandler=()=>{
    closeMovieModal();
    cancelMovieDeletion();
    clearMovieInpus();
}


const cancelMovieModal=()=>{
closeMovieModal();
    clearMovieInpus();
    toggleBackDrop();
}


const addMovieModalHandler=()=>{
    const title=userInputs[0].value;
    const imageUrl=userInputs[1].value;
    const rating=userInputs[2].value;

    if(title.trim()==='' || imageUrl.trim()==='' || rating.trim()==='' || +rating.value<1 || +rating.value>5){
        alert('plz enter valid values from 1 to 5');
        return;
    }
    const newMovie={
        id:Math.random().toString(),
        title:title,
        image:imageUrl,
        rating:rating
    };
    
    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    clearMovieInpus();
    toggleBackDrop();
    updateUi();
    renderMovieEle(newMovie.id, newMovie.title,newMovie.image,newMovie.rating);

}



startMovieButton.addEventListener('click',toggleMoviemodal);


backdrop.addEventListener('click',backdropToggleHandler);


cancelMovieButton.addEventListener('click',cancelMovieModal);

addMovieButton.addEventListener('click',addMovieModalHandler);