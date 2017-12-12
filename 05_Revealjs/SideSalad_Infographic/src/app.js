//https://github.com/hakimel/reveal.js/
//Styles
import "./scss/styles.scss";

//Require all images - make convenience working with pug
var req = require.context("./images", true, /\.(png|svg|jpe?g|gif)$/);
req.keys().forEach(function(key){
    req(key);
});

//Revealjs Dependency
require ("./js/head.min.js");
var Reveal = require ("./js/reveal.js");
Reveal.initialize({
    history: true,
    transition: 'concave'
});
//Other Dependencies if needed
// require("./js/marked");
// require("./js/markdown");
// require("./js/notes");
// require("./js/zoom");
// require("./js/highlight");
// require("./js/classList");
// require("./js/html5shiv");

 Reveal.initialize({
    
//         // Display presentation control arrows
//         controls: true,
    
//         // Help the user learn the controls by providing hints, for example by
//         // bouncing the down arrow when they first encounter a vertical slide
//         controlsTutorial: true,
    
//         // Determines where controls appear, "edges" or "bottom-right"
//         controlsLayout: 'bottom-right',
    
//         // Visibility rule for backwards navigation arrows; "faded", "hidden"
//         // or "visible"
//         controlsBackArrows: 'faded',
    
//         // Display a presentation progress bar
//         progress: true,
    
//         // Set default timing of 2 minutes per slide
//         defaultTiming: 120,
    
//         // Display the page number of the current slide
//         slideNumber: false,
    
//         // Push each slide change to the browser history
//         history: false,
    
//         // Enable keyboard shortcuts for navigation
//         keyboard: true,
    
//         // Enable the slide overview mode
//         overview: true,
    
//         // Vertical centering of slides
//         center: true,
    
//         // Enables touch navigation on devices with touch input
//         touch: true,
    
//         // Loop the presentation
//         loop: false,
    
//         // Change the presentation direction to be RTL
//         rtl: false,
    
//         // Randomizes the order of slides each time the presentation loads
//         shuffle: false,
    
//         // Turns fragments on and off globally
//         fragments: true,
    
//         // Flags if the presentation is running in an embedded mode,
//         // i.e. contained within a limited portion of the screen
//         embedded: false,
    
//         // Flags if we should show a help overlay when the questionmark
//         // key is pressed
//         help: true,
    
//         // Flags if speaker notes should be visible to all viewers
//         showNotes: false,
    
//         // Global override for autoplaying embedded media (video/audio/iframe)
//         // - null: Media will only autoplay if data-autoplay is present
//         // - true: All media will autoplay, regardless of individual setting
//         // - false: No media will autoplay, regardless of individual setting
//         autoPlayMedia: null,
    
//         // Number of milliseconds between automatically proceeding to the
//         // next slide, disabled when set to 0, this value can be overwritten
//         // by using a data-autoslide attribute on your slides
//         autoSlide: 0,
    
//         // Stop auto-sliding after user input
//         autoSlideStoppable: true,
    
//         // Use this method for navigation when auto-sliding
//         autoSlideMethod: Reveal.navigateNext,
    
//         // Enable slide navigation via mouse wheel
//         mouseWheel: false,
    
//         // Hides the address bar on mobile devices
//         hideAddressBar: true,
    
//         // Opens links in an iframe preview overlay
//         previewLinks: false,
    
//         // Transition style
//         transition: 'slide', // none/fade/slide/convex/concave/zoom
    
//         // Transition speed
//         transitionSpeed: 'default', // default/fast/slow
    
//         // Transition style for full page slide backgrounds
//         backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom
    
//         // Number of slides away from the current that are visible
//         viewDistance: 3,
    
//         // Parallax background image
//         parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"
    
//         // Parallax background size
//         parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"
    
//         // Number of pixels to move the parallax background per slide
//         // - Calculated automatically unless specified
//         // - Set to 0 to disable movement along an axis
//         parallaxBackgroundHorizontal: null,
//         parallaxBackgroundVertical: null,
    
//         // The display mode that will be used to show slides
//         display: 'block'

            // // The "normal" size of the presentation, aspect ratio will be preserved
            // // when the presentation is scaled to fit different resolutions. Can be
            // // specified using percentage units.
            // width: 960, //100%
            // height: 700, //100%
            width: "100%" ,
            height: "100%"

            // // Factor of the display size that should remain empty around the content
            // margin: 0.1,

            // // Bounds for smallest/largest possible scale to apply to content
            // minScale: 0.2,
            // maxScale: 1.5
    
    });

Reveal.addEventListener('fragmentshown', function( event ) {
    var f = event.fragment; // the fragment DOM element
    // animation class
    var ac = f.getAttribute('data-animate');

    f.classList.add('animated');
    f.classList.add(ac);
});

Reveal.addEventListener('fragmenthidden', function( event ) {
    var f = event.fragment; // the fragment DOM element
    // animation class
    var ac = f.getAttribute('data-animate');
    f.classList.remove(ac);
    f.classList.remove('animated');
});