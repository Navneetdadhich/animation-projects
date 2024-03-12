const moonpath = "M43.5 100C43.5 156.057 101.5 204 101.5 204C45.4431 204 0 158.557 0 102.5C0 46.4431 45.4431 1.00003 101.5 1.00003C101.5 -1.49999 43.5 43.9431 43.5 100Z";

const sunpath = "M203 101.5C203 157.557 157.557 203 101.5 203C45.4431 203 0 157.557 0 101.5C0 45.4431 45.4431 0 101.5 0C157.557 0 203 45.4431 203 101.5Z";

const darkMode =  document.querySelector('#darkmode');
let toggle = false;

darkMode.addEventListener('click', ()=>{

    const timeline = anime.timeline({
        duration: 620,
        easing: "easeOutExpo"
    });

    timeline.add({
        targets: ".sun",
        d: [{value: toggle ? sunpath:moonpath}]
    })
    .add({
        targets: "#darkmode",
        rotate: toggle ? 0: 320
    }, '-= 400')
    .add({
        targets: "section",
        backgroundColor: toggle ? 'rgb(250, 235, 215)' :'rgb(22,22,22)'
    }, '-=300')
    .add({
        targets: "h1",
        color: toggle ? 'rgb(22,22,22)':'rgb(122,122,122)'
    }, '-=500'); 

    if(!toggle){
        toggle = true;
    }else{
        toggle = false;
    }

});