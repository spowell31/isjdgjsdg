thumb1 = document.getElementById("ch1")
thumb2 = document.getElementById("ch2")
thumb3 = document.getElementById("ch3")
zoom = document.getElementById("zoom")
bg = document.getElementById("bg")
zoomw = 100;
zoomh =70;
zoomcontrols = document.getElementById("zoomcontrols")
bgnum = 0

function BG1(){
    bgnum = 1
    thumb1.style.backgroundImage = "url(i1.jpg)"
    thumb2.style.backgroundImage = "url(i2.jpg)"
    thumb3.style.backgroundImage = "url(i3.jpg)"
}

function BG2(){
    bgnum = 2
    thumb1.style.backgroundImage = "url(i4.jpg)"
    thumb2.style.backgroundImage = "url(i5.jpg)"
    thumb3.style.backgroundImage = "url(i6.jpg)"
}

function BG3(){
    bgnum = 3
    thumb1.style.backgroundImage = "url(i7.jpg)"
    thumb2.style.backgroundImage = "url(i8.jpg)"
    thumb3.style.backgroundImage = "url(i9.jpg)"
}

function BG4(){
    bgnum = 4
    thumb1.style.backgroundImage = "url(i10.jpg)"
    thumb2.style.backgroundImage = "url(i11.jpg)"
    thumb3.style.backgroundImage = "url(i12.jpg)"
}

thumb1.addEventListener("mouseenter", function(){
    zoom.style.backgroundImage = thumb1.style.backgroundImage
})

thumb2.addEventListener("mouseenter", function(){
    zoom.style.backgroundImage = thumb2.style.backgroundImage
})

thumb3.addEventListener("mouseenter", function(){
    zoom.style.backgroundImage = thumb3.style.backgroundImage
})


function makebg(){
    bg.style.backgroundImage = zoom.style.backgroundImage
    zoom.style.backgroundImage = "none"
}

function resetzoom(){
    bg.style.backgroundImage = "none"
}

function showapp(){
    app1.style.display = "block"
}

function hideapp(){
    app1.style.display = "none"
}

function plus(){
    zoomw += 10
    zoomh += 7
    zoom.style.width = zoomw + "%"
    zoom.style.height = zoomh + "%"
}

function minus(){
    zoomw -= 10
    zoomh -= 7
    zoom.style.width = zoomw + "%"
    zoom.style.height = zoomh + "%"
}

zoom.addEventListener("click", function(){
    zoomcontrols.style.display = "block"
})

function next(){
    if (bgnum == 1)
        BG2()
    else if(bgnum ==2)
        BG3()
    else if(bgnum ==3)
        BG4()
    else if (bgnum==4)
        BG1()
}

function previous(){
    if (bgnum == 1)
        BG4()
    else if(bgnum ==2)
        BG1()
    else if(bgnum ==3)
        BG3()
    else if (bgnum==4)
        BG2()
}
        






    