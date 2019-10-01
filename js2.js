


$(document).ready(function(){
  $('.sortable').sortable();

    setTimeout(function(){
        $('.welcome-dropbox').animate({'right': '0'},'300');
    }, 1500);

        setTimeout(function(){
        $('.overlay').css('opacity', '.8')
    }, 1000);



});







//DropzoneJS snippet - js
$.getScript('https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/min/dropzone.min.js',function(){
  // instantiate the uploader



  $('#file-dropzone').dropzone({ 
    url: "/upload",
    maxFilesize: 100,
    paramName: "uploadfile",
    resizeQuality: 1,
    clickable: true,
    addRemoveLinks: true,
    maxThumbnailFilesize: 99999,
    previewsContainer: '.visualizacao', 
    previewTemplate : $('.preview').html(),
    init: function() {
      this.on("addedfile", function(file) {
         $('#overlay-main').css('opacity', '0');
         $('.uploader-bullets').css('display', 'none');
         $( ".footer-inside a" ).addClass( "sapphire-button" );
         $(".page-title h1").text("Files"); 
         $(".page-title").css('margin-top', '50px');
         $('.upload-cta').css('display', 'block');     
         $('.newfoldericon').css('display', 'block'); 
         $('.skip-text').css('display', 'none');        

      });

     this.on("dragenter", function(event) {
        $('#overlay-main').css('opacity', '.85');
        $('#overlay-main').css('display', 'block');
      });

     this.on("dragleave", function(event) {
          $('#overlay-main').css('opacity', '0');
      });

      //  this.on("drop", function(event) {
      //    $('#overlay-main').css('opacity', '0');
      // });

      
      this.on('completemultiple', function(file, json) {
       $('.sortable').sortable('enable');
      });
      this.on('success', function(file, json) {
        alert('aa');
      });
      
      this.on('addedfile', function(file) {
       
      });
      
      this.on('drop', function(file) {
        console.log('File',file)
      }); 
    }
  });
});
$(document).ready(function() {});