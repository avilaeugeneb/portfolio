/*************************/
/**                     **/
/**   Skills-chart      **/
/**                     **/
/*************************/

var ctxP = document.getElementById("skills-chart").getContext('2d');
var myPieChart = new Chart(ctxP, {
    type: 'pie',
    data: {
        labels: ["HTML", "CSS", "Bootstrap", "Javascript"],
        datasets: [
            {
                data: [90, 80, 80, 50],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5"]
            }
        ]
    },
    options: {
        responsive: true
    }    
});


/*************************/
/**                     **/
/**   Backend-chart      **/
/**                     **/
/*************************/

var ctxP = document.getElementById("backend-chart").getContext('2d');
var myPieChart = new Chart(ctxP, {
    type: 'pie',
    data: {
        labels: ["MariaDB", "PHP", "Laravel"],
        datasets: [
            {
                data: [90, 80, 80],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
            }
        ]
    },
    options: {
        responsive: true
    }    
});

/*************************/
/**                     **/
/**      PagePiling     **/
/**                     **/
/*************************/

$(document).ready(function() {
	$('#pagepiling').pagepiling({
        direction: 'horizontal',
        scrollingSpeed: 1200,
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex == 4) {
                $('#pp-nav').fadeOut();
            }
            if (index == 4) {
                $('#pp-nav').fadeIn();
            }
        },
        loopTop: true,
        loopBottom: true,
    });

    $('#arrow').click(function () {
        $.fn.pagepiling.moveSectionDown();
    });
});