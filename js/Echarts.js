let quan = document.querySelectorAll(".quan");
quan[1].style.transform = "rotate(90deg)";
function drawLine(my, one, two, col1, col2) {
    let myChart = echarts.init(my);
    myChart.setOption({
        series: [{
            type: 'pie',
            radius: ['80%', '70%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    color: 'red'
                }
            },
            data: [{
                value: one,
                itemStyle: {
                    normal: {
                        color: col1
                    }
                }
            },
            {
                value: two,
                itemStyle: {
                    normal: {
                        color: col2
                    }
                }
            }
            ]
        }]
    });
}