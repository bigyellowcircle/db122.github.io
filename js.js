


$(document).ready(function(){
  $('.sortable').sortable();

  // $('.sortable li').hover(

  //     function() {
  //         $('.close').fadeIn('slow');
  //     },function() {
  //         $('.close').fadeOut('slow');
  //     }
  // );
   
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
         // document.getElementById('drag-zone-area').style.height = "80px";
         $('#overlay-main').css('opacity', '0');
         $('.inside-drag').css('height', '80px');
        $('.inside-drag img').css('display', 'none');
        $(".page-title h1").text("Files to be uploaded");
         // $('#drag-zone-area p').css('line-height', '50px');        
         // $( ".inside-drag" ).addClass( "inside-drag-second" );
         $( ".footer-inside a" ).addClass( "sapphire-button" );
         $( "#drag-zone-area" ).addClass( "drag-zone-area-small" );
         $(".footer-inside h2").text("Great job! Add more files or click Upload"); 
         // $('.sortable li').css('border-bottom', '1px solid #DDDFE1;');        
      });

     this.on("dragenter", function(event) {
        $('#overlay-main').css('opacity', '.85');
        $('#overlay-main').css('display', 'block');
        $('.sortable li').css('border-bottom', '0');
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