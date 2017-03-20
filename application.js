document.addEventListener('DOMContentLoaded', function() {
    //1 select the canvas
    let canvas = document.getElementById('easel');
    //2 get the context of the canvas
    let context = canvas.getContext("2d");
    //3 fix the width & height of the canvas according to the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //create a variable for the radius or size of the brush by default
    let radius = 10;
    //2.1 create a var dragging false then use true when you use
    let dragging = false;
    //2.11 create a variable to put the lineTo same size as the brush
    context.lineWidth = radius * 2;
    //5 function of the mouseDown
    function putPoint(e) {
        //2.3 check if dragging works
        if (dragging) {
            //2.9 add a context.lineTo
            context.lineTo(e.clientX, e.clientY);
            //2.10 executiion of the point
            context.stroke();
            context.beginPath();
            // 6 context.arc(X,Y,radius,start,end); the x and coordinate of the event
            //context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI * 2); ->if it's with a mousedown, it doesn't work
            context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
            //clientX and clientY is more stable than offsetX offsetY(it is ess standardized between each navigator)
            // 7 fill that
            context.fill();
            //2.7 create a beginPath
            context.beginPath();
            //2.8 move according to the position of the mouse
            context.moveTo(e.clientX, e.clientY);
        }
    }
    //2.4create a function engage
    function engage(e) {
        dragging = true;
        //2.6 don't know if it is mandatory add the function putPoint(e)
        putPoint(e);
    }
    //2.5create a function disengage
    function disengage(e) {
        dragging = false;
        //2.12 to avoid the connection between the engage and disengage line
        context.beginPath();
    }
    //4 add an eventlistener to the canvas a mousedown then to the second part change it canvas.addEventListener('mousemove', putPoint);
    canvas.addEventListener('mousemove', putPoint, false);
    //2.2 create addEventListener mouse down and mouseup
    canvas.addEventListener('mousedown', engage, false);
    canvas.addEventListener('mouseup', disengage, false);
    //functions to adapt to the mobile
    function touchMove(e) {
        if (e.target == canvas) {
            e.preventDefault();
            putPoint(e);
        }
    }

    function touchStart(e) {
        if (e.target == canvas) {
            e.preventDefault();
            putPoint(e);
        }
    }

    function touchEnd(e) {
        if (e.target == canvas) {
            e.preventDefault();
            putPoint(e);
        }
    }
    //MOBILE
    document.body.addEventListener('touchmove', touchMove, false);
    //2.2 create addEventListener mouse down and mouseup
    document.body.addEventListener('touchstart', touchStart, false);
    document.body.addEventListener('touchend', touchEnd, false);
});
