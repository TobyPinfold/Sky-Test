var FilmModel = function() {

    this.id = -1;
    this.name = "";
    this.imagePath = "";
    this.agitatedCalmValue = 5;
    this.happySadValue = 5;
    this.tiredWideAwakeValue = 5;
    this.scaredFearlessValue = 5;

    this.setId = (id) => {
        this.id = id;
    }

    this.setName = (name) => {
        this.name = name;
    }

    this.setImagePath = (imagePath) => {
        this.imagePath = imagePath;
    }

    this.setAgitatedCalmValue = (agitatedCalmValue) => {
        this.agitatedCalmValue = agitatedCalmValue;
    }

    this.setHappySadValue = (HappySadValue) => {
        this.HappySadValue = HappySadValue;
    }

    this.setTiredWideAwakeValue = (tiredWideAwakeValue) => {
        this.tiredWideAwakeValue = tiredWideAwakeValue;
    }

    this.setScaredFearlessValue = (scaredFearlessValue) => {
        this.scaredFearlessValue = scaredFearlessValue;
    }

    return this;
}