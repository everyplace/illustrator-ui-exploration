$(document).ready(function() {

	//setup
	//hide documents, show the first
	$(".document").addClass("hide");
	$("#document1").toggleClass("hide");
	
	//hide layer eyes, show the first
	$(".visibilityTool a").removeClass("active");				
	$("#layer1 .visibilityTool a").toggleClass("active");
	
	//hide palettes, show the first
	$(".palette").addClass("hide");
	$("#paletteSymbols").removeClass("hide");
	$("#tabSymbols").addClass("active");
	
	//layers toggle
	$("#tabLayers a").click(function() {
		$(".palette").addClass("hide");
		$("#paletteLayers").removeClass("hide");
		
		$("#tabLayers").addClass("active");
		$("#tabSymbols").removeClass("active");
		$("#tabSwatches").removeClass("active");
	});
	
	$("#tabSymbols a").click(function() {
		$(".palette").addClass("hide");
		$("#paletteSymbols").removeClass("hide");
		
		$("#tabLayers").removeClass("active");
		$("#tabSymbols").addClass("active");
		$("#tabSwatches").removeClass("active");
	});	
	
	$("#tabSwatches a").click(function() {
		$(".palette").addClass("hide");
		$("#paletteSwatches").removeClass("hide");
		
		$("#tabLayers").removeClass("active");
		$("#tabSymbols").removeClass("active");
		$("#tabSwatches").addClass("active");
	});
	
	//layer selected toggle
	$(".layerLabel a").click(function() {
		$(this).parent("div").toggleClass("selected");
	});			
				
	//layer tool visibliity
	$("#layer1 .visibilityTool a").click(function() {
		$("#document1").toggleClass("hide");
		$("#layer1 .visibilityTool a").toggleClass("active");
	});
	$("#layer2 .visibilityTool a").click(function() {
		$("#document2").toggleClass("hide");
		$("#layer2 .visibilityTool a").toggleClass("active");
	});
	$("#layer3 .visibilityTool a").click(function() {
		$("#document3").toggleClass("hide");
		$("#layer3 .visibilityTool a").toggleClass("active");
	});
	$("#layer4 .visibilityTool a").click(function() {
		$("#document4").toggleClass("hide");
		$("#layer4 .visibilityTool a").toggleClass("active");
	});				
	
	//menu toggle		
	$(".iconMenu a").click(function() {
		$(this).parent("div").siblings(".flyoutMenu").toggleClass("hide");
	});
	
	$(".flyoutMenu .menuItems .item a.viewList").click(function() {
		$(".palette").not(".hide").children("ul").removeClass("layoutStyle-icon").addClass("layoutStyle-list");	
		$(this).parent("li").parent("ul").parent(".flyoutMenu").toggleClass("hide");		
	});
	$(".flyoutMenu .menuItems .item a.viewIcon").click(function() {
		$(".palette").not(".hide").children("ul").removeClass("layoutStyle-list").addClass("layoutStyle-icon");	
		$(this).parent("li").parent("ul").parent(".flyoutMenu").toggleClass("hide");
	});	
});








