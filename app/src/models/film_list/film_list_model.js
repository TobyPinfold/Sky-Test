
angular.module('myApp.filmListModel', [])
.factory('FilmListModel', function () {

    function FilmList(staticArraySize) {

        this.listOfFilms = new Array(staticArraySize != null ? staticArraySize : 0);

        this.getNumberOfStoredFilms = () => {
            var counter = 0;
            _.each(this.listOfFilms, (entry) =>{
                 if(entry != null && entry !== 'undefined') {
                    counter++;
                }
            });
            return counter;
        }
    }

    return FilmList;
});
