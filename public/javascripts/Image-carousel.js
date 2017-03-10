let y = 0;
let counter = 0;
let $width = $(window).width()

const slider = function(){

	$(".left-button").click(function(){
		Leftmove();
		ImageTracer();
	});

	$(".right-button").click(function(){
		Rightmove();
		ImageTracer();
	});

	$('.dot').eq(0).click(function(){
		y = 0;
		ImageTracer();
		counter = 0;
		$('.image-contaner').css({		
		"margin-left":"-"+y+"px"	
		});	
	});

	$('.dot').eq(1).click(function(){
		y = $width;
		ImageTracer();
		counter = 1;
		$('.image-contaner').css({		
		"margin-left":"-"+y+"px"	
		});	
	});

	$('.dot').eq(2).click(function(){
		y = $width*2;
		ImageTracer();
		counter = 2;
		$('.image-contaner').css({		
		"margin-left":"-"+y+"px"	
		});	
	});

	$('.dot').eq(3).click(function(){
		y = $width*3;
		ImageTracer();
		counter = 3;
		$('.image-contaner').css({		
		"margin-left":"-"+y+"px"	
		});	
	});

}();


const Leftmove = function(){
	if(y != 0){
	counter--;
	y = equation(-480, y);
	$('.image-contaner').css({		
		"margin-left":"-"+y+"px"	
		});
	}
}

const Rightmove = function(){
	if(y <= 960){
	counter++;	
	y = equation(480, y);
	$('.image-contaner').css({
	"margin-left":"-"+y+"px"
		});

	}else{
		
	y = 0;
	counter = 0;
	$('.image-contaner').css({
	"margin-left":"0px"
		});

	}
}

let equation = function(z, y){
	let	w = z + y;
	return w;
}

const Timemove = function(){

		if(y <= 960){

	counter++;

	y = equation($width, y);
	$('.image-contaner').css({
	"margin-left":"-"+y+"px"
		});

	}else{

	y = 0;
	counter = 0;
	$('.image-contaner').css({
	"margin-left":"0px"
		});

	}
}


const ImageTracer = function(){
	let i = y;
	switch(i){

		case 0:
		if($('.dot') != $('.dot').eq(0)){
			$('.dot').attr("src","images/SmallDot.png");
		}
		$('.dot').eq(0).attr("src","images/HoverDot.png");
		break;

		case 480:
		if($('.dot') != $('.dot').eq(1)){
			$('.dot').attr("src","images/SmallDot.png");
		}
		$('.dot').eq(1).attr("src","images/HoverDot.png");
		break;

		case 960:
		if($('.dot') != $('.dot').eq(2)){
			$('.dot').attr("src","images/SmallDot.png");
		}
		$('.dot').eq(2).attr("src","images/HoverDot.png");
		break;

		case 1440:
		if($('.dot') != $('.dot').eq(3)){
			$('.dot').attr("src","images/SmallDot.png");
		}
		$('.dot').eq(3).attr("src","images/HoverDot.png");
		break;

		default:
		$('.dot').eq(0).attr("src","images/HoverDot.png");
		break;
	}
}


let timer = setInterval(function(){
	Timemove();
	ImageTracer();
},5000);