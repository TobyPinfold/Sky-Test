
angular.module('myApp.filmModel', [])
    .factory('FilmModel', function () {

        function FilmModel(id, name, imagePath, agitatedCalmValue, happySadValue, tiredWideAwakeValue, scaredFearlessValue) {
            this.id = id;
            this.name = name;
            this.imagePath = imagePath;
            this.agitatedCalmValue = agitatedCalmValue;
            this.happySadValue = happySadValue;
            this.tiredWideAwakeValue = tiredWideAwakeValue;
            this.scaredFearlessValue = scaredFearlessValue;

            this.isWithinSliderBounds = (sliders, bounds) => {

                var agitatedCalmWithinBounds = 
                this.agitatedCalmValue <= (sliders['agitatedCalmSlider'].slideValue + bounds) 
                && this.agitatedCalmValue >= (sliders['agitatedCalmSlider'].slideValue - bounds);

                var happySadWithinBounds =
                    this.happySadValue <= (sliders['happySadSlider'].slideValue + bounds) &&
                    this.happySadValue >= (sliders['happySadSlider'].slideValue - bounds);

                var tiredWideAwakeWithinBounds =
                    this.tiredWideAwakeValue <= (sliders['tiredWideAwakeSlider'].slideValue + bounds) &&
                    this.tiredWideAwakeValue >= (sliders['tiredWideAwakeSlider'].slideValue - bounds);

                var scaredFearlessWithinBounds =
                    this.scaredFearlessValue <= (sliders['scaredFearlessSlider'].slideValue + bounds) &&
                    this.scaredFearlessValue >= (sliders['scaredFearlessSlider'].slideValue - bounds);

                var isInBounds = agitatedCalmWithinBounds && happySadWithinBounds &&
                    tiredWideAwakeWithinBounds && scaredFearlessWithinBounds;

                return isInBounds;
            }
        }

        return FilmModel;
    });
