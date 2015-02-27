
function transform(model){
	
	var carObject = model.toJSON();
	var output = 	
	{
		"title" : carObject.model + " by " + carObject.make,
		"id" :model.cid
	};
	return output;
}

//filter our cars
function filter(collection)
{
	return collection.where(
		{
			make: "Honda"
		}
	);
}

//our "clean up" listener function. Dispose of our resources when we're done.
$.mainWindow.addEventListener("close", function()
{
	$.destroy();
});

$.table.addEventListener('click', function(_event){
	
	// This gets the row data for the row that was clicked on? I think.
	var model = Alloy.Collections.cars.getByCid(_event.rowData.modelId);
	//var model = Alloy.Collections.cars.get(_event.rowData.modelId);
	//var model = Alloy.Collections.cars.get(e.rowData.modelId);
	//alert(e.rowData);
	//create a new detail controller.
	var detailController = Alloy.createController("detail",
	{
		
		data: model
	});
	
	
	detailController.getView().open(
		{
			modal: true	
		}
	);
	
});