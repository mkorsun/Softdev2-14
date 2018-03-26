
var categories=['social security, Unemployment, and labor','medicare and health','national defense', 'Net Interest', 'other']
var data2018 = [1360,1050,517,332,491]
var data1968 = [176,44.7,405,54.8,216]


var createchart = function(){
    var chart = d3.select(".chart");
    var bar = chart.selectAll("div");
    if(this.id =="2018"){
	var barUpdate =bar.data(data2018);
    }
    else{
	var barUpdate = bar.data(data1968);
    }
   
    var barEnter = barUpdate.enter().append("div");
   
    barEnter.transition().duration(3000).style("width", function(d){return d+"px";});
    
}

var changechart = function(e){
    var chart = d3.select(".chart");
    var bar = chart.selectAll("div");
    if(this.id =="2018"){
	var data =data2018;
    }
    else{
	var data = data1968;
    }
    
    var barEnter = bar.data(data).exit().remove().enter().append("div");
   
    barEnter.transition().duration(3000).style("width", function(d){return d+"px";});
    
}

document.getElementById("2018").addEventListener("click",createchart)
document.getElementById("1968").addEventListener("click",createchart)
	
	      
	    
	
	
    
	
	
	
	
	
