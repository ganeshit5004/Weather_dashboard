var options = {
    chart: {
        height: 180,
        type: "area"
    },
    dataLabels: {
        enabled: false
    },
    series: [
        {
            name: "Follower(Family)",
            data: [15, 25, 38, 55, 69, 83, 99]
        }
    ],
    fill: {
        type: "blue",
        gradient: {
            shadeIntensity: 4,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
        }
    },
    xaxis: {
        categories: [
            "01 Jan",
            "02 Feb",
            "03 March",
            "04 April",
            "05 May",
            "06 June",
            "07 July"
        ]
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
$(".gauge").each(function(){
  
    var $bar = $(this).find(".barchart");
    var $val = $(this).find("per");
    var perc = parseInt( $val.text(), 20);
  
    $({p:0}).animate({p:perc}, {
      duration: 3000,
      easing: "swing",
      step: function(p) {
        $bar.css({
          transform: "rotate("+ (100+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
          // 45 is to add the needed rotation to have the green borders at the bottom
        });
        $val.text(p|0);
      }
    });
  });