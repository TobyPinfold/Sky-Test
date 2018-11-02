angular.module('myApp.sliderOptionsModel', [])
    .factory('SliderOptionsModel', function () {
        
        function SliderOptionsModel(id, minValueLabel, maxValueLabel, slideValue){
            this.id = id;
            this.minValueLabel = minValueLabel;
            this.maxValueLabel = maxValueLabel;
            this.slideValue = slideValue;
        }

        return SliderOptionsModel;
    });