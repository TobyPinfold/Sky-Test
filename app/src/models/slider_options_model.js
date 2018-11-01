var SliderOptions = function () {

    this.id = "";
    this.minValueLabel = "";
    this.maxValueLabel = "";
    this.slideValue =  5;

    this.setId = (id) => {
        this.id = id;
    }

    this.setMinValueLabel = (minValueLabel) => {
        this.minValueLabel = minValueLabel;
    }

    this.setMaxValueLabel = (maxValueLabel) => {
        this.maxValueLabel = maxValueLabel;
    }

    this.setSlideValue = (slideValue) => {
        this.slideValue = slideValue;
    }

    return this;
}