

//we make a collection called cars.
Alloy.Collections.instance("cars");

// we make a controller through the built in controller creation in Alloy.
var carsController = Alloy.createController("cars");

//add the data to our collection
Alloy.Collections.cars.reset(
	[
		{
			"make":"Honda",
		 	"model":"ExtremelyLoudTailPipes"
		},
		{
			"make":"Honda",
			"model":"Affordable"
		},
		{
			"make":"Ford",
			"model":"HorribleStationWagonIRodeInTheBackToCaliforniaIn"
		},
		{
			"make":"Ford",
			"model":"Prefect"
		},
		{
			"make":"Nissan",
			"model":"Rogue"
		}
	]
);

carsController.mainWindow.open();