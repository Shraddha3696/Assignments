const hobbiesListViewModel = function() {
    this.hobbies = ko.observableArray();
    this.hobby = ko.observable("");
this.hobbyToAdd = function(){
    this.hobbies.push(this.hobby());
    this.hobby("");
},this;
}
 const hobby1 = new hobbiesListViewModel();
ko.applyBindings(hobby1);

