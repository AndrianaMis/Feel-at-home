// Function to change the current slide
function changeSlide(sectionId, direction) {
    const slideshowContainer = document.getElementById(sectionId);
    const images = slideshowContainer.getElementsByClassName('grid-item');
    let currentIndex = 0;

    // Find the current displayed image
    for (let i = 0; i < images.length; i++) {
        if (images[i].style.display === 'block') {
            currentIndex = i;
            break;
        }
    }

    // Hide the current image
    images[currentIndex].style.display = 'none';

    // Calculate the next index
    currentIndex = (currentIndex + direction + images.length) % images.length;

    // Display the next image
    images[currentIndex].style.display = 'block';
}

function scrolltosection(sectionid){
    var section=document.getElementById(sectionid);
    if(section){
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


window.addEventListener('load', function() {
    document.querySelector('.filter-container').style.opacity = '1';
});
