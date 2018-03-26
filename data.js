
var categories=['social security, Unemployment, and labor','medicare and health','national defense', 'Net Interest', 'other']
var data2018 = [1360,1050,517,332,491]
var data1968 = [176,44.7,405,54.8,216]

var data = data2018;
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(categories);
var barEnter = barUpdate.enter().append("div");

var createchart = function(){

   // chart.selectAll("div").remove();
    var bar = chart.selectAll("div");
    if(this.id =="2018"){
	data =data2018;
    }
    else{
	data = data1968;
    }
    var i=-1;   
    barEnter.transition().duration(3000).style("width", function(d){
	i+=1;
	return data[i]+"px";});
    barEnter.text(function(d){
	return d + "   $"+data[categories.indexOf(d)];
    });	
    
}

document.getElementById("2018").addEventListener("click",createchart)
document.getElementById("1968").addEventListener("click",createchart)
	
	      
	    
	
	
    
	
	
	
	
	
