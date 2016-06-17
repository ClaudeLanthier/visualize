function cl(v){console.log(v)};
(function(){
var _db,_par,
$me={
	ini:function(v){
		_db=document.body;
		_par=is.null(window.opener)?window.parent:window.opener;
		//no.a(_db,function(){window.close()},{_c:'exit opa70hi no_print'});
		$me.ini_build(v)
		var j=$me.json.f1(v.data,{"x":"paid","y":"md_name"});

		$me.bar.horizontal(j,v.attributes);
		/*no.div(_db,{_s:'p.0|20'},no.pre(json(j,0,2)))*/
	 },
	ini_build:function(v){
		var con=document.getElementById("con");
		con.style.display="table";
		cl(v)
		no.div(con,{id:"cell",_s:"cel,h1,w1,rel,c.6"},
			//no.div(v.attributes.title,{id:"title",_s:""})
			no.div({_s:"o.ccc,abs,w.40%,l.30%,t.2%,pt.5,pb.5"},
				no.div(v.attributes.title[0],{id:"title",_s:"f.180%"}),
				no.div(v.attributes.title[1],{id:"title",_s:"f.120%"})
			)
		)
	 },
	json:{
		f1:function(o){
			var v=[],k=[];
			for (var i = 0; i < o.length; i++){
				if(i==0){k=o[i]}
				else{
					var vv={}
					for (var j = 0; j < o[i].length; j++) {
						if(i!=0){
							vv[k[j]]=o[i][j];
						}
					}
					v.push(vv);
				}
			}
			return $me.json.rename_keys(v,{"md_name":"yy","paid":"xx"});
		 },
		rename_keys:function(o,k){
			for (var i = 0; i < o.length; i++) {
				for (var j in o[i]) {
					for (var l in k){
						if(j==l){
							o[i][k[l]]=o[i][j];
							delete o[i][j];
						}
					}
				}
			}
			return(o)
		 }
	 },
	bar:{
  		horizontal:function(data,att){

  			var	w = window.innerWidth*0.85,
				h = window.innerHeight*0.75;

			var margin = {top: 0.12*h, right:0.10*w, bottom: 0.08*h, left:0.10*w},
				width = w - margin.left - margin.right,
				height = h - margin.top - margin.bottom;

			var y = d3.scale.ordinal()
				.rangeRoundBands([0, height], .1);

			var x = d3.scale.linear()
				.range([0,width]);

			var xAxis = d3.svg.axis()
				.scale(x)
				.orient("bottom");

			var yAxis = d3.svg.axis()
				.scale(y)
				.orient("left")
				.ticks(10, "%");

			var svg = d3.select("#cell").append("svg")
				.attr("width", w)
				.attr("height", h)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			y.domain(data.map(function(d) { return d.yy; }));
			x.domain([0, d3.max(data, function(d) { return d.xx*1; })]);

			svg.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(0," + height + ")")
				.call(xAxis)
				.append("text")
				.style("text-anchor", "end")
				.text(att.axisY_ttl)
				.attr("y",height*-1-8)
				.attr("x",0)
				.attr("class","axis_ttl")
				.attr("fill", "#b00");

			svg.append("g")
				.attr("class", "y axis")
				.call(yAxis)
				.append("text")
				.style("text-anchor", "end")
				.text(att.axisX_ttl)
				.attr("y",height+35)
				.attr("x",width)
				.attr("class","axis_ttl")
				.attr("fill", "#b00");

			var dat=svg.append("g")
				.attr("class", "dat");

			dat.selectAll(".dat")
				.data(data)
				.enter().append("rect")
				.attr("class", "bar")
				.attr("y", function(d) { return y(d.yy); })
				.attr("height", y.rangeBand())
				.attr("x",1)
				.attr("width", function(d) { return x(d.xx); });

			dat.selectAll("text")
				.data(data)
				.enter()
				.append("text")
				.text(function(d) {return "$ "+ $me.U.thousand(Math.round(d.xx));})
				.attr("y", function(d) { return y(d.yy) + y.rangeBand()/2+3; })
				.attr("x", function(d) { return x(d.xx)+10; })
				.attr("class","data_label");
		}
	},
	U:{
		thousand:function(num){
			var n = num.toString(), p = n.indexOf('.');
			return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, function($0, i){
				return p<0 || i<p ? ($0+',') : $0;
			});
		}		
	}
}
this.$me=$me;
})();

/* 
	//for special testing
	window.$pop5=new $_5_pop({opa:1,til:0,zi:999});
	$fo.date_range(function(){jax({$i:'patients_find',s:'el cor'},function(r){nalert(r)})},'qrt')
*/