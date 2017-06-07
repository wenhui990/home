// 第二个图，仪表盘
$('.chart').height($(window).height());

var myEchart1 = echarts.init(document.getElementById('chart1'));
var myEchart1Option = {
	backgroundColor: 'rgba(2,11,18,0)',
	tooltip: {
		formatter: "{a} <br/>{c} {b}"
	},
	//  toolbox: {
	//      show : true,
	//      feature : {
	//          mark : {show: true},
	//          restore : {show: true},
	//          saveAsImage : {show: true}
	//      }
	//  },
	series: [{
			name: '速度',
			type: 'gauge',
			min: 0,
			max: 220,
			splitNumber: 11,
			radius: '50%',
			axisLine: { // 坐标轴线
				lineStyle: { // 属性lineStyle控制线条样式
					color: [
						[0.09, 'rgba(0,255,0,0.3)'],
						[0.82, 'rgba(30,144,255,0.6)'],
						[1, 'rgba(255,69,0,0.3)']
					],
					width: 3,
					shadowColor: 'rgba(255,255,255,0.3)', //默认透明
					shadowBlur: 10
				}
			},
			axisLabel: { // 坐标轴小标记
				textStyle: { // 属性lineStyle控制线条样式
					fontWeight: 'bolder',
					color: 'rgba(255,255,255,0.3)',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			axisTick: { // 坐标轴小标记
				length: 15, // 属性length控制线长
				lineStyle: { // 属性lineStyle控制线条样式
					color: 'auto',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			splitLine: { // 分隔线
				length: 25, // 属性length控制线长
				lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
					width: 3,
					color: 'rgba(255,255,255,0.3)',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			pointer: { // 分隔线
				shadowColor: 'rgba(255,255,255,0.3)', //默认透明
				shadowBlur: 5
			},
			title: {
				textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder',
					fontSize: 20,
					fontStyle: 'italic',
					color: 'rgba(255,255,255,0.3)',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			detail: {
				backgroundColor: 'rgba(30,144,255,0.8)',
				borderWidth: 1,
				borderColor: '#fff',
				shadowColor: '#fff', //默认透明
				shadowBlur: 5,
				offsetCenter: [0, '50%'], // x, y，单位px
				textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder',
					color: 'rgba(255,255,255,0.3)'
				}
			},
			data: [{
				value: 40,
				name: 'km/h'
			}]
		},
		{
			name: '转速',
			type: 'gauge',
			center: ['25%', '55%'], // 默认全局居中
			radius: '30%',
			min: 0,
			max: 7,
			endAngle: 45,
			splitNumber: 7,
			axisLine: { // 坐标轴线
				lineStyle: { // 属性lineStyle控制线条样式
					color: [
						[0.29, 'rgba(0,255,0,0.3)'],
						[0.86, 'rgba(30,144,255,0.6)'],
						[1, 'rgba(255,69,0,0.3)']
					],
					width: 2,
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			axisLabel: { // 坐标轴小标记
				textStyle: { // 属性lineStyle控制线条样式
					fontWeight: 'bolder',
					color: 'rgba(255,255,255,0.3)',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			axisTick: { // 坐标轴小标记
				length: 12, // 属性length控制线长
				lineStyle: { // 属性lineStyle控制线条样式
					color: 'auto',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			splitLine: { // 分隔线
				length: 20, // 属性length控制线长
				lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
					width: 3,
					color: 'rgba(255,255,255,0.3)',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			pointer: {
				width: 5,
				shadowColor: '#fff', //默认透明
				shadowBlur: 5
			},
			title: {
				offsetCenter: [0, '-30%'], // x, y，单位px
				textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder',
					fontStyle: 'italic',
					color: 'rgba(255,255,255,0.3)',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			detail: {
				//backgroundColor: 'rgba(30,144,255,0.8)',
				// borderWidth: 1,
				borderColor: '#fff',
				shadowColor: '#fff', //默认透明
				shadowBlur: 5,
				width: 80,
				height: 30,
				offsetCenter: [25, '20%'], // x, y，单位px
				textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder',
					color: 'rgba(255,255,255,0.3)'
				}
			},
			data: [{
				value: 1.5,
				name: 'x1000 r/min'
			}]
		},
		{
			name: '油表',
			type: 'gauge',
			center: ['75%', '50%'], // 默认全局居中
			radius: '30%',
			min: 0,
			max: 2,
			startAngle: 135,
			endAngle: 45,
			splitNumber: 2,
			axisLine: { // 坐标轴线
				lineStyle: { // 属性lineStyle控制线条样式
					color: [
						[0.2, 'rgba(0,255,0,0.3)'],
						[0.8, 'rgba(30,144,255,0.6)'],
						[1, 'rgba(255,69,0,0.3)']
					],
					width: 2,
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			axisTick: { // 坐标轴小标记
				length: 12, // 属性length控制线长
				lineStyle: { // 属性lineStyle控制线条样式
					color: 'auto',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			axisLabel: {
				textStyle: { // 属性lineStyle控制线条样式
					fontWeight: 'bolder',
					color: 'rgba(255,255,255,0.3)',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				},
				formatter: function(v) {
					switch(v + '') {
						case '0':
							return 'E';
						case '1':
							return 'Gas';
						case '2':
							return 'F';
					}
				}
			},
			splitLine: { // 分隔线
				length: 15, // 属性length控制线长
				lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
					width: 3,
					color: 'rgba(255,255,255,0.3)',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			pointer: {
				width: 2,
				shadowColor: '#fff', //默认透明
				shadowBlur: 5
			},
			title: {
				show: false
			},
			detail: {
				show: false
			},
			data: [{
				value: 0.5,
				name: 'gas'
			}]
		},
		{
			name: '水表',
			type: 'gauge',
			center: ['75%', '50%'], // 默认全局居中
			radius: '30%',
			min: 0,
			max: 2,
			startAngle: 315,
			endAngle: 225,
			splitNumber: 2,
			axisLine: { // 坐标轴线
				lineStyle: { // 属性lineStyle控制线条样式
					color: [
						[0.2, 'rgba(0,255,0,0.3)'],
						[0.8, 'rgba(30,144,255,0.6)'],
						[1, 'rgba(255,69,0,0.3)']
					],
					width: 2,
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			axisTick: { // 坐标轴小标记
				show: false
			},
			axisLabel: {
				textStyle: { // 属性lineStyle控制线条样式
					fontWeight: 'bolder',
					color: 'rgba(255,255,255,0.3)',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				},
				formatter: function(v) {
					switch(v + '') {
						case '0':
							return 'H';
						case '1':
							return 'Water';
						case '2':
							return 'C';
					}
				}
			},
			splitLine: { // 分隔线
				length: 15, // 属性length控制线长
				lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
					width: 3,
					color: 'rgba(255,255,255,0.3)',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			pointer: {
				width: 2,
				shadowColor: '#fff', //默认透明
				shadowBlur: 5
			},
			title: {
				show: false
			},
			detail: {
				show: false
			},
			data: [{
				value: 0.5,
				name: 'gas'
			}]
		}
	]
};

setInterval(function() {
	myEchart1Option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
	myEchart1Option.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
	myEchart1Option.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
	myEchart1Option.series[3].data[0].value = (Math.random() * 2).toFixed(2) - 0;
	myEchart1.setOption(myEchart1Option);
}, 1000);

// 第一个图，旋转的地球
/*var myEchart2 = echarts.init(document.getElementById('chart2'));
myEchart2Option = {
    backgroundColor: 'rgba(0,0,0,1)',
    globe: {
        baseTexture: "img/data-1491837049070-rJZtl7Y6x.jpg",
        heightTexture: "img/data-1491837049070-rJZtl7Y6x.jpg",
        displacementScale: 0.04,
        shading: 'realistic',
        environment: '#020b1c',    // 背景图片和颜色
        realisticMaterial: {
            roughness: 0.9
        },
        postEffect: {
            enable: true
        },
        light: {
            main: {
                intensity: 5,
                shadow: true
            },
            ambientCubemap: {
                texture: 'data-1491838644249-ry33I7YTe.hdr',
                diffuseIntensity: 0.2
            }
        }
    }
};
myEchart2.setOption(myEchart2Option);*/


// d3 力学图
function lixue(){
		var w = $(window).width(),
		h = $(window).height(),
		node,
		link,
		root;
	
	var force = d3.layout.force()
		.on("tick", tick)
		.charge(function(d) {
			return d._children ? -d.size / 100 : -30;
		})
		.linkDistance(function(d) {
			return d.target._children ? 80 : 30;
		})
		.size([w, h - 160]);
	
	var vis = d3.select("#chart2").append("svg:svg")
		.attr("width", w)
		.attr("height", h);
	
	d3.json("json/flare.json", function(json) {
		root = json;
		root.fixed = true;
		root.x = w / 2;
		root.y = h / 2 - 80;
		update();
	});
	
	function update() {
		var nodes = flatten(root),
			links = d3.layout.tree().links(nodes);
	
		// Restart the force layout.
		force
			.nodes(nodes)
			.links(links)
			.start();
	
		// Update the links…
		link = vis.selectAll("line.link")
			.data(links, function(d) {
				return d.target.id;
			});
	
		// Enter any new links.
		link.enter().insert("svg:line", ".node")
			.attr("class", "link")
			.attr("x1", function(d) {
				return d.source.x;
			})
			.attr("y1", function(d) {
				return d.source.y;
			})
			.attr("x2", function(d) {
				return d.target.x;
			})
			.attr("y2", function(d) {
				return d.target.y;
			});
	
		// Exit any old links.
		link.exit().remove();
	
		// Update the nodes…
		node = vis.selectAll("circle.node")
			.data(nodes, function(d) {
				return d.id;
			})
			.style("fill", color);
	
		node.transition()
			.attr("r", function(d) {
				return d.children ? 4.5 : Math.sqrt(d.size) / 10;
			});
	
		// Enter any new nodes.
		node.enter().append("svg:circle")
			.attr("class", "node")
			.attr("cx", function(d) {
				return d.x;
			})
			.attr("cy", function(d) {
				return d.y;
			})
			.attr("r", function(d) {
				return d.children ? 4.5 : Math.sqrt(d.size) / 10;
			})
			.style("fill", color)
			.on("click", click)
			.call(force.drag);
	
		// Exit any old nodes.
		node.exit().remove();
	}
	
	function tick() {
		link.attr("x1", function(d) {
				return d.source.x;
			})
			.attr("y1", function(d) {
				return d.source.y;
			})
			.attr("x2", function(d) {
				return d.target.x;
			})
			.attr("y2", function(d) {
				return d.target.y;
			});
	
		node.attr("cx", function(d) {
				return d.x;
			})
			.attr("cy", function(d) {
				return d.y;
			});
	}
	
	// Color leaf nodes orange, and packages white or blue.
	function color(d) {
		return d._children ? "#3182bd" : d.children ? "#c6dbef" : "#17a0aa";
	}
	
	// Toggle children on click.
	function click(d) {
		if(d.children) {
			d._children = d.children;
			d.children = null;
		} else {
			d.children = d._children;
			d._children = null;
		}
		update();
	}
	
	// Returns a list of all nodes under the root.
	function flatten(root) {
		var nodes = [],
			i = 0;
	
		function recurse(node) {
			if(node.children) node.size = node.children.reduce(function(p, v) {
				return p + recurse(v);
			}, 0);
			if(!node.id) node.id = ++i;
			nodes.push(node);
			return node.size;
		}
	
		root.size = recurse(root);
		return nodes;
	}
}
