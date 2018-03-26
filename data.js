
var categories=['social security, Unemployment, and labor','medicare and health','national defense', 'Net Interest', 'other']
var data2018 = [1360,1050,517,332,491]
var data1968 = [176,44.7,405,54.8,216]

var data = data2018;
var createchart = function(){
    var chart = d3.select(".chart");
    var bar = chart.selectAll("div");
    if(this.id =="2018"){
	data =data2018;
    }
    else{
	data = data1968;
    }
   
    var barEnter = bar.data(data).enter().append("div");
   
    barEnter.transition().duration(3000).style("width", function(d){return d+"px";});
    
}

var changechart = function(e){
    var chart = d3.select(".chart");
    var bar = chart.selectAll("div");
    if(this.id =="2018"){
	var newdata =data2018;
    }
    else{
	var newdata = data1968;
    }
    data = newdata;
    var barEnter = bar.data(data).enter().append("div");
   
    barEnter.transition().duration(3000).style("width", function(d){return d+"px";});
    
}

document.getElementById("2018").addEventListener("click",changechart)
document.getElementById("1968").addEventListener("click",changechart)
	
	      
	    
	
	
    
	
	
	
	
	
