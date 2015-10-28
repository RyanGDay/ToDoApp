
toDoApp.controller('toDoController', function($scope) {
	
	$scope.toDoItem = "";
	$scope.toDoList = [];
	
	$scope.doneItem = "test";
	$scope.doneList = [];
	
	$scope.addItem = function(clickEvent) {
		$scope.toDoList.push({name:$scope.toDoItem,isDone:false});
		$scope.toDoItem = "";
		document.getElementById('toDoItem').focus();
	}
	
	$scope.markDone = function(changeEvent) {
		for(i=0;i<$scope.toDoList.length;i++) {
			if($scope.toDoList[i].isDone) {
				$scope.doneList.push($scope.toDoList[i]);
				$scope.toDoList.splice(i,1);
			}
		}
		document.getElementById('toDoItem').focus();
	}
});