function upDate(previewPic) {
    /*selecting the preview images using getElementById */
    document.getElementById("image").style.backgroundImage = "url('"+ previewPic.getAttribute("src") + " ')";
    document.getElementById("image").innerHTML = previewPic.getAttribute("alt");

    /* In this function you should
       1) change the url for the background image of the div with the id = "image"
       to the source file of the preview image

       2) Change the text  of the div with the id = "image"
       to the alt text of the preview image
       */
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "url()";
   /*selecting and changing back to the original background  */
    /* In this function you should
   1) Update the url for the background image of the div with the id = "image"
   back to the orginal-image.  You can use the css code to see what that original URL was

   2) Change the text  of the div with the id = "image"
   back to the original text.  You can use the html code to see what that original text was
   */

}
